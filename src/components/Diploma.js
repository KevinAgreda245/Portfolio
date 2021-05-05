import React, { Component } from 'react'

class Diploma extends Component {
    render() {
      return(
          	<div className="m-auto px-4 py-8 max-w-xl">
          		<div className="bg-white shadow-2xl">
            		<div>
	            		<img className="w-full object-scale-down" src={this.props.imageURL} alt={this.name}/>
            		</div>
            		<div className="px-4 py-2 mt-2 bg-white">
                		<h2 className="font-bold text-2xl text-gray-800">{this.props.name}</h2>
            		</div>
        		</div>
    		</div>
      )
    }
}

export default Diploma;