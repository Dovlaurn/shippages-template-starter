/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Site Configuration
  readonly VITE_SITE_NAME: string;
  readonly VITE_SITE_DESCRIPTION: string;
  readonly VITE_SITE_URL: string;
  
  // Contact Information
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_CONTACT_PHONE: string;
  
  // Social Media Links
  readonly VITE_TWITTER_URL: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_GITHUB_URL: string;
  
  // Analytics (Optional)
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
  readonly VITE_HOTJAR_ID: string;
  
  // Third-party Services (Optional)
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
  readonly VITE_MAILCHIMP_API_KEY: string;
  readonly VITE_SENDGRID_API_KEY: string;
  
  // Feature Flags
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_CHAT: string;
  readonly VITE_ENABLE_BLOG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
