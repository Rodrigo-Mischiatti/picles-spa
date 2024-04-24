import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import React from 'react'
import { Toaster, toast } from 'sonner'
import { useShelter } from '../../../pages/Home/useShelter'

export function Sidebar() {
  const { data } = useShelter()       //todos os hooks precisam estar na primeira linha da função sempre

  function validate(event: React.MouseEvent) {
    const canAccess = !!data?.shelterWhatsApp
    if (!canAccess) {
      event.preventDefault()
      toast.error('Insira os dados do abrigo!')
    }
  }

  return (
    <>
      <nav className={styles.sidebar}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/admin" end>
          Meu abrigo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : '')} to="/admin/pets"
          onClick={validate}
        >
          Pets
        </NavLink>
        <NavLink to="/">Sair</NavLink>
      </nav>
      <Toaster position="top-center" richColors={true} />
    </>
  )
}