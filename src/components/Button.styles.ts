import styled from 'styled-components'

export type TypeButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'

interface IButtonContainerProps {
    variant: TypeButtonVariant
}

const buttonVariant = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',
    success: 'green',
    warning: 'yellow',
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
    width: 100px;
    height: 40px;
    color: ${props => buttonVariant[props.variant]};
    background-color: ${props => props.theme.primary}
`