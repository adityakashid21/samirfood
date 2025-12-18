import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Ahmed Al-Rashid',
        role: 'Import Manager',
        company: 'Dubai Fresh Markets',
        country: 'UAE',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
        rating: 5,
        text: 'FreshFarms India has been our trusted partner for over 3 years. Their quality is unmatched, and the tech-enabled tracking gives us complete peace of mind. Every shipment arrives fresh and on time.',
    },
    {
        id: 2,
        name: 'Maria Santos',
        role: 'Procurement Director',
        company: 'European Organic Foods',
        country: 'Spain',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
        rating: 5,
        text: 'The best Indian produce supplier we\'ve worked with. Their onions and grapes are exceptional. The AI-powered quality checks ensure we receive only premium products. Highly recommended!',
    },
    {
        id: 3,
        name: 'John Williams',
        role: 'Supply Chain Head',
        company: 'Global Foods Ltd',
        country: 'UK',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        rating: 5,
        text: 'Outstanding service and premium quality vegetables. The scheduling system makes ordering seamless, and their customer support is exceptional. We\'ve increased our order volume by 200%.',
    },
    {
        id: 4,
        name: 'Yuki Tanaka',
        role: 'Import Specialist',
        company: 'Tokyo Fresh Imports',
        country: 'Japan',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki',
        rating: 5,
        text: 'Precision, quality, and reliability - exactly what we need. FreshFarms understands international standards perfectly. Their produce meets our strict Japanese quality requirements every single time.',
    },
    {
        id: 5,
        name: 'Sarah Johnson',
        role: 'Buyer',
        company: 'American Wholesale Foods',
        country: 'USA',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        rating: 5,
        text: 'From farm to our warehouse in perfect condition. The transparency in their supply chain and real-time updates are game-changing. Best decision we made for our sourcing strategy.',
    },
    {
        id: 6,
        name: 'Mohammed Hassan',
        role: 'Operations Manager',
        company: 'Middle East Distributors',
        country: 'Saudi Arabia',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed',
        rating: 5,
        text: 'Consistent quality, competitive pricing, and excellent communication. FreshFarms has transformed our vegetable sourcing. Their tech platform makes everything so easy to manage.',
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
            <div className="premium-container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-green/10 rounded-full mb-6">
                        <Star className="w-4 h-4 text-fresh-green fill-fresh-green" />
                        <span className="text-sm font-medium text-fresh-green">Trusted Worldwide</span>
                    </div>
                    <h2 className="premium-heading text-4xl md:text-5xl mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="premium-subtext text-lg">
                        Join 500+ satisfied clients across 50+ countries who trust us for premium quality produce
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-5xl mx-auto mb-12">
                    <div className="premium-card p-8 md:p-12 relative overflow-hidden">
                        {/* Quote Icon */}
                        <div className="absolute top-8 right-8 opacity-10">
                            <Quote className="w-24 h-24 text-foreground" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative z-10">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`transition-all duration-700 ${index === activeIndex
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 absolute inset-0 translate-x-full'
                                        }`}
                                >
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-fresh-orange fill-fresh-orange"
                                            />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <blockquote className="text-xl md:text-2xl font-light text-foreground mb-8 leading-relaxed">
                                        "{testimonial.text}"
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full bg-secondary"
                                        />
                                        <div>
                                            <p className="font-semibold text-lg text-foreground">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {testimonial.role}, {testimonial.company}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                📍 {testimonial.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'w-8 bg-foreground'
                                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Testimonial Grid - All Reviews */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="premium-card p-6 cursor-pointer"
                            onClick={() => {
                                setActiveIndex(index);
                                setIsAutoPlaying(false);
                                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-fresh-orange fill-fresh-orange"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full bg-secondary"
                                />
                                <div>
                                    <p className="font-medium text-sm text-foreground">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
