"use client"
import React, { useState } from 'react';



const RegisterForm: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:8080/v1/auth/register',  {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, phoneNumber }),
            });

            if (!response.ok) {
                const text = await response.text();
                setError(`Registeation failed: ${text}`);
                return;
            }

            const data = await response.json();
            setSuccess(data.message || 'Registration successful!');

        } catch (error) {
            console.log(`Error: ${(error as Error).message}`);
        }

    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} required onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input type="text" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <button>Register Here!</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </>
    )
}

export default RegisterForm