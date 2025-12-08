import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video } from 'lucide-react';

export function ScheduleMeeting() {
  const openCalendar = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules', '_blank');
  };

  return (
    <section id="schedule" className="py-20 md:py-32 bg-background">
      <div className="premium-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
              Let's Connect
            </span>
            <h2 className="premium-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Schedule a Meeting
              <br />
              <span className="text-muted-foreground">With Our Team</span>
            </h2>
            <p className="premium-subtext text-lg max-w-2xl mx-auto">
              Ready to discuss your export requirements? Book a convenient time slot with our team to explore partnership opportunities.
            </p>
          </div>

          {/* Meeting Card */}
          <div className="premium-card p-8 md:p-12 text-center space-y-8">
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Video className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground">Video Call</p>
                  <p className="text-sm text-muted-foreground">Google Meet / Zoom</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground">30 Minutes</p>
                  <p className="text-sm text-muted-foreground">Free Consultation</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground">Flexible Timing</p>
                  <p className="text-sm text-muted-foreground">IST / Your Timezone</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="cta" size="xl" onClick={openCalendar} className="w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call on Google Calendar
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No commitment required. Let's explore how we can serve your fresh produce needs.
            </p>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <p className="font-display text-2xl font-bold text-foreground mb-2">24hrs</p>
              <p className="text-sm text-muted-foreground">Average Response Time</p>
            </div>
            <div className="text-center p-6">
              <p className="font-display text-2xl font-bold text-foreground mb-2">English</p>
              <p className="text-sm text-muted-foreground">Primary Language</p>
            </div>
            <div className="text-center p-6">
              <p className="font-display text-2xl font-bold text-foreground mb-2">GMT+5:30</p>
              <p className="text-sm text-muted-foreground">India Standard Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
