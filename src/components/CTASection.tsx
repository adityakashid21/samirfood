import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
    const openCalendar = () => {
        window.open('https://calendar.google.com/calendar/appointments/schedules', '_blank');
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-fresh-green via-fresh-orange to-fresh-purple opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-fresh-green/20 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-fresh-orange/20 rounded-full blur-2xl animate-float-delayed" />

            <div className="premium-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-green/10 rounded-full mb-8 animate-scale-in">
                        <Sparkles className="w-4 h-4 text-fresh-green" />
                        <span className="text-sm font-medium text-fresh-green">Limited Time Offer</span>
                    </div>

                    {/* Heading */}
                    <h2 className="premium-heading text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up">
                        Ready to Source Premium
                        <br />
                        <span className="bg-gradient-to-r from-fresh-green via-fresh-orange to-fresh-purple bg-clip-text text-transparent">
                            Quality Produce?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="premium-subtext text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Join 500+ businesses worldwide who trust FreshFarms India for their premium vegetable and fruit supply. Get started with a free consultation today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            onClick={openCalendar}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-large hover:shadow-xl"
                        >
                            Schedule Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300"
                        >
                            View Our Products
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse" />
                            <span>No minimum order</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-fresh-orange rounded-full animate-pulse" />
                            <span>Free quality samples</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-fresh-purple rounded-full animate-pulse" />
                            <span>Flexible payment terms</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
