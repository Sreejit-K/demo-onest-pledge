
module.exports = {
    VISITOR_CERTIFICATE_BASE_URL: process.env.VISITOR_CERTIFICATE_BASE_URL || "http://localhost:8000",
    KEYCLOAK_REALM: process.env.KEYCLOAK_REALM || "sunbird-rc",
    KEYCLOAK_URL: process.env.KEYCLOAK_URL || "http://localhost:8080",
    REGISTRY_URL: process.env.REGISTRY_URL || "http://localhost:8081",
    CREDENTIAL_URL: process.env.CREDENTIAL_URL || "http://localhost:3000",
    IDENTITY_URL: process.env.IDENTITY_URL || "http://localhost:3332",
    CREDENTIAL_SCHEMA_URL: process.env.CREDENTIAL_SCHEMA_URL || "http://localhost:3333",
    ADMIN_API_SECRET_KEY: process.env.ADMIN_API_SECRET_KEY || "7df82051-369f-4ddf-b2ad-995305096a5c",
    SERVICE_CLIENT_SECRET_KEY: process.env.SERVICE_CLIENT_SECRET_KEY || "7df82051-369f-4ddf-b2ad-995305096a5c",
    EMAIL_API_KEY: process.env.EMAIL_API_KEY || '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',
    EMAIL_ID_FOR_NOTIFICATIONS: process.env.EMAIL_ID_FOR_NOTIFICATIONS || 'onest.pledge@beehyv.com',
    EMAIL_SENDER_NAME: process.env.EMAIL_SENDER_NAME || "Team ONEST",
    SENDGRID_EMAIL_API_KEY: process.env.SENDGRID_EMAIL_API_KEY || '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', 
}