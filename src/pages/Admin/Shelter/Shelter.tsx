import { useRef } from "react";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'

export function Shelter() {
  const inputRef = useRef(null)

  function submit(event) {
    event?.preventDefault
    console.log(inputRef.current.value)
  }

  return (
    <Panel>
      <form className={styles.container} onSubmit={submit}>
        <Input ref={inputRef} label="Nome" />
        <Button type="submit">Salvar dados</Button>
      </form>
    </Panel>
  )
}