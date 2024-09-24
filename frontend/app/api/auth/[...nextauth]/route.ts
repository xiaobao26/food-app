import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";

// Define your auth options with the correct types
export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: 'jwt' as const,
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
