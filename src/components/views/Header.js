import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render(){
        return (
                
                <div className="page-header navbar navbar-fixed-top">
                    <div className="page-header-inner">
                        <div className="page-logo">
                            <Link to="/">
                            <img src="./assets/admin/layout4/img/logo-light.png" alt="logo" className="logo-default"/>

                            </Link>
                            <div className="menu-toggler sidebar-toggler">
                            </div>
                        </div>
                        <Link to="#" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        </Link>
                        <div className="page-actions">
                            <div className="btn-group">
                                <button type="button" className="btn red-haze btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <span className="hidden-sm hidden-xs">Actions&nbsp;</span><i className="fa fa-angle-down"></i>
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li>
                                        <Link to="#">
                                        <i className="icon-docs"></i> New Post </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                        <i className="icon-tag"></i> New Comment </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                        <i className="icon-share"></i> Share </Link>
                                    </li>
                                    <li className="divider">
                                    </li>
                                    <li>
                                        <Link to="#">
                                        <i className="icon-flag"></i> Comments <span className="badge badge-success">4</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                        <i className="icon-users"></i> Feedbacks <span className="badge badge-danger">2</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="page-top">
                        
                            <form className="search-form" action="extra_search.html" method="GET">
                                <div className="input-group">
                                    <input type="text" className="form-control input-sm" placeholder="Search..." name="query"></input>
                                    <span className="input-group-btn">
                                    <Link to="#" className="btn submit"><i className="icon-magnifier"></i></Link>
                                    </span>
                                </div>
                            </form>

                            <div className="top-menu">
                                <ul className="nav navbar-nav pull-right">
                                    <li className="separator hide">
                                    </li>
                                    
                                    <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <i className="icon-bell"></i>
                                        <span className="badge badge-success">
                                        7 </span>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="external">
                                                <h3><span className="bold">12 pending</span> notifications</h3>
                                                <Link to="extra_profile.html">view all</Link>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list scroller" style={{height: '250px'}} data-handle-color="#637283">
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">just now</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-success">
                                                        <i className="fa fa-plus"></i>
                                                        </span>
                                                        New user registered. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">3 mins</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                        <i className="fa fa-bolt"></i>
                                                        </span>
                                                        Server #12 overloaded. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">10 mins</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                        <i className="fa fa-bell-o"></i>
                                                        </span>
                                                        Server #2 not responding. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">14 hrs</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                        <i className="fa fa-bullhorn"></i>
                                                        </span>
                                                        Application error. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">2 days</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                        <i className="fa fa-bolt"></i>
                                                        </span>
                                                        Database overloaded 68%. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">3 days</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                        <i className="fa fa-bolt"></i>
                                                        </span>
                                                        A user IP blocked. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">4 days</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                        <i className="fa fa-bell-o"></i>
                                                        </span>
                                                        Storage Server #4 not responding dfdfdfd. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">5 days</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                        <i className="fa fa-bullhorn"></i>
                                                        </span>
                                                        System Error. </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="time">9 days</span>
                                                        <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                        <i className="fa fa-bolt"></i>
                                                        </span>
                                                        Storage server failed. </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                            
                                    <li className="separator hide">
                                    </li>
                                    
                                    <li className="dropdown dropdown-extended dropdown-inbox dropdown-dark" id="header_inbox_bar">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <i className="icon-envelope-open"></i>
                                        <span className="badge badge-danger">
                                        4 </span>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="external">
                                                <h3>You have <span className="bold">7 New</span> Messages</h3>
                                                <Link to="inbox.html">view all</Link>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list scroller" style={{height: '275px'}} data-handle-color="#637283">
                                                    <li>
                                                        <Link to="inbox.html?a=view">
                                                        <span className="photo">
                                                        <img src="./assets/admin/layout3/img/avatar2.jpg" className="img-circle" alt=""/>
                                                        </span>
                                                        <span className="subject">
                                                        <span className="from">
                                                        Lisa Wong </span>
                                                        <span className="time">Just Now </span>
                                                        </span>
                                                        <span className="message">
                                                        Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="inbox.html?a=view">
                                                        <span className="photo">
                                                        <img src="./assets/admin/layout3/img/avatar3.jpg" className="img-circle" alt=""/>
                                                        </span>
                                                        <span className="subject">
                                                        <span className="from">
                                                        Richard Doe </span>
                                                        <span className="time">16 mins </span>
                                                        </span>
                                                        <span className="message">
                                                        Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="inbox.html?a=view">
                                                        <span className="photo">
                                                        <img src="./assets/admin/layout3/img/avatar1.jpg" className="img-circle" alt=""/>
                                                        </span>
                                                        <span className="subject">
                                                        <span className="from">
                                                        Bob Nilson </span>
                                                        <span className="time">2 hrs </span>
                                                        </span>
                                                        <span className="message">
                                                        Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="inbox.html?a=view">
                                                        <span className="photo">
                                                        <img src="./assets/admin/layout3/img/avatar2.jpg" className="img-circle" alt=""/>
                                                        </span>
                                                        <span className="subject">
                                                        <span className="from">
                                                        Lisa Wong </span>
                                                        <span className="time">40 mins </span>
                                                        </span>
                                                        <span className="message">
                                                        Vivamus sed auctor 40% nibh congue nibh... </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="inbox.html?a=view">
                                                        <span className="photo">
                                                        <img src="./assets/admin/layout3/img/avatar3.jpg" className="img-circle" alt=""/>
                                                        </span>
                                                        <span className="subject">
                                                        <span className="from">
                                                        Richard Doe </span>
                                                        <span className="time">46 mins </span>
                                                        </span>
                                                        <span className="message">
                                                        Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                            
                                    <li className="separator hide">
                                    </li>
                                    
                                    <li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <i className="icon-calendar"></i>
                                        <span className="badge badge-primary">
                                        3 </span>
                                        </Link>
                                        <ul className="dropdown-menu extended tasks">
                                            <li className="external">
                                                <h3>You have <span className="bold">12 pending</span> tasks</h3>
                                                <Link to="page_todo.html">view all</Link>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list scroller" style={{height: '275px'}} data-handle-color="#637283">
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">New release v1.2 </span>
                                                        <span className="percent">30%</span>
                                                        </span>
                                                        <span className="progress">
                                                        <span style={{width: '40%'}} className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">40% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">Application deployment</span>
                                                        <span className="percent">65%</span>
                                                        </span>
                                                        <span className="progress">
                                                        <span style={{width: '65%'}} className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">65% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">Mobile app release</span>
                                                        <span className="percent">98%</span>
                                                        </span>
                                                        <span className="progress">
                                                        <span style={{width: '98%'}} className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">98% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">Database migration</span>
                                                        <span className="percent">10%</span>
                                                        </span>
                                                        <span className="progress">
                                                        <span style={{width: '10%'}} className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">10% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">Web server upgrade</span>
                                                        <span className="percent">58%</span>
                                                        </span>
                                                        <span className="progress">
                                                        <span style={{width: '58%'}} className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">58% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">Mobile development</span>
                                                        <span className="percent">85%</span>
                                                        </span>
                                                        <span className="progress">
                                                        <span style={{width: '85%'}} className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">85% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <span className="task">
                                                        <span className="desc">New UI release</span>
                                                        <span className="percent">38%</span>
                                                        </span>
                                                        <span className="progress progress-striped">
                                                        <span style={{width: '38%'}} className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">38% Complete</span></span>
                                                        </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                            
                                    <li className="dropdown dropdown-user dropdown-dark">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <span className="username username-hide-on-mobile">
                                        Nick </span>
                        
                                        <img alt="" className="img-circle" src="./assets/admin/layout4/img/avatar9.jpg"/>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-default">
                                            <li>
                                                <Link to="extra_profile.html">
                                                <i className="icon-user"></i> My Profile </Link>
                                            </li>
                                            <li>
                                                <Link to="page_calendar.html">
                                                <i className="icon-calendar"></i> My Calendar </Link>
                                            </li>
                                            <li>
                                                <Link to="inbox.html">
                                                <i className="icon-envelope-open"></i> My Inbox <span className="badge badge-danger">
                                                3 </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="page_todo.html">
                                                <i className="icon-rocket"></i> My Tasks <span className="badge badge-success">
                                                7 </span>
                                                </Link>
                                            </li>
                                            <li className="divider">
                                            </li>
                                            <li>
                                                <Link to="extra_lock.html">
                                                <i className="icon-lock"></i> Lock Screen </Link>
                                            </li>
                                            <li>
                                                <Link to="login.html">
                                                <i className="icon-key"></i> Log Out </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="dropdown dropdown-extended quick-sidebar-toggler">
                                        <span className="sr-only">Toggle Quick Sidebar</span>
                                        <i className="icon-logout"></i>
                                    </li>
                            
                                </ul>
                            </div>
                            
                        </div>

                    </div>
                </div>

        )
    }
}