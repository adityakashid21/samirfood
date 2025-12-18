import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="premium-card overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-secondary/50 transition-colors duration-300"
            >
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                        {question}
                    </h3>
                </div>
                <div className="flex-shrink-0">
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-fresh-green" />
                    ) : (
                        <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
}

const faqs = [
    {
        question: 'What is your minimum order quantity?',
        answer: 'We understand that different businesses have different needs. While we typically work with container loads for international shipping, we can accommodate smaller orders as well. Contact us to discuss your specific requirements and we\'ll find the best solution for you.',
    },
    {
        question: 'How do you ensure product quality?',
        answer: 'Quality is our top priority. We use a combination of AI-powered quality inspection and manual verification by our expert team. Every product goes through multiple quality checks from farm to packaging. We also provide quality certificates and can arrange third-party inspections if required.',
    },
    {
        question: 'Which countries do you export to?',
        answer: 'We export to over 50 countries worldwide, including UAE, Saudi Arabia, UK, USA, Spain, Japan, and many more. Our logistics network is well-established to ensure smooth delivery to most international destinations. If your country isn\'t listed, please contact us - we\'re always expanding our reach.',
    },
    {
        question: 'What are your payment terms?',
        answer: 'We offer flexible payment terms to suit your business needs. Options include Letter of Credit (LC), advance payment, and credit terms for established clients. We work with all major international payment methods and can discuss customized payment plans based on your requirements.',
    },
    {
        question: 'How long does shipping take?',
        answer: 'Shipping time varies by destination and shipping method. Typically, air freight takes 3-7 days, while sea freight takes 15-30 days depending on the port. We provide real-time tracking for all shipments and keep you updated throughout the journey.',
    },
    {
        question: 'Do you provide samples?',
        answer: 'Yes! We offer free quality samples for serious buyers. This allows you to verify our product quality before placing a bulk order. Sample shipping costs are typically borne by the buyer, but we can discuss this based on order potential.',
    },
    {
        question: 'What certifications do you have?',
        answer: 'We are ISO certified and comply with all international food safety standards. We can provide HACCP, Global GAP, and other certifications as required by your country\'s import regulations. All our products come with necessary phytosanitary certificates and quality documentation.',
    },
    {
        question: 'Can you customize packaging?',
        answer: 'Absolutely! We offer customized packaging solutions including private labeling, specific box sizes, and branded packaging. Our team can work with you to create packaging that meets your market requirements and brand standards.',
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background">
            <div className="premium-container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-green/10 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-fresh-green" />
                        <span className="text-sm font-medium text-fresh-green">Got Questions?</span>
                    </div>
                    <h2 className="premium-heading text-4xl md:text-5xl mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="premium-subtext text-lg">
                        Find answers to common questions about our products, services, and processes
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <button
                        onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}
