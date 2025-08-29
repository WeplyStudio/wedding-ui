

"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Gift, Heart, Clock, CalendarDays, MapPin, Users, Video, BookOpen, Music, Play, Pause, Flower2, HeartHandshake, GlassWater, Camera, Home, User, Calendar, GalleryHorizontal, Instagram, Wallet, Copy } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from "@/lib/utils";
import GuestBook from "@/components/guestbook";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


const weddingDate = new Date("2025-09-20T14:00:00");
const coupleNames = "Putri & Putra";
const guestName = "Bapak/Ibu/Saudara/i"; // This can be dynamic in a real app

const openingImages = [
    "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Bride.jpg",
    "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Groom.jpg",
    "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/4.jpeg",
];

const galleryImages = [
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/4.jpeg", alt: "Couple smiling", hint: "couple smiling" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/5.jpeg", alt: "Couple holding hands", hint: "couple hands" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/6.jpeg", alt: "Couple in nature", hint: "couple nature" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/20_4_11/7.jpeg", alt: "Couple walking on a beach", hint: "couple beach" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/8.jpg", alt: "Couple under a tree", hint: "couple tree" },
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Bride.jpg", alt: "Happy couple", hint: "happy couple" },
];

const navItems = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#couple', icon: Heart, label: 'Couple' },
    { href: '#events', icon: Calendar, label: 'Events' },
    { href: '#gallery', icon: GalleryHorizontal, label: 'Gallery' },
    { href: '#gift', icon: Gift, label: 'Gift'},
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
      <svg width="0" height="0">
        <defs>
          <clipPath id="organic-shape-1" clipPathUnits="objectBoundingBox">
            <path d="M0.432,0.021 C0.803,0.01,0.91,0.206,0.98,0.468 C1.002,0.56,1.006,0.679,0.995,0.768 C0.985,0.857,0.96,0.932,0.912,0.978 C0.84,1.004,0.578,1.01,0.403,0.994 C0.102,0.969,-0.007,0.833,0.001,0.521 C0.003,0.43,0.015,0.283,0.061,0.187 C0.126,0.05,0.21,0.026,0.432,0.021"></path>
          </clipPath>
          <clipPath id="organic-shape-2" clipPathUnits="objectBoundingBox">
            <path d="M0.568,0.979 C0.197,0.99,0.09,0.794,0.02,0.532 C-0.002,0.44,-0.006,0.321,0.005,0.232 C0.015,0.143,0.04,0.068,0.088,0.022 C0.16,-0.004,0.422,-0.01,0.597,0.006 C0.898,0.031,1.007,0.167,0.999,0.479 C0.997,0.57,0.985,0.717,0.939,0.813 C0.874,0.95,0.79,0.974,0.568,0.979"></path>
          </clipPath>
        </defs>
      </svg>

        <OpeningCeremony isOpen={isOpen} onOpen={handleOpenInvitation} />
        
        <div className={cn("w-full max-w-3xl mx-auto transition-opacity duration-1000 ease-in-out", isOpen ? "opacity-100" : "opacity-0 invisible")}>
          <main className="flex-1 overflow-x-hidden">
            <HeroSection />
            <div className="bg-background relative z-10 -mt-24 rounded-t-3xl shadow-2xl">
                <div className="relative">
                    <AnimateOnScroll animation="fade-in-up" className="absolute -top-12 left-1/2 -translate-x-1/2">
                        <Avatar className="w-24 h-24 bg-background shadow-lg ring-4 ring-primary/20">
                            <AvatarFallback className="text-3xl font-serif text-primary bg-transparent">AP</AvatarFallback>
                        </Avatar>
                    </AnimateOnScroll>
                </div>
                <CoupleSection />
                <EventsSection />
                <GallerySection />
                <GiftSection />
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % openingImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [isClient]);

    return (
      <div className={cn(
        "fixed inset-0 z-[100] transition-all duration-1000 ease-in-out flex items-center justify-center",
        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
          {openingImages.map((src, index) => (
            <Image
                key={src}
                src={src}
                alt="The Wedding of Putri & Putra"
                data-ai-hint="wedding couple photo"
                fill
                priority={index === 0}
                className={cn(
                    "object-cover transition-opacity duration-1000 ease-in-out",
                    isClient && index === currentImageIndex ? "opacity-100" : "opacity-0"
                )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
  
          <div className="relative z-10 flex flex-col items-center justify-end h-full w-full text-center p-8 text-primary-foreground">
              <div className="flex flex-col items-center mb-8 animate-fade-in-up" style={{ animationDuration: '1.2s' }}>
                  <p className="font-sans text-sm tracking-[0.2em] uppercase mb-2 text-shadow">The Wedding Of</p>
                  <h1 className="font-serif text-5xl md:text-6xl font-bold text-shadow-lg leading-tight">Andika &<br/>Putri</h1>
                  <div className="w-full text-center mt-8">
                      <p className="font-sans text-lg mb-1">Dear</p>
                      <p className="font-serif text-xl font-bold mb-2">{guestName}</p>
                      <p className="text-xs text-primary-foreground/80">*Mohon maaf jika ada kesalahan dalam penulisan nama / gelar.</p>
                  </div>
              </div>
              
              <Button 
                onClick={onOpen} 
                size="lg" 
                className="w-full max-w-sm rounded-full px-10 py-7 text-lg shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground font-sans animate-fade-in-up"
                style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}
              >
                  <Mail className="mr-3 h-5 w-5" />
                  Buka Undangan
              </Button>
          </div>
      </div>
    )
};

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-end text-center p-4 pb-28 text-white">
            <div className="absolute inset-0">
                 {galleryImages.map((image, index) => (
                    <Image
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        fill
                        className={cn(
                            "object-cover transition-opacity duration-1000 ease-in-out",
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                        priority={index === 0}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center w-full animate-fade-in-up" style={{animationDuration: '1.2s'}}>
                <p className="font-sans tracking-[0.2em] text-sm uppercase">The Wedding Of</p>
                <h1 className="font-serif text-6xl md:text-7xl mt-2 mb-4 text-shadow-lg">{coupleNames}</h1>
                <p className="font-sans text-lg">20 . 09 . 2025</p>
                <div className="mt-8 w-full max-w-md">
                    <Countdown targetDate={weddingDate} />
                </div>
            </div>
        </section>
    );
};

const SectionTitle = ({ subtitle }: { subtitle: string }) => (
    <AnimateOnScroll className="flex flex-col items-center text-center mb-12">
        <h2 className="font-serif text-5xl">{subtitle}</h2>
    </AnimateOnScroll>
)

const CoupleSection = () => (
    <section id="couple" className="relative flex flex-col pt-16">
      <AnimateOnScroll animation="fade-in-up" className="bg-primary/10 py-12 px-6 text-center">
        <p className="max-w-2xl mx-auto text-primary/80 italic mt-8">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </p>
        <p className="mt-4 font-semibold text-primary/90">Q.S Ar-Rum : 21</p>
      </AnimateOnScroll>

      <div className="bg-background pt-16 pb-24 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-20 bg-background rounded-b-full"></div>
          <AnimateOnScroll animation="fade-in-up" delay={0.2} className="text-center mb-16">
              <h2 className="text-4xl font-serif text-primary relative inline-block">
                  Kedua 
                  <span className="font-serif italic font-normal text-muted-foreground/80 absolute -bottom-3 -right-12 text-3xl">Mempelai</span>
              </h2>
              <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
                  <b>Assalamu’alaikum Warahmatullahi Wabarakatuh</b><br/><br/>
                  Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
              </p>
          </AnimateOnScroll>

          <div className="space-y-24">
            <AnimateOnScroll animation="fade-in-right" className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[466px]">
                  <div className="absolute inset-0 bg-secondary/30 rounded-3xl transform -rotate-6"></div>
                  <div className="absolute inset-0 clip-path-organic-1">
                    <Image
                      src="https://our-wedding.link/wp-content/uploads/2024/07/Pria-3.webp"
                      alt="Putra Andika Pratama"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="font-serif text-4xl text-primary mb-2">Putra Andika Pratama</h3>
                  <p className="font-sans font-bold text-muted-foreground mb-1">Putra Pertama dari</p>
                  <p className="font-sans text-sm mb-4">Bapak Deni Bastian dan Ibu Aisha Dania</p>
                  <Button asChild variant="outline" className="rounded-full bg-transparent border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                      <a href="https://www.instagram.com/user_ig_pria" target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                          @user_ig_pria
                      </a>
                  </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-left" className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[466px]">
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-6"></div>
                    <div className="absolute inset-0 clip-path-organic-2">
                        <Image
                            src="https://our-wedding.link/wp-content/uploads/2024/07/Wanita-4.webp"
                            alt="Putri Cantika Sari"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                  <h3 className="font-serif text-4xl text-primary mb-2">Putri Cantika Sari</h3>
                  <p className="font-sans font-bold text-muted-foreground mb-1">Putri Pertama dari</p>
                  <p className="font-sans text-sm mb-4">Bapak Abdul Rozak dan Ibu Adella Marni</p>
                  <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                      <a href="https://www.instagram.com/user_ig_wanita" target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                          @user_ig_wanita
                      </a>
                  </Button>
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
    buttons,
    imageUrl,
    imageHint,
    align = 'left'
}: {
    title: string;
    date: string[];
    time: string;
    location: string[];
    buttons: { text: string; href?: string; icon: React.ElementType; disabled?: boolean }[];
    imageUrl: string;
    imageHint: string;
    align?: 'left' | 'right';
}) => {
    return (
        <AnimateOnScroll className="w-full max-w-md mx-auto" animation="zoom-in" delay={0.2}>
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
                        <div className="mt-6 flex flex-col sm:flex-row gap-2">
                           {buttons.map((button, i) => (
                                <Button key={i} asChild variant="outline" className="w-full font-sans border-primary/30 hover:bg-primary hover:text-primary-foreground" disabled={button.disabled}>
                                    <a href={button.disabled ? undefined : button.href} target="_blank" rel="noopener noreferrer">
                                        <button.icon className="mr-2 h-4 w-4"/>
                                        {button.text}
                                    </a>
                                </Button>
                           ))}
                        </div>
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


const EventsSection = () => {
    const [googleCalendarLink, setGoogleCalendarLink] = useState<string | undefined>(undefined);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const receptionStartDate = new Date("2025-09-20T18:00:00");
            const receptionEndDate = new Date("2025-09-20T21:00:00");

            const formatDateForGoogleCalendar = (date: Date) => {
                if (!(date instanceof Date) || isNaN(date.getTime())) {
                    // Return an empty string or a default value if the date is invalid
                    return '';
                }
                return date.toISOString().replace(/-|:|\.\d{3}/g, '');
            };

            const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception%3A+Putri+%26+Putra&dates=${formatDateForGoogleCalendar(receptionStartDate)}/${formatDateForGoogleCalendar(receptionEndDate)}&details=Join+us+to+celebrate+the+wedding+of+Putri+and+Putra!&location=The+Grand+Ballroom%2C+123+Blossom+Lane%2C+Meadowville`;
            setGoogleCalendarLink(link);
        }
    }, []);

    return (
        <AnimateOnScroll as="section" id="events" className="relative py-24 px-6 overflow-hidden">
             <div className="absolute inset-0">
                {galleryImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        fill
                        className={cn(
                            "object-cover transition-opacity duration-1000",
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                    />
                ))}
                <div className="absolute inset-0 bg-background/80" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center mb-16">
                <h2 className="font-serif text-6xl text-primary-foreground text-shadow">
                    Wedding
                </h2>
                <p className="font-sans text-2xl text-primary-foreground tracking-[0.4em] uppercase">
                    Event
                </p>
                <div className="w-24 h-px bg-primary my-4"></div>
            </div>
        
            <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
                <EventCard
                    title="Akad Nikah"
                    date={["20", "September", "2025"]}
                    time="14:00 - 16:00"
                    location={["The Evergreen Garden", "123 Blossom Lane, Meadowville"]}
                    buttons={[{ text: "Google Maps", icon: MapPin, disabled: true }]}
                    imageUrl="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Resepsi-1-1.jpg"
                    imageHint="wedding ceremony"
                    align="left"
                />
                 <EventCard
                    title="Resepsi"
                    date={["20", "September", "2025"]}
                    time="18:00 - 21:00"
                    location={["The Grand Ballroom", "123 Blossom Lane, Meadowville"]}
                    buttons={[
                        { text: "Google Maps", href: "https://www.google.com/maps", icon: MapPin },
                        { text: "Add to Calendar", href: googleCalendarLink, icon: CalendarDays }
                    ]}
                    imageUrl="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/Resepsi-1.jpg"
                    imageHint="wedding reception"
                    align="right"
                />
            </div>
      </AnimateOnScroll>
    );
};

const PhotoGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {galleryImages.map((image, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1} animation="zoom-in">
                 <div className="overflow-hidden rounded-lg shadow-lg group">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full aspect-square transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </AnimateOnScroll>
        ))}
    </div>
);

const GallerySection = () => (
    <AnimateOnScroll as="section" id="gallery" className="py-24 px-6">
        <SectionTitle subtitle="A Glimpse of Our Journey" />
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
        <div className="max-w-5xl mx-auto">
             <PhotoGrid />
        </div>
    </AnimateOnScroll>
);

const GiftSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimateOnScroll as="section" id="gift" className="relative py-24 px-6 overflow-hidden text-center">
            <div className="absolute inset-0">
                {galleryImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        fill
                        className={cn(
                            "object-cover transition-opacity duration-1000",
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                    />
                ))}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <AnimateOnScroll animation="zoom-in" delay={0.2}>
                    <Card className="w-full max-w-md bg-background/80 border-0 shadow-2xl rounded-2xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="aspect-video">
                                <Image
                                    src="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/4.jpeg"
                                    alt="Wedding Gift"
                                    data-ai-hint="couple gift"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </CardContent>
                        <div className="p-6 text-center">
                            <CardTitle className="font-serif text-4xl text-primary mb-4">Wedding Gift</CardTitle>
                            <CardDescription className="mb-6 text-muted-foreground">
                                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui dibawah ini.
                            </CardDescription>
                            <GiftDrawer />
                        </div>
                    </Card>
                </AnimateOnScroll>
            </div>
        </AnimateOnScroll>
    );
};
  
const GiftDrawer = () => {
    const { toast } = useToast();

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        toast({
        title: "Copied to clipboard!",
        description: `${label} copied: ${text}`,
        });
    };

    const bankAccounts = [
        { bank: "BCA", name: "Putra Andika Pratama", number: "1234567890", logo: "/bca-logo.png" },
        { bank: "BNI", name: "Putri Cantika Sari", number: "0987654321", logo: "/bni-logo.png" },
        { bank: "BRI", name: "Putra & Putri", number: "1122334455", logo: "/bri-logo.png" },
    ]

    return (
        <Sheet>
        <SheetTrigger asChild>
            <Button className="w-full font-sans" size="lg">
                <Wallet className="mr-2 h-5 w-5" />
                Klik di Sini
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="w-full max-w-3xl mx-auto rounded-t-2xl p-0">
             <ScrollArea className="h-auto max-h-[90vh] p-6">
                <SheetHeader className="text-center mb-6">
                <SheetTitle className="font-serif text-3xl">Send a Gift</SheetTitle>
                </SheetHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center space-y-4 p-4 border rounded-lg">
                        <h3 className="font-sans font-semibold text-lg">Scan QRIS</h3>
                        <Image src="https://api.qr-code-generator.com/v1/create?access-token=yvR-0_gS62v4hJd9sFVTN8YwH_I9aG4nBExA0jImFk_s1zSgrJvjS2y4d35I2b-j&qr_code_text=https%3A%2F%2Fwww.google.com&image_format=PNG&image_width=500" alt="QRIS Code" data-ai-hint="qris code" width={200} height={200} className="rounded-md" />
                        <p className="text-sm text-muted-foreground">All e-wallets and banks supported</p>
                    </div>
                    <div className="space-y-4">
                        {bankAccounts.map((account) => (
                            <Card key={account.bank} className="p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Image src={account.logo} alt={`${account.bank} logo`} data-ai-hint={`${account.bank} logo`} width={60} height={20} objectFit="contain" />
                                        <p className="font-semibold mt-2">{account.name}</p>
                                        <p className="text-muted-foreground">{account.number}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(account.number, `${account.bank} Account Number`)}>
                                        <Copy className="h-5 w-5" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </SheetContent>
        </Sheet>
    );
};
  

const GuestBookSection = () => (
    <AnimateOnScroll as="section" id="guestbook" className="py-24 px-6 bg-secondary/20">
      <SectionTitle subtitle="Leave Your Wishes" />
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animation="zoom-in" delay={0.2}>
             <GuestBook />
        </AnimateOnScroll>
      </div>
    </AnimateOnScroll>
  );

const Footer = () => (
  <AnimateOnScroll as="footer" className="relative py-24 px-6 overflow-hidden text-center text-primary-foreground">
      <div className="absolute inset-0">
          <Image
              src="https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/20_4_11/7.jpeg"
              alt="Thank you"
              data-ai-hint="couple beach"
              fill
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center">
          <AnimateOnScroll animation="fade-in-up">
              <h2 className="font-serif text-4xl mb-4">Terima Kasih</h2>
              <p className="max-w-xl mx-auto mb-6 text-sm">
                  Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.
                  <br /><br />
                  Wassalamu’alaikum warahmatullahi wabarakatuh
              </p>
              <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest mb-2">Kami yang berbahagia</p>
                  <p className="font-serif text-4xl">{coupleNames}</p>
              </div>
          </AnimateOnScroll>
      </div>
  </AnimateOnScroll>
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
            <div className="bg-background/80 backdrop-blur-md shadow-2xl rounded-full px-3 py-2">
                <ul className="flex items-center justify-center gap-x-1">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a 
                                href={item.href}
                                onClick={() => setActiveNav(item.href)}
                                className={cn(
                                    "flex flex-col items-center justify-center text-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out",
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
