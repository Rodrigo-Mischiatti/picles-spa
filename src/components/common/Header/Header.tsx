import { Link } from 'react-router-dom'
import { Button, ButtonVariants } from '../Button'
import styles from './Header.module.css'

interface IHeader {
    showReturn?: boolean
}

export function Header({ showReturn }: IHeader) {
    return (
        <header className={styles.header}>
            <Link to='/admin'>
                <Button variant={ButtonVariants.Outlined}>Tenho um abrigo</Button>
            </Link>
            {showReturn && (
                <Link to="/pets">
                    <Button variant={ButtonVariants.Text}>Voltar</Button>
                </Link>
            )}
        </header>
    )
}