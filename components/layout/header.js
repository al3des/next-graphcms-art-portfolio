import Nav from "./nav";


import styles from '@/styles/header.module.css'

export default function Header({children}){

    return (
        <header className={styles.header}>
            
            <Nav />
        </header>
    )
}