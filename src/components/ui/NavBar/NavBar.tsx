'use client'
import { useState } from "react"
import { IconUsers, IconSword, IconListCheck, IconPackage, IconTrophy, IconSettings, IconFeather, IconCalendar, IconFishHook, IconCards, IconArmchair, IconSwitchHorizontal } from "@tabler/icons-react"
import { Tooltip, Stack, UnstyledButton, rem } from "@mantine/core"
import classes from './NavBar.module.css'

interface NavBarLinkProps {
  icon: typeof IconUsers
  label: string
  active?: boolean
  onClick?(): void
}

function NavBarLink({ icon: Icon, label, active, onClick }: NavBarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon />
      </UnstyledButton>
    </Tooltip>
  )
}

const navdata = [
  { icon: IconUsers, label: 'Characters' },
  { icon: IconSword, label: 'Weapons' },
  { icon: IconFeather, label: 'Artifacts' },
  { icon: IconListCheck, label: 'Planner' },
  { icon: IconPackage, label: 'Inventory' },
  { icon: IconTrophy, label: 'Achievements' },
  { icon: IconFishHook, label: 'Fishing' },
  { icon: IconCards, label: 'TCG' },
  { icon: IconArmchair, label: 'Furnishing'},
  { icon: IconCalendar, label: 'Calendar' },
  { icon: IconSettings, label: 'Settings' }
]

export function NavBar() {
  const [active, setActive] = useState(0)

  const links = navdata.map((link, index) => (
    <NavBarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <nav className={classes.navbar}>
      <Stack justify="center">
        {links}
      </Stack>

      <Stack justify="center">
        <NavBarLink icon={IconSwitchHorizontal} label="Switch game" />
      </Stack>
    </nav>
  )
}
