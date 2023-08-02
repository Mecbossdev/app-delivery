'use client'

import { useFilter } from '@/hooks/useFilter'
import styled from 'styled-components'
import { PrimaryInputSearchIcon } from './primary-input'

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 140px;
  }
`

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter()
  return (
    <TagHeader>
      <PrimaryInputSearchIcon
        value={search}
        handleChange={setSearch}
        placeholder="Procurar"
      />
    </TagHeader>
  )
}
