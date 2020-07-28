import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class Responsive_datatables extends Component {


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
							<h1>Responsive Datatables <small>responsive datatable samples</small></h1>
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
							<Link to="#">Responsive Datatables</Link>
						</li>
					</ul>

					<div className="row">
						<div className="col-md-12">
							<div className="note note-success note-shadow">
								<p>
									Please try to re-size your browser window in order to see the tables in responsive mode.
								</p>
							</div>
							<div className="portlet box green">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>Responsive Flip Scroll Tables
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
								<div className="portlet-body flip-scroll">
									<table className="table table-bordered table-striped table-condensed flip-content">
									<thead className="flip-content">
									<tr>
										<th width="20%">
											Code
										</th>
										<th>
											Company
										</th>
										<th className="numeric">
											Price
										</th>
										<th className="numeric">
											Change
										</th>
										<th className="numeric">
											Change %
										</th>
										<th className="numeric">
											Open
										</th>
										<th className="numeric">
											High
										</th>
										<th className="numeric">
											Low
										</th>
										<th className="numeric">
											Volume
										</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>
											AAC
										</td>
										<td>
											AUSTRALIAN AGRICULTURAL COMPANY LIMITED.
										</td>
										<td className="numeric">
											&nbsp;
										</td>
										<td className="numeric">
											-0.01
										</td>
										<td className="numeric">
											-0.36%
										</td>
										<td className="numeric">
											$1.39
										</td>
										<td className="numeric">
											$1.39
										</td>
										<td className="numeric">
											&nbsp;
										</td>
										<td className="numeric">
											9,395
										</td>
									</tr>
									<tr>
										<td>
											AAD
										</td>
										<td>
											ARDENT LEISURE GROUP
										</td>
										<td className="numeric">
											$1.15
										</td>
										<td className="numeric">
											+0.02
										</td>
										<td className="numeric">
											1.32%
										</td>
										<td className="numeric">
											$1.14
										</td>
										<td className="numeric">
											$1.15
										</td>
										<td className="numeric">
											$1.13
										</td>
										<td className="numeric">
											56,431
										</td>
									</tr>
									<tr>
										<td>
											AAX
										</td>
										<td>
											AUSENCO LIMITED
										</td>
										<td className="numeric">
											$4.00
										</td>
										<td className="numeric">
											-0.04
										</td>
										<td className="numeric">
											-0.99%
										</td>
										<td className="numeric">
											$4.01
										</td>
										<td className="numeric">
											$4.05
										</td>
										<td className="numeric">
											$4.00
										</td>
										<td className="numeric">
											90,641
										</td>
									</tr>
									<tr>
										<td>
											ABC
										</td>
										<td>
											ADELAIDE BRIGHTON LIMITED
										</td>
										<td className="numeric">
											$3.00
										</td>
										<td className="numeric">
											+0.06
										</td>
										<td className="numeric">
											2.04%
										</td>
										<td className="numeric">
											$2.98
										</td>
										<td className="numeric">
											$3.00
										</td>
										<td className="numeric">
											$2.96
										</td>
										<td className="numeric">
											862,518
										</td>
									</tr>
									<tr>
										<td>
											ABP
										</td>
										<td>
											ABACUS PROPERTY GROUP
										</td>
										<td className="numeric">
											$1.91
										</td>
										<td className="numeric">
											0.00
										</td>
										<td className="numeric">
											0.00%
										</td>
										<td className="numeric">
											$1.92
										</td>
										<td className="numeric">
											$1.93
										</td>
										<td className="numeric">
											$1.90
										</td>
										<td className="numeric">
											595,701
										</td>
									</tr>
									<tr>
										<td>
											ABY
										</td>
										<td>
											ADITYA BIRLA MINERALS LIMITED
										</td>
										<td className="numeric">
											$0.77
										</td>
										<td className="numeric">
											+0.02
										</td>
										<td className="numeric">
											2.00%
										</td>
										<td className="numeric">
											$0.76
										</td>
										<td className="numeric">
											$0.77
										</td>
										<td className="numeric">
											$0.76
										</td>
										<td className="numeric">
											54,567
										</td>
									</tr>
									<tr>
										<td>
											ACR
										</td>
										<td>
											ACRUX LIMITED
										</td>
										<td className="numeric">
											$3.71
										</td>
										<td className="numeric">
											+0.01
										</td>
										<td className="numeric">
											0.14%
										</td>
										<td className="numeric">
											$3.70
										</td>
										<td className="numeric">
											$3.72
										</td>
										<td className="numeric">
											$3.68
										</td>
										<td className="numeric">
											191,373
										</td>
									</tr>
									<tr>
										<td>
											ADU
										</td>
										<td>
											ADAMUS RESOURCES LIMITED
										</td>
										<td className="numeric">
											$0.72
										</td>
										<td className="numeric">
											0.00
										</td>
										<td className="numeric">
											0.00%
										</td>
										<td className="numeric">
											$0.73
										</td>
										<td className="numeric">
											$0.74
										</td>
										<td className="numeric">
											$0.72
										</td>
										<td className="numeric">
											8,602,291
										</td>
									</tr>
									<tr>
										<td>
											AGG
										</td>
										<td>
											ANGLOGOLD ASHANTI LIMITED
										</td>
										<td className="numeric">
											$7.81
										</td>
										<td className="numeric">
											-0.22
										</td>
										<td className="numeric">
											-2.74%
										</td>
										<td className="numeric">
											$7.82
										</td>
										<td className="numeric">
											$7.82
										</td>
										<td className="numeric">
											$7.81
										</td>
										<td className="numeric">
											148
										</td>
									</tr>
									<tr>
										<td>
											AGK
										</td>
										<td>
											AGL ENERGY LIMITED
										</td>
										<td className="numeric">
											$13.82
										</td>
										<td className="numeric">
											+0.02
										</td>
										<td className="numeric">
											0.14%
										</td>
										<td className="numeric">
											$13.83
										</td>
										<td className="numeric">
											$13.83
										</td>
										<td className="numeric">
											$13.67
										</td>
										<td className="numeric">
											846,403
										</td>
									</tr>
									<tr>
										<td>
											AGO
										</td>
										<td>
											ATLAS IRON LIMITED
										</td>
										<td className="numeric">
											$3.17
										</td>
										<td className="numeric">
											-0.02
										</td>
										<td className="numeric">
											-0.47%
										</td>
										<td className="numeric">
											$3.11
										</td>
										<td className="numeric">
											$3.22
										</td>
										<td className="numeric">
											$3.10
										</td>
										<td className="numeric">
											5,416,303
										</td>
									</tr>
									</tbody>
									</table>
								</div>
							</div>
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>Basic Bootstrap 3.0 Responsive Table
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
									<div className="table-responsive">
										<table className="table">
										<thead>
										<tr>
											<th>
												#
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
												1
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										<tr>
											<td>
												2
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										<tr>
											<td>
												3
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>

							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>Bordered Bootstrap 3.0 Responsive Table
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
									<div className="table-responsive">
										<table className="table table-bordered">
										<thead>
										<tr>
											<th>
												#
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
												1
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										<tr>
											<td>
												2
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										<tr>
											<td>
												3
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>

							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>All in One Bootstrap 3.0 Responsive Table
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
									<div className="table-responsive">
										<table className="table table-striped table-bordered table-hover">
										<thead>
										<tr>
											<th>
												#
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
											<th>
												Table heading
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
												1
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										<tr>
											<td>
												2
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										<tr>
											<td>
												3
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
											<td>
												Table cell
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</div>

							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-cogs"></i>Horizontal Scrollable Responsive Table
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
										<table className="table table-striped table-bordered table-hover">
										<thead>
										<tr>
											<th scope="col" style={{width:'450px'}}>
												Column header 1
											</th>
											<th scope="col">
												Column header 2
											</th>
											<th scope="col">
												Column header 3
											</th>
											<th scope="col">
												Column header 4
											</th>
											<th scope="col">
												Column header 5
											</th>
											<th scope="col">
												Column header 6
											</th>
											<th scope="col">
												Column header 7
											</th>
											<th scope="col">
												Column header 8
											</th>
											<th scope="col">
												Column header 9
											</th>
											<th scope="col">
												Column header 10
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
										</tr>
										<tr>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
										</tr>
										<tr>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
										</tr>
										<tr>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
										</tr>
										<tr>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
										</tr>
										<tr>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
											</td>
											<td>
												Table data
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
