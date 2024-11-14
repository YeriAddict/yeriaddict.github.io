import { Navbar as NextUINavbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "../icons";

export const Navbar = () => {
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
        <ul className="hidden lg:flex gap-12 justify-start">
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
          <NavbarItem key={siteConfig.navItems[3].label}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium", "text-lg"
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
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                size="lg"
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
