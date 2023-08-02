import { formatPrice } from '@/utils/format-price'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { ShoppingCart } from 'lucide-react'

interface ProductsCartProps {
  image: string
  title: string
  price: number
  id: string
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 6px;

  width: 200px;

  img {
    width: 200px;
    height: 200px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  main {
    display: flex;

    justify-content: center;
    flex-direction: column;
    padding: 8px 0px;

    > span {
      width: 180px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export function ProductsCart(props: ProductsCartProps) {
  const router = useRouter()
  const price = formatPrice(props.price)

  const handleNavigate = () => {
    router.push('/product?id=' + props.id)
  }

  return (
    <Card>
      <img src={props.image} alt="" />
      <main>
        <h3>{props.title}</h3>
        <span></span>
        <div>
          <p style={{ color: 'green' }}>{price}</p>
          <ShoppingCart
            onClick={handleNavigate}
            style={{ color: 'var(--text-dark)', cursor: 'pointer' }}
            size={20}
          />
        </div>
      </main>
    </Card>
  )
}
