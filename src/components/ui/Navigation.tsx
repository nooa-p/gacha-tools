'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { IconMenu2, IconUsers, IconSword, IconFeather, IconListCheck, IconBox, IconFishHook, IconCards, IconArmchair, IconMusic, IconCalendar, IconSettings } from "@tabler/icons-react"
import { Courgette } from "next/font/google"

const courgette = Courgette({ weight: '400', subsets: ['latin'] })

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
  const returnLinks = (links: Array<{ href: string, icon: typeof IconMenu2, label: string }>) => {
    return (
      links.map(link => {
        return (
          <Link 
            href={link.href}
            key={link.label}
            className="flex flex-row text-lg font-light py-2.5 px-3 gap-3 items-center rounded"
          >
            <link.icon />
            <span>{link.label}</span>
          </Link>
      )})
    )
  }
  return (
    <div className="w-80 h-screen bg-periwinkle-950 flex flex-col items-center py-5 gap-12">
      <h1 className={courgette.className + " text-3xl"}>
        Traveler&apos;s Handbook
      </h1>
      <div className="flex flex-col w-10/12">
        <div className="flex flex-col gap-2 pb-2">
        {returnLinks(navdata_one)}
        </div>
        <div className="flex flex-col gap-2 py-2 border-t border-dashed border-periwinkle-500">
        {returnLinks(navdata_two)}
        </div>
        <div className="flex flex-col gap-2 pt-2 border-t border-dashed border-periwinkle-500">
        {returnLinks(navdata_three)}
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
