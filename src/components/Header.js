import React, {Component} from 'react';
import slider from '../img/photos/slider.jpg';
import myPhoto from '../img/photos/myPhoto.jpeg';

class Header extends Component {
  	render() {
    	return(
      		<div className="w-full relative mt-2 rounded my-4 overflow-hidden">
      			<div className="top h-64 w-full bg-blue-600 overflow-hidden relative rounded">
        			<img src={slider} alt="Portada" className="bg w-full h-full object-cover object-center absolute z-0"/>
        			<div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          				<img src={myPhoto} alt="Foto" className="h-24 w-24 object-cover rounded-full"/>
          				<h1 className="text-2xl font-semibold">Kevin Agreda</h1>
          				<h2 className="text-sm font-semibold">
						  	<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
								<a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100009864181417" target="_blank">
									<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
										<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
									</svg>
								</a>
								<a className="ml-3" rel="noreferrer" href="https://twitter.com/kevinagreda24" target="_blank">
									<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
									</svg>
								</a>
								<a className="ml-3" rel="noreferrer" href="https://www.instagram.com/kevin.agreda__/" target="_blank">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
										<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
										<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
									</svg>
								</a>
								<a className="ml-3" rel="noreferrer" href="https://www.linkedin.com/in/kevin-agreda-028b83173" target="_blank">
									<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
										<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
										<circle cx="4" cy="4" r="2" stroke="none"></circle>
									</svg>
								</a>
								<a className="ml-3 text-white-100" rel="noreferrer" href="https://github.com/KevinAgreda245" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
									</svg>
								</a>
    						</span>	
						</h2>
        			</div>
      			</div>
      		</div>
    	)
  	}
}

export default Header;
