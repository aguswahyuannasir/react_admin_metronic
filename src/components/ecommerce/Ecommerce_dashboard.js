import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";
// import Head from "../app-part/Head";



export default class Ecommerce_dashboard extends Component {

	componentDidMount() {
		
		window.EcommerceIndex.init();

	}

    render(){
        return (
			<Fragment>
				{/* <Head
					title="Articles"
				/> */}
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
							<h1>Dashboard <small>dashboard & statistics</small></h1>
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
								<Link to="#">eCommerce</Link>
								<i className="fa fa-circle"></i>
							</li>
							<li>
								<Link to="#">Dashboard</Link>
							</li>
						</ul>

						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-10">
								<div className="dashboard-stat2">
									<div className="display">
										<div className="number">
											<h3 className="font-green-sharp">168,492<small className="font-green-sharp">$</small></h3>
											<small>TOTAL PROFIT</small>
										</div>
										<div className="icon">
											<i className="icon-pie-chart"></i>
										</div>
									</div>
									<div className="progress-info">
										<div className="progress">
											<span style={{width: '76%' }} className="progress-bar progress-bar-success green-sharp">
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
							<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
								<div className="dashboard-stat2">
									<div className="display">
										<div className="number">
											<h3 className="font-red-haze">12127</h3>
											<small>TOTAL ORDERS</small>
										</div>
										<div className="icon">
											<i className="icon-like"></i>
										</div>
									</div>
									<div className="progress-info">
										<div className="progress">
											<span style={{ width: '85%' }} className="progress-bar progress-bar-success red-haze">
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
							<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
								<div className="dashboard-stat2">
									<div className="display">
										<div className="number">
											<h3 className="font-blue-sharp">670.54<small className="font-blue-sharp">$</small></h3>
											<small>AVERAGE ORDER</small>
										</div>
										<div className="icon">
											<i className="icon-basket"></i>
										</div>
									</div>
									<div className="progress-info">
										<div className="progress">
											<span style={{width: '45%' }} className="progress-bar progress-bar-success blue-sharp">
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
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="portlet light">
									<div className="portlet-title">
										<div className="caption">
											<i className="icon-bar-chart font-green-sharp"></i>
											<span className="caption-subject font-green-sharp bold uppercase">Overview</span>
											<span className="caption-helper">weekly stats...</span>
										</div>
										<div className="tools">
											<Link to="" className="collapse">
											</Link>
											<Link to="#portlet-config" data-toggle="modal" className="config">
											</Link>
											<Link to="" className="reload">
											</Link>
											<Link to="" className="fullscreen">
											</Link>
											<Link to="" className="remove">
											</Link>
										</div>
									</div>
									<div className="portlet-body">
										<div className="tabbable-line">
											<ul className="nav nav-tabs">
												<li className="active">
													<Link to="#overview_1" data-toggle="tab">
													Top Selling </Link>
												</li>
												<li>
													<Link to="#overview_2" data-toggle="tab">
													Most Viewed </Link>
												</li>
												<li>
													<Link to="#overview_3" data-toggle="tab">
													Customers </Link>
												</li>
												<li className="dropdown">
													<Link to="" className="dropdown-toggle" data-toggle="dropdown">
													Orders <i className="fa fa-angle-down"></i>
													</Link>
													<ul className="dropdown-menu" role="menu">
														<li>
															<Link to="#overview_4" tabIndex="-1" data-toggle="tab">
															Latest 10 Orders </Link>
														</li>
														<li>
															<Link to="#overview_4" tabIndex="-1" data-toggle="tab">
															Pending Orders </Link>
														</li>
														<li>
															<Link to="#overview_4" tabIndex="-1" data-toggle="tab">
															Completed Orders </Link>
														</li>
														<li>
															<Link to="#overview_4" tabIndex="-1" data-toggle="tab">
															Rejected Orders </Link>
														</li>
													</ul>
												</li>
											</ul>
											<div className="tab-content">
												<div className="tab-pane active" id="overview_1">
													<div className="table-responsive">
														<table className="table table-striped table-hover table-bordered">
														<thead>
														<tr>
															<th>
																Product Name
															</th>
															<th>
																Price
															</th>
															<th>
																Sold
															</th>
															<th>
															</th>
														</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<Link to="">
																	Apple iPhone 4s - 16GB - Black </Link>
																</td>
																<td>
																	$625.50
																</td>
																<td>
																	809
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
															<tr>
																<td>
																	<Link to="">
																	Samsung Galaxy S III SGH-I747 - 16GB </Link>
																</td>
																<td>
																	$915.50
																</td>
																<td>
																	6709
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
															<tr>
																<td>
																	<Link to="">
																	Motorola Droid 4 XT894 - 16GB - Black </Link>
																</td>
																<td>
																	$878.50
																</td>
																<td>
																	784
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
															<tr>
																<td>
																	<Link to="">
																	Regatta Luca 3 in 1 Jacket </Link>
																</td>
																<td>
																	$25.50
																</td>
																<td>
																	1245
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
															<tr>
																<td>
																	<Link to="">
																	Samsung Galaxy Note 3 </Link>
																</td>
																<td>
																	$925.50
																</td>
																<td>
																	21245
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
															<tr>
																<td>
																	<Link to="">
																	Inoval Digital Pen </Link>
																</td>
																<td>
																	$125.50
																</td>
																<td>
																	1245
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
															<tr>
																<td>
																	<Link to="">
																	Metronic - Responsive Admin + Frontend Theme </Link>
																</td>
																<td>
																	$20.00
																</td>
																<td>
																	11190
																</td>
																<td>
																	<Link to="" className="btn default btn-xs green-stripe">
																	View </Link>
																</td>
															</tr>
														</tbody>
														</table>
													</div>
												</div>
												<div className="tab-pane" id="overview_2">
													<div className="table-responsive">
														<table className="table table-striped table-hover table-bordered">
														<thead>
														<tr>
															<th>
																Product Name
															</th>
															<th>
																Price
															</th>
															<th>
																Views
															</th>
															<th>
															</th>
														</tr>
														</thead>
														<tbody>
														<tr>
															<td>
																<Link to="">
																Metronic - Responsive Admin + Frontend Theme </Link>
															</td>
															<td>
																$20.00
															</td>
															<td>
																11190
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Regatta Luca 3 in 1 Jacket </Link>
															</td>
															<td>
																$25.50
															</td>
															<td>
																1245
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Apple iPhone 4s - 16GB - Black </Link>
															</td>
															<td>
																$625.50
															</td>
															<td>
																809
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Samsung Galaxy S III SGH-I747 - 16GB </Link>
															</td>
															<td>
																$915.50
															</td>
															<td>
																6709
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Motorola Droid 4 XT894 - 16GB - Black </Link>
															</td>
															<td>
																$878.50
															</td>
															<td>
																784
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Samsung Galaxy Note 3 </Link>
															</td>
															<td>
																$925.50
															</td>
															<td>
																21245
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Inoval Digital Pen </Link>
															</td>
															<td>
																$125.50
															</td>
															<td>
																1245
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														</tbody>
														</table>
													</div>
												</div>
												<div className="tab-pane" id="overview_3">
													<div className="table-responsive">
														<table className="table table-striped table-hover table-bordered">
														<thead>
														<tr>
															<th>
																Customer Name
															</th>
															<th>
																Total Orders
															</th>
															<th>
																Total Amount
															</th>
															<th>
															</th>
														</tr>
														</thead>
														<tbody>
														<tr>
															<td>
																<Link to="">
																David Wilson </Link>
															</td>
															<td>
																3
															</td>
															<td>
																$625.50
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Amanda Nilson </Link>
															</td>
															<td>
																4
															</td>
															<td>
																$12625.50
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Jhon Doe </Link>
															</td>
															<td>
																2
															</td>
															<td>
																$125.00
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Bill Chang </Link>
															</td>
															<td>
																45
															</td>
															<td>
																$12,125.70
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Paul Strong </Link>
															</td>
															<td>
																1
															</td>
															<td>
																$890.85
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Jane Hilson </Link>
															</td>
															<td>
																5
															</td>
															<td>
																$239.85
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Patrick Walker </Link>
															</td>
															<td>
																2
															</td>
															<td>
																$1239.85
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														</tbody>
														</table>
													</div>
												</div>
												<div className="tab-pane" id="overview_4">
													<div className="table-responsive">
														<table className="table table-striped table-hover table-bordered">
														<thead>
														<tr>
															<th>
																Customer Name
															</th>
															<th>
																Date
															</th>
															<th>
																Amount
															</th>
															<th>
																Status
															</th>
															<th>
															</th>
														</tr>
														</thead>
														<tbody>
														<tr>
															<td>
																<Link to="">
																David Wilson </Link>
															</td>
															<td>
																3 Jan, 2013
															</td>
															<td>
																$625.50
															</td>
															<td>
																<span className="label label-sm label-warning">
																Pending </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Amanda Nilson </Link>
															</td>
															<td>
																13 Feb, 2013
															</td>
															<td>
																$12625.50
															</td>
															<td>
																<span className="label label-sm label-warning">
																Pending </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Jhon Doe </Link>
															</td>
															<td>
																20 Mar, 2013
															</td>
															<td>
																$125.00
															</td>
															<td>
																<span className="label label-sm label-success">
																Success </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Bill Chang </Link>
															</td>
															<td>
																29 May, 2013
															</td>
															<td>
																$12,125.70
															</td>
															<td>
																<span className="label label-sm label-info">
																In Process </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Paul Strong </Link>
															</td>
															<td>
																1 Jun, 2013
															</td>
															<td>
																$890.85
															</td>
															<td>
																<span className="label label-sm label-success">
																Success </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Jane Hilson </Link>
															</td>
															<td>
																5 Aug, 2013
															</td>
															<td>
																$239.85
															</td>
															<td>
																<span className="label label-sm label-danger">
																Canceled </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
																View </Link>
															</td>
														</tr>
														<tr>
															<td>
																<Link to="">
																Patrick Walker </Link>
															</td>
															<td>
																6 Aug, 2013
															</td>
															<td>
																$1239.85
															</td>
															<td>
																<span className="label label-sm label-success">
																Success </span>
															</td>
															<td>
																<Link to="" className="btn default btn-xs green-stripe">
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
							<div className="col-md-6">
								<div className="portlet light">
									<div className="portlet-title tabbable-line">
										<div className="caption">
											<i className="icon-share font-red-sunglo"></i>
											<span className="caption-subject font-red-sunglo bold uppercase">Revenue</span>
											<span className="caption-helper">weekly stats...</span>
										</div>
										<ul className="nav nav-tabs">
											<li>
												<Link to="#portlet_tab2" data-toggle="tab" id="statistics_amounts_tab">
												Amounts </Link>
											</li>
											<li className="active">
												<Link to="#portlet_tab1" data-toggle="tab">
												Orders </Link>
											</li>
										</ul>
									</div>
									<div className="portlet-body">
										<div className="tab-content">
											<div className="tab-pane active" id="portlet_tab1">
												<div id="statistics_1" className="chart">
												</div>
											</div>
											<div className="tab-pane" id="portlet_tab2">
												<div id="statistics_2" className="chart">
												</div>
											</div>
										</div>
										<div className="well margin-top-10 no-margin no-border">
											<div className="row">
												<div className="col-md-3 col-sm-3 col-xs-6 text-stat">
													<span className="label label-success">
													Revenue: </span>
													<h3>$111K</h3>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-6 text-stat">
													<span className="label label-info">
													Tax: </span>
													<h3>$14K</h3>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-6 text-stat">
													<span className="label label-danger">
													Shipment: </span>
													<h3>$10K</h3>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-6 text-stat">
													<span className="label label-warning">
													Orders: </span>
													<h3>2350</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>     
		</Fragment> 
        )
    }
}

