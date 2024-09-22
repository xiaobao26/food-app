import React from 'react'
import Link from 'next/link'


const Navigation = () => {
    return (
        <nav>
            <div className='flex gap-4 list-none bg-slate-300 p-5'>
                <Link href='/'>Home</Link>
                <Link href='/api/auth/signin'>Login</Link>
                <Link href='/register'>Register</Link>
                <Link href='/dashboard'>Dashboard</Link>
            </div>
        </nav>
    )
}

export default Navigation