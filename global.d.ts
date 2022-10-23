declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly APP_ENV: 'development' | 'production' | 'sandbox' | 'test' | 'dev';
      readonly APP_ENV_PRODUCTION: boolean;
      readonly NEXT_PUBLIC_DEFAULT_ACTIVE_CURRENCY_ID: string;
    }
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
  namespace JSX {}
}
