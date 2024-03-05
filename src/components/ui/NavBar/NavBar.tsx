'use client'
import { useState } from "react"
import { IconUsers, IconSword, IconListCheck, IconPackage } from "@tabler/icons-react"
import { Tooltip, Stack, UnstyledButton } from "@mantine/core"

interface NavBarLinkProps {
  icon: typeof IconUsers
  label: string
  active?: boolean
  onClick?(): void
}

function NavBarLink({ icon: Icon, label, active, onClick }: NavBarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} data-active={active || undefined}>
        <Icon />
      </UnstyledButton>
    </Tooltip>
  )
}

const navdata = [
  { icon: IconUsers, label: 'Characters' },
  { icon: IconSword, label: 'Weapons' },
  { icon: IconListCheck, label: 'Planner'},
  { icon: IconPackage, label: 'Inventory' }
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
    <nav>
      <Stack justify="center">
        {links}
      </Stack>
    </nav>
  )
}
