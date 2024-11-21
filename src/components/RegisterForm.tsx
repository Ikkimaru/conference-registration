'use client';

import React, { useState } from 'react';

type RegisterFormProps = {
    onFormSubmit: (registrant: { name: string; email: string; comments: string; checkInNumber: number }) => void;
};

const RegisterForm = ({ onFormSubmit }: RegisterFormProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const checkInNumber = Math.floor(Math.random() * 10000); // Random number for check-in

        // Create the new registrant object
        const newRegistrant = { name, email, comments, checkInNumber };

        // Submit the registrant data
        onFormSubmit(newRegistrant);

        // Clear the form
        setName('');
        setEmail('');
        setComments('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto bg-foreground p-6 shadow-md rounded">
            <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Comments or Questions (Optional)"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
            ></textarea>
            <button
                type="submit"
                className="w-full bg-blue-600 text-foreground py-3 rounded font-semibold hover:bg-blue-700"
            >
                Submit Registration
            </button>
        </form>
    );
};

export default RegisterForm;

