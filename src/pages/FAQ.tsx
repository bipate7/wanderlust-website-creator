
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-20 bg-travel-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </div>
      
      <div className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="booking">
                <AccordionTrigger>How do I make a booking?</AccordionTrigger>
                <AccordionContent>
                  You can make a booking through our website by selecting your desired destination
                  and following the booking process. You'll need to provide your travel dates,
                  personal information, and payment details to confirm your booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, MasterCard, American Express),
                  PayPal, and bank transfers. All payments are processed securely through
                  our payment gateway.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancellation">
                <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                <AccordionContent>
                  Our standard cancellation policy allows for full refunds if cancelled
                  48 hours before the scheduled departure. Different terms may apply for
                  special promotions or specific destinations. Please check your booking
                  confirmation for detailed cancellation terms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="insurance">
                <AccordionTrigger>Do you provide travel insurance?</AccordionTrigger>
                <AccordionContent>
                  While we don't provide travel insurance directly, we strongly recommend
                  purchasing travel insurance for your trip. We can recommend trusted
                  insurance providers that offer comprehensive coverage for your journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
