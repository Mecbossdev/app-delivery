'use client'

import { useFilter } from '@/hooks/useFilter'
import { Saira_Stencil_One as sairaStencilOne } from 'next/font/google'
import styled from 'styled-components'
import { CartControl } from './cart-control'
import { PrimaryInputSearchIcon } from './primary-input'

const sairaStencil = sairaStencilOne({
  weight: ['400'],
  subsets: ['latin'],
})

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400px;
  font-size: 20px;
  line-height: 150%;

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>E-commerce</Logo>
      <div>
        <PrimaryInputSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específivo?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}
