import React from "react"
import Category from "./ourwork/category"
import Work_item from "./ourwork/work_item"

class OurWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_active_item: Array(1,2,3,4,5,6),
            list_cate_item: {
                "1":[1,2,3,4,5,6],
                "2":[1,2],
                "3":[3,4],
                "4":[5],
                "5":[6]
            }
        };
    }
    getWorkItemByCate(cate_id) {
        const list_cate_item = this.state.list_cate_item;
        const list_active_item = list_cate_item[cate_id];
        this.setState({
           list_active_item: list_active_item
        });
    }

    handleCheck(val) {
        return this.state.list_active_item.some(item => val.id === item);
    }

    render(){
        const list_item = [
            {
                'id': 1,
                img_link: 'http://nhim.design/upload/post/img_project/30092019232923.jpg',
                name: 'Logo Hoacons',
                project_name: 'Hoacons'
            },
            {
                'id': 2,
                img_link: 'http://nhim.design/upload/post/img_project/20082019142130.jpg',
                name: 'CPA Paint',
                project_name: 'CPA'
            },
            {
                'id': 3,
                img_link: 'http://nhim.design/upload/post/img_project/01102019002409.png',
                name: 'TracF logo',
                project_name: 'TracF Furniture'
            },
            {
                'id': 4,
                img_link: 'http://nhim.design/upload/post/img_project/06102019230003.png',
                name: 'Wayfinding system',
                project_name: 'Cantavil Premier'
            },
            {
                'id': 5,
                img_link: 'http://nhim.design/upload/post/img_project/16112019184612.png',
                name: 'Logistics',
                project_name: 'Huynh Thy'
            },
            {
                'id': 6,
                img_link: 'http://nhim.design/upload/post/img_project/16112019185339.png',
                name: 'Logo Logistics',
                project_name: 'Mass Carrier'
            }
        ];
        return (
            <div className="row divWorks" id="work">
                <div className="col-xs-12 titleGeneral">Our works</div>
                <div className="col-xs-12">
                    <Category getWorkItemByCate={(cate_id) => this.getWorkItemByCate(cate_id)}/>
                </div>
                <div className="col-xs-12">
                    <div className="listProject">
                        {
                            list_item.map((work_item,i) => { 
                                if(this.handleCheck(work_item)){
                                    return(
                                        <Work_item img_link={work_item.img_link} name={work_item.name} project_name={work_item.project_name} key={i} />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
  
}

export default OurWork
