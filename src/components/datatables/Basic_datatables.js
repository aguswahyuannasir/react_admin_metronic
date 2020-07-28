import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class Basic_datatables extends Component {

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
							<h1>Basic Datatables <small>basic datatable samples</small></h1>
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
							<Link to="#">Basic Datatables</Link>
						</li>
					</ul>

					<div className="row">
						<div className="col-md-6">
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>Simple Table
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
									<div className="table-scrollable">
										<table className="table table-hover">
										<thead>
										<tr>
											<th>
													#
											</th>
											<th>
													First Name
											</th>
											<th>
													Last Name
											</th>
											<th>
													Username
											</th>
											<th>
													Status
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
													1
											</td>
											<td>
													Mark
											</td>
											<td>
													Otto
											</td>
											<td>
													makr124
											</td>
											<td>
												<span className="label label-sm label-success">
												Approved </span>
											</td>
										</tr>
										<tr>
											<td>
													2
											</td>
											<td>
													Jacob
											</td>
											<td>
													Nilson
											</td>
											<td>
													jac123
											</td>
											<td>
												<span className="label label-sm label-info">
												Pending </span>
											</td>
										</tr>
										<tr>
											<td>
													3
											</td>
											<td>
													Larry
											</td>
											<td>
													Cooper
											</td>
											<td>
													lar
											</td>
											<td>
												<span className="label label-sm label-warning">
												Suspended </span>
											</td>
										</tr>
										<tr>
											<td>
													4
											</td>
											<td>
													Sandy
											</td>
											<td>
													Lim
											</td>
											<td>
													sanlim
											</td>
											<td>
												<span className="label label-sm label-danger">
												Blocked </span>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-coffee"></i>Bordered Table
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
									<div className="table-scrollable">
										<table className="table table-bordered table-hover">
										<thead>
										<tr>
											<th>
													#
											</th>
											<th>
													First Name
											</th>
											<th>
													Last Name
											</th>
											<th>
													Username
											</th>
											<th>
													Status
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td rowSpan="2">
													1
											</td>
											<td>
													Mark
											</td>
											<td>
													Otto
											</td>
											<td>
													makr124
											</td>
											<td>
												<span className="label label-sm label-success">
												Approved </span>
											</td>
										</tr>
										<tr>
											<td>
													Jacob
											</td>
											<td>
													Nilson
											</td>
											<td>
													jac123
											</td>
											<td>
												<span className="label label-sm label-info">
												Pending </span>
											</td>
										</tr>
										<tr>
											<td>
													2
											</td>
											<td>
													Larry
											</td>
											<td>
													Cooper
											</td>
											<td>
													lar
											</td>
											<td>
												<span className="label label-sm label-warning">
												Suspended </span>
											</td>
										</tr>
										<tr>
											<td>
													3
											</td>
											<td>
													Sandy
											</td>
											<td>
													Lim
											</td>
											<td>
													sanlim
											</td>
											<td>
												<span className="label label-sm label-danger">
												Blocked </span>
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
						<div className="col-md-6">
							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-comments"></i>Striped Table
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
									<div className="table-scrollable">
										<table className="table table-striped table-hover">
										<thead>
										<tr>
											<th>
													#
											</th>
											<th>
													First Name
											</th>
											<th>
													Last Name
											</th>
											<th>
													Username
											</th>
											<th>
													Status
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
													1
											</td>
											<td>
													Mark
											</td>
											<td>
													Otto
											</td>
											<td>
													makr124
											</td>
											<td>
												<span className="label label-sm label-success">
												Approved </span>
											</td>
										</tr>
										<tr>
											<td>
													2
											</td>
											<td>
													Jacob
											</td>
											<td>
													Nilson
											</td>
											<td>
													jac123
											</td>
											<td>
												<span className="label label-sm label-info">
												Pending </span>
											</td>
										</tr>
										<tr>
											<td>
													3
											</td>
											<td>
													Larry
											</td>
											<td>
													Cooper
											</td>
											<td>
													lar
											</td>
											<td>
												<span className="label label-sm label-warning">
												Suspended </span>
											</td>
										</tr>
										<tr>
											<td>
													4
											</td>
											<td>
													Sandy
											</td>
											<td>
													Lim
											</td>
											<td>
													sanlim
											</td>
											<td>
												<span className="label label-sm label-danger">
												Blocked </span>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet box green">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-picture"></i>Condensed Table
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
									<div className="table-scrollable">
										<table className="table table-condensed table-hover">
										<thead>
										<tr>
											<th>
													#
											</th>
											<th>
													First Name
											</th>
											<th>
													Last Name
											</th>
											<th>
													Username
											</th>
											<th>
													Status
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
													1
											</td>
											<td>
													Mark
											</td>
											<td>
													Otto
											</td>
											<td>
													makr124
											</td>
											<td>
												<span className="label label-sm label-success">
												Approved </span>
											</td>
										</tr>
										<tr>
											<td>
													2
											</td>
											<td>
													Jacob
											</td>
											<td>
													Nilson
											</td>
											<td>
													jac123
											</td>
											<td>
												<span className="label label-sm label-info">
												Pending </span>
											</td>
										</tr>
										<tr>
											<td>
													3
											</td>
											<td>
													Larry
											</td>
											<td>
													Cooper
											</td>
											<td>
													lar
											</td>
											<td>
												<span className="label label-sm label-warning">
												Suspended </span>
											</td>
										</tr>
										<tr>
											<td>
													4
											</td>
											<td>
													Sandy
											</td>
											<td>
													Lim
											</td>
											<td>
													sanlim
											</td>
											<td>
												<span className="label label-sm label-danger">
												Blocked </span>
											</td>
										</tr>
										<tr>
											<td>
													5
											</td>
											<td>
													Sandy
											</td>
											<td>
													Lim
											</td>
											<td>
													sanlim
											</td>
											<td>
												<span className="label label-sm label-danger">
												Blocked </span>
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
						<div className="col-md-6">
							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-comments"></i>Contextual Rows
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
									<div className="table-scrollable">
										<table className="table table-bordered table-hover">
										<thead>
										<tr>
											<th>
													#
											</th>
											<th>
													className Name
											</th>
											<th>
													Column
											</th>
											<th>
													Column
											</th>
											<th>
													Column
											</th>
										</tr>
										</thead>
										<tbody>
										<tr className="active">
											<td>
													1
											</td>
											<td>
													active
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
										</tr>
										<tr className="success">
											<td>
													2
											</td>
											<td>
													success
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
										</tr>
										<tr className="warning">
											<td>
													3
											</td>
											<td>
													warning
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
										</tr>
										<tr className="danger">
											<td>
													4
											</td>
											<td>
													danger
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
											<td>
													Column heading
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-comments"></i>Contextual Columns
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
									<div className="table-scrollable">
										<table className="table table-bordered table-hover">
										<thead>
										<tr>
											<th>
													#
											</th>
											<th>
													Column
											</th>
											<th>
													Column
											</th>
											<th>
													Column
											</th>
											<th>
													Column
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
													1
											</td>
											<td className="active">
													active
											</td>
											<td className="success">
													success
											</td>
											<td className="warning">
													warning
											</td>
											<td className="danger">
													danger
											</td>
										</tr>
										<tr>
											<td>
													2
											</td>
											<td className="active">
													active
											</td>
											<td className="success">
													success
											</td>
											<td className="warning">
													warning
											</td>
											<td className="danger">
													danger
											</td>
										</tr>
										<tr>
											<td>
													3
											</td>
											<td className="active">
													active
											</td>
											<td className="success">
													success
											</td>
											<td className="warning">
													warning
											</td>
											<td className="danger">
													danger
											</td>
										</tr>
										<tr>
											<td>
													4
											</td>
											<td className="active">
													active
											</td>
											<td className="success">
													success
											</td>
											<td className="warning">
													warning
											</td>
											<td className="danger">
													danger
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
						<div className="col-md-6">
							<div className="portlet">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-bell-o"></i>Advance Table
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
									<div className="table-scrollable">
										<table className="table table-striped table-bordered table-advance table-hover">
										<thead>
										<tr>
											<th>
												<i className="fa fa-briefcase"></i> Company
											</th>
											<th className="hidden-xs">
												<i className="fa fa-user"></i> Contact
											</th>
											<th>
												<i className="fa fa-shopping-cart"></i> Total
											</th>
											<th>
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td className="highlight">
												<div className="success">
												</div>
												<Link to="#">
												RedBull </Link>
											</td>
											<td className="hidden-xs">
													Mike Nilson
											</td>
											<td>
													2560.60$
											</td>
											<td>
												<Link to="#" className="btn default btn-xs purple">
												<i className="fa fa-edit"></i> Edit </Link>
											</td>
										</tr>
										<tr>
											<td className="highlight">
												<div className="info">
												</div>
												<Link to="#">
												Google </Link>
											</td>
											<td className="hidden-xs">
													Adam Larson
											</td>
											<td>
													560.60$
											</td>
											<td>
												<Link to="#" className="btn default btn-xs black">
												<i className="fa fa-trash-o"></i> Delete </Link>
											</td>
										</tr>
										<tr>
											<td className="highlight">
												<div className="success">
												</div>
												<Link to="#">
												Apple </Link>
											</td>
											<td className="hidden-xs">
													Daniel Kim
											</td>
											<td>
													3460.60$
											</td>
											<td>
												<Link to="#" className="btn default btn-xs purple">
												<i className="fa fa-edit"></i> Edit </Link>
											</td>
										</tr>
										<tr>
											<td className="highlight">
												<div className="warning">
												</div>
												<Link to="#">
												Microsoft </Link>
											</td>
											<td className="hidden-xs">
													Nick
											</td>
											<td>
													2560.60$
											</td>
											<td>
												<Link to="#" className="btn default btn-xs blue">
												<i className="fa fa-share"></i> Share </Link>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-shopping-cart"></i>Advance Table
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
									<div className="table-scrollable">
										<table className="table table-striped table-bordered table-advance table-hover">
										<thead>
										<tr>
											<th>
												<i className="fa fa-briefcase"></i> From
											</th>
											<th className="hidden-xs">
												<i className="fa fa-question"></i> Descrition
											</th>
											<th>
												<i className="fa fa-bookmark"></i> Total
											</th>
											<th>
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
												<Link to="#">
												Pixel Ltd </Link>
											</td>
											<td className="hidden-xs">
													Server hardware purchase
											</td>
											<td>
													52560.10$ <span className="label label-sm label-success label-mini">
												Paid </span>
											</td>
											<td>
												<Link to="#" className="btn default btn-xs green-stripe">
												View </Link>
											</td>
										</tr>
										<tr>
											<td>
												<Link to="#">
												Smart House </Link>
											</td>
											<td className="hidden-xs">
													Office furniture purchase
											</td>
											<td>
													5760.00$ <span className="label label-sm label-warning label-mini">
												Pending </span>
											</td>
											<td>
												<Link to="#" className="btn default btn-xs blue-stripe">
												View </Link>
											</td>
										</tr>
										<tr>
											<td>
												<Link to="#">
												FoodMaster Ltd </Link>
											</td>
											<td className="hidden-xs">
													Company Anual Dinner Catering
											</td>
											<td>
													12400.00$ <span className="label label-sm label-success label-mini">
												Paid </span>
											</td>
											<td>
												<Link to="#" className="btn default btn-xs blue-stripe">
												View </Link>
											</td>
										</tr>
										<tr>
											<td>
												<Link to="#">
												WaterPure Ltd </Link>
											</td>
											<td className="hidden-xs">
													Payment for Jan 2013
											</td>
											<td>
													610.50$ <span className="label label-sm label-danger label-mini">
												Overdue </span>
											</td>
											<td>
												<Link to="#" className="btn default btn-xs red-stripe">
												View </Link>
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
			</div>
		)
    }
}
