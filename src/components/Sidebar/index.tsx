import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/78426489?v=4" />
        <strong> Diego Mauricio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}