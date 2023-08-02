'use client'
import styled from 'styled-components'
import { ShoppingBag, Store } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { CartControl } from './cart-control'

interface FooterProps {}

const TagFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: auto;
  background-color: white;
  border-radius: 20px 20px 0 0;
  border: 1px solid var(--shapes);
  color: var(--text-dark);

  > div {
    display: flex;
    align-items: center;
    padding: 6px 48px;

    :hover {
      background-color: var(--orange-low);
      border-radius: 8px;
    }

    p {
      font-family: inherit;
      font-size: 16px;
      font-weight: 400;
      padding-left: 32px;
    }
  }

  > span {
    width: 2px;
    height: 48px;
    margin: 4px 0;
    padding: 0px;
    background: var(--shapes);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 8px 140px;
  }
`

export function Footer(props: FooterProps) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push('/cart')
  }

  return (
    <TagFooter>
      <div style={{ cursor: 'pointer' }}>
        <Store size={30} />
        <p>Loja</p>
      </div>
      <span></span>
      <div style={{ cursor: 'pointer' }} onClick={handleNavigate}>
        <CartControl />
        <p>Carrinho</p>
      </div>
      <span></span>
      <div style={{ cursor: 'pointer' }}>
        <ShoppingBag size={30} />
        <p>Pedidos</p>
      </div>
    </TagFooter>
  )
}
