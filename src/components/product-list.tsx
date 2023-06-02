import { useProducts } from '@/hooks/useProducts'

export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  const { data } = useProducts()
  return (
    
  )
}
