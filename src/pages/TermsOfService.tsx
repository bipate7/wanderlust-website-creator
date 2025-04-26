
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-20 bg-travel-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>
      
      <div className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using this website, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Booking and Payments</h2>
              <p className="text-gray-600 mb-4">
                All bookings are subject to availability and confirmation. Payment terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Full payment is required to confirm bookings</li>
                <li>Prices are subject to change without notice</li>
                <li>Refunds are subject to our cancellation policy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Cancellation Policy</h2>
              <p className="text-gray-600">
                Cancellations must be made at least 48 hours before the scheduled departure.
                Refunds will be processed according to the type of booking and timing of cancellation.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
