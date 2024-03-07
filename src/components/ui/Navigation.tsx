'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { IconMenu2, IconUsers, IconSword, IconFeather, IconListCheck, IconBox, IconFishHook, IconCards, IconArmchair, IconMusic, IconCalendar, IconSettings } from "@tabler/icons-react"

const navdata_one = [
  { link: '/', icon: IconUsers, label: 'Characters' },
  { link: '/', icon: IconSword, label: 'Weapons' },
  { link: '/', icon: IconFeather, label: 'Artifacts' },
  { link: '/', icon: IconListCheck, label: 'Planner' },
  { link: '/', icon: IconBox, label: 'Inventory' },
]

const navdata_two = [
  { link: '/', icon: IconFishHook, label: 'Fishing' },
  { link: '/', icon: IconCards, label: 'TCG' },
  { link: '/', icon: IconArmchair, label: 'Furnishing' },
  { link: '/', icon: IconMusic, label: 'Spincrystals' }
]

const navdata_three = [
  { link: '/', icon: IconCalendar, label: 'Calendar' }
]

function NavBar() {
  return (
    <div className="w-80 h-screen">

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
