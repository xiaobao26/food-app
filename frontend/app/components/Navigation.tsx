'use client';
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navigation = () => {
    const { status, data: session } = useSession();


    return (
        <nav>
            <div className='flex gap-4 list-none bg-slate-300 p-5'>
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>Dashboard</Link>
                {status ==='loading' && <div>Loading...</div>}
                {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
                {status === 'authenticated' && 
                    <div className='flex gap-4'>
                        {session.user!.name}
                        <Link href='/api/auth/signout' >Sign Out</Link>
                    </div>
                }
                <Link href='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default Navigation