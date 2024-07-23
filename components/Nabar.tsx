"use client"
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Link as RouterLink, Menu, Sparkles } from 'lucide-react'; // Adjusted import for clarity
import { Poppins } from 'next/font/google';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link'; // Correct import for Next.js Link

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Menu className='block md:hidden'/>
        <h1 className={cn("hidden md:block text-xl text-blue-300", font.className)}>
          companion ai
        </h1>
        {/* Removed duplicate h1 and corrected Link usage */}
        <RouterLink href='/'>
          <a className={cn("hidden md:block text-xl bg-lime-100", font.className)}>
            companion ai
          </a>
        </RouterLink>
      </div>
      <div className='flex items-center gap-x-3'>
        <Button variant="ghost" size='sm'>
          Upgrade
          <Sparkles />
        </Button>
        <ModeToggle/>
        <UserButton/>
      </div>
    </nav>
  );
};
