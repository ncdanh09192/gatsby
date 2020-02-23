import React from "react";
import Category_item from "./category_item";


class Category extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list_cate: [
				{
					cate_id: 1,
					cate_name: 'All project',
					isActive:false
				},
				{
					cate_id: 2,
					cate_name: 'Web/App2',
					isActive:false
				},
				{
					cate_id: 3,
					cate_name: 'Logo2',
					isActive:false
				},
				{
					cate_id: 4,
					cate_name: 'Graphic',
					isActive:false
				},
				{
					cate_id: 5,
					cate_name: 'Brand',
					isActive:false
				}
			]
		}
		this.onClickFilterCate = this.onClickFilterCate.bind(this);
	}

	onClickFilterCate(cate_id){
		this.props.getWorkItemByCate(cate_id);
	}

	handleClick(i){
		this.resetAllCateActive();
		const list_cate = this.state.list_cate.slice();
		list_cate[i].isActive = true;
		this.onClickFilterCate(list_cate[i].cate_id);
		this.setState({
			list_cate: list_cate
		});
	}

	resetAllCateActive(){
		const list_cate = this.state.list_cate.slice();
		for (let i = 0; i < list_cate.length; i++) {
			list_cate[i].isActive = false;
		}
		this.setState({
			list_cate: list_cate
		});
	}

	renderCategory_item(i){
		return (
			<Category_item cate_name={this.state.list_cate[i].cate_name} isActive={this.state.list_cate[i].isActive} onClick={() => this.handleClick(i)}/>
		);
	}

	render(){
		return(
			<ul className="menuList">
                {this.renderCategory_item(0)}
                {this.renderCategory_item(1)}
                {this.renderCategory_item(2)}
                {this.renderCategory_item(3)}
                {this.renderCategory_item(4)}
            </ul>
		);
	}
}


export default Category