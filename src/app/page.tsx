
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Gift, Heart, Clock, CalendarDays, MapPin, Users, Video, BookOpen, Music, Play, Pause } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import RsvpForm from "@/components/rsvp-form";
import GuestbookForm from "@/components/guestbook-form";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from "@/lib/utils";


const weddingDate = new Date("2025-09-20T14:00:00");
const coupleNames = "Putri & Putra";
const guestName = "Bapak/Ibu/Saudara/i"; // This can be dynamic in a real app

const galleryImages = [
  { src: "https://picsum.photos/id/1015/800/1200", alt: "Couple smiling", hint: "couple smiling" },
  { src: "https://picsum.photos/id/1016/800/1200", alt: "Couple holding hands", hint: "couple hands" },
  { src: "https://picsum.photos/id/1018/800/1200", alt: "Couple in nature", hint: "couple nature" },
  { src: "https://picsum.photos/id/1019/800/1200", alt: "Couple walking on a beach", hint: "couple beach" },
  { src: "https://picsum.photos/id/1025/800/1200", alt: "Couple under a tree", hint: "couple tree" },
  { src: "https://picsum.photos/id/1011/800/1200", alt: "Happy couple", hint: "happy couple" },
];

const guestbookEntries = [
  {
    name: "Aunt Carol",
    message: "So excited for you two! Wishing you a lifetime of happiness.",
  },
  {
    name: "John M.",
    message: "Can't wait to celebrate with you! Best wishes from the Miller family.",
  },
  {
    name: "Samantha Lee",
    message: "Congratulations! Your love story is an inspiration. See you on the dance floor!",
  },
];

