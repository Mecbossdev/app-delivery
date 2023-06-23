import { useProducts } from '@/hooks/useProducts'
import styled from 'styled-components'
import { ProductsCart } from './products-cart'

export interface ProductListProps {}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`

export function ProductList(props: ProductListProps) {
  const { data } = useProducts()
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductsCart
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))}
    </ListContainer>
  )
}
