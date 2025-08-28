

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
  { src: "https://the.invisimple.id/wp-content/uploads/jet-form-builder/3e3c025039d81339d5f720f3d0dfaef0/2024/11/7.jpeg", alt: "Couple walking on a beach", hint: "couple beach" },
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
        <OpeningCeremony isOpen={isOpen} onOpen={handleOpenInvitation} />
        
        <div className={cn("w-full max-w-3xl mx-auto transition-opacity duration-1000 ease-in-out", isOpen ? "opacity-100" : "opacity-0 invisible")}>
          <main className="flex-1 overflow-x-hidden">
            <HeroSection />
            <div className="bg-background relative z-10 -mt-24 rounded-t-3xl shadow-2xl">
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
  
          <div className="relative z-10 flex flex-col items-center justify-end h-full w-full text-center p-8 text-foreground">
              <div className="flex flex-col items-center mb-8 animate-fade-in-up" style={{ animationDuration: '1.2s' }}>
                  <p className="font-sans text-sm tracking-[0.2em] uppercase mb-2 text-shadow">The Wedding Of</p>
                  <h1 className="font-serif text-5xl md:text-6xl font-bold text-shadow-lg leading-tight">Andika &<br/>Putri</h1>
                  <div className="w-full text-center mt-8">
                      <p className="font-sans text-lg mb-1">Dear</p>
                      <p className="font-serif text-xl font-bold mb-2">{guestName}</p>
                      <p className="text-xs text-foreground/80">*Mohon maaf jika ada kesalahan dalam penulisan nama / gelar.</p>
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
    <section id="couple" className="relative py-24 px-4 sm:px-6 bg-primary/5 overflow-hidden">
        <AnimateOnScroll animation="fade-in-up" className="text-center mb-16 px-6">
            <div className="relative inline-block">
                <svg viewBox="0 0 400 150" className="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="cool-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
                            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 V100 Q350,150 300,100 T200,100 T100,100 T0,100 Z"
                        fill="url(#cool-gradient)"
                    />
                    <path
                        d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 V100 Q350,150 300,100 T200,100 T100,100 T0,100 Z"
                        fill="transparent"
                        stroke="hsl(var(--border))"
                        strokeWidth="1"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <h2 className="font-serif text-3xl text-primary mb-2">Kedua Mempelai</h2>
                    <p className="text-sm text-muted-foreground text-center">
                        Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
                    </p>
                </div>
            </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
            <AnimateOnScroll animation="fade-in-right" className="w-full text-center md:text-right">
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="font-serif text-4xl text-primary mb-2">Putri Cantika Sari</h3>
                    <p className="font-sans text-sm text-muted-foreground mb-1">Putri Pertama dari</p>
                    <p className="font-sans font-semibold mb-4">Bapak Abdul Rozak dan Ibu Adella Marni</p>
                    <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                        <a href="https://www.instagram.com/user_ig_wanita" target="_blank" rel="noopener noreferrer">
                            <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            @user_ig_wanita
                        </a>
                    </Button>
                    <div className="relative w-full h-[400px] mt-8 flex items-center justify-center md:justify-end">
                        <div className="relative w-full max-w-[300px] aspect-[3/4] bg-secondary/30 rounded-3xl rotate-3 transition-transform duration-500 shadow-2xl hover:rotate-1 hover:scale-105">
                            <Image
                                src="https://the.invisimple.id/wp-content/uploads/elementor/thumbs/WANITA-r1qxu50pofy26yljvdfud7qei6f9whhy1kfb005u2w.jpg"
                                alt="Putri Cantika Sari"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-3xl -rotate-6 transition-transform duration-500 group-hover:rotate-0"
                            />
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-left" className="w-full text-center md:text-left">
                 <div className="flex flex-col items-center md:items-start">
                     <h3 className="font-serif text-4xl text-primary mb-2">Putra Andika Pratama</h3>
                    <p className="font-sans text-sm text-muted-foreground mb-1">Putra Pertama dari</p>
                    <p className="font-sans font-semibold mb-4">Bapak Deni Bastian dan Ibu Aisha Dania</p>
                    <Button asChild variant="outline" className="rounded-full bg-transparent border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                        <a href="https://www.instagram.com/user_ig_pria" target="_blank" rel="noopener noreferrer">
                            <Instagram className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            @user_ig_pria
                        </a>
                    </Button>
                    <div className="relative w-full h-[400px] mt-8 flex items-center justify-center md:justify-start">
                        <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-3xl -rotate-3 transition-transform duration-500 shadow-2xl hover:rotate-1 hover:scale-105">
                            <Image
                                src="https://the.invisimple.id/wp-content/uploads/elementor/thumbs/PRIA-r1qxu50pofy26yljvdfud7qei6f9whhy1kfb005u2w.jpg"
                                alt="Putra Andika Pratama"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-3xl rotate-6 transition-transform duration-500 group-hover:rotate-0"
                            />
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
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

    useEffect(() => {
        const receptionStartDate = new Date("2025-09-20T18:00:00");
        const receptionEndDate = new Date("2025-09-20T21:00:00");

        const formatDateForGoogleCalendar = (date: Date) => {
            return date.toISOString().replace(/-|:|\.\d{3}/g, '');
        };

        const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception%3A+Putri+%26+Putra&dates=${formatDateForGoogleCalendar(receptionStartDate)}/${formatDateForGoogleCalendar(receptionEndDate)}&details=Join+us+to+celebrate+the+wedding+of+Putri+and+Putra!&location=The+Grand+Ballroom%2C+123+Blossom+Lane%2C+Meadowville`;
        setGoogleCalendarLink(link);
    }, []);

    return (
        <section id="events" className="relative py-24 px-6 overflow-hidden rounded-bl-[50]">
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
                <h2 className="text-white font-serif text-6xl text-primary-foreground text-shadow">
                    Wedding
                </h2>
                <p className="text-white font-sans text-2xl text-primary-foreground tracking-[0.4em] uppercase">
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
      </section>
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
    <section id="gallery" className="py-24 px-6">
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
    </section>
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
        <section id="gift" className="relative py-24 px-6 overflow-hidden text-center">
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
                <AnimateOnScroll>
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
        </section>
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
    <section id="guestbook" className="py-24 px-6 bg-secondary/20 rounded-bl-[50]">
      <SectionTitle subtitle="Leave Your Wishes" />
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

    

    




    

    

    






