import styles from "./subtitle.module.css"

export default function Subtile({ children }) {
   
    return(
        <h2 className={styles.subtile}>{ children }</h2>
    )
}