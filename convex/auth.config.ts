import { AuthConfig } from "convex/server"

export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
      applicationID: "convex", // Application ID from Clerk dashboard - Edit JWT template => name
    },
  ],
} satisfies AuthConfig
