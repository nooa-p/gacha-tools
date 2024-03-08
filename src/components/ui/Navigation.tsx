'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { IconMenu2, IconUsers, IconSword, IconFeather, IconListCheck, IconBox, IconFishHook, IconCards, IconArmchair, IconMusic, IconCalendar, IconSettings } from "@tabler/icons-react"
import { Edu_SA_Beginner } from "next/font/google"

const eduSA = Edu_SA_Beginner({ weight: '700', subsets: ['latin'] })

const navdata_one = [
  { href: '/', icon: IconUsers, label: 'Characters' },
  { href: '/', icon: IconSword, label: 'Weapons' },
  { href: '/', icon: IconFeather, label: 'Artifacts' },
  { href: '/', icon: IconListCheck, label: 'Planner' },
  { href: '/', icon: IconBox, label: 'Inventory' },
]

const navdata_two = [
  { href: '/', icon: IconFishHook, label: 'Fishing' },
  { href: '/', icon: IconCards, label: 'TCG' },
  { href: '/', icon: IconArmchair, label: 'Furnishing' },
  { href: '/', icon: IconMusic, label: 'Spincrystals' }
]

const navdata_three = [
  { href: '/', icon: IconCalendar, label: 'Calendar' },
  { href: '/', icon: IconSettings, label: 'Settings' }
]

function NavBar() {
  const returnLinks = (links: Array<{ href: string, icon: typeof IconMenu2, label: string }>, icon_color: string, hover_color: string) => {
    return (
      links.map(link => {
        return (
          <Link 
            href={link.href}
            key={link.label}
            className={"flex flex-row text-lg font-semibold py-2.5 px-3 gap-3 items-center rounded transition duration-200 ease-in hover:text-mantle group " + hover_color}
          >
            <link.icon stroke={2} className={icon_color + " group-hover:text-mantle transition duration-200 ease-in"} />
            <span>{link.label}</span>
          </Link>
      )})
    )
  }
  return (
    <div className="w-80 h-screen bg-mantle flex flex-col items-center py-10 gap-10">
      <h1 className={eduSA.className + " text-3xl text-center max-w-56"}>
        Traveler&apos;s Handbook
      </h1>
      <div className="flex flex-col w-10/12">
        <div className="flex flex-col gap-2 pb-2">
        {returnLinks(navdata_one, "text-flamingo", "hover:bg-flamingo")}
        </div>
        <div className="flex flex-col gap-2 py-2 border-t border-dashed border-surface-light">
        {returnLinks(navdata_two, "text-teal", "hover:bg-teal")}
        </div>
        <div className="flex flex-col gap-2 pt-2 border-t border-dashed border-surface-light">
        {returnLinks(navdata_three, "text-lavender", "hover:bg-lavender")}
        </div>
      </div>
      <div className="mt-auto">
        game switch
      </div>
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  // check window size on load to show mobile version of menu for smaller screens
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 1440) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  return  (
    <>
      {isDesktop ? (
        <nav>
          <NavBar />
        </nav>
      ) : (
        <IconMenu2 />
      )}
    </>
  )
}
