
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Gift, Heart, Clock, CalendarDays, MapPin, Users, Video, BookOpen, Music, Play, Pause, Flower2, HeartHandshake, GlassWater, Camera, Home, User, Calendar, GalleryHorizontal, Instagram } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from "@/lib/utils";
import GuestBook from "@/components/guestbook";


const weddingDate = new Date("2025-09-20T14:00:00");
const coupleNames = "Putri & Putra";
const guestName = "Bapak/Ibu/Saudara/i"; // This can be dynamic in a real app

const galleryImages = [
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/4.jpeg", alt: "Couple smiling", hint: "couple smiling" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/5.jpeg", alt: "Couple holding hands", hint: "couple hands" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/6.jpeg", alt: "Couple in nature", hint: "couple nature" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/7.jpeg", alt: "Couple walking on a beach", hint: "couple beach" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/8.jpg", alt: "Couple under a tree", hint: "couple tree" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Bride.jpg", alt: "Happy couple", hint: "happy couple" },
];

const navItems = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#couple', icon: Heart, label: 'Couple' },
    { href: '#events', icon: Calendar, label: 'Events' },
    { href: '#gallery', icon: GalleryHorizontal, label: 'Gallery' },
    { href: '#guestbook', icon: Mail, label: 'Wishes' },
];

export default function EvergreenVowsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(console.error);
    }
  };
  
  useEffect(() => {
    if (!isOpen) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground font-sans">
        <OpeningCeremony isOpen={isOpen} onOpen={handleOpenInvitation} />
        
        <div className={cn("w-full max-w-3xl mx-auto transition-opacity duration-1000 ease-in-out", isOpen ? "opacity-100" : "opacity-0 invisible")}>
          <main className="flex-1 overflow-x-hidden">
            <HeroSection />
            <div className="bg-background relative z-10 -mt-24 rounded-t-3xl shadow-2xl">
                <CoupleSection />
                <EventsSection />
                <GallerySection />
                <GuestBookSection />
                <Footer />
            </div>
          </main>
          <MusicPlayer audioRef={audioRef} />
          <BottomNav />
        </div>
    </div>
  );
}


const OpeningCeremony = ({ isOpen, onOpen }: { isOpen: boolean, onOpen: () => void }) => {
    return (
      <div className={cn(
        "fixed inset-0 z-[100] bg-background transition-all duration-1000 ease-in-out flex items-center justify-center",
        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
         <Image
            src="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/1-2.jpeg"
            alt="Elegant floral background"
            data-ai-hint="elegant floral"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
  
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground p-8">
              <AnimateOnScroll animation="fade-in-down" delay={0.2} className="flex flex-col items-center">
                <p className="font-sans text-sm tracking-[0.2em] uppercase mb-4">The Wedding Of</p>
                <h1 className="font-serif text-6xl md:text-7xl font-bold">{coupleNames}</h1>
              </AnimateOnScroll>
  
              <div className="absolute bottom-24 flex flex-col items-center">
                <AnimateOnScroll animation="fade-in-up" delay={0.6}>
                    <p className="font-sans text-lg mb-2">Dear,</p>
                    <p className="font-serif text-2xl font-bold mb-6">{guestName}</p>
                    <Button onClick={onOpen} size="lg" className="rounded-full px-10 py-7 text-lg shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                        <BookOpen className="mr-3 h-6 w-6" />
                        Open Invitation
                    </Button>
                </AnimateOnScroll>
              </div>
          </div>
      </div>
    )
};

const HeroSection = () => (
  <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center p-4 text-primary-foreground">
    <div className="absolute inset-0">
      <Image
        src="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Resepsi-1-1.jpg"
        alt="The Wedding of Putri & Putra"
        data-ai-hint="wedding couple elegant"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </div>
    
    <div className="relative z-10 flex flex-col items-center w-full animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <p className="font-sans tracking-[0.2em] text-sm uppercase">The Wedding Of</p>
      <h1 className="font-serif text-7xl md:text-8xl mt-4 mb-8 text-shadow-lg">{coupleNames}</h1>
      <div className="w-24 h-px bg-primary my-4"></div>
      <p className="font-sans text-lg mt-4">20 . 09 . 2025</p>
      <div className="mt-8">
        <Countdown targetDate={weddingDate} />
      </div>
    </div>
  </section>
);

const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: React.ElementType, title: string, subtitle: string }) => (
    <AnimateOnScroll className="flex flex-col items-center text-center mb-12">
        <div className="mb-4">
            <Icon className="w-12 h-12 text-primary" />
        </div>
        <p className="font-sans tracking-[0.2em] text-sm uppercase text-primary mb-2">{title}</p>
        <h2 className="font-serif text-5xl">{subtitle}</h2>
    </AnimateOnScroll>
)

