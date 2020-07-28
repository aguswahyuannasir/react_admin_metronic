import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

export default class Flat_ui_colors extends Component {
	
	componentDidMount() {

	
	}

	getData() {
		var data 	= localStorage.getItem('Mydata');
		data 		= JSON.parse(data);
		console.log(data);

		var ses 	= sessionStorage.getItem('Mysession');
		ses 		= JSON.parse(ses);
		console.log(ses);
	}

	handleClick(btn){
		btn.button('loading')
		setTimeout(function () {
		btn.button('reset')
		}, 3000)
	}

	openTab(url) {
		window.open(url);
	}

    render(){
        return (
			<Fragment>

				<div className="page-content-wrapper">
						<div className="page-content">
							{/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM */}
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
									{/* /.modal-content  */}
								</div>
								{/* /.modal-dialog  */}
							</div>
							{/* /.modal  */}
							{/* END SAMPLE PORTLET CONFIGURATION MODAL FORM */}
							{/* BEGIN PAGE HEADER */}
							{/* BEGIN PAGE HEAD  */}
							<div className="page-head">
								{/* BEGIN PAGE TITLE  */}
								<div className="page-title">
									<h1>Flat UI Colors <small>color variants for ui components</small></h1>
								</div>
								{/* END PAGE TITLE  */}
								{/* BEGIN PAGE TOOLBAR  */}
								<div className="page-toolbar">
									{/* BEGIN THEME PANEL  */}
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
									{/* END THEME PANEL  */}
								</div>
								{/* END PAGE TOOLBAR  */}
							</div>
							{/* END PAGE HEAD  */}
							{/* BEGIN PAGE BREADCRUMB  */}
							<ul className="page-breadcrumb breadcrumb">
								<li>
									<Link to="index.html">Home</Link>
									<i className="fa fa-circle"></i>
								</li>
								<li>
									<Link to="#">UI Features</Link>
									<i className="fa fa-circle"></i>
								</li>
								<li>
									<Link to="#">Flat UI Colors</Link>
								</li>
							</ul>
							{/* END PAGE BREADCRUMB  */}
							{/* END PAGE HEADER */}
							{/* BEGIN PAGE CONTENT */}
							<div className="row">
								<div className="col-md-12">
									<div className="note note-success note-shadow">
										<h4 className="block">Flat UI Collor Collection</h4>
										<p>
											Just apply the color className(e.g: <code>.blue-madison</code>) to Metronic portlets, buttons, statistic blocks, tiles and other containers.
										</p>
									</div>
									<div className="tabbable tabbable-custom tabbable-noborder">
										<ul className="nav nav-tabs">
											<li className="active">
												<Link to="#tab__blue" data-toggle="tab">
												Blue</Link>
											</li>
											<li>
												<Link to="#tab__green" data-toggle="tab">
												Green</Link>
											</li>
											<li>
												<Link to="#tab__red" data-toggle="tab">
												Red</Link>
											</li>
											<li>
												<Link to="#tab__yellow" data-toggle="tab">
												Yellow</Link>
											</li>
											<li>
												<Link to="#tab__purple" data-toggle="tab">
												Purple</Link>
											</li>
											<li>
												<Link to="#tab__grey" data-toggle="tab">
												Grey</Link>
											</li>
										</ul>
										<div className="tab-content">
											<div className="tab-pane active" id="tab__blue">
												<h3>Click Below Tabs To See More Variants of Blue</h3>
												<ul className="nav nav-pills">
													<li>
														<Link to="#tab_blue" data-toggle="tab" className="bg-blue">
														.blue</Link>
													</li>
													<li>
														<Link to="#tab_blue-hoki" data-toggle="tab" className="bg-blue-hoki">
														.blue-hoki</Link>
													</li>
													<li>
														<Link to="#tab_blue-steel" data-toggle="tab" className="bg-blue-steel">
														.blue-steel</Link>
													</li>
													<li>
														<Link to="#tab_blue-madison" data-toggle="tab" className="bg-blue-madison">
														.blue-madison</Link>
													</li>
													<li>
														<Link to="#tab_blue-chambray" data-toggle="tab" className="bg-blue-chambray">
														.blue-chambray</Link>
													</li>
													<li>
														<Link to="#tab_blue-ebonyclay" data-toggle="tab" className="bg-blue-ebonyclay">
														.blue-ebonyclay</Link>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane active" id="tab_blue">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn blue">Default</button>
																	<Link to="#" className="btn blue"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default blue-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn blue">Dropdown</button>
																		<button type="button" className="btn blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-blue">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-blue">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-blue">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-blue">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-blue">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-blue">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-blue">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-blue">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-blue">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-blue">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-blue">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box blue">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid blue">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_blue-hoki">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn blue-hoki">Default</button>
																	<Link to="#" className="btn blue-hoki"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default blue-hoki-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn blue-hoki">Dropdown</button>
																		<button type="button" className="btn blue-hoki dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-blue-hoki">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-blue-hoki">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-blue-hoki">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-blue-hoki">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-hoki">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-hoki">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-blue-hoki">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-blue-hoki">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-blue-hoki">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-blue-hoki">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-hoki">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-hoki">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-hoki">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-hoki">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-hoki">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-hoki">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-blue-hoki">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-hoki">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-hoki selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-hoki">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box blue-hoki">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid blue-hoki">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_blue-steel">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn blue-steel">Default</button>
																	<Link to="#" className="btn blue-steel"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default blue-steel-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn blue-steel">Dropdown</button>
																		<button type="button" className="btn blue-steel dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-blue-steel">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-blue-steel">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-blue-steel">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-blue-steel">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-steel">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-steel">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-blue-steel">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-blue-steel">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-blue-steel">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-blue-steel">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-steel">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-steel">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-steel">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-steel">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-steel">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-steel">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-blue-steel">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-steel">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-steel selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-steel">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box blue-steel">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid blue-steel">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_blue-madison">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn blue-madison">Default</button>
																	<Link to="#" className="btn blue-madison"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default blue-madison-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn blue-madison">Dropdown</button>
																		<button type="button" className="btn blue-madison dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-blue-madison">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-blue-madison">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-blue-madison">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-blue-madison">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-madison">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-madison">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-blue-madison">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-blue-madison">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-blue-madison">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-blue-madison">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-madison">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-madison">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-madison">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-madison">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-madison">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-madison">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-blue-madison">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-madison">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-madison selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-madison">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box blue-madison">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid blue-madison">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_blue-chambray">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn blue-chambray">Default</button>
																	<Link to="#" className="btn blue-chambray"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default blue-chambray-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn blue-chambray">Dropdown</button>
																		<button type="button" className="btn blue-chambray dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-blue-chambray">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-blue-chambray">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-blue-chambray">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-blue-chambray">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-chambray">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-chambray">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-blue-chambray">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-blue-chambray">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-blue-chambray">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-blue-chambray">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-chambray">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-chambray">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-chambray">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-chambray">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-chambray">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-chambray">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-blue-chambray">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-chambray">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-chambray selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-chambray">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box blue-chambray">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid blue-chambray">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_blue-ebonyclay">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn blue-ebonyclay">Default</button>
																	<Link to="#" className="btn blue-ebonyclay"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default blue-ebonyclay-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn blue-ebonyclay">Dropdown</button>
																		<button type="button" className="btn blue-ebonyclay dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-blue-ebonyclay">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-blue-ebonyclay">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-blue-ebonyclay">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-blue-ebonyclay">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-ebonyclay">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-ebonyclay">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-blue-ebonyclay">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-blue-ebonyclay">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-blue-ebonyclay">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-blue-ebonyclay">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-blue-ebonyclay">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-blue-ebonyclay">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-ebonyclay">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-ebonyclay">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-ebonyclay">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat blue-ebonyclay">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-blue-ebonyclay">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-ebonyclay">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-ebonyclay selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-blue-ebonyclay">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box blue-ebonyclay">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid blue-ebonyclay">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane " id="tab__green">
												<h3>Click Below Tabs To See More Variants of Green</h3>
												<ul className="nav nav-pills">
													<li>
														<Link to="#tab_green" data-toggle="tab" className="bg-green">
														.green</Link>
													</li>
													<li>
														<Link to="#tab_green-meadow" data-toggle="tab" className="bg-green-meadow">
														.green-meadow</Link>
													</li>
													<li>
														<Link to="#tab_green-seagreen" data-toggle="tab" className="bg-green-seagreen">
														.green-seagreen</Link>
													</li>
													<li>
														<Link to="#tab_green-turquoise" data-toggle="tab" className="bg-green-turquoise">
														.green-turquoise</Link>
													</li>
													<li>
														<Link to="#tab_green-haze" data-toggle="tab" className="bg-green-haze">
														.green-haze</Link>
													</li>
													<li>
														<Link to="#tab_green-jungle" data-toggle="tab" className="bg-green-jungle">
														.green-jungle</Link>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane active" id="tab_green">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn green">Default</button>
																	<Link to="#" className="btn green"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default green-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn green">Dropdown</button>
																		<button type="button" className="btn green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-green">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-green">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-green">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-green">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-green">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-green">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-green">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-green">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-green">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-green">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-green">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box green">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid green">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_green-meadow">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn green-meadow">Default</button>
																	<Link to="#" className="btn green-meadow"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default green-meadow-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn green-meadow">Dropdown</button>
																		<button type="button" className="btn green-meadow dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-green-meadow">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-green-meadow">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-green-meadow">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-green-meadow">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-meadow">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-green-meadow">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-green-meadow">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-green-meadow">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-green-meadow">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-green-meadow">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-meadow">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-green-meadow">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-meadow">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-meadow">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-meadow">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-meadow">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-green-meadow">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-meadow">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-meadow selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-meadow">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box green-meadow">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid green-meadow">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_green-seagreen">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn green-seagreen">Default</button>
																	<Link to="#" className="btn green-seagreen"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default green-seagreen-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn green-seagreen">Dropdown</button>
																		<button type="button" className="btn green-seagreen dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-green-seagreen">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-green-seagreen">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-green-seagreen">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-green-seagreen">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-seagreen">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-green-seagreen">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-green-seagreen">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-green-seagreen">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-green-seagreen">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-green-seagreen">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-seagreen">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-green-seagreen">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-seagreen">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-seagreen">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-seagreen">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-seagreen">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-green-seagreen">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-seagreen">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-seagreen selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-seagreen">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box green-seagreen">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid green-seagreen">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_green-turquoise">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn green-turquoise">Default</button>
																	<Link to="#" className="btn green-turquoise"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default green-turquoise-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn green-turquoise">Dropdown</button>
																		<button type="button" className="btn green-turquoise dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-green-turquoise">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-green-turquoise">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-green-turquoise">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-green-turquoise">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-turquoise">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-green-turquoise">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-green-turquoise">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-green-turquoise">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-green-turquoise">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-green-turquoise">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-turquoise">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-green-turquoise">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-turquoise">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-turquoise">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-turquoise">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-turquoise">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-green-turquoise">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-turquoise">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-turquoise selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-turquoise">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box green-turquoise">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid green-turquoise">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_green-haze">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn green-haze">Default</button>
																	<Link to="#" className="btn green-haze"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default green-haze-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn green-haze">Dropdown</button>
																		<button type="button" className="btn green-haze dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-green-haze">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-green-haze">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-green-haze">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-green-haze">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-haze">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-green-haze">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-green-haze">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-green-haze">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-green-haze">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-green-haze">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-haze">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-green-haze">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-haze">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-haze">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-haze">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-haze">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-green-haze">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-haze">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-haze selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-haze">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box green-haze">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid green-haze">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_green-jungle">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn green-jungle">Default</button>
																	<Link to="#" className="btn green-jungle"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default green-jungle-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn green-jungle">Dropdown</button>
																		<button type="button" className="btn green-jungle dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-green-jungle">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-green-jungle">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-green-jungle">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-green-jungle">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-jungle">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-green-jungle">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-green-jungle">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-green-jungle">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-green-jungle">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-green-jungle">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-green-jungle">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-green-jungle">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-jungle">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-jungle">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-jungle">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat green-jungle">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-green-jungle">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-jungle">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-jungle selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-green-jungle">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box green-jungle">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid green-jungle">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane " id="tab__red">
												<h3>Click Below Tabs To See More Variants of Red</h3>
												<ul className="nav nav-pills">
													<li>
														<Link to="#tab_red" data-toggle="tab" className="bg-red">
														.red</Link>
													</li>
													<li>
														<Link to="#tab_red-pink" data-toggle="tab" className="bg-red-pink">
														.red-pink</Link>
													</li>
													<li>
														<Link to="#tab_red-sunglo" data-toggle="tab" className="bg-red-sunglo">
														.red-sunglo</Link>
													</li>
													<li>
														<Link to="#tab_red-intense" data-toggle="tab" className="bg-red-intense">
														.red-intense</Link>
													</li>
													<li>
														<Link to="#tab_red-thunderbird" data-toggle="tab" className="bg-red-thunderbird">
														.red-thunderbird</Link>
													</li>
													<li>
														<Link to="#tab_red-flamingo" data-toggle="tab" className="bg-red-flamingo">
														.red-flamingo</Link>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane active" id="tab_red">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn red">Default</button>
																	<Link to="#" className="btn red"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default red-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn red">Dropdown</button>
																		<button type="button" className="btn red dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-red">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-red">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-red">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-red">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-red">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-red">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-red">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-red">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-red">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-red">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-red">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box red">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid red">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_red-pink">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn red-pink">Default</button>
																	<Link to="#" className="btn red-pink"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default red-pink-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn red-pink">Dropdown</button>
																		<button type="button" className="btn red-pink dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-red-pink">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-red-pink">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-red-pink">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-red-pink">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-pink">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-red-pink">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-red-pink">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-red-pink">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-red-pink">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-red-pink">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-pink">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-red-pink">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-pink">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-pink">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-pink">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-pink">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-red-pink">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-pink">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-pink selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-pink">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box red-pink">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid red-pink">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_red-sunglo">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn red-sunglo">Default</button>
																	<Link to="#" className="btn red-sunglo"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default red-sunglo-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn red-sunglo">Dropdown</button>
																		<button type="button" className="btn red-sunglo dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-red-sunglo">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-red-sunglo">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-red-sunglo">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-red-sunglo">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-sunglo">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-red-sunglo">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-red-sunglo">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-red-sunglo">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-red-sunglo">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-red-sunglo">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-sunglo">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-red-sunglo">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-sunglo">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-sunglo">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-sunglo">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-sunglo">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-red-sunglo">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-sunglo">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-sunglo selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-sunglo">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box red-sunglo">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid red-sunglo">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_red-intense">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn red-intense">Default</button>
																	<Link to="#" className="btn red-intense"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default red-intense-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn red-intense">Dropdown</button>
																		<button type="button" className="btn red-intense dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-red-intense">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-red-intense">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-red-intense">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-red-intense">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-intense">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-red-intense">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-red-intense">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-red-intense">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-red-intense">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-red-intense">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-intense">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-red-intense">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-intense">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-intense">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-intense">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-intense">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-red-intense">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-intense">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-intense selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-intense">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box red-intense">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid red-intense">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_red-thunderbird">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn red-thunderbird">Default</button>
																	<Link to="#" className="btn red-thunderbird"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default red-thunderbird-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn red-thunderbird">Dropdown</button>
																		<button type="button" className="btn red-thunderbird dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-red-thunderbird">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-red-thunderbird">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-red-thunderbird">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-red-thunderbird">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-thunderbird">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-red-thunderbird">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-red-thunderbird">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-red-thunderbird">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-red-thunderbird">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-red-thunderbird">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-thunderbird">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-red-thunderbird">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-thunderbird">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-thunderbird">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-thunderbird">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-thunderbird">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-red-thunderbird">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-thunderbird">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-thunderbird selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-thunderbird">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box red-thunderbird">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid red-thunderbird">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_red-flamingo">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn red-flamingo">Default</button>
																	<Link to="#" className="btn red-flamingo"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default red-flamingo-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn red-flamingo">Dropdown</button>
																		<button type="button" className="btn red-flamingo dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-red-flamingo">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-red-flamingo">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-red-flamingo">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-red-flamingo">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-flamingo">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-red-flamingo">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-red-flamingo">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-red-flamingo">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-red-flamingo">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-red-flamingo">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-red-flamingo">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-red-flamingo">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-flamingo">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-flamingo">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-flamingo">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat red-flamingo">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-red-flamingo">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-flamingo">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-flamingo selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-red-flamingo">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box red-flamingo">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid red-flamingo">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane " id="tab__yellow">
												<h3>Click Below Tabs To See More Variants of Yellow</h3>
												<ul className="nav nav-pills">
													<li>
														<Link to="#tab_yellow" data-toggle="tab" className="bg-yellow">
														.yellow</Link>
													</li>
													<li>
														<Link to="#tab_yellow-gold" data-toggle="tab" className="bg-yellow-gold">
														.yellow-gold</Link>
													</li>
													<li>
														<Link to="#tab_yellow-casablanca" data-toggle="tab" className="bg-yellow-casablanca">
														.yellow-casablanca</Link>
													</li>
													<li>
														<Link to="#tab_yellow-crusta" data-toggle="tab" className="bg-yellow-crusta">
														.yellow-crusta</Link>
													</li>
													<li>
														<Link to="#tab_yellow-lemon" data-toggle="tab" className="bg-yellow-lemon">
														.yellow-lemon</Link>
													</li>
													<li>
														<Link to="#tab_yellow-saffron" data-toggle="tab" className="bg-yellow-saffron">
														.yellow-saffron</Link>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane active" id="tab_yellow">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn yellow">Default</button>
																	<Link to="#" className="btn yellow"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default yellow-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn yellow">Dropdown</button>
																		<button type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-yellow">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-yellow">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-yellow">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-yellow">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-yellow">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-yellow">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-yellow">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-yellow">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-yellow">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box yellow">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid yellow">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_yellow-gold">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn yellow-gold">Default</button>
																	<Link to="#" className="btn yellow-gold"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default yellow-gold-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn yellow-gold">Dropdown</button>
																		<button type="button" className="btn yellow-gold dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-yellow-gold">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-yellow-gold">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-yellow-gold">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-yellow-gold">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-gold">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-gold">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-yellow-gold">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-yellow-gold">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-yellow-gold">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-yellow-gold">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-gold">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-gold">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-gold">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-gold">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-gold">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-gold">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-yellow-gold">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-gold">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-gold selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-gold">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box yellow-gold">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid yellow-gold">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_yellow-casablanca">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn yellow-casablanca">Default</button>
																	<Link to="#" className="btn yellow-casablanca"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default yellow-casablanca-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn yellow-casablanca">Dropdown</button>
																		<button type="button" className="btn yellow-casablanca dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-yellow-casablanca">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-yellow-casablanca">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-yellow-casablanca">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-yellow-casablanca">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-casablanca">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-casablanca">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-yellow-casablanca">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-yellow-casablanca">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-yellow-casablanca">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-yellow-casablanca">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-casablanca">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-casablanca">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-casablanca">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-casablanca">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-casablanca">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-casablanca">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-yellow-casablanca">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-casablanca">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-casablanca selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-casablanca">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box yellow-casablanca">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid yellow-casablanca">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_yellow-crusta">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn yellow-crusta">Default</button>
																	<Link to="#" className="btn yellow-crusta"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default yellow-crusta-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn yellow-crusta">Dropdown</button>
																		<button type="button" className="btn yellow-crusta dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-yellow-crusta">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-yellow-crusta">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-yellow-crusta">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-yellow-crusta">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-crusta">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-crusta">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-yellow-crusta">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-yellow-crusta">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-yellow-crusta">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-yellow-crusta">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-crusta">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-crusta">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-crusta">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-crusta">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-crusta">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-crusta">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-yellow-crusta">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-crusta">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-crusta selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-crusta">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box yellow-crusta">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid yellow-crusta">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_yellow-lemon">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn yellow-lemon">Default</button>
																	<Link to="#" className="btn yellow-lemon"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default yellow-lemon-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn yellow-lemon">Dropdown</button>
																		<button type="button" className="btn yellow-lemon dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-yellow-lemon">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-yellow-lemon">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-yellow-lemon">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-yellow-lemon">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-lemon">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-lemon">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-yellow-lemon">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-yellow-lemon">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-yellow-lemon">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-yellow-lemon">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-lemon">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-lemon">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-lemon">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-lemon">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-lemon">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-lemon">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-yellow-lemon">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-lemon">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-lemon selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-lemon">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box yellow-lemon">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid yellow-lemon">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_yellow-saffron">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn yellow-saffron">Default</button>
																	<Link to="#" className="btn yellow-saffron"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default yellow-saffron-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn yellow-saffron">Dropdown</button>
																		<button type="button" className="btn yellow-saffron dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-yellow-saffron">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-yellow-saffron">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-yellow-saffron">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-yellow-saffron">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-saffron">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-saffron">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-yellow-saffron">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-yellow-saffron">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-yellow-saffron">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-yellow-saffron">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-yellow-saffron">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-yellow-saffron">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-saffron">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-saffron">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-saffron">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat yellow-saffron">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-yellow-saffron">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-saffron">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-saffron selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-yellow-saffron">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box yellow-saffron">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid yellow-saffron">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane " id="tab__purple">
												<h3>Click Below Tabs To See More Variants of Purple</h3>
												<ul className="nav nav-pills">
													<li>
														<Link to="#tab_purple" data-toggle="tab" className="bg-purple">
														.purple</Link>
													</li>
													<li>
														<Link to="#tab_purple-plum" data-toggle="tab" className="bg-purple-plum">
														.purple-plum</Link>
													</li>
													<li>
														<Link to="#tab_purple-medium" data-toggle="tab" className="bg-purple-medium">
														.purple-medium</Link>
													</li>
													<li>
														<Link to="#tab_purple-studio" data-toggle="tab" className="bg-purple-studio">
														.purple-studio</Link>
													</li>
													<li>
														<Link to="#tab_purple-wisteria" data-toggle="tab" className="bg-purple-wisteria">
														.purple-wisteria</Link>
													</li>
													<li>
														<Link to="#tab_purple-seance" data-toggle="tab" className="bg-purple-seance">
														.purple-seance</Link>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane active" id="tab_purple">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn purple">Default</button>
																	<Link to="#" className="btn purple"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default purple-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn purple">Dropdown</button>
																		<button type="button" className="btn purple dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-purple">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-purple">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-purple">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-purple">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-purple">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-purple">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-purple">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-purple">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-purple">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-purple">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-purple">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box purple">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid purple">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_purple-plum">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn purple-plum">Default</button>
																	<Link to="#" className="btn purple-plum"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default purple-plum-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn purple-plum">Dropdown</button>
																		<button type="button" className="btn purple-plum dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-purple-plum">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-purple-plum">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-purple-plum">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-purple-plum">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-plum">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-plum">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-purple-plum">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-purple-plum">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-purple-plum">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-purple-plum">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-plum">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-plum">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-plum">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-plum">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-plum">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-plum">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-purple-plum">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-plum">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-plum selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-plum">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box purple-plum">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid purple-plum">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_purple-medium">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn purple-medium">Default</button>
																	<Link to="#" className="btn purple-medium"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default purple-medium-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn purple-medium">Dropdown</button>
																		<button type="button" className="btn purple-medium dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-purple-medium">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-purple-medium">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-purple-medium">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-purple-medium">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-medium">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-medium">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-purple-medium">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-purple-medium">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-purple-medium">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-purple-medium">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-medium">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-medium">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-medium">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-medium">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-medium">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-medium">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-purple-medium">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-medium">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-medium selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-medium">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box purple-medium">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid purple-medium">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_purple-studio">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn purple-studio">Default</button>
																	<Link to="#" className="btn purple-studio"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default purple-studio-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn purple-studio">Dropdown</button>
																		<button type="button" className="btn purple-studio dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-purple-studio">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-purple-studio">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-purple-studio">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-purple-studio">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-studio">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-studio">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-purple-studio">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-purple-studio">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-purple-studio">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-purple-studio">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-studio">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-studio">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-studio">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-studio">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-studio">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-studio">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-purple-studio">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-studio">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-studio selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-studio">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box purple-studio">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid purple-studio">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_purple-wisteria">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn purple-wisteria">Default</button>
																	<Link to="#" className="btn purple-wisteria"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default purple-wisteria-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn purple-wisteria">Dropdown</button>
																		<button type="button" className="btn purple-wisteria dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-purple-wisteria">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-purple-wisteria">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-purple-wisteria">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-purple-wisteria">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-wisteria">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-wisteria">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-purple-wisteria">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-purple-wisteria">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-purple-wisteria">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-purple-wisteria">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-wisteria">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-wisteria">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-wisteria">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-wisteria">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-wisteria">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-wisteria">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-purple-wisteria">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-wisteria">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-wisteria selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-wisteria">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box purple-wisteria">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid purple-wisteria">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_purple-seance">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn purple-seance">Default</button>
																	<Link to="#" className="btn purple-seance"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default purple-seance-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn purple-seance">Dropdown</button>
																		<button type="button" className="btn purple-seance dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-purple-seance">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-purple-seance">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-purple-seance">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-purple-seance">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-seance">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-seance">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-purple-seance">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-purple-seance">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-purple-seance">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-purple-seance">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-purple-seance">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-purple-seance">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-seance">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-seance">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-seance">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat purple-seance">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-purple-seance">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-seance">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-seance selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-purple-seance">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box purple-seance">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid purple-seance">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane " id="tab__grey">
												<h3>Click Below Tabs To See More Variants of Grey</h3>
												<ul className="nav nav-pills">
													<li>
														<Link to="#tab_grey" data-toggle="tab" className="bg-grey">
														.grey</Link>
													</li>
													<li>
														<Link to="#tab_grey-cascade" data-toggle="tab" className="bg-grey-cascade">
														.grey-cascade</Link>
													</li>
													<li>
														<Link to="#tab_grey-silver" data-toggle="tab" className="bg-grey-silver">
														.grey-silver</Link>
													</li>
													<li>
														<Link to="#tab_grey-steel" data-toggle="tab" className="bg-grey-steel">
														.grey-steel</Link>
													</li>
													<li>
														<Link to="#tab_grey-cararra" data-toggle="tab" className="bg-grey-cararra">
														.grey-cararra</Link>
													</li>
													<li>
														<Link to="#tab_grey-gallery" data-toggle="tab" className="bg-grey-gallery">
														.grey-gallery</Link>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane active" id="tab_grey">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn grey">Default</button>
																	<Link to="#" className="btn grey"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default grey-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn grey">Dropdown</button>
																		<button type="button" className="btn grey dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-grey">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-grey">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-grey">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-grey">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-grey">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-grey">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-grey">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-grey">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-grey">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-grey">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-grey">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box grey">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid grey">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_grey-cascade">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn grey-cascade">Default</button>
																	<Link to="#" className="btn grey-cascade"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default grey-cascade-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn grey-cascade">Dropdown</button>
																		<button type="button" className="btn grey-cascade dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-grey-cascade">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-grey-cascade">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-grey-cascade">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-grey-cascade">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-cascade">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-cascade">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-grey-cascade">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-grey-cascade">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-grey-cascade">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-grey-cascade">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-cascade">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-cascade">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cascade">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cascade">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cascade">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cascade">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-grey-cascade">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-cascade">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-cascade selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-cascade">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box grey-cascade">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid grey-cascade">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_grey-silver">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn grey-silver">Default</button>
																	<Link to="#" className="btn grey-silver"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default grey-silver-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn grey-silver">Dropdown</button>
																		<button type="button" className="btn grey-silver dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-grey-silver">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-grey-silver">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-grey-silver">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-grey-silver">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-silver">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-silver">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-grey-silver">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-grey-silver">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-grey-silver">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-grey-silver">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-silver">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-silver">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-silver">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-silver">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-silver">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-silver">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-grey-silver">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-silver">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-silver selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-silver">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box grey-silver">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid grey-silver">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_grey-steel">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn grey-steel">Default</button>
																	<Link to="#" className="btn grey-steel"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default grey-steel-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn grey-steel">Dropdown</button>
																		<button type="button" className="btn grey-steel dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-grey-steel">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-grey-steel">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-grey-steel">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-grey-steel">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-steel">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-steel">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-grey-steel">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-grey-steel">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-grey-steel">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-grey-steel">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-steel">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-steel">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-steel">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-steel">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-steel">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-steel">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-grey-steel">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-steel">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-steel selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-steel">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box grey-steel">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid grey-steel">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_grey-cararra">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn grey-cararra">Default</button>
																	<Link to="#" className="btn grey-cararra"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default grey-cararra-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn grey-cararra">Dropdown</button>
																		<button type="button" className="btn grey-cararra dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-grey-cararra">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-grey-cararra">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-grey-cararra">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-grey-cararra">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-cararra">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-cararra">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-grey-cararra">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-grey-cararra">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-grey-cararra">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-grey-cararra">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-cararra">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-cararra">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cararra">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cararra">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cararra">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-cararra">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-grey-cararra">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-cararra">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-cararra selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-cararra">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box grey-cararra">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid grey-cararra">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
													<div className="tab-pane " id="tab_grey-gallery">
														<div className="row">
															<div className="col-md-12">
																{/* Begin stat blocks  */}
																<h3>Buttons</h3>
																<div className="clearfix">
																	{/* Standard gray button with gradient  */}
																	<button type="button" className="btn grey-gallery">Default</button>
																	<Link to="#" className="btn grey-gallery"><i className="fa fa-gift"></i> With icon</Link>
																	<Link to="#" className="btn default grey-gallery-stripe">Stripe</Link>
																	<div className="btn-group">
																		<button type="button" className="btn grey-gallery">Dropdown</button>
																		<button type="button" className="btn grey-gallery dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<ul className="dropdown-menu" role="menu">
																			<li>
																				<Link to="#">
																				Action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Another action </Link>
																			</li>
																			<li>
																				<Link to="#">
																				Something else here </Link>
																			</li>
																			<li className="divider">
																			</li>
																			<li>
																				<Link to="#">
																				Separated link </Link>
																			</li>
																		</ul>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin stat blocks  */}
																<h3>Texts, Font Icons, Badges, Lables</h3>
																<div className="clearfix">
																	<table className="table table-bordered table-striped">
																	<thead>
																	<tr>
																		<th>
																			Text
																		</th>
																		<th>
																			Fontawesome Icon
																		</th>
																		<th>
																			Simple Line Icon
																		</th>
																		<th>
																			Glyphicon Icon
																		</th>
																		<th>
																			Label
																		</th>
																		<th>
																			Badges
																		</th>
																	</tr>
																	</thead>
																	<tbody>
																	<tr>
																		<td>
																			<span className="font-grey-gallery">Simple text</span>
																		</td>
																		<td>
																			<i className="fa fa-user font-grey-gallery">
																			</i>
																		</td>
																		<td>
																			<i className="icon-pin font-grey-gallery">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-cog font-grey-gallery">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-gallery">
																			Label </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-gallery">
																			7 </span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<span className="font-grey-gallery">Another text</span>
																		</td>
																		<td>
																			<i className="fa fa-gears font-grey-gallery">
																			</i>
																		</td>
																		<td>
																			<i className="icon-present font-grey-gallery">
																			</i>
																		</td>
																		<td>
																			<i className="glyphicon glyphicon-trash font-grey-gallery">
																			</i>
																		</td>
																		<td>
																			<span className="label bg-grey-gallery">
																			New </span>
																		</td>
																		<td>
																			<span className="badge bg-grey-gallery">
																			11 </span>
																		</td>
																	</tr>
																	</tbody>
																	</table>
																</div>
																{/* Begin stat blocks  */}
																<h3>Statistic Blocks</h3>
																<div className="row">
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-gallery">
																			<div className="visual">
																				<i className="fa fa-comments"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					1349
																				</div>
																				<div className="desc">
																					New Feedbacks
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-gallery">
																			<div className="visual">
																				<i className="fa fa-shopping-cart"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					549
																				</div>
																				<div className="desc">
																					New Orders
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-gallery">
																			<div className="visual">
																				<i className="fa fa-globe"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					+89%
																				</div>
																				<div className="desc">
																					Brand Popularity
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<div className="dashboard-stat grey-gallery">
																			<div className="visual">
																				<i className="fa fa-bar-chart-o"></i>
																			</div>
																			<div className="details">
																				<div className="number">
																					12,5M$
																				</div>
																				<div className="desc">
																					Total Profit
																				</div>
																			</div>
																			<Link className="more" to="#">
																			View more <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
																{/* End stat blocks  */}
																{/* Begin Tiles  */}
																<h3>Tiles</h3>
																<div className="tiles">
																	<div className="tile bg-grey-gallery">
																		<div className="tile-body">
																			<i className="fa fa-bar-chart-o"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Reports
																			</div>
																			<div className="number">
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-gallery">
																		<div className="tile-body">
																			<i className="fa fa-briefcase"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Documents
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile image double selected">
																		<div className="tile-body">
																			<img src="../../assets/admin/pages/media/gallery/image4.jpg" alt=""></img>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Gallery
																			</div>
																			<div className="number">
																				124
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-gallery selected">
																		<div className="corner">
																		</div>
																		<div className="check">
																		</div>
																		<div className="tile-body">
																			<i className="fa fa-cogs"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Settings
																			</div>
																		</div>
																	</div>
																	<div className="tile bg-grey-gallery">
																		<div className="tile-body">
																			<i className="fa fa-plane"></i>
																		</div>
																		<div className="tile-object">
																			<div className="name">
																				Projects
																			</div>
																			<div className="number">
																				34
																			</div>
																		</div>
																	</div>
																</div>
																{/* End tiles  */}
																{/* Begin portlet samples  */}
																<h3>Portlets</h3>
																<div className="portlet box grey-gallery">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																<div className="portlet solid grey-gallery">
																	<div className="portlet-title">
																		<div className="caption">
																			<i className="fa fa-gift"></i>Portlet
																		</div>
																		<div className="tools">
																			<Link to="#" className="collapse">
																			</Link>
																			<Link to="#portlet-config" data-toggle="modal" className="config">
																			</Link>
																			<Link to="#" className="reload">
																			</Link>
																		</div>
																	</div>
																	<div className="portlet-body">
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																		<p>
																			Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
																		</p>
																	</div>
																</div>
																{/* End portlet samples  */}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* END PAGE CONTENT */}
						</div>
						{/* END CONTENT  */}
						{/* BEGIN QUICK SIDEBAR  */}
						{/*Cooming Soon... */}
						{/* END QUICK SIDEBAR  */}
					</div>
				
			</Fragment> 
        )
    }
}

