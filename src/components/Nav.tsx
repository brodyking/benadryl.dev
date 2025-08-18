"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image"; 

// Your navigation links
const navLinks = [
  { href: "/", label: "home" }
];

export function Nav() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background mb-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl">
          <Button variant="link" className="p-0 text-xl">
            <Image src="/favicon.ico" width="16" height="6" className="inline mr-0 align-middle" alt="site logo" />
            <span className="inline align-middle">
             benadryl.dev
            </span>
          </Button>
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          {/* Desktop navigation links */}
          {/*
          {navLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          */}
            <Button key="github" asChild variant="ghost">
              <Link href="https://github.com/brodyking/"><i className="bi bi-github"></i></Link>
            </Button>
          {/* Theme toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(
              document.documentElement.classList.contains("dark") ? "light" : "dark"
            )}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme toggle button for mobile */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(
              document.documentElement.classList.contains("dark") ? "light" : "dark"
            )}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile menu sheet */}
          {/*
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          */}
        </div>
      </div>
    </nav>
  );
}