const CoupleSection = () => (
    <section id="couple" className="relative py-24 px-4 sm:px-6 bg-primary/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Intro and Verse */}
        <div className="relative mb-16">
          <AnimateOnScroll animation="fade-in-up" className="relative text-center text-foreground z-10">
              <div className="absolute -inset-8 md:-inset-4">
                <svg className="w-full h-full" viewBox="0 0 375 280" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0 80C0 35.8172 35.8172 0 80 0H375V280H80C35.8172 280 0 244.183 0 200V80Z" className="fill-background"/>
                </svg>
              </div>
              <div className="relative p-8 md:p-12">
                <h2 className="font-serif text-5xl text-primary mb-6">Kedua Mempelai</h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  Assalamu'alaikum Warahmatullahi Wabarakatuh
                </p>
                <p className="font-sans text-sm text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
                  Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
                </p>
              </div>
          </AnimateOnScroll>
        </div>

        {/* Groom */}
        <div className="relative mb-16 md:mb-0">
          <AnimateOnScroll animation="fade-in-right" className="relative z-10">
              <div className="absolute -inset-12">
                  <svg className="w-full h-full" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M400 0H50C22.3858 0 0 22.3858 0 50V430C0 457.614 22.3858 480 50 480H400V0Z" className="fill-primary/80"/>
                  </svg>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
                  <div className="relative w-full h-[480px] md:h-[560px] order-2 md:order-1">
                      <div className="absolute inset-0 bg-background rounded-3xl -rotate-3 transition-transform group-hover:rotate-0" />
                      <Image
                          src="https://the.invisimple.id/wp-content/uploads/elementor/thumbs/PRIA-r1qxu50pofy26yljvdfud7qei6f9whhy1kfb005u2w.jpg"
                          alt="Putra Andika Pratama"
                          layout="fill"
                          objectFit="contain"
                          className="drop-shadow-2xl rounded-3xl p-4 rotate-3 transition-transform group-hover:rotate-0"
                      />
                  </div>
                  <div className="md:col-span-1 text-center md:text-left text-primary-foreground order-1 md:order-2">
                      <h3 className="font-serif text-4xl mb-2">Putra Andika Pratama</h3>
                      <p className="font-sans text-sm opacity-80 mb-1">Putra Pertama dari</p>
                      <p className="font-sans font-semibold mb-4">Bapak Deni Bastian dan Ibu Aisha Dania</p>
                      <Button asChild variant="outline" className="rounded-full bg-transparent border-primary-foreground/50 hover:bg-primary-foreground hover:text-primary transition-all duration-300 group">
                          <a href="https://www.instagram.com/user_ig_pria" target="_blank" rel="noopener noreferrer">
                              <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                              @user_ig_pria
                          </a>
                      </Button>
                  </div>
              </div>
          </AnimateOnScroll>
        </div>

        {/* Bride */}
        <div className="relative md:-mt-24">
          <AnimateOnScroll animation="fade-in-left" className="relative z-0">
               <div className="absolute -inset-12">
                  <svg className="w-full h-full" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                     <path d="M0 480H350C377.614 480 400 457.614 400 430V50C400 22.3858 377.614 0 350 0H0V480Z" className="fill-secondary/30"/>
                  </svg>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 md:pt-32">
                  <div className="md:col-span-1 text-center md:text-right text-foreground order-2">
                      <h3 className="font-serif text-4xl text-primary mb-2">Putri Cantika Sari</h3>
                      <p className="font-sans text-sm text-muted-foreground mb-1">Putri Pertama dari</p>
                      <p className="font-sans font-semibold mb-4">Bapak Abdul Rozak dan Ibu Adella Marni</p>
                      <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                          <a href="https://www.instagram.com/user_ig_wanita" target="_blank" rel="noopener noreferrer">
                              <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                              @user_ig_wanita
                          </a>
                      </Button>
                  </div>
                   <div className="relative w-full h-[480px] md:h-[560px] order-1">
                      <div className="absolute inset-0 bg-background rounded-3xl rotate-3 transition-transform group-hover:rotate-0" />
                      <Image
                          src="https://the.invisimple.id/wp-content/uploads/elementor/thumbs/WANITA-r1qxu50pofy26yljvdfud7qei6f9whhy1kfb005u2w.jpg"
                          alt="Putri Cantika Sari"
                          layout="fill"
                          objectFit="contain"
                          className="drop-shadow-2xl rounded-3xl p-4 -rotate-3 transition-transform group-hover:rotate-0"
                      />
                  </div>
              </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
);


