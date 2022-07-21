import React from 'react'
import { ButtonContainer, TypeButtonVariant } from './Button.styles'

interface IButtonProps {
    variant: TypeButtonVariant
}

export default function Button({variant = 'primary'}: IButtonProps) {
  return <ButtonContainer variant={variant}>button</ButtonContainer>
}