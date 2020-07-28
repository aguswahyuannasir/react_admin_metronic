import React, {Component} from 'react';
import {NavLink,Link} from "react-router-dom";


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          menu: [],
          sub_menu: [],
          response: {}
        }
    }

    componentDidMount() {
      
      fetch('http://localhost/api/index.php/metronic/api/menu')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            menu: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )

      fetch('http://localhost/api/index.php/metronic/api/sub_menu')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            sub_menu: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )

    }


    side_menu() {
        const { menu, sub_menu} = this.state;
        
        return menu.map((val,i) => (
                                  
            <li key={i}>
                {
                    val.MENU_CONTROLLER === 'true' ?
                    <React.Fragment>
                        <Link to="">
                        <i className={"icon-"+val.MENU_ICON}></i>
                        <span className="title">{val.MENU_NAME}</span>
                        <span className="arrow "></span>
                        </Link>
                        <ul className="sub-menu">
                        
                            {sub_menu.map((sub_val,i) => (
                                sub_val.MENU_PARENT === val.MENU_ID ?
                                    <li key={i}>
                                        <NavLink to={"/"+sub_val.MENU_CONTROLLER}>
                                            <i className={"icon-"+sub_val.MENU_ICON}></i>
                                            {sub_val.MENU_NAME}
                                        </NavLink>
                                    </li>
                                :
                                <React.Fragment key={i}>
                                 
                                </React.Fragment>
                              
                                   
                            ))}

                        </ul>
                    </React.Fragment>
                    
                    :

                    <NavLink to={"/"+val.MENU_CONTROLLER}>
                        <i className={"icon-"+val.MENU_ICON}></i>
                        <span className="title">{val.MENU_NAME}</span>
                    </NavLink>
                }
            </li>
            ))
    }


    render(){

        return (
                <div className="page-sidebar-wrapper">
                    <div className="page-sidebar navbar-collapse collapse">
                        <ul className="page-sidebar-menu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                            
                            {this.side_menu()}
                
                            
                        </ul>
                    </div>
                </div>
        )
    }
}