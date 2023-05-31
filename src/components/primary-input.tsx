import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { SearchIcon } from './search-icon'

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  background-color: var(--bg-secodary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-drak);
`

const InputContainer = styled.div`
  position: relative;
  width: 352;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />

      <SearchIcon />
    </InputContainer>
  )
}
