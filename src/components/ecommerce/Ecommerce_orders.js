import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class Ecommerce_orders extends Component {
	componentDidMount() {
		window.EcommerceOrders.init();

	}

	getData() {
		var data 	= localStorage.getItem('Mydata');
		data 		= JSON.parse(data);
		console.log(data);

		var ses 	= sessionStorage.getItem('Mysession');
		ses 		= JSON.parse(ses);
		console.log(ses);
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
							<h1>Orders <small>orders listing</small></h1>
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
							<Link to="#">eCommerce</Link>
							<i className="fa fa-circle"></i>
						</li>
						<li>
							<Link to="#">Orders</Link>
						</li>
					</ul>
			
					<div className="row">
						<div className="col-md-12">
							<div className="note note-danger note-shadow">
								<p>
									NOTE: The below datatable is not connected to a real database so the filter and sorting is just simulated for demo purposes only.
								</p>
							</div>
							<div className="portlet light">
								<div className="portlet-title">
									<div className="caption">
										<i className="icon-basket font-green-sharp"></i>
										<span className="caption-subject font-green-sharp bold uppercase">Order Listing</span>
										<span className="caption-helper">manage orders...</span>
									</div>
									<div className="actions">
										
										{/* <button type="button" className="btn blue btn-sm btn-circle" onClick={ () => this.setData() } >set session</button> */}
										<button type="button" className="btn blue btn-sm btn-circle" onClick={ () => this.getData() } >get session</button>

										<Link to="#" className="btn btn-circle btn-default">
										<i className="fa fa-plus"></i>
										<span className="hidden-480">New Order</span>
										</Link>

										<div className="btn-group">
											<Link className="btn btn-default btn-circle" to="#" data-toggle="dropdown">
											<i className="fa fa-share"></i>
											<span className="hidden-480">
											Tools </span>
											<i className="fa fa-angle-down"></i>
											</Link>
											<ul className="dropdown-menu pull-right">
												<li>
													<Link to="#">
													Export to Excel </Link>
												</li>
												<li>
													<Link to="#">
													Export to CSV </Link>
												</li>
												<li>
													<Link to="#">
													Export to XML </Link>
												</li>
												<li className="divider">
												</li>
												<li>
													<Link to="#">
													Print Invoices </Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="portlet-body">
									<div className="table-container">
										<div className="table-actions-wrapper">
											<span>
											</span>
											<select defaultValue={''} className="table-group-action-input form-control input-inline input-small input-sm">
												<option value="">Select...</option>
												<option value="Cancel">Cancel</option>
												<option value="Cancel">Hold</option>
												<option value="Cancel">On Hold</option>
												<option value="Close">Close</option>
											</select>
											<button className="btn btn-sm yellow table-group-action-submit"><i className="fa fa-check"></i> Submit</button>
										</div>
										<table className="table table-striped table-bordered table-hover" id="datatable_orders">
										<thead>
										<tr role="row" className="heading">
											<th width="2%">
												<input type="checkbox" className="group-checkable"/>
											</th>
											<th width="5%">
												Order&nbsp;#
											</th>
											<th width="15%">
												Purchased&nbsp;On
											</th>
											<th width="15%">
												Customer
											</th>
											<th width="10%">
												Ship&nbsp;To
											</th>
											<th width="10%">
												Base&nbsp;Price
											</th>
											<th width="10%">
												Purchased&nbsp;Price
											</th>
											<th width="10%">
												Status
											</th>
											<th width="10%">
												Actions
											</th>
										</tr>
										<tr role="row" className="filter">
											<td>
											</td>
											<td>
												<input type="text" className="form-control form-filter input-sm" name="order_id"/>
											</td>
											<td>
												<div className="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
													<input type="text" className="form-control form-filter input-sm" readOnly name="order_date_from" placeholder="From"/>
													<span className="input-group-btn">
													<button className="btn btn-sm default" type="button"><i className="fa fa-calendar"></i></button>
													</span>
												</div>
												<div className="input-group date date-picker" data-date-format="dd/mm/yyyy">
													<input type="text" className="form-control form-filter input-sm" readOnly name="order_date_to" placeholder="To"/>
													<span className="input-group-btn">
													<button className="btn btn-sm default" type="button"><i className="fa fa-calendar"></i></button>
													</span>
												</div>
											</td>
											<td>
												<input type="text" className="form-control form-filter input-sm" name="order_customer_name"/>
											</td>
											<td>
												<input type="text" className="form-control form-filter input-sm" name="order_ship_to"/>
											</td>
											<td>
												<div className="margin-bottom-5">
													<input type="text" className="form-control form-filter input-sm" name="order_base_price_from" placeholder="From"/>
												</div>
												<input type="text" className="form-control form-filter input-sm" name="order_base_price_to" placeholder="To"/>
											</td>
											<td>
												<div className="margin-bottom-5">
													<input type="text" className="form-control form-filter input-sm margin-bottom-5 clearfix" name="order_purchase_price_from" placeholder="From"/>
												</div>
												<input type="text" className="form-control form-filter input-sm" name="order_purchase_price_to" placeholder="To"/>
											</td>
											<td>
												<select name="order_status" className="form-control form-filter input-sm">
													<option value="">Select...</option>
													<option value="pending">Pending</option>
													<option value="closed">Closed</option>
													<option value="hold">On Hold</option>
													<option value="fraud">Fraud</option>
												</select>
											</td>
											<td>
												<div className="margin-bottom-5">
													<button className="btn btn-sm yellow filter-submit margin-bottom"><i className="fa fa-search"></i> Search</button>
												</div>
												<button className="btn btn-sm red filter-cancel"><i className="fa fa-times"></i> Reset</button>
											</td>
										</tr>
										</thead>
										<tbody>
											
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