const EventCard = ({
    title,
    date,
    time,
    location,
    mapLink,
    imageUrl,
    imageHint,
    align = 'left'
}: {
    title: string;
    date: string[];
    time: string;
    location: string[];
    mapLink: string;
    imageUrl: string;
    imageHint: string;
    align?: 'left' | 'right';
}) => {
    return (
        <AnimateOnScroll className="w-full max-w-md mx-auto" animation="fade-in-up">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
                <div className="relative h-64 w-full" style={{ clipPath: 'ellipse(100% 55% at 50% 45%)' }}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        data-ai-hint={imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex">
                    {align === 'left' && (
                         <div className="bg-accent text-accent-foreground p-4 flex items-center justify-center">
                            <h3 className="font-serif text-2xl" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{title}</h3>
                        </div>
                    )}
                    <div className="p-6 flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-5xl font-serif text-primary">{date[0]}</p>
                            <div className="font-sans text-muted-foreground">
                                <p>{date[1]}</p>
                                <p>{date[2]}</p>
                            </div>
                        </div>
                        <Separator className="my-4 bg-border/50" />
                         <div className="flex items-center gap-2 text-muted-foreground mb-4 font-sans">
                            <Clock className="w-4 h-4 text-primary"/>
                            <span>{time}</span>
                        </div>
                        <p className="font-sans text-sm uppercase text-primary/80 tracking-widest mb-2">Lokasi Acara</p>
                        {location.map((line, i) => (
                           <p key={i} className="font-sans text-sm text-foreground">{line}</p>
                        ))}
                         <Button asChild variant="outline" className="mt-6 w-full font-sans border-primary/30 hover:bg-primary hover:text-primary-foreground">
                            <a href={mapLink} target="_blank" rel="noopener noreferrer">
                                <MapPin className="mr-2 h-4 w-4"/>
                                Google Maps
                            </a>
                        </Button>
                    </div>
                     {align === 'right' && (
                         <div className="bg-accent text-accent-foreground p-4 flex items-center justify-center">
                            <h3 className="font-serif text-2xl" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{title}</h3>
                        </div>
                    )}
                </div>
            </div>
        </AnimateOnScroll>
    );
};


const EventsSection = () => (
    <section id="events" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
             <Image
                src="https://the.invisimple.id/wp-content/uploads/2024/12/eks-12-bg-01.jpg"
                alt="Marble background"
                data-ai-hint="dark marble"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center mb-16">
            <h2 className="font-serif text-6xl text-primary-foreground text-shadow">
                Wedding
            </h2>
            <p className="font-sans text-2xl text-primary-foreground/80 tracking-[0.4em] uppercase">
                Event
            </p>
        </div>
    
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
            <EventCard
                title="Akad Nikah"
                date={["20", "September", "2025"]}
                time="14:00 - 16:00"
                location={["The Evergreen Garden", "123 Blossom Lane, Meadowville"]}
                mapLink="https://www.google.com/maps"
                imageUrl="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Resepsi-1-1.jpg"
                imageHint="wedding ceremony"
                align="left"
            />
             <EventCard
                title="Resepsi"
                date={["20", "September", "2025"]}
                time="18:00 - 21:00"
                location={["The Grand Ballroom", "123 Blossom Lane, Meadowville"]}
                mapLink="https://www.google.com/maps"
                imageUrl="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Resepsi-1.jpg"
                imageHint="wedding reception"
                align="right"
            />
        </div>
  </section>
);


const GallerySection = () => (
  <section id="gallery" className="py-24 px-6">
    <SectionTitle icon={Camera} title="Our Moments" subtitle="A Glimpse of Our Journey" />
    <AnimateOnScroll animation="fade-in-up">
      <Carousel
          opts={{
          align: "start",
          loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
      >
          <CarouselContent className="-ml-4">
          {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden group shadow-lg border-0 rounded-lg">
                  <CardContent className="p-0 aspect-[3/4]">
                  <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.hint}
                      width={400}
                      height={600}
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
  </section>
);


const GuestBookSection = () => (
    <section id="guestbook" className="py-24 px-6 bg-secondary/20">
      <SectionTitle icon={Mail} title="Wishes" subtitle="Leave Your Wishes" />
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
             <GuestBook />
        </AnimateOnScroll>
      </div>
    </section>
  );

const Footer = () => (
  <footer className="py-16 text-center bg-background rounded-b-3xl">
    <div className="container mx-auto px-4 text-muted-foreground text-sm">
        <AnimateOnScroll>
            <p className="font-serif text-4xl text-primary mb-4">{coupleNames}</p>
            <p className="font-sans">&copy; {new Date().getFullYear()}. Made with love, for our loved ones.</p>
        </AnimateOnScroll>
    </div>
  </footer>
);

const BottomNav = () => {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const sections = navItems.map(item => document.querySelector(item.href));
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveNav(`#${entry.target.id}`);
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px', threshold: 0.2 });

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-background/80 backdrop-blur-md shadow-2xl rounded-full px-4 py-2">
                <ul className="flex items-center justify-center gap-x-2">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a 
                                href={item.href}
                                onClick={() => setActiveNav(item.href)}
                                className={cn(
                                    "flex flex-col items-center justify-center text-center w-14 h-14 rounded-full transition-all duration-300 ease-in-out",
                                    activeNav === item.href 
                                        ? "bg-primary text-primary-foreground scale-110" 
                                        : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                                )}
                            >
                                <item.icon className="w-5 h-5 mb-0.5" />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

    
