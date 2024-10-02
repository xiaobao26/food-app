'use client'
import React, { useState } from 'react'

const SignInForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');


    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:8080/v1/auth/login',  {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password,  }),
            });

            if (!response.ok) {
                const text = await response.text();
                setError(`Sign in failed: ${text}`);
                return;
            }

            const data = await response.json();
            setSuccess(data.message || 'Sign in successful!');

        } catch (error) {
            console.log(`Error: ${(error as Error).message}`);
        }

    }




    return (
        <>
            <form onSubmit={handleSignin}>
                <div>SIGN IN</div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                </div>


                <div>
                    <button style={{ color: 'red'}}>Sign In</button>
                </div>

                <div>
                    <p>OR SIGN IN WITH</p>
                    <div className='signin-line'>
                        -----
                    </div>
                </div>

                <div>
                    <button>Google</button>
                    <button>Facebook</button>
                    <button>Apple</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </>
    )
}

export default SignInForm