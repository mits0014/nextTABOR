import styles from '../styles/MainContainer.module.css'

export default function Contact({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  )
}