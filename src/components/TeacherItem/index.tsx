import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'
import TeacherForm from '../../pages/TeacherForm'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
  user_id: string;
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('/connections', { user_id: teacher.user_id})
  }
  
  return(
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a 
          target="_blank"
          onClick={createNewConnection}
          href={`http://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt={teacher.whatsapp}/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem