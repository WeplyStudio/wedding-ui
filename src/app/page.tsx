import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Gift, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import RsvpForm from "@/components/rsvp-form";
import GuestbookForm from "@/components/guestbook-form";
import Header from "@/components/header";
import { Logo } from "@/components/logo";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const weddingDate = new Date("2025-09-20T14:00:00");
const coupleNames = "Alex & Jamie";

const galleryImages = [
  { src: "https://picsum.photos/id/1015/800/1200", alt: "Couple smiling", hint: "couple smiling" },
  { src: "https://picsum.photos/id/1016/800/1200", alt: "Couple holding hands", hint: "couple hands" },
  { src: "https://picsum.photos/id/1018/800/1200", alt: "Couple in nature", hint: "couple nature" },
  { src: "https://picsum.photos/id/1019/800/1200", alt: "Couple walking on a beach", hint: "couple beach" },
  { src: "https://picsum.photos/id/1025/800/1200", alt: "Couple under a tree", hint: "couple tree" },
];

const guestbookEntries = [
  {
    name: "Aunt Carol",
    message: "So excited for you two! Wishing you a lifetime of happiness.",
    avatar: "https://picsum.photos/id/1011/48/48",
  },
  {
    name: "John M.",
    message: "Can't wait to celebrate with you! Best wishes from the Miller family.",
    avatar: "https://picsum.photos/id/1012/48/48",
  },
  {
    name: "Samantha Lee",
    message: "Congratulations! Your love story is an inspiration. See you on the dance floor!",
    avatar: "https://picsum.photos/id/1027/48/48",
  },
];

export default function EvergreenVowsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <EventsSection />
        <VenueSection />
        <GallerySection />
        <GiftRegistrySection />
        <RsvpSection />
        <GuestBookSection />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

const HeroSection = () => (
  <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
    <Image
      src="https://picsum.photos/seed/wedding-hero/1920/1080"
      alt="A beautiful floral arrangement for a wedding"
      data-ai-hint="wedding flowers"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
    <div className="relative z-10 p-4 flex flex-col items-center">
        <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.8}>
            <p className="font-body text-lg md:text-xl mb-4 tracking-widest uppercase">We're getting married</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={0.4} duration={0.8}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-shadow-lg">
                {coupleNames}
            </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in" delay={0.8} duration={1}>
            <Separator className="my-8 bg-white/50 w-1/3 mx-auto" />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={1} duration={0.8}>
            <Countdown targetDate={weddingDate} />
        </AnimateOnScroll>
    </div>
  </section>
);

