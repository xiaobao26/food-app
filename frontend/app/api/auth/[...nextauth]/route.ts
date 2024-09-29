import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";

declare module "next-auth" {
    interface Session {
        user: {
            id: string; // Adding the 'id' field to the session.user type
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }

    interface User {
        id: string;
    }
}

// Define your auth options with the correct types
export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(client),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials) {
                // check if the email and password valid
                if (!credentials?.email || !credentials.password) return null;

                try {
                    const res = await fetch('http://localhost:8080/v1/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    });

                    if (!res.ok) {
                        const text = await res.text();  // Get the text response
                        console.error("Authorization failed:", text);
                        return null;  // Return null if there's an error
                    }

                    const user = await res.json();
                    if (!user) return null;
                    
                    return user;
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            // Attach user info to token
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            // Safely check if session.user is defined
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
