interface BiginTokenResponse {
  access_token: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
}

interface BiginLead {
  First_Name?: string;
  Last_Name: string;
  Email: string;
  Phone: string;
  Lead_Source?: string;
  Description?: string;
}

class BiginClient {
  private accessToken: string | null = null;
  private tokenExpiresAt: number = 0;

  private async refreshAccessToken(): Promise<string> {
    const params = new URLSearchParams({
      refresh_token: process.env.BIGIN_REFRESH_TOKEN!,
      client_id: process.env.BIGIN_CLIENT_ID!,
      client_secret: process.env.BIGIN_CLIENT_SECRET!,
      grant_type: 'refresh_token'
    });

    const response = await fetch(`${process.env.BIGIN_API_DOMAIN}/oauth/v2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to refresh Bigin token: ${error}`);
    }

    const data: BiginTokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiresAt = Date.now() + (data.expires_in * 1000) - 60000; // Refresh 1 minute before expiry
    
    return data.access_token;
  }

  private async getAccessToken(): Promise<string> {
    if (!this.accessToken || Date.now() >= this.tokenExpiresAt) {
      return await this.refreshAccessToken();
    }
    return this.accessToken;
  }

  async createLead(leadData: BiginLead): Promise<any> {
    const accessToken = await this.getAccessToken();
    
    const requestBody = {
      data: [leadData]
    };

    const response = await fetch(`${process.env.BIGIN_API_DOMAIN}/crm/v2/Leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to create Bigin lead: ${error}`);
    }

    const result = await response.json();
    return result.data?.[0];
  }

  async updateSupabaseWithBiginId(supabaseId: string, biginLeadId: string): Promise<void> {
    // This will be called from the API route to update the Supabase record
    // with the Bigin lead ID after successful creation
  }
}

// Create a singleton instance
const biginClient = new BiginClient();

export default biginClient;