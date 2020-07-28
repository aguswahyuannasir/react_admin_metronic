import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    
    openTab(url) {
		window.open(url);
    }
    
    render(){
        return (
            <div className="page-footer">
                <div className="page-footer-inner">
                    2014 &copy; Metronic by keenthemes. <Link to="#" onClick={ () => this.openTab('http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes') } title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</Link>
                </div>
                <div className="scroll-to-top">
                    <i className="icon-arrow-up"></i>
                </div>
            </div>
        )
    }
}