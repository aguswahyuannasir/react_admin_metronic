import React, {Component} from 'react';
import {Link} from "react-router-dom";

import '.../../../public/assets/global/plugins/bootstrap-gtreetable/bootstrap-gtreetable.min.js';


export default class Tree_datatables extends Component {

	componentDidMount() {
		window.TableTree.init();
	}
	
    render(){
		
        return (
			<div className="page-content-wrapper">
				<div className="page-content">
					<div className="modal fade" id="portlet-config" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
									<h4 className="modal-title">Modal title</h4>
								</div>
								<div className="modal-body">
									Widget settings form goes here
								</div>
								<div className="modal-footer">
									<button type="button" className="btn blue">Save changes</button>
									<button type="button" className="btn default" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>

					<div className="page-head">
						<div className="page-title">
							<h1>Tree Datatables <small>tree table samples</small></h1>
						</div>
						
						<div className="page-toolbar">
							
							<div className="btn-group btn-theme-panel">
								<Link to="#" className="btn dropdown-toggle" data-toggle="dropdown">
								<i className="icon-settings"></i>
								</Link>
								<div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
									<div className="row">
										<div className="col-md-4 col-sm-4 col-xs-12">
											<h3>THEME</h3>
											<ul className="theme-colors">
												<li className="theme-color theme-color-default active" data-theme="default">
													<span className="theme-color-view"></span>
													<span className="theme-color-name">Dark Header</span>
												</li>
												<li className="theme-color theme-color-light" data-theme="light">
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
					
					<ul className="page-breadcrumb breadcrumb">
						<li>
							<Link to="index.html">Home</Link>
							<i className="fa fa-circle"></i>
						</li>
						<li>
							<Link to="#">Data Tables</Link>
							<i className="fa fa-circle"></i>
						</li>
						<li>
							<Link to="#">Tree Datatables</Link>
						</li>
					</ul>
					
					<div className="row">
						<div className="col-md-12">
							<div className="note note-success note-bordered">
								<p>
									GTreeTable is extension of Tweeter Bootstrap 3 framework, which allows to use tree structure inside HTML table. Full documentation is available <Link to="https://github.com/gilek/bootstrap-gtreetable" target="_blank">here</Link>
								</p>
							</div>
							<div className="portlet light">
								<div className="portlet-title">
									<div className="caption font-purple-plum">
										<i className="icon-speech font-purple-plum"></i>
										<span className="caption-subject bold uppercase"> Demo 2</span>
										<span className="caption-helper">right click inside the box</span>
									</div>
									<div className="actions">
										<div className="btn-group">
											<Link className="btn btn-circle btn-default btn-sm" to="#" data-toggle="dropdown">
											<i className="fa fa-user"></i> User <i className="fa fa-angle-down"></i>
											</Link>
											<ul className="dropdown-menu" role="menu">
												<li>
													<Link to="#">
													<i className="icon-user"></i> New User </Link>
												</li>
												<li>
													<Link to="#">
													<i className="icon-present"></i> New Event <span className="badge badge-success">4</span>
													</Link>
												</li>
												<li>
													<Link to="#">
													<i className="icon-basket"></i> New order </Link>
												</li>
												<li className="divider">
												</li>
												<li>
													<Link to="#">
													<i className="icon-flag"></i> Pending Orders <span className="badge badge-danger">4</span>
													</Link>
												</li>
												<li>
													<Link to="#">
													<i className="icon-users"></i> Pending Users <span className="badge badge-warning">12</span>
													</Link>
												</li>
											</ul>
										</div>
										<Link to="#" className="btn btn-circle red-sunglo btn-sm">
										<i className="fa fa-plus"></i> Add </Link>
										<Link className="btn btn-circle btn-icon-only btn-default fullscreen" to="#" data-original-title="" title="">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<table className="table table-hover table-light gtreetable" id="gtreetable">
									<thead>
									<tr>
										<th>
											Nested Tree Table
										</th>
									</tr>
									</thead>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
		)
    }
}
