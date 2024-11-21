'use client';

import { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';

type Registrant = {
  name: string;
  email: string;
  comments: string;
  checkInNumber: number;
};

export default function Home() {
  const [registrants, setRegistrants] = useState<Registrant[]>([]);

  // Fetch the registrants from localStorage when the component mounts
  useEffect(() => {
    const savedRegistrants = JSON.parse(localStorage.getItem('registrants') || '[]');
    setRegistrants(savedRegistrants);
  }, []);

  // Function to handle form submission
  const handleFormSubmit = (newRegistrant: Registrant) => {
    // Save to localStorage
    const updatedRegistrants = [...registrants, newRegistrant];
    localStorage.setItem('registrants', JSON.stringify(updatedRegistrants));

    // Update the state
    setRegistrants(updatedRegistrants);
  };

  return (
      <div className="min-h-screen bg-background flex flex-col items-center">
        {/* Hero Section */}
        <header className="w-full bg-blue-600 text-foreground py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold">Annual Tech Conference 2024</h1>
            <p className="mt-4 text-lg">
              Join us for an unforgettable day of learning, networking, and innovation!
            </p>
            <a
                href="#register"
                className="inline-block mt-6 px-8 py-3 bg-gray-500 text-white rounded shadow-md font-semibold hover:bg-gray-200 hover:text-blue-600"
            >
              Register
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 space-y-16">
          {/* Conference Details */}
          <section id="details" className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">Conference Details</h2>
            <p className="mt-4 text-foreground">
              The Annual Tech Conference 2024 brings together industry leaders, developers,
              and enthusiasts to discuss the latest in technology and innovation.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 border rounded shadow-sm bg-foreground">
                <h3 className="font-bold text-xl text-blue-600">When</h3>
                <p className="text-background">March 15, 2024</p>
              </div>
              <div className="p-4 border rounded shadow-sm bg-foreground">
                <h3 className="font-bold text-xl text-blue-600">Where</h3>
                <p className="text-background">San Francisco, CA</p>
              </div>
              <div className="p-4 border rounded shadow-sm bg-foreground">
                <h3 className="font-bold text-xl text-blue-600">Who</h3>
                <p className="text-background">Tech enthusiasts of all levels</p>
              </div>
            </div>
          </section>

          {/* Registration Form */}
          <section id="register" className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">Register Now</h2>
            <RegisterForm onFormSubmit={handleFormSubmit} />
          </section>

          {/* Registered People List */}
          <section id="registrants" className="text-center mt-8">
            <h2 className="text-3xl font-semibold text-foreground">Registered Attendees</h2>
            <ul className="mt-4">
              {registrants.length === 0 ? (
                  <p>No one has registered yet.</p>
              ) : (
                  registrants.map((registrant, index) => (
                      <li key={index} className="p-4 border rounded shadow-sm bg-foreground">
                        <p className="font-bold text-blue-600">{registrant.name}</p>
                        <p className="text-background">{registrant.email}</p>
                        {registrant.comments && <p className="text-background italic">{registrant.comments}</p>}
                        <p className="text-background">Check-in Number: {registrant.checkInNumber}</p>
                      </li>
                  ))
              )}
            </ul>
          </section>

          {/* Contact Information */}
          <section id="contact" className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">Contact Us</h2>
            <p className="mt-4 text-foreground">
              Have questions? Reach out to us at{' '}
              <a
                  href="mailto:info@techconference2024.com"
                  className="text-blue-600 underline"
              >
                info@techconference2024.com
              </a>
              .
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-800 text-foreground py-4 text-center">
          <p>&copy; 2024 Tech Conference. All rights reserved.</p>
        </footer>
      </div>
  );
}