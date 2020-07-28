import React, {Component} from 'react';
import {Link} from "react-router-dom";



export default class Managed_datatables extends Component {

	componentDidMount() {
		
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
							<h1>Managed Datatables <small>managed datatable samples</small></h1>
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
							<Link to="#">Managed Datatables</Link>
						</li>
					</ul>

					<div className="row">
						<div className="col-md-12">
							<div className="portlet box grey-cascade">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-globe"></i>Managed Table
									</div>
									<div className="tools">
										<Link to="#" className="collapse">
										</Link>
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
										<Link to="#" className="remove">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<div className="table-toolbar">
										<div className="row">
											<div className="col-md-6">
												<div className="btn-group">
													<button id="sample_editable_1_new" className="btn green">
													Add New <i className="fa fa-plus"></i>
													</button>
												</div>
											</div>
											<div className="col-md-6">
												<div className="btn-group pull-right">
													<button className="btn dropdown-toggle" data-toggle="dropdown">Tools <i className="fa fa-angle-down"></i>
													</button>
													<ul className="dropdown-menu pull-right">
														<li>
															<Link to="#">
															Print </Link>
														</li>
														<li>
															<Link to="#">
															Save as PDF </Link>
														</li>
														<li>
															<Link to="#">
															Export to Excel </Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<table className="table table-striped table-bordered table-hover" id="sample_1">
									<thead>
									<tr>
										<th className="table-checkbox">
											<input type="checkbox" className="group-checkable" data-set="#sample_1 .checkboxes"/>
										</th>
										<th>
											Username
										</th>
										<th>
											Email
										</th>
										<th>
											Points
										</th>
										<th>
											Joined
										</th>
										<th>
											Status
										</th>
									</tr>
									</thead>
									<tbody>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											shuxer
										</td>
										<td>
											<Link to="mailto:shuxer@gmail.com">
											shuxer@gmail.com </Link>
										</td>
										<td>
											120
										</td>
										<td className="center">
											12 Jan 2012
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											looper
										</td>
										<td>
											<Link to="mailto:looper90@gmail.com">
											looper90@gmail.com </Link>
										</td>
										<td>
											120
										</td>
										<td className="center">
											12.12.2011
										</td>
										<td>
											<span className="label label-sm label-warning">
											Suspended </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@yahoo.com">
											userwow@yahoo.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											user1wow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											restest
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											foopl
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											weep
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											coop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											pppol
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											test
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											test
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											goop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											weep
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											15.11.2011
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											toopl
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											16.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											9.12.2012
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											tes21t
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											14.12.2012
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											fop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											13.11.2010
										</td>
										<td>
											<span className="label label-sm label-warning">
											Suspended </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											kop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											17.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											vopl
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.11.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											wap
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											12.12.2012
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											test
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											19.12.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											toop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											17.12.2010
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											weep
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											20
										</td>
										<td className="center">
											15.11.2011
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-user"></i>Table
									</div>
									<div className="actions">
										<Link to="#" className="btn btn-default btn-sm">
										<i className="fa fa-pencil"></i> Add </Link>
										<div className="btn-group">
											<Link className="btn btn-default btn-sm" to="#" data-toggle="dropdown">
											<i className="fa fa-cogs"></i> Tools <i className="fa fa-angle-down"></i>
											</Link>
											<ul className="dropdown-menu pull-right">
												<li>
													<Link to="#">
													<i className="fa fa-pencil"></i> Edit </Link>
												</li>
												<li>
													<Link to="#">
													<i className="fa fa-trash-o"></i> Delete </Link>
												</li>
												<li>
													<Link to="#">
													<i className="fa fa-ban"></i> Ban </Link>
												</li>
												<li className="divider">
												</li>
												<li>
													<Link to="#">
													<i className="i"></i> Make admin </Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="portlet-body">
									<table className="table table-striped table-bordered table-hover" id="sample_2">
									<thead>
									<tr>
										<th className="table-checkbox">
											<input type="checkbox" className="group-checkable" data-set="#sample_2 .checkboxes"/>
										</th>
										<th>
											Username
										</th>
										<th>
											Email
										</th>
										<th>
											Status
										</th>
									</tr>
									</thead>
									<tbody>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											shuxer
										</td>
										<td>
											<Link to="mailto:shuxer@gmail.com">
											shuxer@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											looper
										</td>
										<td>
											<Link to="mailto:looper90@gmail.com">
											looper90@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-warning">
											Suspended </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@yahoo.com">
											userwow@yahoo.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											user1wow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											restest
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											foopl
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											weep
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											coop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											pppol
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											test
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											test
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>Table
									</div>
									<div className="actions">
										<Link to="#" className="btn btn-default btn-sm">
										<i className="fa fa-plus"></i> Add </Link>
										<Link to="#" className="btn btn-default btn-sm">
										<i className="fa fa-print"></i> Print </Link>
									</div>
								</div>
								<div className="portlet-body">
									<table className="table table-striped table-bordered table-hover" id="sample_3">
									<thead>
									<tr>
										<th className="table-checkbox">
											<input type="checkbox" className="group-checkable" data-set="#sample_3 .checkboxes"/>
										</th>
										<th>
											Username
										</th>
										<th>
											Email
										</th>
										<th>
											Status
										</th>
									</tr>
									</thead>
									<tbody>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											shuxer
										</td>
										<td>
											<Link to="mailto:shuxer@gmail.com">
											shuxer@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											looper
										</td>
										<td>
											<Link to="mailto:looper90@gmail.com">
											looper90@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-warning">
											Suspended </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											userwow
										</td>
										<td>
											<Link to="mailto:userwow@yahoo.com">
											userwow@yahoo.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											user1wow
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											userwow@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-default">
											Blocked </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											restest
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											test@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											foopl
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											weep
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											coop
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											pppol
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
											<span className="label label-sm label-success">
											Approved </span>
										</td>
									</tr>
									<tr className="odd gradeX">
										<td>
											<input type="checkbox" className="checkboxes" value="1"/>
										</td>
										<td>
											test
										</td>
										<td>
											<Link to="mailto:userwow@gmail.com">
											good@gmail.com </Link>
										</td>
										<td>
										<span className="label label-sm label-success">
										Approved </span>
									</td>
								</tr>
								<tr className="odd gradeX">
									<td>
										<input type="checkbox" className="checkboxes" value="1"/>
									</td>
									<td>
										userwow
									</td>
									<td>
										<Link to="mailto:userwow@gmail.com">
										userwow@gmail.com </Link>
									</td>
									<td>
										<span className="label label-sm label-default">
										Blocked </span>
									</td>
								</tr>
								<tr className="odd gradeX">
									<td>
										<input type="checkbox" className="checkboxes" value="1"/>
									</td>
									<td>
										test
									</td>
									<td>
										<Link to="mailto:userwow@gmail.com">
										test@gmail.com </Link>
									</td>
									<td>
										<span className="label label-sm label-success">
										Approved </span>
									</td>
								</tr>
								</tbody>
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
