import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://5322bb1e5dd168bc8ed4e6719c08af88@o4509121823309824.ingest.us.sentry.io/4509121829470208",
  integrations: [
    Sentry.mongoIntegration()],
});

export default Sentry;
