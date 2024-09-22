import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]/route'


export default async function Page() {
    const session = await getServerSession(authOptions);


    return (
        <main>
            <h1>Hello user:  { session && <span>{session.user!.name}</span>}</h1>
        </main>
    );
}