'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { IconMenu2 } from "@tabler/icons-react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

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
    <nav className="">
      {isDesktop ? (
        <h1>this is a desktop</h1>
      ) : (
        <IconMenu2 />
      )}
    </nav>
  )
}
