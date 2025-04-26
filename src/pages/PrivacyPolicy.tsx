
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-20 bg-travel-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            How we protect and handle your data
          </p>
        </div>
      </div>
      
      <div className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us when making a booking,
                creating an account, or signing up for our newsletter. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Name and contact information</li>
                <li>Payment information</li>
                <li>Travel preferences and history</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Process your bookings and payments</li>
                <li>Send you important travel information</li>
                <li>Personalize your experience</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell or rent your personal information to third parties.
                We may share your information with trusted partners to help us provide
                our services and improve your travel experience.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
