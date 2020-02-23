import React from "react"


class Work_item extends React.Component {
	render(){
		return(
			<div className="col-xs-6 col-sm-6 col-md-4 div-child">
                <div className="item" data-id="35">
                    <img src={this.props.img_link} />
                    <div className="bg">
                        <div className="name">{this.props.name}</div>
                        <div className="nameP">{this.props.project_name}</div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Work_item