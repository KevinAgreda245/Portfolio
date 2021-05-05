import React, {Component} from 'react';

class Project extends Component {
	render() {
		return (
			<div className="p-4 md:w-1/2 lg:w-1/3">
				<div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col shadow-lg">
					<div className="flex items-center mb-3">
						<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 20 20"
							>
							<path d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path>
						</svg>
					</div>
						<h2 className="text-gray-900 text-lg title-font font-medium">
							{this.props.name}
						</h2>
					</div>
					<div className="flex-grow">
						<p className="leading-relaxed text-base text-justify my-3">
							{this.props.description}
						</p>
						<div class="px-6 pt-4 pb-2 flex flex-wrap justify-center">
							{
								this.props.languages.map((element,index)=>{
									return <span key={index} class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{element}</span>
								})
							}
						</div>
						<a 
							className="self-end mt-3 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal"  
							href={this.props.url}
							rel="noreferrer"
							target="_blank"
						>
							Probar
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;