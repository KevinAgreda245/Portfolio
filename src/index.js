import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import {faJs,faPhp,faHtml5,faCss3Alt,faReact,faVuejs,faBootstrap,faJava, faGithub} from '@fortawesome/free-brands-svg-icons';
import kod from './img/education/kodigo.png';
import ric from './img/education/ricaldone.png';
import ues from './img/education/ues.png';
import html5 from './img/diplomas/Crear Páginas Web Desde Cero en HTML 5.jpg';
import pb from './img/diplomas/Programación Básica.png';
import scrum from './img/diplomas/SCRUM.PNG';
import Header from './components/Header';
import Project from './components/Project';
import Icon from './components/Icon';
import Diploma from './components/Diploma';
import Education from './components/Education';

const App = () => 
(
  	<div>
		<div className="mx-4">
			<Header/>
    		<div className="flex lg:flex-row flex-col">
				<div className="px-2 lg:w-1/2 w-full">
					<h1 className="text-gray-900 text-lg title-font text-5xl text-center md:text-left">Sobre mi</h1>
					<p className="text-justify mt-2">
						Mi nombre es <b>Kevin Alejandro Agreda Lemus</b>, tengo 20 años de edad, soy desarrollador web especializándome en JavaScript y PHP, además de manejar lenguajes de programación para el desarrollo de aplicaciones de escritorio. 
					</p>
					<p className="text-justify mt-2">
						Actualmente estoy estudiando en la Universidad Nacional de El Salvador en la carrera de Ingeniería en Sistemas Informático aunque me gusta demasiado aprender por mi propia cuenta tecnologías nuevas que 
						se implementan en el mundo laboral.
					</p>
					<h1 className="text-gray-900 text-lg title-font text-5xl text-center md:text-left">Idiomas</h1>
					<div className="flex items-center justify-center md:ml-12 pt-10 md:pt-0">
            			<div className="md:flex">
                			<div className="flex items-center mb-4 md:mb-0">
                    			<p className="font-bold mr-2 p-2 border rounded-full">ES</p>
                    			<p>NATIVO</p>
                			</div>
                			<div className="flex items-center md:ml-10">
                    			<p className="font-bold mr-2 p-2 border rounded-full">EN</p>
                    			<p>BÁSICO</p>
                			</div>
            			</div>            
        			</div>
				</div>
				<div className="m-2 lg:w-1/2 w-full">
					<h1 className="text-gray-900 text-lg title-font text-5xl text-center md:text-left">Tecnologías</h1>
					<div className="w-full flex flex-wrap content-between">
						<Icon text="purple-600" icon={faPhp} name = "PHP" knowledge="11"/>
						<Icon text="orange-500" icon={faHtml5} name = "HTML5" knowledge="11"/>
						<Icon text="blue-400" icon={faCss3Alt} name = "CSS3" knowledge="11"/>
						<Icon text="yellow-400" icon={faJs} name = "Javascript" knowledge="9"/>
						<Icon text="blue-400" icon={faReact} name = "React JS" knowledge="9"/>
						<Icon text="green-500" icon={faVuejs} name = "Vue JS" knowledge="7"/>
						<Icon text="black-500" icon={faGithub} name = "GitHub" knowledge="10"/>
						<Icon text="purple-700" icon={faBootstrap} name = "Bootstrap" knowledge="12"/>
						<Icon text="blue-700" icon={faJava} name = "Java" knowledge="10"/>
					</div>
				</div>
    		</div>
			<h1 className="m-2 text-gray-900 title-font text-5xl text-center md:text-left">Educación</h1>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<Education
					name="Universidad de El Salvador"
					imageURL={ues}
					time="2020 - Actualidad"
				/>
				<Education
					name="KODIGO"
					imageURL={kod}
					time="2020 - Actualidad"
				/>
				<Education
					name="Instituto Técnico Ricaldone"
					imageURL={ric}
					time="2014-2019"
				/>
			</div>
    		<h1 className="m-2 text-gray-900 title-font text-5xl text-center md:text-left">Proyectos</h1>
    		<div className="flex flex-wrap m-4 items-baseline justify-center">
      			<Project 
        			name="Card-Validator" 
					description="Es un validador de tarjeta de crédito o de débito, lo cual le notifica al usuario si el número
					ingresado es válido, o en caso contrario inválido."
					languages={['Javascript','HTML','CSS']}
					url=" https://kevinagreda245.github.io/Card-Validator/"
      			/>
      			<Project 
        			name="BalanceApp" 
					description="Es contador de calorias de comidas, lo cual el usuario puede seleccionar su menú y corroborar 
					la cantidad de calorias que se iría a comer."
					languages={['Javascript','HTML','CSS']}
        			url="https://kevinagreda245.github.io/BalanceApp/"
      			/>
				<Project 
        			name="TriviaApp" 
					description="Es una trivia de preguntas, lo cual el usuario puede seleccionar el tipo de preguntas que gusta
					y así para un momento divertido, a solas o junto a sus amigos."
					languages={['Javascript','HTML','CSS']}
        			url="https://kevinagreda245.github.io/Trivia-Quiz/"
      			/>
				<Project 
        			name="Party Town" 
					description="Sitio web donde puede comprar productos para organizar una reunión de amigos, fiestas de cumpleaños,
					bodas, entre otras eventos."
					languages={['Javascript','PHP','JQuery','MySQL']}
        			url="https://kevinagreda245.github.io/Trivia-Quiz/"
      			/>
				<Project 
        			name="Monster University System" 
					description="Sistema para una universidad donde un estudiante puede aplicar para estudiar en la institución, seleccionando
					la carrera que quiera cursar además de ver su estado de solicitud."
					languages={['Javascript','PHP','JQuery','MySQL']}
        			url="https://kevinagreda245.github.io/Trivia-Quiz/"
      			/>
    		</div>
			<h1 className="m-2 text-gray-900 title-font text-5xl text-center md:text-left">Diplomas</h1>
			<div className="flex flex-wrap m-4 items-baseline justify-center">
				<Diploma
					name="Certificación de SCRUM"
					imageURL={scrum}
				/>	
				<Diploma
					name="Programación Básica"
					imageURL={pb}
				/>
				<Diploma
					name="Crear Páginas Web Desde Cero en HTML 5"
					imageURL={html5}
				/>
			</div>
		</div>
		<footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
    		<div className="pt-2">
        		<div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
            		<div className="mt-2 text-center">
                		© Copyright 2021. Todos los derechos reservados. Hecho por: Kevin Agreda
            		</div>
        		</div>
    		</div>
		</footer>
	</div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
