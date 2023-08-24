
module.exports = {
    VISITOR_CERTIFICATE_BASE_URL: process.env.VISITOR_CERTIFICATE_BASE_URL || "http://localhost:8000",
    KEYCLOAK_REALM: process.env.KEYCLOAK_REALM || "sunbird-rc",
    KEYCLOAK_URL: process.env.KEYCLOAK_URL || "http://localhost:8080",
    REGISTRY_URL: process.env.REGISTRY_URL || "http://localhost:8081",
    CREDENTIAL_URL: process.env.CREDENTIAL_URL || "http://localhost:3000",
    IDENTITY_URL: process.env.IDENTITY_URL || "http://localhost:3332",
    CREDENTIAL_SCHEMA_URL: process.env.CREDENTIAL_SCHEMA_URL || "http://localhost:3333",
    ADMIN_API_SECRET_KEY: process.env.ADMIN_API_SECRET_KEY ,
    SERVICE_CLIENT_SECRET_KEY: process.env.SERVICE_CLIENT_SECRET_KEY,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY ,
    EMAIL_ID_FOR_NOTIFICATIONS: process.env.EMAIL_ID_FOR_NOTIFICATIONS ,
    EMAIL_SENDER_NAME: process.env.EMAIL_SENDER_NAME ,
    SENDGRID_EMAIL_API_KEY: process.env.SENDGRID_EMAIL_API_KEY , 
}