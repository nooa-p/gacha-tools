'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { IconMenu2, IconUsers, IconSword, IconFeather, IconListCheck, IconBox, IconFishHook, IconCards, IconArmchair, IconMusic, IconCalendar, IconSettings, IconSwitchHorizontal } from "@tabler/icons-react"

const navdata = [
  { link: '/', icon: IconUsers, label: 'Characters' },
  { link: '/', icon: IconSword, label: 'Weapons' },
  { link: '/', icon: IconFeather, label: 'Artifacts' },
  { link: '/', icon: IconListCheck, label: 'Planner' },
  { link: '/', icon: IconBox, label: 'Inventory' },
  { link: '/', icon: IconFishHook, label: 'Fishing' },
  { link: '/', icon: IconCards, label: 'TCG' },
  { link: '/', icon: IconArmchair, label: 'Furnishing' },
  { link: '/', icon: IconMusic, label: 'Spincrystals' },
  { link: '/', icon: IconCalendar, label: 'Calendar' },
  { link: '/', icon: IconSettings, label: 'Settings' },
  { link: '/', icon: IconSwitchHorizontal, label: 'Switch game' }
]

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
        <nav className="w-80 h-screen">
          
        </nav>
      ) : (
        <IconMenu2 />
      )}
    </>
  )
}
