
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
    <section id="couple" className="relative py-24 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="fade-in-up" className="relative bg-secondary/30 rounded-3xl p-8 md:p-12 text-center text-foreground z-10">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-background p-2 rounded-full shadow-lg">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center">
                        <p className="font-serif text-2xl">P&amp;P</p>
                    </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto pt-8">
                    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
                </p>
                <p className="font-serif text-lg mt-4 font-semibold">Q.S Ar-Rum : 21</p>
            </AnimateOnScroll>
            
            <div className="relative mt-16 text-center">
                <AnimateOnScroll animation="fade-in-up" delay={0.2}>
                    <h2 className="font-serif text-5xl text-primary mb-2">Kedua Mempelai</h2>
                    <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                        Assalamu'alaikum Warahmatullahi Wabarakatuh
                    </p>
                    <p className="font-sans text-sm text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
                        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
                    </p>
                </AnimateOnScroll>
            </div>

            <div className="relative mt-20 space-y-20">
                {/* Groom */}
                <AnimateOnScroll animation="fade-in-right" className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="relative w-full h-[450px] order-2 md:order-1">
                        <div className="absolute inset-0">
                             <svg className="w-full h-full" viewBox="0 0 350 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M349.5 225C349.5 349.264 271.264 450 175 450C78.736 450 0.5 349.264 0.5 225C0.5 100.736 78.736 0 175 0C271.264 0 349.5 100.736 349.5 225Z" className="fill-secondary"/>
                            </svg>
                        </div>
                        <div className="absolute inset-0 p-4 transform -translate-y-4 -translate-x-4">
                            <Image
                                src="https://the.invisimple.id/wp-content/uploads/elementor/thumbs/PRIA-r1qxu50pofy26yljvdfud7qei6f9whhy1kfb005u2w.jpg"
                                alt="Putra Andika Pratama"
                                layout="fill"
                                objectFit="contain"
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="text-center md:text-left order-1 md:order-2">
                        <h3 className="font-serif text-4xl text-primary mb-2">Putra Andika Pratama</h3>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Putra Pertama dari</p>
                        <p className="font-sans font-semibold text-foreground mb-4">Bapak Deni Bastian dan Ibu Aisha Dania</p>
                        <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                            <a href="https://www.instagram.com/user_ig_pria" target="_blank" rel="noopener noreferrer">
                                <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                @user_ig_pria
                            </a>
                        </Button>
                    </div>
                </AnimateOnScroll>

                {/* Bride */}
                <AnimateOnScroll animation="fade-in-left" className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                     <div className="text-center md:text-right order-1 md:order-1">
                        <h3 className="font-serif text-4xl text-primary mb-2">Putri Cantika Sari</h3>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Putri Pertama dari</p>
                        <p className="font-sans font-semibold text-foreground mb-4">Bapak Abdul Rozak dan Ibu Adella Marni</p>
                        <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                            <a href="https://www.instagram.com/user_ig_wanita" target="_blank" rel="noopener noreferrer">
                                <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                @user_ig_wanita
                            </a>
                        </Button>
                    </div>
                    <div className="relative w-full h-[450px] order-2 md:order-2">
                       <div className="absolute inset-0">
                           <svg className="w-full h-full" viewBox="0 0 350 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 225C0.5 100.736 78.736 0 175 0C271.264 0 349.5 100.736 349.5 225C349.5 349.264 271.264 450 175 450C78.736 450 0.5 349.264 0.5 225Z" className="fill-primary/80"/>
                            </svg>
                       </div>
                       <div className="absolute inset-0 p-4 transform -translate-y-4 translate-x-4">
                            <Image
                                src="https://the.invisimple.id/wp-content/uploads/elementor/thumbs/WANITA-r1qxu50pofy26yljvdfud7qei6f9whhy1kfb005u2w.jpg"
                                alt="Putri Cantika Sari"
                                layout="fill"
                                objectFit="contain"
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    </section>
);


const EventsSection = () => (
  <section id="events" className="py-24 px-6 bg-secondary/20">
    <SectionTitle icon={GlassWater} title="Wedding Events" subtitle="Save The Date" />
    
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <AnimateOnScroll animation="fade-in-up">
          <Card className="shadow-xl bg-background/80 text-foreground border-primary/20 overflow-hidden text-center backdrop-blur-sm group hover:border-primary transition-all duration-300">
              <CardHeader className="bg-primary/10">
                  <CardTitle className="font-serif text-4xl text-primary group-hover:scale-105 transition-transform duration-300">The Ceremony</CardTitle>
                  <CardDescription className="font-sans">Saturday, 20 September 2025</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4 font-sans">
                      <Clock className="w-5 h-5 text-primary"/>
                      <span>14:00 - 16:00</span>
                  </div>
                  <div className="flex items-start justify-center gap-2 text-muted-foreground font-sans">
                      <MapPin className="w-5 h-5 text-primary mt-1"/>
                      <span>The Evergreen Garden, 123 Blossom Lane, Meadowville</span>
                  </div>
                  <Button asChild variant="outline" className="mt-6 w-full font-sans border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                  </Button>
              </CardContent>
          </Card>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up" delay={0.2}>
           <Card className="shadow-xl bg-background/80 text-foreground border-primary/20 overflow-hidden text-center backdrop-blur-sm group hover:border-primary transition-all duration-300">
              <CardHeader className="bg-primary/10">
                  <CardTitle className="font-serif text-4xl text-primary group-hover:scale-105 transition-transform duration-300">The Reception</CardTitle>
                  <CardDescription className="font-sans">Saturday, 20 September 2025</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4 font-sans">
                      <Clock className="w-5 h-5 text-primary"/>
                      <span>18:00 - 21:00</span>
                  </div>
                  <div className="flex items-start justify-center gap-2 text-muted-foreground font-sans">
                      <MapPin className="w-5 h-5 text-primary mt-1"/>
                      <span>The Grand Ballroom, 123 Blossom Lane, Meadowville</span>
                  </div>
                   <Button asChild variant="outline" className="mt-6 w-full font-sans border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                  </Button>
              </CardContent>
          </Card>
      </AnimateOnScroll>
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


    