export default function EvergreenVowsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.documentElement.style.overflow = 'auto';
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(console.error);
    }
  };

  useEffect(() => {
    if (!isOpen) {
        document.documentElement.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground">
      <div className="w-full max-w-md mx-auto">
        <OpeningCeremony isOpen={isOpen} onOpen={handleOpenInvitation} />
        
        <div className={cn("transition-opacity duration-1000 ease-in-out", isOpen ? "opacity-100" : "opacity-0 invisible")}>
          <main className="flex-1 overflow-x-hidden">
            <HeroSection />
            <div className="bg-background relative z-10 -mt-8 rounded-t-3xl">
                <CoupleSection />
                <EventsSection />
                <GallerySection />
                <GuestBookSection />
                <Footer />
            </div>
          </main>
          <BottomNav />
          <MusicPlayer audioRef={audioRef} />
        </div>
      </div>
    </div>
  );
}

const OpeningCeremony = ({ isOpen, onOpen }: { isOpen: boolean, onOpen: () => void }) => {
  return (
    <div className={cn(
      "fixed inset-0 z-[100] bg-background transition-all duration-1000 ease-in-out flex items-center justify-center",
      isOpen ? "opacity-0 -translate-y-full" : "opacity-100"
    )}>
       <Image
          src="https://picsum.photos/seed/wedding-bg/1080/1920"
          alt="Elegant background"
          data-ai-hint="wedding background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground p-8">
            <div className="flex-grow flex flex-col items-center justify-end text-center pb-8">
                 <p className="font-body text-sm md:text-base tracking-widest uppercase mb-4">The Wedding Of</p>
                 <h1 className="font-headline text-5xl md:text-6xl font-bold">{coupleNames}</h1>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
              <p className="font-body text-lg text-foreground mb-1">Dear,</p>
              <p className="font-headline text-2xl font-bold text-foreground mb-4">{guestName}</p>
              <p className="font-body text-xs text-muted-foreground/80 mb-6 max-w-xs mx-auto">*Sorry if there is a mistake in writing the name/title.</p>
              <Button onClick={onOpen} size="lg" className="rounded-full px-8 py-6 text-base shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Open Invitation
              </Button>
            </div>

            <div className="flex-grow"/>
        </div>
    </div>
  )
};


const HeroSection = () => (
  <section id="home" className="relative h-screen flex flex-col items-center justify-between text-center py-8 px-4 text-primary-foreground">
    <Image
      src="https://picsum.photos/seed/wedding-hero/1080/1920"
      alt="Putri & Putra"
      data-ai-hint="wedding couple"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
    
    <div className="relative z-10 flex flex-col items-center w-full pt-16">
        <p className="font-body tracking-widest text-sm">THE WEDDING OF</p>
        <h1 className="font-headline text-5xl mt-2">{coupleNames}</h1>
    </div>

    <div className="relative z-10 flex flex-col items-center w-full pb-20">
      <Countdown targetDate={weddingDate} />
      <p className="font-body text-base mt-6">20 . 09 . 2025</p>
      <Button asChild size="lg" className="mt-6 rounded-full shadow-lg px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
        <a href="#events">
          <CalendarDays className="mr-2 h-5 w-5" />
          Save The Date
        </a>
      </Button>
    </div>
  </section>
);


const CoupleSection = () => (
    <section id="couple" className="py-16 px-6">
        <div className="text-center">
            <AnimateOnScroll>
                <div className="inline-block rounded-full p-1 bg-gradient-to-r from-primary to-yellow-300">
                    <div className="bg-secondary rounded-full p-3">
                         <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>
                </div>
                <p className="font-body tracking-widest text-sm text-primary mt-4">THE HAPPY COUPLE</p>
                <h2 className="font-headline text-4xl mt-2">Meet Our Stars</h2>
                <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                    "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy." (Ar-Rum: 21)
                </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-12 mt-12">
                 <AnimateOnScroll animation="fade-in-up">
                    <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48">
                             <Image src="https://picsum.photos/seed/bride/400/400" alt="Putri Aurelia" layout="fill" className="object-cover rounded-full border-4 border-primary" />
                             <div className="absolute -bottom-2 -right-2 bg-background p-2 rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M4.6 19.4c-1.3-1.3-1.3-3.3 0-4.6l9.2-9.2c.8-.8 2-.8 2.8 0l2.5 2.5c.8.8.8 2 0 2.8l-9.2 9.2c-1.2 1.3-3.3 1.3-4.6 0Z"/><path d="m14 6 3.5 3.5"/><path d="m5 15 3.5 3.5"/></svg>
                             </div>
                        </div>
                        <h3 className="font-headline text-3xl text-primary mt-6">Putri Aurelia</h3>
                        <p className="font-body text-muted-foreground mt-1">The Daughter of Mr. Henry & Mrs. Kelly</p>
                    </div>
                </AnimateOnScroll>
                 <AnimateOnScroll animation="fade-in-up" delay={0.2}>
                    <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48">
                            <Image src="https://picsum.photos/seed/groom/400/400" alt="Putra Alistair" layout="fill" className="object-cover rounded-full border-4 border-primary" />
                            <div className="absolute -bottom-2 -right-2 bg-background p-2 rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M10.1 2.2c.2-.2.5-.3.8-.3s.6.1.8.3l1.9 1.9c.2.2.3.5.3.8s-.1.6-.3.8l-1.9 1.9c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-1.9-1.9c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8l1.9-1.9Z"/><path d="M12.5 4.5 17 9.1"/><path d="M4.6 19.4c-1.3-1.3-1.3-3.3 0-4.6l9.2-9.2c.8-.8 2-.8 2.8 0l2.5 2.5c.8.8.8 2 0 2.8l-9.2 9.2c-1.2 1.3-3.3 1.3-4.6 0Z"/></svg>
                            </div>
                        </div>
                        <h3 className="font-headline text-3xl text-primary mt-6">Putra Alistair</h3>
                        <p className="font-body text-muted-foreground mt-1">The Son of Mr. Jhonny & Mrs. Greny</p>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    </section>
);


const EventsSection = () => (
  <section id="events" className="py-16 px-6 bg-secondary text-secondary-foreground rounded-3xl">
    <div className="container mx-auto px-4">
      <AnimateOnScroll>
        <div className="inline-block rounded-full p-1 bg-gradient-to-r from-primary to-yellow-300">
            <div className="bg-background rounded-full p-3">
                <CalendarDays className="w-8 h-8 text-primary" />
            </div>
        </div>
        <p className="font-body tracking-widest text-sm text-primary mt-4">WEDDING EVENT</p>
        <h2 className="font-headline text-4xl mt-2">Save The Date</h2>
      </AnimateOnScroll>
      
      <div className="mt-12 space-y-8">
        <AnimateOnScroll animation="fade-in-up">
            <Card className="shadow-lg bg-background text-foreground border-primary/20 overflow-hidden">
                <CardHeader className="bg-secondary/30">
                    <CardTitle className="font-headline text-3xl text-primary">The Ceremony</CardTitle>
                    <CardDescription>Saturday, 20 September 2025</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <Clock className="w-5 h-5 text-primary"/>
                        <span>14:00 - 16:00</span>
                    </div>
                    <div className="flex items-start gap-4 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary mt-1"/>
                        <span>The Evergreen Garden, 123 Blossom Lane, Meadowville</span>
                    </div>
                    <Button asChild variant="outline" className="mt-6 w-full">
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </Button>
                </CardContent>
            </Card>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={0.2}>
             <Card className="shadow-lg bg-background text-foreground border-primary/20 overflow-hidden">
                <CardHeader className="bg-secondary/30">
                    <CardTitle className="font-headline text-3xl text-primary">The Reception</CardTitle>
                    <CardDescription>Saturday, 20 September 2025</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <Clock className="w-5 h-5 text-primary"/>
                        <span>18:00 - 21:00</span>
                    </div>
                    <div className="flex items-start gap-4 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary mt-1"/>
                        <span>The Grand Ballroom, 123 Blossom Lane, Meadowville</span>
                    </div>
                     <Button asChild variant="outline" className="mt-6 w-full">
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </Button>
                </CardContent>
            </Card>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);


const GallerySection = () => (
  <section id="gallery" className="py-16 px-6">
    <div className="container mx-auto px-4 text-center">
      <AnimateOnScroll>
         <div className="inline-block rounded-full p-1 bg-gradient-to-r from-primary to-yellow-300">
            <div className="bg-secondary rounded-full p-3">
                 <Video className="w-8 h-8 text-primary-foreground" />
            </div>
        </div>
        <p className="font-body tracking-widest text-sm text-primary mt-4">OUR MOMENTS</p>
        <h2 className="font-headline text-4xl mt-2 mb-12">A Glimpse of Our Journey</h2>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up">
        <Carousel
            opts={{
            align: "start",
            loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-2">
            {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 pl-2">
                <Card className="overflow-hidden group shadow-lg border-0 rounded-xl">
                    <CardContent className="p-0 aspect-[3/4]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        width={400}
                        height={500}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    </CardContent>
                </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="ml-2 bg-background/50 hover:bg-background" />
            <CarouselNext className="mr-2 bg-background/50 hover:bg-background" />
        </Carousel>
      </AnimateOnScroll>
    </div>
  </section>
);


const GuestBookSection = () => (
    <section id="guestbook" className="py-16 px-6 bg-secondary text-secondary-foreground rounded-3xl">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimateOnScroll>
          <div className="inline-block rounded-full p-1 bg-gradient-to-r from-primary to-yellow-300">
              <div className="bg-background rounded-full p-3">
                  <Mail className="w-8 h-8 text-primary" />
              </div>
          </div>
          <p className="font-body tracking-widest text-sm text-primary mt-4">WISHES & RSVP</p>
          <h2 className="font-headline text-4xl mt-2 mb-4">Leave Your Wishes</h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">Your presence is our present, but your words are a gift we'll treasure forever.</p>
        </AnimateOnScroll>
  
        <div className="bg-background/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
          <RsvpForm />
          <Separator className="my-8 bg-border" />
          <h3 className="font-headline text-2xl text-center mb-6">Guestbook</h3>
          <div className="space-y-4 h-[300px] overflow-y-auto pr-4">
            {guestbookEntries.map((entry, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                 <Card className="bg-background/50">
                   <CardContent className="p-4">
                      <p className="font-bold text-base text-primary">{entry.name}</p>
                      <p className="text-foreground/80 mt-1 text-sm">{entry.message}</p>
                   </CardContent>
                 </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

const Footer = () => (
  <footer className="py-10 text-center">
    <div className="container mx-auto px-4 text-muted-foreground text-sm">
        <AnimateOnScroll>
            <p className="font-headline text-3xl text-primary mb-2">{coupleNames}</p>
            <p className="font-body">&copy; {new Date().getFullYear()}. Made with love.</p>
        </AnimateOnScroll>
    </div>
  </footer>
);
    
const BottomNav = () => {
    const navItems = [
        { id: 'home', icon: Heart, label: 'Home' },
        { id: 'couple', icon: Users, label: 'Couple' },
        { id: 'events', icon: CalendarDays, label: 'Events' },
        { id: 'gallery', icon: Video, label: 'Gallery' },
        { id: 'guestbook', icon: Mail, label: 'Wishes' },
    ];

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
            <div className="bg-secondary/80 backdrop-blur-md rounded-full shadow-lg p-2">
                <ul className="flex justify-around items-center">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className={cn(
                                    "flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                                    activeSection === item.id ? 'bg-primary text-primary-foreground' : 'text-secondary-foreground hover:bg-secondary'
                                )}
                            >
                                <item.icon className="w-6 h-6" />
                                <span className={cn(
                                    "text-xs mt-1 transition-opacity duration-300",
                                    activeSection === item.id ? 'opacity-100' : 'opacity-0 h-0'
                                )}>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
