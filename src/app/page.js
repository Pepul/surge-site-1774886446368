'use client';

import { CheckCircle, DollarSign } from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Transform Your Business</h1>
          <p className="text-lg mb-8">Our SaaS product helps you achieve more with less effort.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p className="text-gray-700">Description of feature one with amazing benefits.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p className="text-gray-700">Description of feature two with amazing benefits.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
              <p className="text-gray-700">Description of feature three with amazing benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <DollarSign className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-4">$19/month</p>
              <ul className="text-gray-700 mb-8">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <DollarSign className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-2xl font-bold mb-4">$49/month</p>
              <ul className="text-gray-700 mb-8">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <DollarSign className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-2xl font-bold mb-4">$99/month</p>
              <ul className="text-gray-700 mb-8">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
                <li>Feature E</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}