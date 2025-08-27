import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Gift, Heart, CalendarIcon, Clock, Users, MapPin, ExternalLink, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import RsvpForm from "@/components/rsvp-form";
import GuestbookForm from "@/components/guestbook-form";
import Header from "@/components/header";
import { Logo } from "@/components/logo";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const weddingDate = new Date("2025-09-20T14:00:00");
const coupleNames = "Leon & Celesta";

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
        <QuoteSection />
        <CoupleSection />
        <EventsSection />
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
  <section id="home" className="relative h-screen flex items-center justify-center text-center text-primary-foreground">
    <Image
      src="https://picsum.photos/seed/wedding-hero/1920/1080"
      alt="A beautiful floral arrangement for a wedding"
      data-ai-hint="wedding flowers"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    <div className="relative z-10 p-4 flex flex-col items-center">
        <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.8}>
            <p className="font-body text-lg md:text-xl mb-4 tracking-widest uppercase">The Wedding Of</p>
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

const QuoteSection = () => (
    <section id="quote" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <AnimateOnScroll animation="fade-in-up">
                <p className="font-headline text-3xl md:text-4xl text-primary leading-relaxed">
                "A successful marriage requires falling in love many times, always with the same person."
                </p>
                <p className="font-body text-lg text-muted-foreground mt-6">- Mignon McLaughlin -</p>
            </AnimateOnScroll>
        </div>
    </section>
)

const CoupleSection = () => (
    <section id="couple" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
            <AnimateOnScroll animation="fade-in-down" className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-headline text-center text-primary mb-4">The Happy Couple</h2>
                 <p className="text-lg text-muted-foreground">With joyful hearts, we invite you to share in our celebration of love.</p>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <AnimateOnScroll animation="fade-in-right">
                    <Card className="text-center p-8 border-0 shadow-lg bg-background/80">
                        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-accent">
                            <AvatarImage src="https://picsum.photos/seed/groom/200" alt="Leon" />
                            <AvatarFallback>L</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-4xl text-primary">Leon Alistair</CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">The Son of Mr Jhonny Alistair & Mrs. Greny Henn</CardDescription>
                    </Card>
                </AnimateOnScroll>
                 <AnimateOnScroll animation="fade-in-left">
                    <Card className="text-center p-8 border-0 shadow-lg bg-background/80">
                        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-accent">
                            <AvatarImage src="https://picsum.photos/seed/bride/200" alt="Celesta" />
                            <AvatarFallback>C</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-4xl text-primary">Celesta Aurelia</CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">The Daughter of Mr. Henry Deon & Mrs. Kelly Penelope</CardDescription>
                    </Card>
                </AnimateOnScroll>
            </div>
        </div>
    </section>
)

const EventsSection = () => (
  <section id="events" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline text-center text-primary mb-16">Schedule of Events</h2>
      </AnimateOnScroll>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                 <Card className="p-8 text-center shadow-lg border-0 bg-secondary">
                    <CardTitle className="font-headline text-4xl text-primary mb-4">Holy Matrimony</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground"><Clock className="w-4 h-4"/> 09:00 - 10:00</div>
                    <Separator className="my-6" />
                    <p className="text-foreground font-semibold">Hotel Borobudur Jakarta</p>
                    <p className="text-muted-foreground text-sm mt-1">Jl. Lap. Banteng Selatan No.1, Ps. Baru, Sawah Besar, Kota Jakarta Pusat</p>
                </Card>
            </AnimateOnScroll>
             <AnimateOnScroll animation="fade-in-up" delay={0.2}>
                 <Card className="p-8 text-center shadow-lg border-0 bg-secondary">
                    <CardTitle className="font-headline text-4xl text-primary mb-4">Reception</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground"><Clock className="w-4 h-4"/> 11:00 - 14:00</div>
                    <Separator className="my-6" />
                    <p className="text-foreground font-semibold">Hotel Borobudur Jakarta</p>
                    <p className="text-muted-foreground text-sm mt-1">Jl. Lap. Banteng Selatan No.1, Ps. Baru, Sawah Besar, Kota Jakarta Pusat</p>
                </Card>
            </AnimateOnScroll>
      </div>
    </div>
  </section>
);

const VenueSection = () => (
  <section id="venue" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl font-headline mb-4 text-primary">The Venue</h2>
            <p className="text-xl text-muted-foreground mb-12">The Evergreen Garden, 123 Blossom Lane, Meadowville</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="zoom-in">
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border-8 border-background">
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
  <section id="gallery" className="py-20 md:py-32 bg-background">
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
        <Card className="shadow-xl bg-background border-primary/10 backdrop-blur-sm rounded-lg">
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
  <section id="gifts" className="py-20 md:py-32 bg-background">
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
  <section id="guestbook" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 max-w-4xl">
      <AnimateOnScroll animation="fade-in-down">
        <h2 className="text-4xl md:text-5xl font-headline text-center text-primary mb-16">Leave Your Wishes</h2>
      </AnimateOnScroll>
      <div className="space-y-8 mb-16">
        {guestbookEntries.map((entry, index) => (
          <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
            <Card className="p-6 bg-background/80 shadow-lg border-0">
                <div className="flex items-start gap-6">
                    <Avatar className="w-12 h-12 border-2 border-primary/30">
                    <AvatarImage src={entry.avatar} alt={entry.name} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xl">{entry.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                    <p className="font-bold text-lg text-primary">{entry.name}</p>
                    <p className="text-muted-foreground mt-2 text-base italic">"{entry.message}"</p>
                    </div>
                </div>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll animation="fade-in-up">
        <Separator className="my-16 bg-border" />
        <h3 className="text-3xl font-headline text-center text-primary mb-8">Write in our Guestbook</h3>
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
