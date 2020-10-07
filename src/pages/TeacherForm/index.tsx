import React, {ReactElement} from 'react';

import { Link } from 'react-router-dom';
import './styles.css';

import PageHeader from "../../components/PageHeader"

function TeacherForm(): ReactElement {
	
	return (
		<div id="page-teacher-form" className="container">
			<PageHeader title = "Que incrivel que você quer dar aulas">
				Teste
			</PageHeader>
		</div>
	);
}

export default TeacherForm;