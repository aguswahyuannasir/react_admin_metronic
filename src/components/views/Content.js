import React, {Component} from 'react';
import { Route } from "react-router-dom";

import dashboard from '../dashboard/Dashboard';
import ecommerce_dashboard from '../ecommerce/Ecommerce_dashboard';
import ecommerce_orders from '../ecommerce/Ecommerce_orders';
import basic_datatables from '../datatables/Basic_datatables';
import tree_datatables from '../datatables/Tree_datatables';
import responsive_datatables from '../datatables/Responsive_datatables';
import managed_datatables from '../datatables/Managed_datatables';
import arm_chart from '../charts/Arm_chart';
import flot_chart from '../charts/Flot_chart';
import general_components from '../features/General_components';
import buttons from '../features/Buttons';
import font_icons from '../features/Font_icons';
import flat_ui_colors from '../features/Flat_ui_colors';
import nestable from '../features/Nestable';





export default class Content extends Component {
    
    render(){

        return (
            
            <React.Fragment>
                <Route exact path="/" component={dashboard}/>
                <Route path="/ecommerce_dashboard" component={ecommerce_dashboard} />
                <Route path="/ecommerce_orders" component={ecommerce_orders} />
                <Route path="/basic_datatables" component={basic_datatables} />
                <Route path="/tree_datatables" component={tree_datatables} />
                <Route path="/responsive_datatables" component={responsive_datatables} />
                <Route path="/managed_datatables" component={managed_datatables} />
                <Route path="/arm_chart" component={arm_chart} />
                <Route path="/flot_chart" component={flot_chart} />
                <Route path="/general_components" component={general_components} />
                <Route path="/buttons" component={buttons} />
                <Route path="/font_icons" component={font_icons} />
                <Route path="/flat_ui_colors" component={flat_ui_colors} />
                <Route path="/nestable" component={nestable} />
            </React.Fragment>
        )
    }
}