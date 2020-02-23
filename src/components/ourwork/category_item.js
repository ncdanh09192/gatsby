import React from "react"

class Category_item extends React.Component{
	getActiveClass(isActive){
		if(isActive){
			return 'active';
		}

		return '';
	}

	render(){
		return(
			<li className={this.getActiveClass(this.props.isActive)}><a onClick={this.props.onClick}>{this.props.cate_name}</a></li>
		);
	}
}


export default Category_item