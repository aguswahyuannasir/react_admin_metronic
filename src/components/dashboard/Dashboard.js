import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Dashboard extends Component {

    componentDidMount() {
    
        window.Index.initCharts();
        
	}

    render(){
        return (
                <div className="page-content-wrapper">
		            <div className="page-content">
                            <div className="page-head">
			
                                <div className="page-title">
                                    <h1>Dashboard <small>statistics & reports</small></h1>
                                </div>
                            
                                <div className="page-toolbar">
                        
                                    <div className="btn-group btn-theme-panel">
                                        <Link to="" className="btn dropdown-toggle" data-toggle="dropdown">
                                        <i className="icon-settings"></i>
                                        </Link>
                                        <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <h3>THEME</h3>
                                                    <ul className="theme-colors">
                                                        <li className="theme-color theme-color-default" data-theme="default">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Dark Header</span>
                                                        </li>
                                                        <li className="theme-color theme-color-light active" data-theme="light">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Light Header</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="col-md-8 col-sm-8 col-xs-12 seperator">
                                                    <h3>LAYOUT</h3>
                                                    <ul className="theme-settings">
                                                        <li>
                                                            Theme Style
                                                            <select defaultValue={'rounded'} className="layout-style-option form-control input-small input-sm">
                                                                <option value="square">Square corners</option>
                                                                <option value="rounded">Rounded corners</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Layout
                                                            <select defaultValue={'fluid'} className="layout-option form-control input-small input-sm">
                                                                <option value="fluid">Fluid</option>
                                                                <option value="boxed">Boxed</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Header
                                                            <select defaultValue={'fixed'} className="page-header-option form-control input-small input-sm">
                                                                <option value="fixed">Fixed</option>
                                                                <option value="default">Default</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Top Dropdowns
                                                            <select defaultValue={'dark'} className="page-header-top-dropdown-style-option form-control input-small input-sm">
                                                                <option value="light">Light</option>
                                                                <option value="dark">Dark</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Sidebar Mode
                                                            <select defaultValue={'default'} className="sidebar-option form-control input-small input-sm">
                                                                <option value="fixed">Fixed</option>
                                                                <option value="default">Default</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Sidebar Menu
                                                            <select defaultValue={'accordion'} className="sidebar-menu-option form-control input-small input-sm">
                                                                <option value="accordion">Accordion</option>
                                                                <option value="hover">Hover</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Sidebar Position
                                                            <select defaultValue={'left'} className="sidebar-pos-option form-control input-small input-sm">
                                                                <option value="left">Left</option>
                                                                <option value="right">Right</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            Footer
                                                            <select defaultValue={'default'} className="page-footer-option form-control input-small input-sm">
                                                                <option value="fixed">Fixed</option>
                                                                <option value="default">Default</option>
                                                            </select>
                                                        </li>
                                                    </ul>
                                                </div>
                                        
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                        
                            </div>

                            <ul className="page-breadcrumb breadcrumb hide">
                                <li>
                                    <Link to="">Home</Link><i className="fa fa-circle"></i>
                                </li>
                                <li className="active">
                                    Dashboard
                                </li>
                            </ul>

                            <div className="row margin-top-10">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="dashboard-stat2">
                                        <div className="display">
                                            <div className="number">
                                                <h3 className="font-green-sharp">7800<small className="font-green-sharp">$</small></h3>
                                                <small>TOTAL PROFIT</small>
                                            </div>
                                            <div className="icon">
                                                <i className="icon-pie-chart"></i>
                                            </div>
                                        </div>
                                        <div className="progress-info">
                                            <div className="progress">
                                                <span style={{width : '76%'}} className="progress-bar progress-bar-success green-sharp">
                                                <span className="sr-only">76% progress</span>
                                                </span>
                                            </div>
                                            <div className="status">
                                                <div className="status-title">
                                                    progress
                                                </div>
                                                <div className="status-number">
                                                    76%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="dashboard-stat2">
                                        <div className="display">
                                            <div className="number">
                                                <h3 className="font-red-haze">1349</h3>
                                                <small>NEW FEEDBACKS</small>
                                            </div>
                                            <div className="icon">
                                                <i className="icon-like"></i>
                                            </div>
                                        </div>
                                        <div className="progress-info">
                                            <div className="progress">
                                                <span style={{width: '85%'}} className="progress-bar progress-bar-success red-haze">
                                                <span className="sr-only">85% change</span>
                                                </span>
                                            </div>
                                            <div className="status">
                                                <div className="status-title">
                                                    change
                                                </div>
                                                <div className="status-number">
                                                    85%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="dashboard-stat2">
                                        <div className="display">
                                            <div className="number">
                                                <h3 className="font-blue-sharp">567</h3>
                                                <small>NEW ORDERS</small>
                                            </div>
                                            <div className="icon">
                                                <i className="icon-basket"></i>
                                            </div>
                                        </div>
                                        <div className="progress-info">
                                            <div className="progress">
                                                <span style={{width: '45%'}} className="progress-bar progress-bar-success blue-sharp">
                                                <span className="sr-only">45% grow</span>
                                                </span>
                                            </div>
                                            <div className="status">
                                                <div className="status-title">
                                                    grow
                                                </div>
                                                <div className="status-number">
                                                    45%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="dashboard-stat2">
                                        <div className="display">
                                            <div className="number">
                                                <h3 className="font-purple-soft">276</h3>
                                                <small>NEW USERS</small>
                                            </div>
                                            <div className="icon">
                                                <i className="icon-user"></i>
                                            </div>
                                        </div>
                                        <div className="progress-info">
                                            <div className="progress">
                                                <span style={{width:'57%'}} className="progress-bar progress-bar-success purple-soft">
                                                <span className="sr-only">56% change</span>
                                                </span>
                                            </div>
                                            <div className="status">
                                                <div className="status-title">
                                                    change
                                                </div>
                                                <div className="status-number">
                                                    57%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 col-sm-12">

                                    <div className="portlet light ">
                                        <div className="portlet-title">
                                            <div className="caption caption-md">
                                                <i className="icon-bar-chart theme-font-color hide"></i>
                                                <span className="caption-subject theme-font-color bold uppercase">Sales Summary</span>
                                                <span className="caption-helper hide">weekly stats...</span>
                                            </div>
                                            <div className="actions">
                                                <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                    <label className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                                                    <input type="radio" name="options" className="toggle" id="option1"></input>Today</label>
                                                    <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                    <input type="radio" name="options" className="toggle" id="option2"></input>Week</label>
                                                    <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                    <input type="radio" name="options" className="toggle" id="option2"></input>Month</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div className="row list-separated">
                                                <div className="col-md-3 col-sm-3 col-xs-6">
                                                    <div className="font-grey-mint font-sm">
                                                            Total Sales
                                                    </div>
                                                    <div className="uppercase font-hg font-red-flamingo">
                                                            13,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xs-6">
                                                    <div className="font-grey-mint font-sm">
                                                            Revenue
                                                    </div>
                                                    <div className="uppercase font-hg theme-font-color">
                                                            4,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xs-6">
                                                    <div className="font-grey-mint font-sm">
                                                            Expenses
                                                    </div>
                                                    <div className="uppercase font-hg font-purple">
                                                            11,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xs-6">
                                                    <div className="font-grey-mint font-sm">
                                                            Growth
                                                    </div>
                                                    <div className="uppercase font-hg font-blue-sharp">
                                                            9,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="list-separated list-inline-xs hide">
                                                <li>
                                                    <div className="font-grey-mint font-sm">
                                                            Total Sales
                                                    </div>
                                                    <div className="uppercase font-hg font-red-flamingo">
                                                            13,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </li>
                                                <li>
                                                </li>
                                                <li className="border">
                                                    <div className="font-grey-mint font-sm">
                                                            Revenue
                                                    </div>
                                                    <div className="uppercase font-hg theme-font-color">
                                                            4,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </li>
                                                <li className="divider">
                                                </li>
                                                <li>
                                                    <div className="font-grey-mint font-sm">
                                                            Expenses
                                                    </div>
                                                    <div className="uppercase font-hg font-purple">
                                                            11,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </li>
                                                <li className="divider">
                                                </li>
                                                <li>
                                                    <div className="font-grey-mint font-sm">
                                                            Growth
                                                    </div>
                                                    <div className="uppercase font-hg font-blue-sharp">
                                                            9,760 <span className="font-lg font-grey-mint">$</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div id="sales_statistics" className="portlet-body-morris-fit morris-chart" style={{height: '260px'}}>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 col-sm-12">

                                    <div className="portlet light ">
                                        <div className="portlet-title">
                                            <div className="caption caption-md">
                                                <i className="icon-bar-chart theme-font-color hide"></i>
                                                <span className="caption-subject theme-font-color bold uppercase">Member Activity</span>
                                                <span className="caption-helper hide">weekly stats...</span>
                                            </div>
                                            <div className="actions">
                                                <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                    <label className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                                                    <input type="radio" name="options" className="toggle" id="option1"></input>Today</label>
                                                    <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                    <input type="radio" name="options" className="toggle" id="option2"></input>Week</label>
                                                    <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                    <input type="radio" name="options" className="toggle" id="option2"></input>Month</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="portlet-body">
                                            <div className="row number-stats margin-bottom-30">
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <div className="stat-left">
                                                        <div className="stat-chart">
                                                            <div id="sparkline_bar"></div>
                                                        </div>
                                                        <div className="stat-number">
                                                            <div className="title">
                                                                    Total
                                                            </div>
                                                            <div className="number">
                                                                    2460
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <div className="stat-right">
                                                        <div className="stat-chart">
                                                            <div id="sparkline_bar2"></div>
                                                        </div>
                                                        <div className="stat-number">
                                                            <div className="title">
                                                                    New
                                                            </div>
                                                            <div className="number">
                                                                    719
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-scrollable table-scrollable-borderless">
                                                <table className="table table-hover table-light">
                                                <thead>
                                                <tr className="uppercase">
                                                    <th colSpan="2">
                                                            MEMBER
                                                    </th>
                                                    <th>
                                                            Earnings
                                                    </th>
                                                    <th>
                                                            CASES
                                                    </th>
                                                    <th>
                                                            CLOSED
                                                    </th>
                                                    <th>
                                                            RATE
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fit">
                                                            <img className="user-pic" src="./assets/admin/layout3/img/avatar4.jpg" alt=""></img>
                                                        </td>
                                                        <td>
                                                            <Link to="" className="primary-link">Brain</Link>
                                                        </td>
                                                        <td>
                                                                $345
                                                        </td>
                                                        <td>
                                                                45
                                                        </td>
                                                        <td>
                                                                124
                                                        </td>
                                                        <td>
                                                            <span className="bold theme-font-color">80%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fit">
                                                            <img className="user-pic" src="./assets/admin/layout3/img/avatar5.jpg" alt=""></img>
                                                        </td>
                                                        <td>
                                                            <Link to="" className="primary-link">Nick</Link>
                                                        </td>
                                                        <td>
                                                                $560
                                                        </td>
                                                        <td>
                                                                12
                                                        </td>
                                                        <td>
                                                                24
                                                        </td>
                                                        <td>
                                                            <span className="bold theme-font-color">67%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fit">
                                                            <img className="user-pic" src="./assets/admin/layout3/img/avatar6.jpg" alt=""></img>
                                                        </td>
                                                        <td>
                                                            <Link to="" className="primary-link">Tim</Link>
                                                        </td>
                                                        <td>
                                                                $1,345
                                                        </td>
                                                        <td>
                                                                450
                                                        </td>
                                                        <td>
                                                                46
                                                        </td>
                                                        <td>
                                                            <span className="bold theme-font-color">98%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <td className="fit">
                                                        <img className="user-pic" src="./assets/admin/layout3/img/avatar7.jpg" alt=""></img>
                                                    </td>
                                                    <td>
                                                        <Link to="" className="primary-link">Tom</Link>
                                                    </td>
                                                    <td>
                                                            $645
                                                    </td>
                                                    <td>
                                                            50
                                                    </td>
                                                    <td>
                                                            89
                                                    </td>
                                                    <td>
                                                        <span className="bold theme-font-color">58%</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="portlet light tasks-widget">
                                        <div className="portlet-title">
                                            <div className="caption caption-md">
                                                <i className="icon-bar-chart theme-font-color hide"></i>
                                                <span className="caption-subject theme-font-color bold uppercase">TASKS</span>
                                                <span className="caption-helper">16 pending</span>
                                            </div>
                                            <div className="inputs">
                                                <div className="portlet-input input-small input-inline">
                                                    <div className="input-icon right">
                                                        <i className="icon-magnifier"></i>
                                                        <input type="text" className="form-control form-control-solid" placeholder="search..."></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div className="task-content">
                                                <div className="scroller" style={{height: "282px"} }data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                    <ul className="task-list">
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="hidden" value="1" name="test"/>
                                                                <input type="checkbox" className="liChild" value="2" name="test"/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Present 2013 Year IPO Statistics at Board Meeting </span>
                                                                <span className="label label-sm label-success">Company</span>
                                                                <span className="task-bell">
                                                                <i className="fa fa-bell-o"></i>
                                                                </span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Hold An Interview for Marketing Manager Position </span>
                                                                <span className="label label-sm label-danger">Marketing</span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                AirAsia Intranet System Project Internal Meeting </span>
                                                                <span className="label label-sm label-success">AirAsia</span>
                                                                <span className="task-bell">
                                                                <i className="fa fa-bell-o"></i>
                                                                </span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Technical Management Meeting </span>
                                                                <span className="label label-sm label-warning">Company</span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Kick-off Company CRM Mobile App Development </span>
                                                                <span className="label label-sm label-info">Internal Products</span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Prepare Commercial Offer For SmartVision Website Rewamp </span>
                                                                <span className="label label-sm label-danger">SmartVision</span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Sign-Off The Comercial Agreement With AutoSmart </span>
                                                                <span className="label label-sm label-default">AutoSmart</span>
                                                                <span className="task-bell">
                                                                <i className="fa fa-bell-o"></i>
                                                                </span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                Company Staff Meeting </span>
                                                                <span className="label label-sm label-success">Cruise</span>
                                                                <span className="task-bell">
                                                                <i className="fa fa-bell-o"></i>
                                                                </span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="last-line">
                                                            <div className="task-checkbox">
                                                                <input type="checkbox" className="liChild" value=""/>
                                                            </div>
                                                            <div className="task-title">
                                                                <span className="task-title-sp">
                                                                KeenThemes Investment Discussion </span>
                                                                <span className="label label-sm label-warning">KeenThemes </span>
                                                            </div>
                                                            <div className="task-config">
                                                                <div className="task-config-btn btn-group">
                                                                    <Link className="btn btn-xs default" to="" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-check"></i> Complete </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-pencil"></i> Edit </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="">
                                                                            <i className="fa fa-trash-o"></i> Cancel </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="task-footer">
                                                <div className="btn-arrow-link pull-right">
                                                    <Link to="">See All Tasks</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="portlet light">
                                        <div className="portlet-title">
                                            <div className="caption caption-md">
                                                <i className="icon-bar-chart theme-font-color hide"></i>
                                                <span className="caption-subject theme-font-color bold uppercase">Customer Support</span>
                                                <span className="caption-helper">45 pending</span>
                                            </div>
                                            <div className="inputs">
                                                <div className="portlet-input input-inline input-small ">
                                                    <div className="input-icon right">
                                                        <i className="icon-magnifier"></i>
                                                        <input type="text" className="form-control form-control-solid" placeholder="search..."></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div className="scroller" style={{height: "305px"}} data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                <div className="general-item-list">
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar4.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Nick Larson</Link>
                                                                <span className="item-label">3 hrs ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-success"></span> Open</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar3.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Mark</Link>
                                                                <span className="item-label">5 hrs ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-warning"></span> Pending</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat tincidunt ut laoreet.
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar6.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Nick Larson</Link>
                                                                <span className="item-label">8 hrs ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-primary"></span> Closed</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar7.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Nick Larson</Link>
                                                                <span className="item-label">12 hrs ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-danger"></span> Pending</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar9.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Richard Stone</Link>
                                                                <span className="item-label">2 days ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-danger"></span> Open</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ut laoreet dolore magna aliquam erat volutpat.
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar8.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Dan</Link>
                                                                <span className="item-label">3 days ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-warning"></span> Pending</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <img className="item-pic" src="./assets/admin/layout3/img/avatar2.jpg" alt=""></img>
                                                                <Link to="" className="item-name primary-link">Larry</Link>
                                                                <span className="item-label">4 hrs ago</span>
                                                            </div>
                                                            <span className="item-status"><span className="badge badge-empty badge-success"></span> Open</span>
                                                        </div>
                                                        <div className="item-body">
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="portlet light ">
                                        <div className="portlet-title">
                                            <div className="caption caption-md">
                                                <i className="icon-bar-chart theme-font-color hide"></i>
                                                <span className="caption-subject theme-font-color bold uppercase">Regional Stats</span>
                                            </div>
                                            <div className="actions">
                                                <Link className="btn btn-circle btn-icon-only btn-default" to="">
                                                <i className="icon-cloud-upload"></i>
                                                </Link>
                                                <Link className="btn btn-circle btn-icon-only btn-default" to="">
                                                <i className="icon-wrench"></i>
                                                </Link>
                                                <Link className="btn btn-circle btn-icon-only btn-default fullscreen" to="">
                                                </Link>
                                                <Link className="btn btn-circle btn-icon-only btn-default" to="">
                                                <i className="icon-trash"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div id="region_statistics_loading">
                                                <img src="./assets/admin/layout/img/loading.gif" alt="loading"/>
                                            </div>
                                            <div id="region_statistics_content" className="display-none">
                                                <div className="btn-toolbar margin-bottom-10">
                                                    <div className="btn-group btn-group-circle" data-toggle="buttons">
                                                        <Link to="" className="btn grey-salsa btn-sm active">
                                                        Users </Link>
                                                        <Link to="" className="btn grey-salsa btn-sm">
                                                        Orders </Link>
                                                    </div>
                                                    <div className="btn-group pull-right">
                                                        <Link to="" className="btn btn-circle grey-salsa btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                        Select Region <span className="fa fa-angle-down">
                                                        </span>
                                                        </Link>
                                                        <ul className="dropdown-menu pull-right">
                                                            <li>
                                                                <Link to="" id="regional_stat_world">
                                                                World </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="" id="regional_stat_usa">
                                                                USA </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="" id="regional_stat_europe">
                                                                Europe </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="" id="regional_stat_russia">
                                                                Russia </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="" id="regional_stat_germany">
                                                                Germany </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="vmap_world" className="vmaps display-none">
                                                </div>
                                                <div id="vmap_usa" className="vmaps display-none">
                                                </div>
                                                <div id="vmap_europe" className="vmaps display-none">
                                                </div>
                                                <div id="vmap_russia" className="vmaps display-none">
                                                </div>
                                                <div id="vmap_germany" className="vmaps display-none">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="portlet light">
                                        <div className="portlet-title tabbable-line">
                                            <div className="caption caption-md">
                                                <i className="icon-globe theme-font-color hide"></i>
                                                <span className="caption-subject theme-font-color bold uppercase">Feeds</span>
                                            </div>
                                            <ul className="nav nav-tabs">
                                                <li className="active">
                                                    <Link to="#tab_1_1" data-toggle="tab">
                                                    System </Link>
                                                </li>
                                                <li>
                                                    <Link to="#tab_1_2" data-toggle="tab">
                                                    Activities </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portlet-body">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_1_1">
                                                    <div className="scroller" style={{height: "337px"}} data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                        <ul className="feeds">
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                You have 4 pending tasks. <span className="label label-sm label-info">
                                                                                Take action <i className="fa fa-share"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New version v1.4 just lunched!
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        20 mins
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-danger">
                                                                                <i className="fa fa-bolt"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Database server #12 overloaded. Please fix the issue.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        24 mins
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-info">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New order received and pending for process.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        30 mins
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New payment refund and pending approval.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        40 mins
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-warning">
                                                                                <i className="fa fa-plus"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New member registered. Pending approval.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        1.5 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Web server hardware needs to be upgraded. <span className="label label-sm label-default ">
                                                                                Overdue </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        2 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-default">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Prod01 database server is overloaded 90%.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        3 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-warning">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New group created. Pending manager review.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        5 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-info">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Order payment failed.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        18 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-default">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New application received.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        21 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-info">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Dev90 web server restarted. Pending overall system check.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        22 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-default">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New member registered. Pending approval
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        21 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-info">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                L45 Network failure. Schedule maintenance.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        22 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-default">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Order canceled with failed payment.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        21 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-info">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Web-A2 clound instance created. Schedule full scan.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        22 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-default">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Member canceled. Schedule account review.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        21 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-info">
                                                                                <i className="fa fa-bullhorn"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New order received. Please take care of it.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        22 hours
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab_1_2">
                                                    <div className="scroller" style={{height: "337px"}} data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                        <ul className="feeds">
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New order received
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        10 mins
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-danger">
                                                                                <i className="fa fa-bolt"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                Order #24DOP4 has been rejected. <span className="label label-sm label-danger ">
                                                                                Take action <i className="fa fa-share"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        24 mins
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
}

