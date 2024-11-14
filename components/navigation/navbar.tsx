import { Navbar as NextUINavbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle } from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "../icons";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">denis.leang</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-12 justify-start ml-6">

          <NavbarItem key={siteConfig.navItems[0].label}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={siteConfig.navItems[0].href}
            >
              {siteConfig.navItems[0].label}
            </NextLink>
          </NavbarItem>

          <NavbarItem key={siteConfig.navItems[1].label}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={siteConfig.navItems[1].href}
            >
              {siteConfig.navItems[1].label}
            </NextLink>
          </NavbarItem>

          <NavbarItem key={siteConfig.navItems[2].label}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium", "text-lg"
              )}
              color="foreground"
              href={siteConfig.navItems[2].href}
            >
              {siteConfig.navItems[2].label}
            </NextLink>
          </NavbarItem>

        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

    </NextUINavbar>
  );
};
