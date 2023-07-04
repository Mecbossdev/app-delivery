import { ArrowLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secodary-text);
`
interface BtnProps {
  navigate: string
}

export function BackButton({ navigate }: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <Button onClick={handleNavigate}>
      <ArrowLeftCircle style={{ color: 'var(--text-dark)' }} size={20} />
      <p>Voltar</p>
    </Button>
  )
}
