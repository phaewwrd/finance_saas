"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { useRouter, usePathname } from "next/navigation";

import { NavButton } from "@/components/nav-button";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/acconts",
    label: "Acccounts",
  },
  {
    href: "/categaories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onCLick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
            <Button 
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition">
            <Menu className="size-4" />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
            <nav className="flex flex-col gap-y-2 pt-6">
                {routes.map((route) => (
                    <Button
                    key={route.href}
                    variant={route.href === pathname ? "secondary" : "ghost"}
                    onClick={() => onCLick(route.href)}
                    >
                        {route.label}

                    </Button>
                ))}
                </nav>
                </SheetContent>
    </Sheet>
    )
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
