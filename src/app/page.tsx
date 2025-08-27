import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Clock, Gift, Heart, Users, Mail, Camera, PartyPopper } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Countdown from "@/components/countdown";
import MusicPlayer from "@/components/music-player";
import RsvpForm from "@/components/rsvp-form";
import GuestbookForm from "@/components/guestbook-form";
import Header from "@/components/header";
import { Logo } from "@/components/logo";

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
      <main className="flex-1">
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
      alt="A beautiful natural landscape for a wedding"
      data-ai-hint="wedding nature"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 p-4 flex flex-col items-center">
      <p className="font-body text-lg md:text-xl mb-4">WE'RE GETTING MARRIED</p>
      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        {coupleNames}
      </h1>
      <Separator className="my-8 bg-white/50 w-1/2 mx-auto" />
      <Countdown targetDate={weddingDate} />
    </div>
  </section>
);

const EventsSection = () => (
  <section id="events" className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-headline text-center text-secondary-foreground mb-12">Schedule of Events</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
        <Card className="w-full max-w-sm shadow-lg overflow-hidden border-2 border-primary/10">
          <CardContent className="p-0">
            <Calendar
              mode="single"
              selected={weddingDate}
              disabled
              className="p-4 w-full"
              classNames={{
                day_selected: "bg-primary text-primary-foreground",
                day_today: "text-primary font-bold",
              }}
            />
          </CardContent>
        </Card>
        <div className="space-y-8 max-w-md">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 text-primary p-3 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-headline text-secondary-foreground">The Ceremony</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Clock className="w-4 h-4" />
                <span>2:00 PM</span>
              </div>
              <p className="text-secondary-foreground/80 mt-2">Join us as we exchange vows and begin our new chapter together in a beautiful garden setting.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 text-primary p-3 rounded-full">
              <PartyPopper className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-headline text-secondary-foreground">The Reception</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Clock className="w-4 h-4" />
                <span>4:00 PM onwards</span>
              </div>
              <p className="text-secondary-foreground/80 mt-2">Let's celebrate with dinner, drinks, and dancing under the stars!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VenueSection = () => (
  <section id="venue" className="py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-headline mb-4 text-foreground">The Venue</h2>
      <p className="text-lg text-muted-foreground mb-8">The Evergreen Garden, 123 Blossom Lane, Meadowville</p>
      <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-background">
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
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-headline mb-12 text-secondary-foreground">Our Moments</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden group">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-[-1.5rem] md:ml-[-3rem]" />
        <CarouselNext className="mr-[-1.5rem] md:mr-[-3rem]" />
      </Carousel>
    </div>
  </section>
);

const RsvpSection = () => (
  <section id="rsvp" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <Card className="max-w-2xl mx-auto shadow-lg bg-secondary border-primary/10">
        <CardHeader className="text-center">
          <Mail className="w-12 h-12 mx-auto text-primary" />
          <CardTitle className="font-headline text-4xl mt-4 text-secondary-foreground">Kindly RSVP</CardTitle>
          <p className="text-muted-foreground pt-2">Please respond by August 20th, 2025.</p>
        </CardHeader>
        <CardContent>
          <RsvpForm />
        </CardContent>
      </Card>
    </div>
  </section>
);

const GiftRegistrySection = () => (
  <section id="gifts" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <Gift className="w-12 h-12 mx-auto text-primary mb-4" />
      <h2 className="text-4xl md:text-5xl font-headline mb-4 text-foreground">Gift Registry</h2>
      <p className="text-muted-foreground mb-8 font-body">
        Your presence at our wedding is the only gift we need! However, if you wish to give a gift,
        a contribution to our honeymoon fund would be warmly appreciated.
      </p>
      <Button asChild size="lg">
        <a href="#" target="_blank" rel="noopener noreferrer">
          Contribute to Our Journey <Heart className="ml-2 w-4 h-4" />
        </a>
      </Button>
    </div>
  </section>
);

const GuestBookSection = () => (
  <section id="guestbook" className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-headline text-center text-secondary-foreground mb-12">Leave Your Wishes</h2>
      <div className="space-y-8 mb-12">
        {guestbookEntries.map((entry, index) => (
          <div key={index} className="flex items-start gap-4">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src={entry.avatar} alt={entry.name} />
              <AvatarFallback className="bg-primary/30 text-primary">{entry.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="bg-background p-4 rounded-lg flex-1 shadow-sm">
              <p className="font-bold text-foreground">{entry.name}</p>
              <p className="text-muted-foreground mt-1 italic">"{entry.message}"</p>
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-12 bg-border" />
      <h3 className="text-2xl font-headline text-center text-secondary-foreground mb-6">Write in our Guestbook</h3>
      <GuestbookForm />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-background border-t">
    <div className="container mx-auto px-4 text-center text-muted-foreground">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Logo className="h-6 w-6 text-primary" />
        <p className="font-headline text-xl text-primary">{coupleNames}</p>
      </div>
      <p className="font-body text-sm">&copy; {new Date().getFullYear()} Evergreen Vows. All Rights Reserved.</p>
    </div>
  </footer>
);
