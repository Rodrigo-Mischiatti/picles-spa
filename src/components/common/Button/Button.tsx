import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'
import { ButtonVariants } from './Button.constants'

//a interface extende a classe ButtonHTMLAttributes, que por sua vez possui todos os metodos do botão padrão do HTML, com OnClick, Hover, etc
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
}

// ...rest : este spreadOperator disponibiliza todas as propriedades pra dentro do nosso botão personalizado 
// atraves do import styles e do className no botão, importamos o CSS personalizado pra este botão
export function Button({ variant = ButtonVariants.Default, children, ...rest }: IButton) {
    let buttonClass = styles.buttonBase
    switch (variant) {
        case ButtonVariants.Default:
            buttonClass += ` ${styles.buttonDefault}`
            break
        case ButtonVariants.Outlined:
            buttonClass += ` ${styles.buttonOutlined}`
            break
        case ButtonVariants.Text:
            buttonClass += ` ${styles.buttonText}`
            break
        case ButtonVariants.Disabled:
            buttonClass += ` ${styles.buttonDisabled}`
            break
    }

    return <button className={buttonClass}{...rest}>
        {children}
    </button>
}