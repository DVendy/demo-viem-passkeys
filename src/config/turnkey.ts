export const turnkeyConfig = {
    apiBaseUrl: process.env.NEXT_PUBLIC_TURNKEY_API_BASE_URL!,
    defaultOrganizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
    rpId: process.env.NEXT_PUBLIC_RPID!,
    serverSignUrl: process.env.NEXT_PUBLIC_SERVER_SIGN_URL!,
    iframeUrl: process.env.NEXT_PUBLIC_IFRAME_URL ?? "https://auth.turnkey.com", // not necessary for this example
  };