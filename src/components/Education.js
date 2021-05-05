import React, { Component } from 'react'

class Education extends Component {
    render() {
      return(
        <div className="bg-indigo-50 rounded p-5 mr-3 ml-3">
            <img className="w-full object-scale-down max-h-36" src={this.props.imageURL} alt={this.props.name} />
            <div className="p-5">
                <h3 className="text-lg capitalize font-bold">{this.props.name}</h3>
                <p className="text-gray-600">{this.props.time}</p>
            </div>
        </div>
      )
    }
}

export default Education;
