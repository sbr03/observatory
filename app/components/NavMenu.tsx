"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Weather Forecast ",
    href: "https://www.cleardarksky.com/c/NePhilAprtPAkey.html",
    description:
      "Forecast of the weather",
  },
  {
    title: "Satellite Predictions",
    href: "https://www.heavens-above.com/?lat=39.95395&lng=-75.18607&alt=25&loc=Lynch+Observatory&tz=EST",
    description:
      "Predictions for Satellites",
  },
  {
    title: "Sun Rise/Set",
    href: "https://www.timeanddate.com/sun/usa/philadelphia",
    description:
      "2024 Sky Calendar",
  },
  {
    title: "Moon Rise/Set",
    href: "https://www.timeanddate.com/moon/usa/philadelphia",
    description:
      "Moon Rise/Set",
  },
  {
    title: "Lunar Phases",
    href: "https://www.timeanddate.com/moon/phases/usa/philadelphia",
    description:
      "2024 Sky Calendar",
  },
  {
    title: "Planet Rises/Sets",
    href: "https://www.timeanddate.com/astronomy/night/usa/philadelphia",
    description:
      "2024 Sky Calendar",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="laptop:ml-auto">
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem><NavigationMenuItem>
          <Link href="/facility" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              The Facility
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/nights" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Public Nights
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>External Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="navbar grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-dark-gray", // Add text-dark-gray class
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default NavigationMenuDemo