const EventsSection = () => (
  <section id="events" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline text-center text-secondary-foreground mb-16">Schedule of Events</h2>
      </AnimateOnScroll>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
        <AnimateOnScroll animation="fade-in-right" className="w-full max-w-sm">
            <Card className="shadow-xl overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-0">
                    <Calendar
                    mode="single"
                    selected={weddingDate}
                    disabled
                    className="p-4 w-full"
                    classNames={{
                        head_cell: "text-secondary-foreground/80",
                        day_selected: "bg-primary text-primary-foreground",
                        day_today: "text-primary font-bold ring-1 ring-primary",
                    }}
                    />
                </CardContent>
            </Card>
        </AnimateOnScroll>
        <div className="space-y-10 max-w-md">
            <AnimateOnScroll animation="fade-in-left" delay={0.2}>
                <div className="flex items-start gap-6">
                    <div className="bg-primary/20 text-primary p-4 rounded-full shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rings"><path d="M7 15a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2Z"/><path d="M17 15a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2Z"/><path d="M17 13V9a5 5 0 0 0-5-5H7"/></svg>
                    </div>
                    <div>
                        <h3 className="text-3xl font-headline text-secondary-foreground">The Ceremony</h3>
                        <p className="text-lg text-muted-foreground mt-1">2:00 PM</p>
                        <p className="text-secondary-foreground/80 mt-3">Join us as we exchange vows and begin our new chapter together in a beautiful garden setting.</p>
                    </div>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={0.4}>
                <div className="flex items-start gap-6">
                    <div className="bg-primary/20 text-primary p-4 rounded-full shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-glass-water"><path d="M15.2 3.2c.1-.4.5-.8.9-.8H18c.9 0 1.6.5 1.8 1.4l-1.3 8.2c-.1.7-.7 1.2-1.4 1.2H6.8c-.7 0-1.3-.5-1.4-1.2L4 3.8c.2-.9.9-1.4 1.8-1.4h2c.4 0 .7.3.9.8l1.6 5.1 1.6-5.1Z"/><path d="M4 14h16"/></svg>
                    </div>
                    <div>
                        <h3 className="text-3xl font-headline text-secondary-foreground">The Reception</h3>
                        <p className="text-lg text-muted-foreground mt-1">4:00 PM onwards</p>
                        <p className="text-secondary-foreground/80 mt-3">Let's celebrate with dinner, drinks, and dancing under the stars!</p>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const VenueSection = () => (
  <section id="venue" className="py-20 md:py-32">
    <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl font-headline mb-4 text-foreground">The Venue</h2>
            <p className="text-xl text-muted-foreground mb-12">The Evergreen Garden, 123 Blossom Lane, Meadowville</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="zoom-in">
            <div className="aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border-8 border-background">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.212377319979!2d-122.4194156846816!3d37.77492957975895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a3424599%3A0x51b889e68da77c4e!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1689283456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
                ></iframe>
            </div>
        </AnimateOnScroll>
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline mb-16 text-secondary-foreground">Our Moments</h2>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up">
        <Carousel
            opts={{
            align: "start",
            loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
        >
            <CarouselContent className="-ml-4">
            {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="overflow-hidden group shadow-lg border-transparent rounded-xl">
                    <CardContent className="p-0 aspect-[3/4]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        width={800}
                        height={1200}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    </CardContent>
                </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-1.5rem] md:ml-[-3rem] bg-background/50 hover:bg-background" />
            <CarouselNext className="mr-[-1.5rem] md:mr-[-3rem] bg-background/50 hover:bg-background" />
        </Carousel>
      </AnimateOnScroll>
    </div>
  </section>
);

const RsvpSection = () => (
  <section id="rsvp" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <AnimateOnScroll animation="zoom-in" className="max-w-2xl mx-auto">
        <Card className="shadow-xl bg-secondary/50 border-primary/20 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center p-8">
                <Mail className="w-16 h-16 mx-auto text-primary" />
                <CardTitle className="font-headline text-5xl mt-6 text-secondary-foreground">Kindly RSVP</CardTitle>
                <p className="text-muted-foreground pt-2 text-lg">Please respond by August 20th, 2025.</p>
            </CardHeader>
            <CardContent className="p-8">
                <RsvpForm />
            </CardContent>
        </Card>
      </AnimateOnScroll>
    </div>
  </section>
);

const GiftRegistrySection = () => (
  <section id="gifts" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <AnimateOnScroll animation="fade-in-down">
        <Gift className="w-16 h-16 mx-auto text-primary mb-6" />
        <h2 className="text-4xl md:text-5xl font-headline mb-6 text-foreground">Gift Registry</h2>
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            Your presence at our wedding is the only gift we need! However, if you wish to give a gift,
            a contribution to our honeymoon fund would be warmly appreciated.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up" delay={0.2}>
        <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg shadow-lg transform hover:scale-105 transition-transform">
            <a href="#" target="_blank" rel="noopener noreferrer">
            Contribute to Our Journey <Heart className="ml-2 w-5 h-5" />
            </a>
        </Button>
      </AnimateOnScroll>
    </div>
  </section>
);

const GuestBookSection = () => (
  <section id="guestbook" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 max-w-4xl">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline text-center text-secondary-foreground mb-16">Leave Your Wishes</h2>
      </AnimateOnScroll>
      <div className="space-y-10 mb-16">
        {guestbookEntries.map((entry, index) => (
          <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
            <div className="flex items-start gap-6">
                <Avatar className="w-16 h-16 border-2 border-primary/30 shadow-md">
                <AvatarImage src={entry.avatar} alt={entry.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-xl">{entry.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="bg-background/50 p-6 rounded-lg flex-1 shadow-lg backdrop-blur-sm">
                <p className="font-bold text-lg text-foreground">{entry.name}</p>
                <p className="text-muted-foreground mt-2 text-base italic">"{entry.message}"</p>
                </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll animation="fade-in-up">
        <Separator className="my-16 bg-border" />
        <h3 className="text-3xl font-headline text-center text-secondary-foreground mb-8">Write in our Guestbook</h3>
        <GuestbookForm />
      </AnimateOnScroll>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 bg-background border-t">
    <div className="container mx-auto px-4 text-center text-muted-foreground">
        <AnimateOnScroll animation="fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
                <Logo className="h-7 w-7 text-primary" />
                <p className="font-headline text-2xl text-primary">{coupleNames}</p>
            </div>
            <p className="font-body text-base">&copy; {new Date().getFullYear()} Evergreen Vows. All Rights Reserved.</p>
        </AnimateOnScroll>
    </div>
  </footer>
);
