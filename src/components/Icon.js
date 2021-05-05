import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Icon extends Component{
    render(){
        return (
            <div className="sm:1/6 md:w-1/6 lg:w-1/5 w-1/4 my-2 mx-3 text-center">
				<FontAwesomeIcon className={"text-"+ this.props.text + " mx-1 text-5xl"} icon={this.props.icon}/>
                <p className="text-xl text-teal-800">{this.props.name}</p>
                <div className="bg-gray-500 rounded-full">
                    <div className={"w-"+this.props.knowledge+"/12 mt-2 bg-blue-800 py-1 rounded-full"}></div>
                </div>
			</div>
        )
    }
}

export default Icon;