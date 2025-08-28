
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Gift, Heart, Clock, BookOpen, Music, Play, Pause, GlassWater } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import RsvpForm from "@/components/rsvp-form";
import GuestbookForm from "@/components/guestbook-form";
import Header from "@/components/header";
import { Logo } from "@/components/logo";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Calendar } from "@/components/ui/calendar";
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
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.documentElement.style.overflow = 'auto';
    if(audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(console.error);
    }
  };

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      <OpeningCeremony isOpen={isOpen} onOpen={handleOpenInvitation} />
      
      <div className={cn("transition-opacity duration-1000 ease-in-out", isOpen ? "opacity-100" : "opacity-0 invisible")}>
        <Header />
        <main className="flex-1 overflow-x-hidden">
          <HeroSection />
          <QuoteSection />
          <CoupleSection />
          <EventsSection />
          <VenueSection />
          <GallerySection />
          <GiftRegistrySection />
          <RsvpSection />
          <GuestBookSection />
        </main>
        <Footer />
        <MusicPlayer audioRef={audioRef} />
      </div>
    </div>
  );
}

const OpeningCeremony = ({ isOpen, onOpen }: { isOpen: boolean, onOpen: () => void }) => {
  return (
    <div className={cn(
      "fixed inset-0 z-[100] bg-background transition-all duration-1000 ease-in-out",
      isOpen ? "opacity-0 -translate-y-full" : "opacity-100"
    )}>
      <div className="relative h-full w-full flex items-center justify-center text-center">
        <Image
          src="https://media.katsudoto.id/media/public/70/56834/thumbnail/thumb-lg-676408-2000-2000-1755052004-59e8d8c19ddf135fcda341b9.png"
          alt="Elegant couple"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 text-primary p-4">
          <div className="flex-grow flex flex-col items-center justify-center text-center -mt-20">
              <p className="font-body text-base md:text-lg tracking-widest uppercase mb-4">The Wedding Of</p>
              <h1 className="font-headline text-5xl md:text-6xl font-bold">{coupleNames}</h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-body text-sm text-muted-foreground">Kepada Yth.</p>
            <p className="font-body text-base font-semibold text-foreground mb-2">{guestName}</p>
            <p className="font-body text-xs text-muted-foreground/80 mb-6">*Mohon maaf jika ada kesalahan dalam penulisan nama / gelar.</p>
            <Button onClick={onOpen} size="lg" className="rounded-full px-8 py-6 text-base shadow-lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Buka Undangan
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/4">
            <Image src="https://our-wedding.link/uploads/decoration/2d3b2043224f808726cf34a36279f046.png" layout="fill" objectFit="contain" alt="Floral ornament" className="opacity-70" />
        </div>
      </div>
    </div>
  )
};

const HeroSection = () => (
  <section id="home" className="relative h-screen flex items-center justify-center text-center text-primary-foreground">
    <Image
      src="https://media.katsudoto.id/media/public/70/56834/thumbnail/thumb-lg-676408-2000-2000-1755052004-59e8d8c19ddf135fcda341b9.png"
      alt="A beautiful fairytale castle"
      data-ai-hint="fairytale castle"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
    <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-52.png" alt="ornament" layout="fill" objectFit="contain" className="z-10 opacity-80" />
    <div className="relative z-20 p-4 flex flex-col items-center">
        <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.8}>
            <p className="font-body text-lg md:text-xl mb-4 tracking-widest uppercase">The Wedding Of</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={0.4} duration={0.8}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-shadow-lg">
                {coupleNames}
            </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in" delay={0.8} duration={1}>
            <Separator className="my-8 bg-primary-foreground/50 w-1/3 mx-auto" />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={1} duration={0.8}>
            <Countdown targetDate={weddingDate} />
        </AnimateOnScroll>
    </div>
     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
  </section>
);

const QuoteSection = () => (
    <section id="quote" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-02.png" alt="ornament" width={300} height={300} className="absolute -top-10 -left-24 opacity-50 -rotate-45" />
        <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-03.png" alt="ornament" width={300} height={300} className="absolute -top-10 -right-24 opacity-50 rotate-45" />
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <AnimateOnScroll animation="fade-in-up">
                <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-01.png" alt="ornament" width={150} height={150} className="mx-auto mb-8 opacity-70" />
                <p className="font-headline text-3xl md:text-4xl text-primary leading-relaxed">
                "A successful marriage requires falling in love many times, always with the same person."
                </p>
                <p className="font-body text-lg text-muted-foreground mt-6">- Mignon McLaughlin -</p>
            </AnimateOnScroll>
        </div>
        <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-08.png" alt="ornament" width={200} height={200} className="absolute -bottom-24 left-1/2 -translate-x-1/2 opacity-40" />
    </section>
)

