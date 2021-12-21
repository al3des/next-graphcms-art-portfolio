import styles from '@/styles/layout.module.css'

export default function Aside({children}){

    return (
        <div className={styles.aside}>
            {children}
        </div>
    )
}