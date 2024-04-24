import { InputHTMLAttributes, Ref, forwardRef } from 'react'
import styles from './Input.module.css'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function ForwardInput({ label, ...rest }: IInput, ref: Ref<HTMLInputElement>) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input ref={ref} {...rest} />
    </div>
  )
}

export const Input = forwardRef(ForwardInput)    //forwardRef é um hook do react que repassa uma propriedade para um componente interno. no caso, foi feito isso para usar o Ref. O ref serve para conseguir acessar e consumir o valor digitado no input
