"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#gifts", label: "Gifts" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#guestbook", label: "Guestbook" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const currentSection = sections.find(section => {
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
          setActiveLink(`#${currentSection.id}`);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string; }) => (
    <Link
      href={href}
      onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
      className={cn(
        "font-body text-base font-medium relative transition-colors duration-300",
        "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
        activeLink === href 
          ? "text-primary after:scale-x-100" 
          : "text-foreground/80 hover:text-primary hover:after:scale-x-50"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="#home" className="flex items-center gap-2" aria-label="Back to top">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-3xl text-primary font-bold hidden sm:inline">Evergreen Vows</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-0">
                <SheetHeader className="p-6 flex-row justify-between items-center border-b">
                  <SheetTitle className="text-left">
                    <Link href="#home" className="flex items-center gap-2" aria-label="Back to top" onClick={() => setMobileMenuOpen(false)}>
                      <Logo className="h-7 w-7 text-primary" />
                      <span className="font-headline text-2xl text-primary font-bold">Evergreen Vows</span>
                    </Link>
                  </SheetTitle>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                      <X className="h-7 w-7" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <div className="p-6 h-full flex flex-col">
                  <nav className="flex flex-col gap-8 text-left mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "font-body text-2xl font-medium",
                          activeLink === link.href ? "text-primary" : "text-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
