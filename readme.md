# Google Analytics 4 Integration Example

This example demonstrates how to integrate Google Analytics 4 (GA4) with a Node.js application using the `@google-analytics/data` and `google-auth-library` packages. The script retrieves page view data from GA4 and prints it to the console.

## Prerequisites

Before running the code, you need to set up Google Cloud credentials and GA4 property information.

### Setting Up Google Cloud Credentials

1. **Create a Google Cloud Project:**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.

2. **Enable the Google Analytics Data API:**
   - Navigate to the [API Library](https://console.cloud.google.com/apis/library).
   - Search for "Google Analytics Data API" and enable it for your project.

3. **Create Service Account Credentials:**
   - Go to the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page.
   - Create a new service account and download the JSON key file. This file contains `client_email` and `private_key` that you will use in your code.

   - For detailed steps, refer to the [Creating and Managing Service Accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts) documentation.

4. **Share Access to Your GA4 Property:**
   - Go to the [Google Analytics Admin](https://analytics.google.com/analytics/web/) page.
   - Select your GA4 property and go to Property Settings.
   - Add the service account email (`client_email`) to the list of users with the "Viewer" role.

### Finding Your GA4 Property ID

1. **Access Property Settings:**
   - In Google Analytics, navigate to the [Admin](https://analytics.google.com/analytics/web/) page.
   - Under the "Property" column, select "Property Settings."

2. **Locate Property ID:**
   - Your GA4 Property ID is listed in the Property Settings.

## Installation

To install the required dependencies, run the following command:

```bash
npm install @google-analytics/data google-auth-library