const CoupleSection = () => (
    <section id="couple" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-repeat bg-center opacity-10" style={{backgroundImage: "url('https://our-wedding.link/uploads/decoration/87df8b13d6a27e74d115e51083935293.png')"}} />
        <div className="container mx-auto px-4">
            <AnimateOnScroll animation="fade-in-down" className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-headline text-center text-primary mb-4">The Happy Couple</h2>
                 <p className="text-lg text-muted-foreground">With joyful hearts, we invite you to share in our celebration of love.</p>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <AnimateOnScroll animation="fade-in-right">
                    <div className="text-center">
                        <div className="relative inline-block">
                            <div className="relative w-[300px] h-[400px] mx-auto">
                                <Image src="https://picsum.photos/seed/groom/300/400" alt="Leon" layout="fill" className="object-cover rounded-[150px_150px_0_0] z-10" />
                                <Image src="https://our-wedding.link/uploads/decoration/f265b7468169991476f578711126786a.png" layout="fill" objectFit="contain" alt="Groom Frame" className="z-20" />
                            </div>
                        </div>
                        <div className="mt-6">
                             <div className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-6 h-6 text-primary"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56 56 0 0 0-56 56v96a56 56 0 0 0 56 56h96a56 56 0 0 0 56-56V80a56 56 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
                                <p className="font-body text-lg text-primary">Putra</p>
                             </div>
                             <p className="text-muted-foreground mt-4 text-sm">The Son of Mr Jhonny Alistair & Mrs. Greny Henn</p>
                             <h3 className="font-headline text-4xl text-primary mt-2">Putra Alistair</h3>
                        </div>
                    </div>
                </AnimateOnScroll>
                 <AnimateOnScroll animation="fade-in-left">
                    <div className="text-center">
                        <div className="relative inline-block">
                            <div className="relative w-[300px] h-[400px] mx-auto">
                                <Image src="https://picsum.photos/seed/bride/300/400" alt="Celesta" layout="fill" className="object-cover rounded-[150px_150px_0_0] z-10" />
                                <Image src="https://our-wedding.link/uploads/decoration/f265b7468169991476f578711126786a.png" layout="fill" objectFit="contain" alt="Bride Frame" className="z-20" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-6 h-6 text-primary"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56 56 0 0 0-56 56v96a56 56 0 0 0 56 56h96a56 56 0 0 0 56-56V80a56 56 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
                                <p className="font-body text-lg text-primary">Putri</p>
                             </div>
                             <p className="text-muted-foreground mt-4 text-sm">The Daughter of Mr. Henry Deon & Mrs. Kelly Penelope</p>
                             <h3 className="font-headline text-4xl text-primary mt-2">Putri Aurelia</h3>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    </section>
)

