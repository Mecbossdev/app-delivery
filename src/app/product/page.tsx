'use client'
import { BackButton } from '@/components/back-button'
import { DefaultPageLayout } from '@/components/default-page-layout'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/format-price'
import styled from 'styled-components'
import { ShoppingBag } from 'lucide-react'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background: #115d8c;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }
`

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  span:nth-of-types(2) {
    font-weight: 600;
    font-size: 20;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: (--text-dark);
  }

  div {
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      color: var(text-dark);
      font-weight: 500;
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const { data } = useProduct(searchParams.id)

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>Frete</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <ShoppingBag />
              Adicionar ao Carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}
