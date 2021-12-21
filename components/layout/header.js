import Nav from "./nav";


import styles from '@/styles/header.module.css'

export default function Header(props){

    return (
        <header className={`${styles.header} ${props.styles}`}>
            <Nav />
        </header>
    )
}