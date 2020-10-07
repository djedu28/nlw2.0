import React, { ReactElement } from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
//import api from '../../services/api';

import './styles.css';



function TeacherItem(){
	teacher={
		avatar:'https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/93883112_673903913404369_1397406324588806144_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=aAgOdh7OtkcAX_wGLOe&oh=5f818958e817b9fde313489a77c05958&oe=5FA5E7D9',
		name:'Eduardo28 @DjEdu28',
		subject:'Materia: Robotica Educacional',
		bio:'Apaixonado pelo universo programavel e pela Robotica',
		cost:'100,00',
		whatsapp:'55985555-5555',
	};
	return (
		<article className="teacher-item">
			<header>
				<img src={'https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/93883112_673903913404369_1397406324588806144_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=aAgOdh7OtkcAX_wGLOe&oh=5f818958e817b9fde313489a77c05958&oe=5FA5E7D9'} 
					alt='nome' 
				/>
				<div>
					<strong>{"DjEdu28"}</strong>
					<span>{"Robotica Educacional"}</span>
				</div>
			</header>

			<p>{"Apaixonado pelo universo programavel e pela Robotica"}</p>

			<footer>
				<p>
				  Preço/hora
				  <strong>R$ {"100"}</strong>
				</p>
				<a
					target="_blank" 
					href={'https://wa.me/'+"55985555-5555"}>
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</a>
			</footer>
		</article>
  );
}

export default TeacherItem;