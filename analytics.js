const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const { GoogleAuth } = require('google-auth-library');

const config = {
  clientEmail: "",  // Your service account's email address
  privateKey: "",   // Your service account's private key
  projectId: "",    // Your Google Cloud project ID
};

const auth = new GoogleAuth({
  credentials: {
    client_email: config.clientEmail,
    private_key: config.privateKey,
  },
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

const client = new BetaAnalyticsDataClient({ auth });
const propertyId = ''; // Your GA4 Property ID

// Function to fetch page views from GA4
async function getPageViews() {
  const request = {
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '2016-01-01', endDate: 'today' }], 
    metrics: [{ name: 'screenPageViews' }],
    dimensions: [{ name: 'pagePath' }],
    orderBys: [{ desc: true, metric: { name: 'screenPageViews' } }]
  };

  try {
    const [response] = await client.runReport(request);

    return response.rows.map(row => ({
      path: row.dimensionValues[0].value,
      totalCount: Number(row.metricValues[0].value),
    }));

  } catch (err) {
    console.error('Error fetching page views:', err);
    return [];
  }
}

// Uncomment the following line to export the function if needed
// module.exports = { getPageViews };

async function main() {
  const pageViews = await getPageViews();
  console.log('Page Views:', pageViews);
}

main();