const EventsSection = () => (
  <section id="events" className="py-20 md:py-32 bg-background relative overflow-hidden">
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-19.png" alt="ornament" width={150} height={150} className="absolute top-10 right-10 opacity-30" />
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-18.png" alt="ornament" width={150} height={150} className="absolute bottom-10 left-10 opacity-30" />
    <div className="container mx-auto px-4">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline text-center text-primary mb-16">Schedule of Events</h2>
      </AnimateOnScroll>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
        <AnimateOnScroll animation='fade-in-right' className="w-full max-w-sm">
            <Card className="shadow-xl overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-0">
                    <Calendar mode="single" selected={weddingDate} disabled className="p-4 w-full" classNames={{
                        head_cell: "text-primary/80",
                        day_selected: "bg-primary text-primary-foreground",
                        day_today: "text-primary font-bold ring-1 ring-primary"
                    }}/>
                </CardContent>
            </Card>
        </AnimateOnScroll>
        <div className="space-y-10 max-w-md">
            <AnimateOnScroll animation='fade-in-left' delay={0.2}>
                <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rings"><path d="M7 15a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2Z"></path><path d="M17 15a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2Z"></path><path d="M17 13V9a5 5 0 0 0-5-5H7"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-3xl font-headline text-primary">The Ceremony</h3>
                        <p className="text-lg text-muted-foreground mt-1">2:00 PM</p>
                        <p className="text-foreground/80 mt-3">Join us as we exchange vows and begin our new chapter together in a beautiful garden setting.</p>
                    </div>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation='fade-in-left' delay={0.4}>
                <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full shadow-inner">
                         <GlassWater size={28} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-headline text-primary">The Reception</h3>
                        <p className="text-lg text-muted-foreground mt-1">4:00 PM onwards</p>
                        <p className="text-foreground/80 mt-3">Let's celebrate with dinner, drinks, and dancing under the stars!</p>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const VenueSection = () => (
  <section id="venue" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-34.png" alt="ornament" width={200} height={200} className="absolute -top-10 -left-16 opacity-50"/>
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-34.png" alt="ornament" width={200} height={200} className="absolute -bottom-10 -right-16 opacity-50 -scale-x-100"/>
    <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl font-headline mb-4 text-primary">The Venue</h2>
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
  <section id="gallery" className="py-20 md:py-32 bg-background relative overflow-hidden">
    <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-40.png" alt="ornament" width={300} height={300} className="absolute -top-24 -left-20 opacity-20" />
    <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-40.png" alt="ornament" width={300} height={300} className="absolute -bottom-24 -right-20 opacity-20 -scale-x-100" />
    <div className="container mx-auto px-4 text-center">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline mb-16 text-primary">Our Moments</h2>
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
  <section id="rsvp" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimateOnScroll animation="zoom-in" className="max-w-2xl mx-auto">
        <Card className="shadow-xl bg-background/80 border-primary/20 backdrop-blur-sm rounded-2xl relative overflow-hidden">
            <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-33.png" alt="ornament" width={250} height={250} className="absolute -top-10 -left-20 opacity-40"/>
            <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-33.png" alt="ornament" width={250} height={250} className="absolute -bottom-10 -right-20 opacity-40 scale-x-[-1]"/>
            <CardHeader className="text-center p-8">
                <Mail className="w-16 h-16 mx-auto text-primary" />
                <CardTitle className="font-headline text-5xl mt-6 text-primary">Kindly RSVP</CardTitle>
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
  <section id="gifts" className="py-20 md:py-32 bg-background relative overflow-hidden">
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-45.png" alt="ornament" width={200} height={200} className="absolute top-0 left-0 opacity-50"/>
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-45.png" alt="ornament" width={200} height={200} className="absolute bottom-0 right-0 opacity-50 -scale-x-100"/>
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <AnimateOnScroll animation="fade-in-down">
        <Gift className="w-16 h-16 mx-auto text-primary mb-6" />
        <h2 className="text-4xl md:text-5xl font-headline mb-6 text-primary">Gift Registry</h2>
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
    <section id="guestbook" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: "url('https://our-wedding.link/uploads/decoration/87df8b13d6a27e74d115e51083935293.png')",
          backgroundSize: '300px',
        }}
      />
      <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-09.png" alt="ornament" width={300} height={300} className="absolute -top-10 -right-24 opacity-50 -scale-x-100" />
      <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-07.png" alt="ornament" width={300} height={300} className="absolute -bottom-10 -left-24 opacity-50" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimateOnScroll animation="fade-in-down">
          <h2 className="text-4xl md:text-5xl font-headline text-center text-primary mb-16">Leave Your Wishes</h2>
        </AnimateOnScroll>
  
        <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
          <div className="space-y-4 h-[400px] overflow-y-auto pr-4">
            {guestbookEntries.map((entry, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                 <div className={`flex items-end gap-3 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {index % 2 === 0 && (
                      <Avatar className="w-8 h-8 border-2 border-primary/30 shadow-md">
                        <AvatarImage src={entry.avatar} alt={entry.name} />
                        <AvatarFallback className="bg-primary/20 text-primary text-sm">{entry.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`rounded-2xl p-3 max-w-xs lg:max-w-md ${index % 2 === 0 ? 'bg-white dark:bg-zinc-700 rounded-bl-none' : 'bg-[#dcf8c6] dark:bg-green-900/80 rounded-br-none'}`}>
                      <p className="font-bold text-sm text-primary">{entry.name}</p>
                      <p className="text-gray-800 dark:text-gray-200 mt-1 text-base">{entry.message}</p>
                    </div>
                    {index % 2 !== 0 && (
                      <Avatar className="w-8 h-8 border-2 border-primary/30 shadow-md">
                        <AvatarImage src={entry.avatar} alt={entry.name} />
                        <AvatarFallback className="bg-primary/20 text-primary text-sm">{entry.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
              </AnimateOnScroll>
            ))}
          </div>
          <Separator className="my-6 bg-border" />
          <div className="mt-4">
            <GuestbookForm />
          </div>
        </div>
      </div>
    </section>
  );

const Footer = () => (
  <footer className="py-10 bg-background border-t relative overflow-hidden">
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-43.png" alt="ornament" width={300} height={300} className="absolute -bottom-24 -left-20 opacity-20"/>
     <Image src="https://leoncelesta.katsudoto.id/media/template/exclusive/charera/original/Orn-43.png" alt="ornament" width={300} height={300} className="absolute -bottom-24 -right-20 opacity-20 -scale-x-100"/>
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
    

    
