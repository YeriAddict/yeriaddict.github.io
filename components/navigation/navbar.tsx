"use client"

import { Navbar as NextUINavbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "../icons";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuItemClick = () => setIsMenuOpen(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered>
      <NavbarContent className="flex-[1] sm:flex-[1]" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">denis.leang</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex-[4] sm:flex-[4]" justify="center">
        <ul className="hidden lg:flex gap-12 justify-start bg-primary-300 h-[70%] items-center rounded-full border-2 border-success-500">
          <NavbarItem key={siteConfig.navItems[0].label} className="flex items-center justify-center pl-4">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-center",
              )}
              color="foreground"
              href={siteConfig.navItems[0].href}
            >
              {siteConfig.navItems[0].label}
            </NextLink>
          </NavbarItem>
          <NavbarItem key={siteConfig.navItems[1].label} className="flex items-center justify-center">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-center",
              )}
              color="foreground"
              href={siteConfig.navItems[1].href}
            >
              {siteConfig.navItems[1].label}
            </NextLink>
          </NavbarItem>
          <NavbarItem key={siteConfig.navItems[2].label} className="flex items-center justify-center">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-center text-lg",
              )}
              color="foreground"
              href={siteConfig.navItems[2].href}
            >
              {siteConfig.navItems[2].label}
            </NextLink>
          </NavbarItem>
          <NavbarItem key={siteConfig.navItems[3].label} className="flex items-center justify-center pr-4">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-center text-lg",
              )}
              color="foreground"
              href={siteConfig.navItems[3].href}
            >
              {siteConfig.navItems[3].label}
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="flex-[1] sm:flex-[1]" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle onClick={handleMenuToggle} />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                size="lg"
                onClick={handleMenuItemClick}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
