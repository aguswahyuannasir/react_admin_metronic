import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

export default class Buttons extends Component {
	
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


    render(){
        return (
			<Fragment>

				<div className="page-content-wrapper">
						<div className="page-content">
							{/*  BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM */}
							<div className="modal fade" id="portlet-config" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
									{/*  /.modal-content  */}
								</div>
								{/*  /.modal-dialog  */}
							</div>
							{/*  /.modal  */}
							{/*  END SAMPLE PORTLET CONFIGURATION MODAL FORM */}
							{/*  BEGIN PAGE HEADER */}
							{/*  BEGIN PAGE HEAD  */}
							<div className="page-head">
								{/*  BEGIN PAGE TITLE  */}
								<div className="page-title">
									<h1>Buttons <small>buttons, button dropdowns and more</small></h1>
								</div>
								{/*  END PAGE TITLE  */}
								{/*  BEGIN PAGE TOOLBAR  */}
								<div className="page-toolbar">
									{/*  BEGIN THEME PANEL  */}
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
									{/*  END THEME PANEL  */}
								</div>
								{/*  END PAGE TOOLBAR  */}
							</div>
							{/*  END PAGE HEAD  */}
							{/*  BEGIN PAGE BREADCRUMB  */}
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
									<Link to="#">Buttons</Link>
								</li>
							</ul>
							{/*  END PAGE BREADCRUMB  */}
							{/*  END PAGE HEADER */}
							<div className="row">
								<div className="col-md-12">
									<div className="tabbable-custom tabbable-noborder">
										<ul className="nav nav-tabs">
											<li className="active">
												<Link to="#tab_1_1" data-toggle="tab">Square Buttons</Link>
											</li>
											<li>
												<Link to="#tab_1_2" data-toggle="tab">Circle Buttons <span className="label label-sm label-danger circle">new</span></Link>
											</li>
										</ul>
										<div className="tab-content">
											<div className="tab-pane active" id="tab_1_1">
												<div className="row">
													<div className="col-md-6">
														{/*  BEGIN BUTTONS PORTLET */}
														<div className="portlet box green ">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Buttons
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<div className="clearfix">
																	<h4 className="block">Default Bootstrap Buttons(Customized to Match Theme Style)</h4>
																	{/*  Standard gray button with gradient  */}
																	<button type="button" className="btn btn-default" onClick={ () => this.getData() }>Default</button>
																	{/*  Provides extra visual weight and identifies the primary action in a set of buttons  */}
																	<button type="button" className="btn btn-primary">Primary</button>
																	{/*  Indicates a successful or positive action  */}
																	<button type="button" className="btn btn-success">Success</button>
																	{/*  Contextual button for informational alert messages  */}
																	<button type="button" className="btn btn-info">Info</button>
																	{/*  Indicates caution should be taken with this action  */}
																	<button type="button" className="btn btn-warning">Warning</button>
																	{/*  Indicates a dangerous or potentially negative action  */}
																	<button type="button" className="btn btn-danger">Danger</button>
																	{/*  Deemphasize a button by making it look like a link while maintaining button behavior  */}
																	<button type="button" className="btn btn-link">Link</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">Metronic Style Buttons</h4>
																	<button type="button" className="btn default">Default</button>
																	<button type="button" className="btn red">Red</button>
																	<button type="button" className="btn blue">Blue</button>
																	<button type="button" className="btn green">Green</button>
																	<button type="button" className="btn yellow">Yellow</button>
																	<button type="button" className="btn purple">Purple</button>
																	<button type="button" className="btn dark">Dark</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">More Button Colors(go to <Link to="ui_colors.html">
																	ui_colors.html </Link>
																	for more colors) </h4>
																	<button type="button" className="btn blue-hoki">Blue Hoki</button>
																	<button type="button" className="btn blue-madison">Blue Madison</button>
																	<button type="button" className="btn green-meadow">Green Meadow</button>
																	<button type="button" className="btn red-sunglo">Red Sunglo</button>
																	<button type="button" className="btn yellow-crusta">Yellow Crusta</button>
																	<button type="button" className="btn purple-plum">Purple Plum</button>
																	<button type="button" className="btn grey-cascade">Grey Cascade</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Stripe</h4>
																	<Link to="#" className="btn default red-stripe">
																	Red </Link>
																	<Link to="#" className="btn default blue-stripe">
																	Blue </Link>
																	<Link to="#" className="btn default green-stripe">
																	Green </Link>
																	<Link to="#" className="btn default yellow-stripe">
																	Yellow </Link>
																	<Link to="#" className="btn default purple-stripe">
																	Purple </Link>
																	<Link to="#" className="btn default green-stripe">
																	Green </Link>
																	<Link to="#" className="btn default dark-stripe">
																	Dark </Link>
																</div>
																<div className="clearfix">
																	<h4 className="block">Disabled</h4>
																	<Link to="#" className="btn default disabled">
																	Default </Link>
																	<Link to="#" className="btn red disabled">
																	Red </Link>
																	<Link to="#" className="btn blue disabled">
																	Blue </Link>
																	<Link to="#" className="btn green disabled">
																	Green </Link>
																	<Link to="#" className="btn yellow disabled">
																	Yellow </Link>
																	<Link to="#" className="btn purple disabled">
																	Purple </Link>
																	<Link to="#" className="btn dark disabled">
																	Dark </Link>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Sizes</h4>
																	<button type="button" className="btn default btn-lg">Large button</button>
																	<button type="button" className="btn red">Default button</button>
																	<button type="button" className="btn blue btn-sm">Small button</button>
																	<button type="button" className="btn green btn-xs">Extra small button</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Tags</h4>
																	<Link to="#" className="btn default">
																	Link </Link>
																	<button className="btn default">Button</button>
																	{/* <input type="button" className="btn default" value="Input">
																	<input type="submit" className="btn default" value="Submit"> */}
																</div>
																<div className="clearfix">
																	<h4 className="block">Block Buttons</h4>
																	<Link to="#" className="btn default btn-block">
																	Link </Link>
																	<button className="btn blue btn-block">Button</button>
																	{/* <input type="button" className="btn red btn-block" value="Input">
																	<input type="submit" className="btn purple btn-block" value="Submit"> */}
																</div>
															</div>
														</div>
														{/*  END BUTTONS PORTLET */}
														{/*  BEGIN BUTTONS WITH ICONS PORTLET */}
														<div className="portlet box red-pink">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>
																	<span className="hidden-480">
																	Buttons </span>
																</div>
																<ul className="nav nav-tabs">
																	<li>
																		<Link to="#buttons_metro" data-toggle="tab">
																		Metro </Link>
																	</li>
																	<li>
																		<Link to="#dropdown_glyphicon" data-toggle="tab">
																		Glyphicon </Link>
																	</li>
																	<li>
																		<Link to="#dropdown_simplelineicons" data-toggle="tab">
																		Simple Line</Link>
																	</li>
																	<li className="active">
																		<Link to="#dropdown_fontawesome" data-toggle="tab">
																		Fontawesome </Link>
																	</li>
																</ul>
															</div>
															<div className="portlet-body util-btn-margin-bottom-5">
																<div className="tab-content">
																	<div className="tab-pane active" id="dropdown_fontawesome">
																		<div className="clearfix">
																			<h4 className="block">Large Buttons</h4>
																			<Link to="#" className="btn btn-lg default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-lg green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-lg green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Default Buttons</h4>
																			<Link to="#" className="btn default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Small Buttons</h4>
																			<Link to="#" className="btn btn-sm default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-sm red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-sm blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-sm green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-sm yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-sm purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-sm green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-sm grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Extra Small</h4>
																			<Link to="#" className="btn btn-xs default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-xs red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-xs blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-xs green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-xs yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-xs purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-xs green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-xs grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Icon Only Buttons</h4>
																			<Link to="#" className="btn btn-icon-only default">
																			<i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only red">
																			<i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only blue">
																			<i className="fa fa-file-o"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only green">
																			<i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only yellow">
																			<i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only purple">
																			<i className="fa fa-times"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only green">
																			<i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only grey-cascade">
																			<i className="fa fa-link"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="tab-pane" id="dropdown_glyphicon">
																		<div className="clearfix">
																			<h4 className="block">Large Buttons</h4>
																			<Link to="#" className="btn btn-lg default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-lg red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-lg blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn btn-lg green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-lg yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-lg purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn btn-lg green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-lg grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Default Buttons</h4>
																			<Link to="#" className="btn default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Small Buttons</h4>
																			<Link to="#" className="btn btn-sm default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-sm red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-sm blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn btn-sm green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-sm yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-sm purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn btn-sm green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-sm grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Extra Small Buttons</h4>
																			<Link to="#" className="btn btn-xs default">
																			Default <i className="glyphicon glyphicon-cog">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs red">
																			Red <i className="glyphicon glyphicon-calendar">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs blue">
																			<i className="glyphicon glyphicon-font">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-xs green">
																			Green <i className="glyphicon glyphicon-gift">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs yellow">
																			Yellow <i className="glyphicon glyphicon-pencil">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs purple">
																			<i className="glyphicon glyphicon-tag">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-xs green">
																			Green <i className="glyphicon glyphicon-user">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs grey-cascade">
																			Dark <i className="glyphicon glyphicon-link">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Icon Only Buttons</h4>
																			<Link to="#" className="btn btn-icon-only default">
																			<i className="glyphicon glyphicon-cog">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only red">
																			<i className="glyphicon glyphicon-calendar">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only blue">
																			<i className="glyphicon glyphicon-font">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only green">
																			<i className="glyphicon glyphicon-gift">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only yellow">
																			<i className="glyphicon glyphicon-pencil">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only purple">
																			<i className="glyphicon glyphicon-tag">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only green">
																			<i className="glyphicon glyphicon-user">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only grey-cascade">
																			<i className="glyphicon glyphicon-link">
																			</i>
																			</Link>
																		</div>
																	</div>
																	<div className="tab-pane" id="dropdown_simplelineicons">
																		<div className="clearfix">
																			<h4 className="block">Large Buttons</h4>
																			<Link to="#" className="btn btn-lg default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-lg red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-lg blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-lg green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-lg yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-lg purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-lg green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-lg grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Default Buttons</h4>
																			<Link to="#" className="btn default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Small Buttons</h4>
																			<Link to="#" className="btn btn-sm default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-sm red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-sm blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-sm green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-sm yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-sm purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-sm green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-sm grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Extra Small Buttons</h4>
																			<Link to="#" className="btn btn-xs default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-xs green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-xs green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-xs grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Icon Only Buttons</h4>
																			<Link to="#" className="btn btn-icon-only default">
																			<i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only red">
																			<i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only blue">
																			<i className="icon-screen-desktop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only green">
																			<i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only yellow">
																			<i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only purple">
																			<i className="icon-bell">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only green">
																			<i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only grey-cascade">
																			<i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																	</div>
																	<div className="tab-pane " id="buttons_metro">
																		<div className="clearfix">
																			<h4 className="block">Navigation Large Icons Buttons</h4>
																			<Link to="#" className="btn btn-lg default m-icon-big">
																			Submit <i className="m-icon-big-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg green m-icon-big">
																			Submit <i className="m-icon-big-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg blue m-icon-big">
																			Submit <i className="m-icon-big-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg dark m-icon-big">
																			Submit <i className="m-icon-big-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Large Icons Only Buttons</h4>
																			<Link to="#" className="btn btn-lg default m-icon-big m-icon-only">
																			<i className="m-icon-big-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg green m-icon-big m-icon-only">
																			<i className="m-icon-big-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg blue m-icon-big m-icon-only">
																			<i className="m-icon-big-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-lg dark m-icon-big m-icon-only">
																			<i className="m-icon-big-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Block Large Icons</h4>
																			<button className="btn blue btn-block btn-lg m-icon-big">Button <i className="m-icon-big-swapright m-icon-white"></i></button>
																			<Link to="#" className="btn green btn-block btn-lg m-icon-big">
																			Link <i className="m-icon-big-swapright m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Defualt Icons Buttons</h4>
																			<Link to="#" className="btn default m-icon">
																			Submit <i className="m-icon-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn green m-icon">
																			Submit <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn blue m-icon">
																			Submit <i className="m-icon-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn dark m-icon">
																			Submit <i className="m-icon-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Defualt Icons Only Buttons</h4>
																			<Link to="#" className="btn default m-icon m-icon-only">
																			<i className="m-icon-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn green m-icon m-icon-only">
																			<i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn blue m-icon m-icon-only">
																			<i className="m-icon-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn dark m-icon m-icon-only">
																			<i className="m-icon-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Block Defualt Icons</h4>
																			<button className="btn blue btn-block m-icon">Button <i className="m-icon-swapright m-icon-white"></i></button>
																			<Link to="#" className="btn green btn-block m-icon">
																			Link <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														{/*  END BUTTONS WITH ICONS PORTLET */}
														<div className="portlet box blue">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Font Awesome Styled Buttons
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
																<Link to="#" className="icon-btn">
																<i className="fa fa-group"></i>
																<div>
																	Users
																</div>
																<span className="badge badge-danger">
																2 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-barcode"></i>
																<div>
																	Products
																</div>
																<span className="badge badge-success">
																4 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-bar-chart-o"></i>
																<div>
																	Reports
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-sitemap"></i>
																<div>
																	Categories
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-calendar"></i>
																<div>
																	Calendar
																</div>
																<span className="badge badge-success">
																4 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-envelope"></i>
																<div>
																	Inbox
																</div>
																<span className="badge badge-info">
																12 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-bullhorn"></i>
																<div>
																	Notification
																</div>
																<span className="badge badge-danger">
																3 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-map-marker"></i>
																<div>
																	Locations
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-money"><i></i></i>
																<div>
																	Finance
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-plane"></i>
																<div>
																	Projects
																</div>
																<span className="badge badge-info">
																21 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-thumbs-up"></i>
																<div>
																	Feedback
																</div>
																<span className="badge badge-info">
																2 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-cloud"></i>
																<div>
																	Servers
																</div>
																<span className="badge badge-danger">
																2 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-globe"></i>
																<div>
																	Regions
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-heart-o"></i>
																<div>
																	Popularity
																</div>
																<span className="badge badge-info">
																221 </span>
																</Link>
															</div>
														</div>
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box purple">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>List Social Icons(UL)
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<ul className="social-icons">
																	<li>
																		<Link to="#" data-original-title="amazon" className="amazon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="behance" className="behance">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="blogger" className="blogger">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="deviantart" className="deviantart">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dribbble" className="dribbble">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dropbox" className="dropbox">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="facebook" className="facebook">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="forrst" className="forrst">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="github" className="github">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="Goole Plus" className="googleplus">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="jolicloud" className="jolicloud">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="last-fm" className="last-fm">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="linkedin" className="linkedin">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="picasa" className="picasa">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="pintrest" className="pintrest">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="rss" className="rss">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="skype" className="skype">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="spotify" className="spotify">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="stumbleupon" className="stumbleupon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="tumblr" className="tumblr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="twitter" className="twitter">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vimeo" className="vimeo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="wordpress" className="wordpress">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="xing" className="xing">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="yahoo" className="yahoo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="youtube" className="youtube">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vk" className="vk">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="instagram" className="instagram">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="reddit" className="reddit">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="aboutme" className="aboutme">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="flickr" className="flickr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="foursquare" className="foursquare">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="gravatar" className="gravatar">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="klout" className="klout">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="myspace" className="myspace">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="quora" className="quora">
																		</Link>
																	</li>
																</ul>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box purple">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Inline Social Icons
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

															<div className="portlet-body util-btn-margin-bottom-5">
																	<Link to="#" data-original-title="amazon" className="social-icon amazon">
																	</Link>
																	<Link to="#" data-original-title="behance" className="social-icon behance">
																	</Link>
																	<Link to="#" data-original-title="blogger" className="social-icon blogger">
																	</Link>
																	<Link to="#" data-original-title="deviantart" className="social-icon deviantart">
																	</Link>
																	<Link to="#" data-original-title="dribbble" className="social-icon dribbble">
																	</Link>
																	<Link to="#" data-original-title="dropbox" className="social-icon dropbox">
																	</Link>
																	<Link to="#" data-original-title="facebook" className="social-icon facebook">
																	</Link>
																	<Link to="#" data-original-title="forrst" className="social-icon forrst">
																	</Link>
																	<Link to="#" data-original-title="github" className="social-icon github">
																	</Link>
																	<Link to="#" data-original-title="Goole Plus" className="social-icon googleplus">
																	</Link>
																	<Link to="#" data-original-title="jolicloud" className="social-icon jolicloud">
																	</Link>
																	<Link to="#" data-original-title="last-fm" className="social-icon last-fm">
																	</Link>
																	<Link to="#" data-original-title="linkedin" className="social-icon linkedin">
																	</Link>
																	<Link to="#" data-original-title="picasa" className="social-icon picasa">
																	</Link>
																	<Link to="#" data-original-title="pintrest" className="social-icon pintrest">
																	</Link>
																	<Link to="#" data-original-title="rss" className="social-icon rss">
																	</Link>
																	<Link to="#" data-original-title="skype" className="social-icon skype">
																	</Link>
																	<Link to="#" data-original-title="spotify" className="social-icon spotify">
																	</Link>
																	<Link to="#" data-original-title="stumbleupon" className="social-icon stumbleupon">
																	</Link>
																	<Link to="#" data-original-title="tumblr" className="social-icon tumblr">
																	</Link>
																	<Link to="#" data-original-title="twitter" className="social-icon twitter">
																	</Link>
																	<Link to="#" data-original-title="vimeo" className="social-icon vimeo">
																	</Link>
																	<Link to="#" data-original-title="wordpress" className="social-icon wordpress">
																	</Link>
																	<Link to="#" data-original-title="xing" className="social-icon xing">
																	</Link>
																	<Link to="#" data-original-title="yahoo" className="social-icon yahoo">
																	</Link>
																	<Link to="#" data-original-title="youtube" className="social-icon youtube">
																	</Link>
																	<Link to="#" data-original-title="vk" className="social-icon vk">
																	</Link>
																	<Link to="#" data-original-title="instagram" className="social-icon instagram">
																	</Link>
																	<Link to="#" data-original-title="reddit" className="social-icon reddit">
																	</Link>
																	<Link to="#" data-original-title="aboutme" className="social-icon aboutme">
																	</Link>
																	<Link to="#" data-original-title="flickr" className="social-icon flickr">
																	</Link>
																	<Link to="#" data-original-title="foursquare" className="social-icon foursquare">
																	</Link>
																	<Link to="#" data-original-title="gravatar" className="social-icon gravatar">
																	</Link>
																	<Link to="#" data-original-title="klout" className="social-icon klout">
																	</Link>
																	<Link to="#" data-original-title="myspace" className="social-icon myspace">
																	</Link>
																	<Link to="#" data-original-title="quora" className="social-icon quora">
																	</Link>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box blue">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Social Icons(Colored)
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
																<ul className="social-icons social-icons-color">
																	<li>
																		<Link to="#" data-original-title="amazon" className="amazon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="behance" className="behance">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="blogger" className="blogger">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="deviantart" className="deviantart">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dribbble" className="dribbble">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dropbox" className="dropbox">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="facebook" className="facebook">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="forrst" className="forrst">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="github" className="github">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="Goole Plus" className="googleplus">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="jolicloud" className="jolicloud">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="last-fm" className="last-fm">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="linkedin" className="linkedin">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="picasa" className="picasa">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="pintrest" className="pintrest">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="rss" className="rss">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="skype" className="skype">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="spotify" className="spotify">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="stumbleupon" className="stumbleupon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="tumblr" className="tumblr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="twitter" className="twitter">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vimeo" className="vimeo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="wordpress" className="wordpress">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="xing" className="xing">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="yahoo" className="yahoo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="youtube" className="youtube">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vk" className="vk">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="instagram" className="instagram">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="reddit" className="reddit">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="aboutme" className="aboutme">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="flickr" className="flickr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="foursquare" className="foursquare">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="gravatar" className="gravatar">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="klout" className="klout">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="myspace" className="myspace">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="quora" className="quora">
																		</Link>
																	</li>
																</ul>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box purple">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Inline Social Icons(Colored)
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<Link to="#" data-original-title="amazon" className="social-icon social-icon-color amazon">
																</Link>
																<Link to="#" data-original-title="behance" className="social-icon social-icon-color behance">
																</Link>
																<Link to="#" data-original-title="blogger" className="social-icon social-icon-color blogger">
																</Link>
																<Link to="#" data-original-title="deviantart" className="social-icon social-icon-color deviantart">
																</Link>
																<Link to="#" data-original-title="dribbble" className="social-icon social-icon-color dribbble">
																</Link>
																<Link to="#" data-original-title="dropbox" className="social-icon social-icon-color dropbox">
																</Link>
																<Link to="#" data-original-title="facebook" className="social-icon social-icon-color facebook">
																</Link>
																<Link to="#" data-original-title="forrst" className="social-icon social-icon-color forrst">
																</Link>
																<Link to="#" data-original-title="github" className="social-icon social-icon-color github">
																</Link>
																<Link to="#" data-original-title="Goole Plus" className="social-icon social-icon-color googleplus">
																</Link>
																<Link to="#" data-original-title="jolicloud" className="social-icon social-icon-color jolicloud">
																</Link>
																<Link to="#" data-original-title="last-fm" className="social-icon social-icon-color last-fm">
																</Link>
																<Link to="#" data-original-title="linkedin" className="social-icon social-icon-color linkedin">
																</Link>
																<Link to="#" data-original-title="picasa" className="social-icon social-icon-color picasa">
																</Link>
																<Link to="#" data-original-title="pintrest" className="social-icon social-icon-color pintrest">
																</Link>
																<Link to="#" data-original-title="rss" className="social-icon social-icon-color rss">
																</Link>
																<Link to="#" data-original-title="skype" className="social-icon social-icon-color skype">
																</Link>
																<Link to="#" data-original-title="spotify" className="social-icon social-icon-color spotify">
																</Link>
																<Link to="#" data-original-title="stumbleupon" className="social-icon social-icon-color stumbleupon">
																</Link>
																<Link to="#" data-original-title="tumblr" className="social-icon social-icon-color tumblr">
																</Link>
																<Link to="#" data-original-title="twitter" className="social-icon social-icon-color twitter">
																</Link>
																<Link to="#" data-original-title="vimeo" className="social-icon social-icon-color vimeo">
																</Link>
																<Link to="#" data-original-title="wordpress" className="social-icon social-icon-color wordpress">
																</Link>
																<Link to="#" data-original-title="xing" className="social-icon social-icon-color xing">
																</Link>
																<Link to="#" data-original-title="yahoo" className="social-icon social-icon-color yahoo">
																</Link>
																<Link to="#" data-original-title="youtube" className="social-icon social-icon-color youtube">
																</Link>
																<Link to="#" data-original-title="vk" className="social-icon social-icon-color vk">
																</Link>
																<Link to="#" data-original-title="instagram" className="social-icon social-icon-color instagram">
																</Link>
																<Link to="#" data-original-title="reddit" className="social-icon social-icon-color reddit">
																</Link>
																<Link to="#" data-original-title="aboutme" className="social-icon social-icon-color aboutme">
																</Link>
																<Link to="#" data-original-title="flickr" className="social-icon social-icon-color flickr">
																</Link>
																<Link to="#" data-original-title="foursquare" className="social-icon social-icon-color foursquare">
																</Link>
																<Link to="#" data-original-title="gravatar" className="social-icon social-icon-color gravatar">
																</Link>
																<Link to="#" data-original-title="klout" className="social-icon social-icon-color klout">
																</Link>
																<Link to="#" data-original-title="myspace" className="social-icon social-icon-color myspace">
																</Link>
																<Link to="#" data-original-title="quora" className="social-icon social-icon-color quora">
																</Link>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
													</div>
													<div className="col-md-6">
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box yellow">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Button Groups
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
																<div className="clearfix">
																	<h4 className="block">Basic Example</h4>
																	<div className="btn-group">
																		<button type="button" className="btn btn-default">Left</button>
																		<button type="button" className="btn btn-default">Middle</button>
																		<button type="button" className="btn btn-default">Right</button>
																	</div>
																	<div className="btn-group btn-group-solid">
																		<button type="button" className="btn red">Left</button>
																		<button type="button" className="btn yellow">Middle</button>
																		<button type="button" className="btn green">Right</button>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Toolbar</h4>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group">
																			<button type="button" className="btn btn-default">1</button>
																			<button type="button" className="btn btn-default">2</button>
																			<button type="button" className="btn btn-default">3</button>
																			<button type="button" className="btn btn-default">4</button>
																		</div>
																		<div className="btn-group">
																			<button type="button" className="btn btn-default">5</button>
																			<button type="button" className="btn btn-default">6</button>
																			<button type="button" className="btn btn-default">7</button>
																		</div>
																		<div className="btn-group">
																			<button type="button" className="btn btn-default">8</button>
																		</div>
																	</div>
																	<div className="btn-toolbar">
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn red">1</button>
																			<button type="button" className="btn green">2</button>
																			<button type="button" className="btn blue">3</button>
																			<button type="button" className="btn yellow">4</button>
																		</div>
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn purple">5</button>
																			<button type="button" className="btn dark">6</button>
																			<button type="button" className="btn default">7</button>
																		</div>
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn red">8</button>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Group Sizing</h4>
																	<div className="btn-toolbar">
																		<div className="btn-group btn-group-lg btn-group-solid margin-bottom-10">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-sm btn-group-solid">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-xs btn-group-solid">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Nesting Button Group</h4>
																	<div className="btn-group">
																		<button type="button" className="btn btn-default"><i className="fa fa-user"></i> Profile</button>
																		<button type="button" className="btn btn-default"><i className="fa fa-cogs"></i> Settings</button>
																		<button type="button" className="btn btn-default"><i className="fa fa-bullhorn"></i> Feeds</button>
																		<div className="btn-group">
																			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			<i className="fa fa-ellipsis-horizontal"></i> More <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="clearfix margin-bottom-10">
																	</div>
																	<div className="btn-group btn-group-solid">
																		<button type="button" className="btn red"><i className="fa fa-user"></i> Profile</button>
																		<button type="button" className="btn green"><i className="fa fa-cogs"></i> Settings</button>
																		<button type="button" className="btn purple"><i className="fa fa-bullhorn"></i> Feeds</button>
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn blue dropdown-toggle" data-toggle="dropdown">
																			<i className="fa fa-ellipsis-horizontal"></i> More <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Vertical variation</h4>
																	<div className="btn-group-vertical margin-right-10">
																		<button type="button" className="btn btn-default">Button</button>
																		<button type="button" className="btn btn-default">Button</button>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop1" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop1">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<button type="button" className="btn btn-default">Button</button>
																		<button type="button" className="btn btn-default">Button</button>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop2" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop2">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop3" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop3">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop4" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop4">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="btn-group-vertical btn-group-solid">
																		<button type="button" className="btn blue">Button</button>
																		<button type="button" className="btn green">Button</button>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop5" type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop5">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<button type="button" className="btn red">Button</button>
																		<button type="button" className="btn dark">Button</button>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop6" type="button" className="btn default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop6">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop7" type="button" className="btn purple dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop7">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btnGroupVerticalDrop8" type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop8">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Justified Link Variation</h4>
																	<div className="btn-group btn-group-justified">
																		<Link to="#" className="btn btn-default">
																		Left </Link>
																		<Link to="#" className="btn btn-default">
																		Middle </Link>
																		<Link to="#" className="btn btn-default">
																		Right </Link>
																	</div>
																	<div className="clearfix margin-bottom-10">
																	</div>
																	<div className="btn-group btn-group btn-group-justified">
																		<Link to="#" className="btn red">
																		Left </Link>
																		<Link to="#" className="btn blue">
																		Middle </Link>
																		<Link to="#" className="btn green">
																		Right </Link>
																	</div>
																</div>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN DROPDOWNS PORTLET */}
														<div className="portlet box blue hide">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>
																	<span className="hidden-480">
																	Dropdowns </span>
																</div>
																<ul className="nav nav-tabs">
																	<li>
																		<Link to="#dropdown_2" data-toggle="tab">
																		Hoverable </Link>
																	</li>
																	<li className="active">
																		<Link to="#dropdown_1" data-toggle="tab">
																		Default </Link>
																	</li>
																</ul>
															</div>
															<div className="portlet-body">
																<div className="tab-content">
																	<div className="tab-pane active" id="dropdown_1">
																		<h4 className="block">Dropdown buttons</h4>
																		<div className="btn-group">
																			<Link className="btn dropdown-toggle" data-toggle="dropdown" to="#">
																			Tools <i className="fa fa-angle-down"></i>
																			</Link>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Settings <span className="badge badge-success">
																					3 </span>
																					</Link>
																				</li>
																				<li>
																					<Link to="#">
																					Preferences </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Window Options </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Help <span className="badge badge-danger">
																					7 </span>
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button className="btn red dropdown-toggle" data-toggle="dropdown">Primary <i className="fa fa-angle-down"></i></button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Action </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Another action <span className="badge badge-warning">
																					2 </span>
																					</Link>
																				</li>
																				<li>
																					<Link to="#">
																					Something else here </Link>
																				</li>
																				<li className="divider">
																				</li>
																				<li>
																					<Link to="#">
																					Separated link <span className="badge badge-info">
																					7 </span>
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button className="btn purple dropdown-toggle" data-toggle="dropdown">Success <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Action <span className="badge badge-inverse">
																					7 </span>
																					</Link>
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
																					Separated link <span className="badge">
																					4 </span>
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-toolbar hide">
																			<div className="btn-group">
																				<button className="btn green dropdown-toggle" data-toggle="dropdown">Success <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu">
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
																			{/*  /btn-group  */}
																			<div className="btn-group">
																				<button className="btn blue dropdown-toggle" data-toggle="dropdown">Info <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu">
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
																			{/*  /btn-group  */}
																			<div className="btn-group">
																				<button className="btn black dropdown-toggle" data-toggle="dropdown">Inverse <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu opens-left">
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
																			{/*  /btn-group  */}
																		</div>
																		<h4 className="block">Dropdown button with icons</h4>
																		<div className="btn-toolbar">
																			<div className="btn-group">
																				<Link className="btn green" to="#" data-toggle="dropdown">
																				<i className="fa fa-user"></i> User <i className="fa fa-angle-down"></i>
																				</Link>
																				<ul className="dropdown-menu">
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
																			<div className="btn-group">
																				<Link className="btn purple" to="#" data-toggle="dropdown">
																				<i className="fa fa-user"></i> Settings <i className="fa fa-angle-down"></i>
																				</Link>
																				<ul className="dropdown-menu">
																					<li>
																						<Link to="#">
																						<i className="fa fa-plus"></i> Add </Link>
																					</li>
																					<li>
																						<Link to="#">
																						<i className="fa fa-trash-o"></i> Edit </Link>
																					</li>
																					<li>
																						<Link to="#">
																						<i className="fa fa-times"></i> Delete </Link>
																					</li>
																					<li className="divider">
																					</li>
																					<li>
																						<Link to="#">
																						<i className="i"></i> Full Settings </Link>
																					</li>
																				</ul>
																			</div>
																		</div>
																		<div className="well">
																		</div>
																		<div className="well">
																			<h4 className="block">Dropup menu options.</h4>
																			<div className="btn-group">
																				<button className="btn blue dropdown-toggle" data-toggle="dropdown">Info <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu bottom-up">
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
																			<div className="btn-group">
																				<button className="btn black dropdown-toggle" data-toggle="dropdown">Inverse <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu bottom-up">
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
																			<p>
																				<span className="label label-success">
																				NOTE: </span>
																				&nbsp; By adding <code>bottom-up</code> className you make dropup menu.
																			</p>
																		</div>
																	</div>
																	<div className="tab-pane" id="dropdown_2">
																		<h4 className="block">Hoverable Dropdown Buttons</h4>
																		<div className="btn-group">
																			<Link className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true" to="#">
																			Tools <i className="fa fa-angle-down"></i>
																			</Link>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Settings <span className="badge badge-success">
																					3 </span>
																					</Link>
																				</li>
																				<li>
																					<Link to="#">
																					Preferences </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Window Options </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Help <span className="badge badge-danger">
																					7 </span>
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button className="btn red dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Primary <i className="fa fa-angle-down"></i></button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Action <span className="badge badge-warning">
																					7 </span>
																					</Link>
																				</li>
																				<li>
																					<Link to="#">
																					Another action <span className="badge badge-danger">
																					2 </span>
																					</Link>
																				</li>
																				<li>
																					<Link to="#">
																					Something else here </Link>
																				</li>
																				<li className="divider">
																				</li>
																				<li>
																					<Link to="#">
																					Separated link <span className="badge badge-info">
																					4 </span>
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button className="btn purple dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Success <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Action <span className="badge badge-inverse">
																					7 </span>
																					</Link>
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
																					Separated link <span className="badge">
																					4 </span>
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-toolbar hide">
																			<div className="btn-group">
																				<button className="btn green dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Success <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu">
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
																			{/*  /btn-group  */}
																			<div className="btn-group">
																				<button className="btn blue dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Info <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu">
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
																			{/*  /btn-group  */}
																			<div className="btn-group">
																				<button className="btn black dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Inverse <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu opens-left">
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
																			{/*  /btn-group  */}
																		</div>
																		<h4 className="block">Hoverable Dropdown Buttons with Icons</h4>
																		<div className="btn-toolbar">
																			<div className="btn-group">
																				<Link className="btn green" to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																				<i className="fa fa-user"></i> User <i className="fa fa-angle-down"></i>
																				</Link>
																				<ul className="dropdown-menu">
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
																			<div className="btn-group">
																				<Link className="btn purple" to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																				<i className="fa fa-user"></i> Settings <i className="fa fa-angle-down"></i>
																				</Link>
																				<ul className="dropdown-menu">
																					<li>
																						<Link to="#">
																						<i className="fa fa-plus"></i> Add </Link>
																					</li>
																					<li>
																						<Link to="#">
																						<i className="fa fa-trash-o"></i> Edit </Link>
																					</li>
																					<li>
																						<Link to="#">
																						<i className="fa fa-times"></i> Delete </Link>
																					</li>
																					<li className="divider">
																					</li>
																					<li>
																						<Link to="#">
																						<i className="i"></i> Full Settings </Link>
																					</li>
																				</ul>
																			</div>
																		</div>
																		<div className="well">
																			<h4 className="block">Hoverable Dropdown Buttons Dropdown with Checkboxes.</h4>
																			<div className="btn-group">
																				<Link className="btn green" to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																				Options #1 <i className="fa fa-angle-down"></i>
																				</Link>
																				<div className="dropdown-menu hold-on-click dropdown-checkboxes">

																					{/* <label><input type="checkbox">Option 1</label>
																					<label><input type="checkbox">Option 2</label>
																					<label><input type="checkbox">Option 3</label>
																					<label><input type="checkbox">Option 4</label>
																					<label><input type="checkbox">Option 5</label> */}
																				</div>
																			</div>
																			<div className="btn-group">
																				<Link className="btn red" to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																				Options #2 <i className="fa fa-angle-down"></i>
																				</Link>
																				<div className="dropdown-menu hold-on-click dropdown-checkboxes">
																					{/* <label><input type="checkbox">Option 1</label>
																					<label><input type="checkbox" checked>Option 2</label>
																					<label><input type="checkbox">Option 3</label>
																					<label><input type="checkbox" checked>Option 4</label>
																					<label><input type="checkbox">Option 5</label> */}
																				</div>
																			</div>
																			<p>
																				<span className="label label-success">
																				NOTE: </span>
																				&nbsp; By adding <code>hold-on-click</code> className you can avoid closing the dropdown on click
																			</p>
																		</div>
																		<div className="well">
																			<h4 className="block">Hoverable Dropup Buttons.</h4>
																			<div className="btn-group">
																				<button className="btn blue dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Info <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu bottom-up">
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
																			{/*  /btn-group  */}
																			<div className="btn-group">
																				<button className="btn black dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">Inverse <i className="fa fa-angle-down"></i>
																				</button>
																				<ul className="dropdown-menu bottom-up">
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
																			<p>
																				<span className="label label-success">
																				NOTE: </span>
																				&nbsp; By adding <code>bottom-up</code> className you make dropup menu.
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														{/*  END DROPDOWNS PORTLET */}
														{/*  BEGIN DROPDOWNS PORTLET */}
														<div className="portlet box green">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i> Button Dropdowns
																</div>
															</div>
															<div className="portlet-body util-btn-group-margin-bottom-5">
																<div className="clearfix">
																	<h4 className="block">Default Bootstrap Style</h4>
																	<div className="btn-group">
																		<button type="button" className="btn btn-default">Default</button>
																		<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn btn-primary">Primary</button>
																		<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn btn-success">Success</button>
																		<button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn btn-info">Info</button>
																		<button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn btn-warning">Warning</button>
																		<button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn btn-danger">Danger</button>
																		<button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																</div>
																<div className="clearfix">
																	<h4 className="block">Metronic Style</h4>
																	<div className="btn-group">
																		<button type="button" className="btn default">Default</button>
																		<button type="button" className="btn default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn blue">Blue</button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn green">Green</button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn red">Red</button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn yellow">Yellow</button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn dark">Dark</button>
																		<button type="button" className="btn dark dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group">
																		<button type="button" className="btn purple">Purple</button>
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
																	{/*  /btn-group  */}
																</div>
																<div className="clearfix">
																	<h4 className="block">Dropdowns with Multilevel Submenu</h4>
																	{/*  Large button group  */}
																	<div className="btn-group">
																		<button className="btn blue dropdown-toggle" type="button" data-toggle="dropdown">
																		Dropdown <i className="fa fa-angle-down"></i>
																		</button>
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
																			<li className="dropdown-submenu">
																				<Link to="#">
																				More options </Link>
																				<ul className="dropdown-menu" style={{}}>
																					<li>
																						<Link to="#">
																						Second level link </Link>
																					</li>
																					<li className="dropdown-submenu">
																						<Link to="#">
																						More options </Link>
																						<ul className="dropdown-menu">
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																						</ul>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																				</ul>
																			</li>
																		</ul>
																	</div>
																	<div className="btn-group dropup">
																		<button className="btn green dropdown-toggle" type="button" data-toggle="dropdown">
																		Dropup <i className="fa fa-angle-up"></i>
																		</button>
																		<ul className="dropdown-menu pull-right" role="menu">
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
																			<li className="dropdown-submenu">
																				<Link to="#">
																				More options </Link>
																				<ul className="dropdown-menu" style={{}}>
																					<li>
																						<Link to="#">
																						Second level link </Link>
																					</li>
																					<li className="dropdown-submenu">
																						<Link to="#">
																						More options </Link>
																						<ul className="dropdown-menu pull-right">
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																						</ul>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																				</ul>
																			</li>
																		</ul>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Sizing</h4>
																	{/*  Large button group  */}
																	<div className="btn-group">
																		<button className="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
																		Large button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Small button group  */}
																	<div className="btn-group">
																		<button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
																		Small button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Extra small button group  */}
																	<div className="btn-group">
																		<button className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
																		Extra small button <i className="fa fa-angle-down"></i>
																		</button>
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
																	<div className="clearfix margin-bottom-10">
																	</div>
																	{/*  Large button group  */}
																	<div className="btn-group">
																		<button className="btn red btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
																		Large button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Small button group  */}
																	<div className="btn-group">
																		<button className="btn blue btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
																		Small button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Extra small button group  */}
																	<div className="btn-group">
																		<button className="btn green btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
																		Extra small button <i className="fa fa-angle-down"></i>
																		</button>
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
																<div className="clearfix">
																	<h4 className="block">Dropup</h4>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group dropup">
																			<button type="button" className="btn btn-default">Dropup</button>
																			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group dropup">
																			<button type="button" className="btn btn-primary">Right dropup</button>
																			<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																			<ul className="dropdown-menu pull-right" role="menu">
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
																		{/*  /btn-group  */}
																	</div>
																	<div className="btn-toolbar">
																		<div className="btn-group dropup">
																			<button type="button" className="btn blue">Dropup</button>
																			<button type="button" className="btn blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group dropup">
																			<button type="button" className="btn green">Right dropup</button>
																			<button type="button" className="btn green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																			<ul className="dropdown-menu pull-right" role="menu">
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
																		{/*  /btn-group  */}
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Hoveralbe Dropdowns</h4>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group">
																			<button type="button" className="btn btn-default">Dropdown</button>
																			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"><i className="fa fa-angle-down"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group dropup">
																			<button type="button" className="btn btn-primary">Dropup</button>
																			<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"><i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group">
																			<button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																			Dropup <i className="fa fa-angle-down"></i>
																			</button>
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
																		{/*  /btn-group  */}
																	</div>
																	<div className="btn-toolbar">
																		<div className="btn-group">
																			<button type="button" className="btn blue">Dropdown</button>
																			<button type="button" className="btn blue dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"><i className="fa fa-angle-down"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group dropup">
																			<button type="button" className="btn green">Dropup</button>
																			<button type="button" className="btn green dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																			<i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group">
																			<button type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
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
																		{/*  /btn-group  */}
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Dropdown with Checkboxes & Search Form</h4>
																	<div className="btn-group">
																		<button className="btn green dropdown-toggle" type="button" data-toggle="dropdown">
																		Search Dropdown <i className="fa fa-angle-down"></i>
																		</button>
																		<div className="dropdown-menu dropdown-content input-large hold-on-click" role="menu">
																			<form action="#">
																				<div className="input-group">
																					{/* <input type="text" className="form-control" placeholder="search..."> */}
																					<span className="input-group-btn">
																					<button className="btn blue" type="submit">Go!</button>
																					</span>
																				</div>
																			</form>
																		</div>
																	</div>
																	<div className="btn-group">
																		<button type="button" className="btn blue">Dropdown</button>
																		<button type="button" className="btn blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<div className="dropdown-menu hold-on-click dropdown-checkboxes" role="menu">
																			{/* <label><input type="checkbox">Option 1</label>
																			<label><input type="checkbox" checked>Option 2</label>
																			<label><input type="checkbox">Option 3</label>
																			<label><input type="checkbox" checked>Option 4</label>
																			<label><input type="checkbox">Option 5</label> */}
																		</div>
																	</div>
																	{/*  /btn-group  */}
																	<div className="btn-group dropup">
																		<button type="button" className="btn green">Dropup</button>
																		<button type="button" className="btn green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																		<div className="dropdown-menu hold-on-click dropdown-checkboxes" role="menu">
																			{/* <label><input type="checkbox">Option 1</label>
																			<label><input type="checkbox" checked>Option 2</label>
																			<label><input type="checkbox">Option 3</label>
																			<label><input type="checkbox" checked>Option 4</label>
																			<label><input type="checkbox">Option 5</label> */}
																		</div>
																	</div>
																	{/*  /btn-group  */}
																	<div className="clearfix margin-top-10">
																		<span className="label label-success">
																		NOTE: </span>
																		&nbsp; By adding <code>hold-on-click</code> className you can avoid closing the dropdown on click
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Dropdown with Radio Buttons</h4>
																	<div className="btn-group">
																		<button type="button" className="btn blue">Dropdown</button>
																		<button type="button" className="btn blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<div className="dropdown-menu hold-on-click dropdown-radiobuttons" role="menu">
																			{/* <label><input type="radio" name="radio_button_1">Option 1</label>
																			<label><input type="radio" name="radio_button_1">Option 2</label>
																			<label><input type="radio" name="radio_button_1">Option 3</label>
																			<label><input type="radio" name="radio_button_1">Option 4</label>
																			<label><input type="radio" name="radio_button_1">Option 5</label> */}
																		</div>
																	</div>
																	{/*  /btn-group  */}
																	<div className="btn-group dropup">
																		<button type="button" className="btn green">Dropup</button>
																		<button type="button" className="btn green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																		<div className="dropdown-menu hold-on-click dropdown-radiobuttons" role="menu">
																			{/* <label><input type="radio" name="radio_button_2">Option 1</label>
																			<label><input type="radio" name="radio_button_2">Option 2</label>
																			<label><input type="radio" name="radio_button_2">Option 3</label>
																			<label><input type="radio" name="radio_button_2">Option 4</label>
																			<label><input type="radio" name="radio_button_2">Option 5</label> */}
																		</div>
																	</div>
																	{/*  /btn-group  */}
																	<div className="clearfix margin-top-10">
																		<span className="label label-success">
																		NOTE: </span>
																		&nbsp; By adding <code>hold-on-click</code> className you can avoid closing the dropdown on click
																	</div>
																</div>
															</div>
															{/*  END DROPDOWNS PORTLET */}
														</div>
														<div className="portlet box green util-btn-group-margin-bottom-5">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>
																	<span className="hidden-480">
																	Button States </span>
																</div>
															</div>
															<div className="portlet-body util-btn-margin-bottom-5">
																<h4>Loading State</h4>
																<div className="clearfix">
																	<button type="button" onClick={this.handleClick} data-loading-text="Loading..." className="demo-loading-btn btn btn-primary">
																	Loading state </button>
																	<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn btn-default">
																	Loading state </button>
																	<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn red">
																	Loading state </button>
																	<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn blue">
																	Loading state </button>
																</div>
																<h4>Single Toggle</h4>
																<div className="clearfix">
																	<button type="button" className="btn btn-primary" data-toggle="button">
																	Single toggle </button>
																	<button type="button" className="btn btn-default" data-toggle="button">
																	Single toggle </button>
																	<button type="button" className="btn red" data-toggle="button">
																	Single toggle </button>
																	<button type="button" className="btn blue" data-toggle="button">
																	Single toggle </button>
																</div>
																<h4>Checkbox</h4>
																<div className="clearfix">
																	<div className="btn-group" data-toggle="buttons">
																		{/* <label className="btn default active">
																		<input type="checkbox" className="toggle"> Option 1 </label>
																		<label className="btn default">
																		<input type="checkbox" className="toggle"> Option 2 </label>
																		<label className="btn default">
																		<input type="checkbox" className="toggle"> Option 3 </label> */}
																	</div>
																</div>
																<div className="clearfix">
																	<div className="btn-group" data-toggle="buttons">
																		{/* <label className="btn btn-default">
																		<input type="checkbox" className="toggle"> Option 1 </label>
																		<label className="btn btn-default active">
																		<input type="checkbox" className="toggle"> Option 2 </label>
																		<label className="btn btn-default">
																		<input type="checkbox" className="toggle"> Option 3 </label> */}
																	</div>
																</div>
																<h4>Radio</h4>
																<div className="clearfix">
																	<div className="btn-group" data-toggle="buttons">
																		{/* <label className="btn blue active">
																		<input type="radio" className="toggle"> Option 1 </label>
																		<label className="btn blue">
																		<input type="radio" className="toggle"> Option 2 </label>
																		<label className="btn blue">
																		<input type="radio" className="toggle"> Option 3 </label> */}
																	</div>
																</div>
																<div className="clearfix">
																	<div className="btn-group" data-toggle="buttons">
																		{/* <label className="btn btn-default active">
																		<input type="radio" className="toggle"> Option 1 </label>
																		<label className="btn btn-default">
																		<input type="radio" className="toggle"> Option 2 </label>
																		<label className="btn btn-default">
																		<input type="radio" className="toggle"> Option 3 </label> */}
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane" id="tab_1_2">
												<div className="row">
													<div className="col-md-6">
														{/*  BEGIN BUTTONS PORTLET */}
														<div className="portlet box green ">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Buttons
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<div className="clearfix">
																	<h4 className="block">Default Bootstrap Buttons(Customized to Match Theme Style)</h4>
																	{/*  Standard gray button with gradient  */}
																	<button type="button" className="btn btn-circle btn-default">Default</button>
																	{/*  Provides extra visual weight and identifies the primary action in a set of buttons  */}
																	<button type="button" className="btn btn-circle btn-primary">Primary</button>
																	{/*  Indicates a successful or positive action  */}
																	<button type="button" className="btn btn-circle btn-success">Success</button>
																	{/*  Contextual button for informational alert messages  */}
																	<button type="button" className="btn btn-circle btn-info">Info</button>
																	{/*  Indicates caution should be taken with this action  */}
																	<button type="button" className="btn btn-circle btn-warning">Warning</button>
																	{/*  Indicates a dangerous or potentially negative action  */}
																	<button type="button" className="btn btn-circle btn-danger">Danger</button>
																	{/*  Deemphasize a button by making it look like a link while maintaining button behavior  */}
																	<button type="button" className="btn btn-circle btn-link">Link</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">Metronic Style Buttons</h4>
																	<button type="button" className="btn btn-circle default">Default</button>
																	<button type="button" className="btn btn-circle red">Red</button>
																	<button type="button" className="btn btn-circle blue">Blue</button>
																	<button type="button" className="btn btn-circle green">Green</button>
																	<button type="button" className="btn btn-circle yellow">Yellow</button>
																	<button type="button" className="btn btn-circle purple">Purple</button>
																	<button type="button" className="btn btn-circle dark">Dark</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">More Button Colors(go to <Link to="ui_colors.html">
																	ui_colors.html </Link>
																	for more colors) </h4>
																	<button type="button" className="btn btn-circle blue-hoki">Blue Hoki</button>
																	<button type="button" className="btn btn-circle blue-madison">Blue Madison</button>
																	<button type="button" className="btn btn-circle green-meadow">Green Meadow</button>
																	<button type="button" className="btn btn-circle red-sunglo">Red Sunglo</button>
																	<button type="button" className="btn btn-circle yellow-crusta">Yellow Crusta</button>
																	<button type="button" className="btn btn-circle purple-plum">Purple Plum</button>
																	<button type="button" className="btn btn-circle grey-cascade">Grey Cascade</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Stripe</h4>
																	<Link to="#" className="btn btn-circle default red-stripe">
																	Red </Link>
																	<Link to="#" className="btn btn-circle default blue-stripe">
																	Blue </Link>
																	<Link to="#" className="btn btn-circle default green-stripe">
																	Green </Link>
																	<Link to="#" className="btn btn-circle default yellow-stripe">
																	Yellow </Link>
																	<Link to="#" className="btn btn-circle default purple-stripe">
																	Purple </Link>
																	<Link to="#" className="btn btn-circle default green-stripe">
																	Green </Link>
																	<Link to="#" className="btn btn-circle default dark-stripe">
																	Dark </Link>
																</div>
																<div className="clearfix">
																	<h4 className="block">Disabled</h4>
																	<Link to="#" className="btn btn-circle default disabled">
																	Default </Link>
																	<Link to="#" className="btn btn-circle red disabled">
																	Red </Link>
																	<Link to="#" className="btn btn-circle blue disabled">
																	Blue </Link>
																	<Link to="#" className="btn btn-circle green disabled">
																	Green </Link>
																	<Link to="#" className="btn btn-circle yellow disabled">
																	Yellow </Link>
																	<Link to="#" className="btn btn-circle purple disabled">
																	Purple </Link>
																	<Link to="#" className="btn btn-circle dark disabled">
																	Dark </Link>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Sizes</h4>
																	<button type="button" className="btn btn-circle default btn-lg">Large button</button>
																	<button type="button" className="btn btn-circle red">Default button</button>
																	<button type="button" className="btn btn-circle blue btn-sm">Small button</button>
																	<button type="button" className="btn btn-circle green btn-xs">Extra small button</button>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Tags</h4>
																	<Link to="#" className="btn btn-circle default">
																	Link </Link>
																	<button className="btn btn-circle default">Button</button>
																	{/* <input type="button" className="btn btn-circle default" value="Input">
																	<input type="submit" className="btn btn-circle default" value="Submit"> */}
																</div>
																<div className="clearfix">
																	<h4 className="block">Block Buttons</h4>
																	<Link to="#" className="btn btn-circle default btn-block">
																	Link </Link>
																	<button className="btn btn-circle blue btn-block">Button</button>
																	{/* <input type="button" className="btn btn-circle red btn-block" value="Input">
																	<input type="submit" className="btn btn-circle purple btn-block" value="Submit"> */}
																</div>
															</div>
														</div>
														{/*  END BUTTONS PORTLET */}
														{/*  BEGIN BUTTONS WITH ICONS PORTLET */}
														<div className="portlet box red-pink">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>
																	<span className="hidden-480">
																	Buttons </span>
																</div>
																<ul className="nav nav-tabs">
																	<li>
																		<Link to="#buttons_metro_circle" data-toggle="tab">
																		Metro </Link>
																	</li>
																	<li>
																		<Link to="#dropdown_glyphicon_circle" data-toggle="tab">
																		Glyphicon </Link>
																	</li>
																	<li>
																		<Link to="#dropdown_simplelineicons_circle" data-toggle="tab">
																		Simple Line</Link>
																	</li>
																	<li className="active">
																		<Link to="#dropdown_fontawesome_circle" data-toggle="tab">
																		Fontawesome </Link>
																	</li>
																</ul>
															</div>
															<div className="portlet-body util-btn-margin-bottom-5">
																<div className="tab-content">
																	<div className="tab-pane active" id="dropdown_fontawesome_circle">
																		<div className="clearfix">
																			<h4 className="block">Large Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-lg default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-circle btn-lg green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-circle btn-lg green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Default Buttons</h4>
																			<Link to="#" className="btn btn-circle default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-circle green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-circle green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Small Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-sm default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-circle btn-sm green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-circle btn-sm green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Extra Small</h4>
																			<Link to="#" className="btn btn-circle btn-xs default">
																			Default <i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs red">
																			Red <i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs blue">
																			<i className="fa fa-file-o"></i> Blue </Link>
																			<Link to="#" className="btn btn-circle btn-xs green">
																			Green <i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs yellow">
																			Yellow <i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs purple">
																			<i className="fa fa-times"></i> Purple </Link>
																			<Link to="#" className="btn btn-circle btn-xs green">
																			Green <i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs grey-cascade">
																			Dark <i className="fa fa-link"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Font Awesome</h4>
																			<Link to="#" className="btn btn-icon-only btn-circle default">
																			<i className="fa fa-user"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle red">
																			<i className="fa fa-edit"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle blue">
																			<i className="fa fa-file-o"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle green">
																			<i className="fa fa-font"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle yellow">
																			<i className="fa fa-search"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle purple">
																			<i className="fa fa-times"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle green">
																			<i className="fa fa-plus"></i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle grey-cascade">
																			<i className="fa fa-link"></i>
																			</Link>
																		</div>
																	</div>
																	<div className="tab-pane" id="dropdown_glyphicon_circle">
																		<div className="clearfix">
																			<h4 className="block">Large Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-lg default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle btn-lg green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle btn-lg green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Default Buttons</h4>
																			<Link to="#" className="btn btn-circle default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Small Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-sm default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle btn-sm green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle btn-sm green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Extra Small Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-xs default">
																			Default <span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs red">
																			Red <span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle btn-xs green">
																			Green <span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs yellow">
																			Yellow <span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle btn-xs green">
																			Green <span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs grey-cascade">
																			Dark <span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Icon Only Buttons</h4>
																			<Link to="#" className="btn btn-icon-only btn-circle default">
																			<span className="glyphicon glyphicon-cog">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle red">
																			<span className="glyphicon glyphicon-calendar">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle blue">
																			<span className="glyphicon glyphicon-font">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle green">
																			<span className="glyphicon glyphicon-gift">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle yellow">
																			<span className="glyphicon glyphicon-pencil">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle purple">
																			<span className="glyphicon glyphicon-tag">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle green">
																			<span className="glyphicon glyphicon-user">
																			</span>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle grey-cascade">
																			<span className="glyphicon glyphicon-link">
																			</span>
																			</Link>
																		</div>
																	</div>
																	<div className="tab-pane" id="dropdown_simplelineicons_circle">
																		<div className="clearfix">
																			<h4 className="block">Large Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-lg default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle btn-lg green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle btn-lg green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Default Buttons</h4>
																			<Link to="#" className="btn btn-circle default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Small Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-sm default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle btn-sm green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle btn-sm green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-sm grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Extra Small Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-xs default">
																			Default <i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs red">
																			Red <i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs blue">
																			<i className="icon-screen-desktop">
																			</i>
																			Blue </Link>
																			<Link to="#" className="btn btn-circle btn-xs green">
																			Green <i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs yellow">
																			Yellow <i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs purple">
																			<i className="icon-bell">
																			</i>
																			Purple </Link>
																			<Link to="#" className="btn btn-circle btn-xs green">
																			Green <i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-xs grey-cascade">
																			Dark <i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Icon Only Buttons</h4>
																			<Link to="#" className="btn btn-icon-only btn-circle default">
																			<i className="icon-social-dribbble">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle red">
																			<i className="icon-crop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle blue">
																			<i className="icon-screen-desktop">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle green">
																			<i className="icon-badge">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle yellow">
																			<i className="icon-anchor">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle purple">
																			<i className="icon-bell">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle green">
																			<i className="icon-present">
																			</i>
																			</Link>
																			<Link to="#" className="btn btn-icon-only btn-circle grey-cascade">
																			<i className="icon-pin">
																			</i>
																			</Link>
																		</div>
																	</div>
																	<div className="tab-pane " id="buttons_metro_circle">
																		<div className="clearfix">
																			<h4 className="block">Navigation Large Icons Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-lg default m-icon-big">
																			Submit <i className="m-icon-big-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg green m-icon-big">
																			Submit <i className="m-icon-big-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg blue m-icon-big">
																			Submit <i className="m-icon-big-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg dark m-icon-big">
																			Submit <i className="m-icon-big-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Large Icons Only Buttons</h4>
																			<Link to="#" className="btn btn-circle btn-lg default m-icon-big m-icon-only">
																			<i className="m-icon-big-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg green m-icon-big m-icon-only">
																			<i className="m-icon-big-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg blue m-icon-big m-icon-only">
																			<i className="m-icon-big-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle btn-lg dark m-icon-big m-icon-only">
																			<i className="m-icon-big-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Block Large Icons</h4>
																			<button className="btn btn-circle blue btn-block btn-lg m-icon-big">Button <i className="m-icon-big-swapright m-icon-white"></i></button>
																			<Link to="#" className="btn btn-circle green btn-block btn-lg m-icon-big">
																			Link <i className="m-icon-big-swapright m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Defualt Icons Buttons</h4>
																			<Link to="#" className="btn btn-circle default m-icon">
																			Submit <i className="m-icon-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle green m-icon">
																			Submit <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle blue m-icon">
																			Submit <i className="m-icon-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle dark m-icon">
																			Submit <i className="m-icon-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Defualt Icons Only Buttons</h4>
																			<Link to="#" className="btn btn-circle default m-icon m-icon-only">
																			<i className="m-icon-swapleft"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle green m-icon m-icon-only">
																			<i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle blue m-icon m-icon-only">
																			<i className="m-icon-swapdown m-icon-white"></i>
																			</Link>
																			<Link to="#" className="btn btn-circle dark m-icon m-icon-only">
																			<i className="m-icon-swapup m-icon-white"></i>
																			</Link>
																		</div>
																		<div className="clearfix">
																			<h4 className="block">Navigation Block Defualt Icons</h4>
																			<button className="btn btn-circle blue btn-block m-icon">Button <i className="m-icon-swapright m-icon-white"></i></button>
																			<Link to="#" className="btn btn-circle green btn-block m-icon">
																			Link <i className="m-icon-swapright m-icon-white"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														{/*  END BUTTONS WITH ICONS PORTLET */}
														<div className="portlet box blue">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Font Awesome Styled Buttons
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
																<Link to="#" className="icon-btn">
																<i className="fa fa-group"></i>
																<div>
																	Users
																</div>
																<span className="badge badge-danger">
																2 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-barcode"></i>
																<div>
																	Products
																</div>
																<span className="badge badge-success">
																4 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-bar-chart-o"></i>
																<div>
																	Reports
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-sitemap"></i>
																<div>
																	Categories
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-calendar"></i>
																<div>
																	Calendar
																</div>
																<span className="badge badge-success">
																4 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-envelope"></i>
																<div>
																	Inbox
																</div>
																<span className="badge badge-info">
																12 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-bullhorn"></i>
																<div>
																	Notification
																</div>
																<span className="badge badge-danger">
																3 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-map-marker"></i>
																<div>
																	Locations
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-money"><i></i></i>
																<div>
																	Finance
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-plane"></i>
																<div>
																	Projects
																</div>
																<span className="badge badge-info">
																21 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-thumbs-up"></i>
																<div>
																	Feedback
																</div>
																<span className="badge badge-info">
																2 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-cloud"></i>
																<div>
																	Servers
																</div>
																<span className="badge badge-danger">
																2 </span>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-globe"></i>
																<div>
																	Regions
																</div>
																</Link>
																<Link to="#" className="icon-btn">
																<i className="fa fa-heart-o"></i>
																<div>
																	Popularity
																</div>
																<span className="badge badge-info">
																221 </span>
																</Link>
															</div>
														</div>
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box purple">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>List Social Icons(UL)
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<ul className="social-icons social-icons-circle">
																	<li>
																		<Link to="#" data-original-title="amazon" className="amazon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="behance" className="behance">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="blogger" className="blogger">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="deviantart" className="deviantart">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dribbble" className="dribbble">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dropbox" className="dropbox">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="facebook" className="facebook">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="forrst" className="forrst">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="github" className="github">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="Goole Plus" className="googleplus">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="jolicloud" className="jolicloud">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="last-fm" className="last-fm">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="linkedin" className="linkedin">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="picasa" className="picasa">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="pintrest" className="pintrest">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="rss" className="rss">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="skype" className="skype">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="spotify" className="spotify">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="stumbleupon" className="stumbleupon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="tumblr" className="tumblr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="twitter" className="twitter">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vimeo" className="vimeo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="wordpress" className="wordpress">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="xing" className="xing">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="yahoo" className="yahoo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="youtube" className="youtube">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vk" className="vk">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="instagram" className="instagram">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="reddit" className="reddit">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="aboutme" className="aboutme">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="flickr" className="flickr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="foursquare" className="foursquare">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="gravatar" className="gravatar">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="klout" className="klout">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="myspace" className="myspace">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="quora" className="quora">
																		</Link>
																	</li>
																</ul>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box purple">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Inline Social Icons
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<Link to="#" data-original-title="amazon" className="social-icon social-icon-circle amazon">
																</Link>
																<Link to="#" data-original-title="behance" className="social-icon social-icon-circle behance">
																</Link>
																<Link to="#" data-original-title="blogger" className="social-icon social-icon-circle blogger">
																</Link>
																<Link to="#" data-original-title="deviantart" className="social-icon social-icon-circle deviantart">
																</Link>
																<Link to="#" data-original-title="dribbble" className="social-icon social-icon-circle dribbble">
																</Link>
																<Link to="#" data-original-title="dropbox" className="social-icon social-icon-circle dropbox">
																</Link>
																<Link to="#" data-original-title="facebook" className="social-icon social-icon-circle facebook">
																</Link>
																<Link to="#" data-original-title="forrst" className="social-icon social-icon-circle forrst">
																</Link>
																<Link to="#" data-original-title="github" className="social-icon social-icon-circle github">
																</Link>
																<Link to="#" data-original-title="Goole Plus" className="social-icon social-icon-circle googleplus">
																</Link>
																<Link to="#" data-original-title="jolicloud" className="social-icon social-icon-circle jolicloud">
																</Link>
																<Link to="#" data-original-title="last-fm" className="social-icon social-icon-circle last-fm">
																</Link>
																<Link to="#" data-original-title="linkedin" className="social-icon social-icon-circle linkedin">
																</Link>
																<Link to="#" data-original-title="picasa" className="social-icon social-icon-circle picasa">
																</Link>
																<Link to="#" data-original-title="pintrest" className="social-icon social-icon-circle pintrest">
																</Link>
																<Link to="#" data-original-title="rss" className="social-icon social-icon-circle rss">
																</Link>
																<Link to="#" data-original-title="skype" className="social-icon social-icon-circle skype">
																</Link>
																<Link to="#" data-original-title="spotify" className="social-icon social-icon-circle spotify">
																</Link>
																<Link to="#" data-original-title="stumbleupon" className="social-icon social-icon-circle stumbleupon">
																</Link>
																<Link to="#" data-original-title="tumblr" className="social-icon social-icon-circle tumblr">
																</Link>
																<Link to="#" data-original-title="twitter" className="social-icon social-icon-circle twitter">
																</Link>
																<Link to="#" data-original-title="vimeo" className="social-icon social-icon-circle vimeo">
																</Link>
																<Link to="#" data-original-title="wordpress" className="social-icon social-icon-circle wordpress">
																</Link>
																<Link to="#" data-original-title="xing" className="social-icon social-icon-circle xing">
																</Link>
																<Link to="#" data-original-title="yahoo" className="social-icon social-icon-circle yahoo">
																</Link>
																<Link to="#" data-original-title="youtube" className="social-icon social-icon-circle youtube">
																</Link>
																<Link to="#" data-original-title="vk" className="social-icon social-icon-circle vk">
																</Link>
																<Link to="#" data-original-title="instagram" className="social-icon social-icon-circle instagram">
																</Link>
																<Link to="#" data-original-title="reddit" className="social-icon social-icon-circle social-icon-circle reddit">
																</Link>
																<Link to="#" data-original-title="aboutme" className="social-icon social-icon-circle aboutme">
																</Link>
																<Link to="#" data-original-title="flickr" className="social-icon social-icon-circle flickr">
																</Link>
																<Link to="#" data-original-title="foursquare" className="social-icon social-icon-circle foursquare">
																</Link>
																<Link to="#" data-original-title="gravatar" className="social-icon social-icon-circle gravatar">
																</Link>
																<Link to="#" data-original-title="klout" className="social-icon social-icon-circle klout">
																</Link>
																<Link to="#" data-original-title="myspace" className="social-icon social-icon-circle myspace">
																</Link>
																<Link to="#" data-original-title="quora" className="social-icon social-icon-circle quora">
																</Link>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box blue">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Social Icons(Colored)
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
																<ul className="social-icons social-icons-color social-icons-circle">
																	<li>
																		<Link to="#" data-original-title="amazon" className="amazon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="behance" className="behance">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="blogger" className="blogger">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="deviantart" className="deviantart">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dribbble" className="dribbble">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="dropbox" className="dropbox">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="facebook" className="facebook">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="forrst" className="forrst">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="github" className="github">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="Goole Plus" className="googleplus">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="jolicloud" className="jolicloud">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="last-fm" className="last-fm">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="linkedin" className="linkedin">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="picasa" className="picasa">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="pintrest" className="pintrest">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="rss" className="rss">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="skype" className="skype">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="spotify" className="spotify">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="stumbleupon" className="stumbleupon">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="tumblr" className="tumblr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="twitter" className="twitter">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vimeo" className="vimeo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="wordpress" className="wordpress">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="xing" className="xing">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="yahoo" className="yahoo">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="youtube" className="youtube">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="vk" className="vk">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="instagram" className="instagram">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="reddit" className="reddit">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="aboutme" className="aboutme">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="flickr" className="flickr">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="foursquare" className="foursquare">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="gravatar" className="gravatar">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="klout" className="klout">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="myspace" className="myspace">
																		</Link>
																	</li>
																	<li>
																		<Link to="#" data-original-title="quora" className="quora">
																		</Link>
																	</li>
																</ul>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box purple">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Inline Social Icons(Colored)
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
															<div className="portlet-body util-btn-margin-bottom-5">
																<Link to="#" data-original-title="amazon" className="social-icon social-icon-circle social-icon-color amazon">
																</Link>
																<Link to="#" data-original-title="behance" className="social-icon social-icon-circle social-icon-color behance">
																</Link>
																<Link to="#" data-original-title="blogger" className="social-icon social-icon-circle social-icon-color blogger">
																</Link>
																<Link to="#" data-original-title="deviantart" className="social-icon social-icon-circle social-icon-color deviantart">
																</Link>
																<Link to="#" data-original-title="dribbble" className="social-icon social-icon-circle social-icon-color dribbble">
																</Link>
																<Link to="#" data-original-title="dropbox" className="social-icon social-icon-circle social-icon-color dropbox">
																</Link>
																<Link to="#" data-original-title="facebook" className="social-icon social-icon-circle social-icon-color facebook">
																</Link>
																<Link to="#" data-original-title="forrst" className="social-icon social-icon-circle social-icon-color forrst">
																</Link>
																<Link to="#" data-original-title="github" className="social-icon social-icon-circle social-icon-color github">
																</Link>
																<Link to="#" data-original-title="Goole Plus" className="social-icon social-icon-circle social-icon-color googleplus">
																</Link>
																<Link to="#" data-original-title="jolicloud" className="social-icon social-icon-circle social-icon-color jolicloud">
																</Link>
																<Link to="#" data-original-title="last-fm" className="social-icon social-icon-circle social-icon-color last-fm">
																</Link>
																<Link to="#" data-original-title="linkedin" className="social-icon social-icon-circle social-icon-color linkedin">
																</Link>
																<Link to="#" data-original-title="picasa" className="social-icon social-icon-circle social-icon-color picasa">
																</Link>
																<Link to="#" data-original-title="pintrest" className="social-icon social-icon-circle social-icon-color pintrest">
																</Link>
																<Link to="#" data-original-title="rss" className="social-icon social-icon-circle social-icon-color rss">
																</Link>
																<Link to="#" data-original-title="skype" className="social-icon social-icon-circle social-icon-color skype">
																</Link>
																<Link to="#" data-original-title="spotify" className="social-icon social-icon-circle social-icon-color spotify">
																</Link>
																<Link to="#" data-original-title="stumbleupon" className="social-icon social-icon-circle social-icon-color stumbleupon">
																</Link>
																<Link to="#" data-original-title="tumblr" className="social-icon social-icon-circle social-icon-color tumblr">
																</Link>
																<Link to="#" data-original-title="twitter" className="social-icon social-icon-circle social-icon-color twitter">
																</Link>
																<Link to="#" data-original-title="vimeo" className="social-icon social-icon-circle social-icon-color vimeo">
																</Link>
																<Link to="#" data-original-title="wordpress" className="social-icon social-icon-circle social-icon-color wordpress">
																</Link>
																<Link to="#" data-original-title="xing" className="social-icon social-icon-circle social-icon-color xing">
																</Link>
																<Link to="#" data-original-title="yahoo" className="social-icon social-icon-circle social-icon-color yahoo">
																</Link>
																<Link to="#" data-original-title="youtube" className="social-icon social-icon-circle social-icon-color youtube">
																</Link>
																<Link to="#" data-original-title="vk" className="social-icon social-icon-circle social-icon-color vk">
																</Link>
																<Link to="#" data-original-title="instagram" className="social-icon social-icon-circle social-icon-color instagram">
																</Link>
																<Link to="#" data-original-title="reddit" className="social-icon social-icon-circle social-icon-color reddit">
																</Link>
																<Link to="#" data-original-title="aboutme" className="social-icon social-icon-circle social-icon-color aboutme">
																</Link>
																<Link to="#" data-original-title="flickr" className="social-icon social-icon-circle social-icon-color flickr">
																</Link>
																<Link to="#" data-original-title="foursquare" className="social-icon social-icon-circle social-icon-color foursquare">
																</Link>
																<Link to="#" data-original-title="gravatar" className="social-icon social-icon-circle social-icon-color gravatar">
																</Link>
																<Link to="#" data-original-title="klout" className="social-icon social-icon-circle social-icon-color klout">
																</Link>
																<Link to="#" data-original-title="myspace" className="social-icon social-icon-circle social-icon-color myspace">
																</Link>
																<Link to="#" data-original-title="quora" className="social-icon social-icon-circle social-icon-color quora">
																</Link>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
													</div>
													<div className="col-md-6">
														{/*  BEGIN BLOCK BUTTONS PORTLET */}
														<div className="portlet box yellow">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i>Button Groups
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
																<div className="clearfix">
																	<h4 className="block">Basic Example</h4>
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-default">Left</button>
																		<button type="button" className="btn btn-default">Middle</button>
																		<button type="button" className="btn btn-default">Right</button>
																	</div>
																	<div className="btn-group btn-group-circle btn-group-solid">
																		<button type="button" className="btn red">Left</button>
																		<button type="button" className="btn yellow">Middle</button>
																		<button type="button" className="btn green">Right</button>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Devided Button Groups</h4>
																	<div className="btn-group btn-group-devided">
																		<button type="button" className="btn btn-circle btn-default">Left</button>
																		<button type="button" className="btn btn-circle btn-default">Middle</button>
																		<button type="button" className="btn btn-circle btn-default">Right</button>
																	</div>
																	<div className="btn-group btn-group-devided btn-group-solid">
																		<button type="button" className="btn btn-circle red">Left</button>
																		<button type="button" className="btn btn-circle yellow">Middle</button>
																		<button type="button" className="btn btn-circle green">Right</button>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Toolbar</h4>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-circle">
																			<button type="button" className="btn btn-default">1</button>
																			<button type="button" className="btn btn-default">2</button>
																			<button type="button" className="btn btn-default">3</button>
																			<button type="button" className="btn btn-default">4</button>
																		</div>
																		<div className="btn-group btn-group-circle">
																			<button type="button" className="btn btn-default">5</button>
																			<button type="button" className="btn btn-default">6</button>
																			<button type="button" className="btn btn-default">7</button>
																		</div>
																		<div className="btn-group">
																			<button type="button" className="btn btn-circle btn-default">8</button>
																		</div>
																	</div>
																	<div className="btn-toolbar">
																		<div className="btn-group btn-group-circle btn-group-solid">
																			<button type="button" className="btn red">1</button>
																			<button type="button" className="btn green">2</button>
																			<button type="button" className="btn blue">3</button>
																			<button type="button" className="btn yellow">4</button>
																		</div>
																		<div className="btn-group btn-group-circle btn-group-solid">
																			<button type="button" className="btn purple">5</button>
																			<button type="button" className="btn dark">6</button>
																			<button type="button" className="btn default">7</button>
																		</div>
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn btn-circle red">8</button>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Button Group Sizing</h4>
																	<div className="btn-toolbar">
																		<div className="btn-group btn-group-circle btn-group-lg btn-group-solid margin-bottom-10">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-circle btn-group-solid">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-circle btn-group-sm btn-group-solid">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-circle btn-group-xs btn-group-solid">
																			<button type="button" className="btn red">Left</button>
																			<button type="button" className="btn green">Middle</button>
																			<button type="button" className="btn blue">Right</button>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Nesting Button Group</h4>
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-default"><i className="fa fa-user"></i> Profile</button>
																		<button type="button" className="btn btn-default"><i className="fa fa-cogs"></i> Settings</button>
																		<button type="button" className="btn btn-default"><i className="fa fa-bullhorn"></i> Feeds</button>
																		<div className="btn-group">
																			<button type="button" className="btn btn-default btn-circle-right dropdown-toggle" data-toggle="dropdown">
																			<i className="fa fa-ellipsis-horizontal"></i> More <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="clearfix margin-bottom-10">
																	</div>
																	<div className="btn-group btn-group-circle btn-group-solid">
																		<button type="button" className="btn red"><i className="fa fa-user"></i> Profile</button>
																		<button type="button" className="btn green"><i className="fa fa-cogs"></i> Settings</button>
																		<button type="button" className="btn purple"><i className="fa fa-bullhorn"></i> Feeds</button>
																		<div className="btn-group btn-group-solid">
																			<button type="button" className="btn btn-circle-right blue dropdown-toggle" data-toggle="dropdown">
																			<i className="fa fa-ellipsis-horizontal"></i> More <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Vertical variation</h4>
																	<div className="btn-group-vertical btn-group-vertical-circle margin-right-10">
																		<button type="button" className="btn btn-default">Button</button>
																		<button type="button" className="btn btn-default">Button</button>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop1" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop1">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<button type="button" className="btn btn-default">Button</button>
																		<button type="button" className="btn btn-default">Button</button>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop2" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop2">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop3" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop3">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop4" type="button" className="btn btn-circle-bottom btn-default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop4">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="btn-group-vertical btn-group-vertical-circle btn-group-solid">
																		<button type="button" className="btn blue">Button</button>
																		<button type="button" className="btn green">Button</button>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop5" type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop5">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<button type="button" className="btn red">Button</button>
																		<button type="button" className="btn dark">Button</button>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop6" type="button" className="btn default dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop6">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop7" type="button" className="btn purple dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop7">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																		<div className="btn-group">
																			<button id="btn btn-circleGroupVerticalDrop8" type="button" className="btn btn-circle-bottom yellow dropdown-toggle" data-toggle="dropdown">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
																			<ul className="dropdown-menu" role="menu" aria-labelledby="btn btn-circleGroupVerticalDrop8">
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																				<li>
																					<Link to="#">
																					Dropdown link </Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Justified Link Variation</h4>
																	<div className="btn-group btn-group-circle btn-group-justified">
																		<Link to="#" className="btn btn-default">
																		Left </Link>
																		<Link to="#" className="btn btn-default">
																		Middle </Link>
																		<Link to="#" className="btn btn-default">
																		Right </Link>
																	</div>
																	<div className="clearfix margin-bottom-10">
																	</div>
																	<div className="btn-group btn-group-circle btn-group-justified">
																		<Link to="#" className="btn red">
																		Left </Link>
																		<Link to="#" className="btn blue">
																		Middle </Link>
																		<Link to="#" className="btn green">
																		Right </Link>
																	</div>
																</div>
															</div>
														</div>
														{/*  END BLOCK BUTTONS PORTLET */}
														{/*  BEGIN DROPDOWNS PORTLET */}
														<div className="portlet box green">
															<div className="portlet-title">
																<div className="caption">
																	<i className="fa fa-gift"></i> Button Dropdowns
																</div>
															</div>
															<div className="portlet-body util-btn-group-margin-bottom-5">
																<div className="clearfix">
																	<h4 className="block">Default Bootstrap Style</h4>
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-default">Default</button>
																		<button type="button" className="btn btn-circle-right btn-default dropdown-toggle1" data-toggle="dropdown">
																		<i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-primary">Primary</button>
																		<button type="button" className="btn btn-circle-right btn-primary dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-success">Success</button>
																		<button type="button" className="btn btn-circle-right btn-success dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-info">Info</button>
																		<button type="button" className="btn btn-circle-right btn-info dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-warning">Warning</button>
																		<button type="button" className="btn btn-circle-right btn-warning dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn btn-danger">Danger</button>
																		<button type="button" className="btn btn-circle-right btn-danger dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																</div>
																<div className="clearfix">
																	<h4 className="block">Metronic Style</h4>
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn default">Default</button>
																		<button type="button" className="btn btn-circle-right default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn blue">Blue</button>
																		<button type="button" className="btn btn-circle-right blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn green">Green</button>
																		<button type="button" className="btn btn-circle-right green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn red">Red</button>
																		<button type="button" className="btn btn-circle-right red dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn yellow">Yellow</button>
																		<button type="button" className="btn btn-circle-right yellow dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn dark">Dark</button>
																		<button type="button" className="btn btn-circle-right dark dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn purple">Purple</button>
																		<button type="button" className="btn btn-circle-right purple dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
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
																	{/*  /btn-group  */}
																</div>
																<div className="clearfix">
																	<h4 className="block">Dropdowns with Multilevel Submenu</h4>
																	{/*  Large button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle blue dropdown-toggle" type="button" data-toggle="dropdown">
																		Dropdown <i className="fa fa-angle-down"></i>
																		</button>
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
																			<li className="dropdown-submenu">
																				<Link to="#">
																				More options </Link>
																				<ul className="dropdown-menu" style={{}}>
																					<li>
																						<Link to="#">
																						Second level link </Link>
																					</li>
																					<li className="dropdown-submenu">
																						<Link to="#">
																						More options </Link>
																						<ul className="dropdown-menu">
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																						</ul>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																				</ul>
																			</li>
																		</ul>
																	</div>
																	<div className="btn-group dropup">
																		<button className="btn btn-circle green dropdown-toggle" type="button" data-toggle="dropdown">
																		Dropup <i className="fa fa-angle-up"></i>
																		</button>
																		<ul className="dropdown-menu pull-right" role="menu">
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
																			<li className="dropdown-submenu">
																				<Link to="#">
																				More options </Link>
																				<ul className="dropdown-menu" style={{}}>
																					<li>
																						<Link to="#">
																						Second level link </Link>
																					</li>
																					<li className="dropdown-submenu">
																						<Link to="#">
																						More options </Link>
																						<ul className="dropdown-menu pull-right">
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																							<li>
																								<Link to="index.html">
																								Third level link </Link>
																							</li>
																						</ul>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																					<li>
																						<Link to="index.html">
																						Second level link </Link>
																					</li>
																				</ul>
																			</li>
																		</ul>
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Sizing</h4>
																	{/*  Large button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
																		Large button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Small button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
																		Small button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Extra small button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
																		Extra small button <i className="fa fa-angle-down"></i>
																		</button>
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
																	<div className="clearfix margin-bottom-10">
																	</div>
																	{/*  Large button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle red btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
																		Large button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Small button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle blue btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
																		Small button <i className="fa fa-angle-down"></i>
																		</button>
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
																	{/*  Extra small button group  */}
																	<div className="btn-group">
																		<button className="btn btn-circle green btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
																		Extra small button <i className="fa fa-angle-down"></i>
																		</button>
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
																<div className="clearfix">
																	<h4 className="block">Dropup</h4>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-circle dropup">
																			<button type="button" className="btn btn-default">Dropup</button>
																			<button type="button" className="btn btn-circle-right btn-default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group btn-group-circle dropup">
																			<button type="button" className="btn btn-primary">Right dropup</button>
																			<button type="button" className="btn btn-circle-right btn-primary dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																			<ul className="dropdown-menu pull-right" role="menu">
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
																		{/*  /btn-group  */}
																	</div>
																	<div className="btn-toolbar">
																		<div className="btn-group btn-group-circle dropup">
																			<button type="button" className="btn blue">Dropup</button>
																			<button type="button" className="btn btn-circle-right blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group btn-group-circle dropup">
																			<button type="button" className="btn green">Right dropup</button>
																			<button type="button" className="btn btn-circle-right green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																			<ul className="dropdown-menu pull-right" role="menu">
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
																		{/*  /btn-group  */}
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Hoveralbe Dropdowns</h4>
																	<div className="btn-toolbar margin-bottom-10">
																		<div className="btn-group btn-group-circle">
																			<button type="button" className="btn btn-default">Dropdown</button>
																			<button type="button" className="btn btn-circle-right btn-default dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"><i className="fa fa-angle-down"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group btn-group-circle dropup">
																			<button type="button" className="btn btn-primary">Dropup</button>
																			<button type="button" className="btn btn-circle-right btn-primary dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"><i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group">
																			<button type="button" className="btn btn-circle btn-success dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																			Dropup <i className="fa fa-angle-down"></i>
																			</button>
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
																		{/*  /btn-group  */}
																	</div>
																	<div className="btn-toolbar">
																		<div className="btn-group btn-group-circle">
																			<button type="button" className="btn blue">Dropdown</button>
																			<button type="button" className="btn btn-circle-right blue dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"><i className="fa fa-angle-down"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group btn-group-circle dropup">
																			<button type="button" className="btn green">Dropup</button>
																			<button type="button" className="btn btn-circle-right green dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																			<i className="fa fa-angle-up"></i></button>
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
																		{/*  /btn-group  */}
																		<div className="btn-group">
																			<button type="button" className="btn btn-circle yellow dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
																			Dropdown <i className="fa fa-angle-down"></i>
																			</button>
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
																		{/*  /btn-group  */}
																	</div>
																</div>
																<div className="clearfix">
																	<h4 className="block">Dropdown with Checkboxes & Search Form</h4>
																	<div className="btn-group">
																		<button className="btn btn-circle green dropdown-toggle" type="button" data-toggle="dropdown">
																		Search Dropdown <i className="fa fa-angle-down"></i>
																		</button>
																		<div className="dropdown-menu dropdown-content input-large hold-on-click" role="menu">
																			<form action="#">
																				<div className="input-group">
																					{/* <input type="text" className="form-control input-circle-left" placeholder="search...">
																					<span className="input-group-btn">
																					<button className="btn btn-circle-right blue" type="submit">Go!</button>
																					</span> */}
																				</div>
																			</form>
																		</div>
																	</div>
																	<div className="btn-group btn-group-circle">
																		<button type="button" className="btn blue">Dropdown</button>
																		<button type="button" className="btn btn-circle-right blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
																		<div className="dropdown-menu hold-on-click dropdown-checkboxes" role="menu">
																			{/* <label><input type="checkbox">Option 1</label>
																			<label><input type="checkbox" checked>Option 2</label>
																			<label><input type="checkbox">Option 3</label>
																			<label><input type="checkbox" checked>Option 4</label>
																			<label><input type="checkbox">Option 5</label> */}
																		</div>
																	</div>
																	{/*  /btn-group  */}
																	<div className="btn-group btn-group-circle dropup">
																		<button type="button" className="btn green">Dropup</button>
																		<button type="button" className="btn btn-circle-right green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
																		<div className="dropdown-menu hold-on-click dropdown-checkboxes" role="menu">
																			{/* <label><input type="checkbox">Option 1</label>
																			<label><input type="checkbox" checked>Option 2</label>
																			<label><input type="checkbox">Option 3</label>
																			<label><input type="checkbox" checked>Option 4</label>
																			<label><input type="checkbox">Option 5</label> */}
																		</div>
																	</div>
																	{/*  /btn-group  */}
																	<div className="clearfix margin-top-10">
																		<span className="label label-success">
																		NOTE: </span>
																		&nbsp; By adding <code>hold-on-click</code> className you can avoid closing the dropdown on click
														</div>
													</div>
													<div className="clearfix">
														<h4 className="block">Dropdown with Radio Buttons</h4>
														<div className="btn-group btn-group-circle">
															<button type="button" className="btn blue">Dropdown</button>
															<button type="button" className="btn btn-circle-right blue dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down"></i></button>
															<div className="dropdown-menu hold-on-click dropdown-radiobuttons" role="menu">
																{/* <label><input type="radio" name="radio_button_1">Option 1</label>
																<label><input type="radio" name="radio_button_1">Option 2</label>
																<label><input type="radio" name="radio_button_1">Option 3</label>
																<label><input type="radio" name="radio_button_1">Option 4</label>
																<label><input type="radio" name="radio_button_1">Option 5</label> */}
															</div>
														</div>
														{/*  /btn-group  */}
														<div className="btn-group btn-group-circle dropup">
															<button type="button" className="btn green">Dropup</button>
															<button type="button" className="btn btn-circle-right green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-up"></i></button>
															<div className="dropdown-menu hold-on-click dropdown-radiobuttons" role="menu">
																{/* <label><input type="radio" name="radio_button_2">Option 1</label>
																<label><input type="radio" name="radio_button_2">Option 2</label>
																<label><input type="radio" name="radio_button_2">Option 3</label>
																<label><input type="radio" name="radio_button_2">Option 4</label>
																<label><input type="radio" name="radio_button_2">Option 5</label> */}
															</div>
														</div>
														{/*  /btn-group  */}
														<div className="clearfix margin-top-10">
															<span className="label label-success">
															NOTE: </span>
															&nbsp; By adding <code>hold-on-click</code> className you can avoid closing the dropdown on click
														</div>
													</div>
												</div>
												{/*  END DROPDOWNS PORTLET */}
											</div>
											<div className="portlet box green util-btn-group-margin-bottom-5">
												<div className="portlet-title">
													<div className="caption">
														<i className="fa fa-gift"></i>
														<span className="hidden-480">
														Button States </span>
													</div>
												</div>
												<div className="portlet-body util-btn-margin-bottom-5">
													<h4>Loading State</h4>
													<div className="clearfix">
														<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn-circle btn btn-primary">
														Loading state </button>
														<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn-circle btn btn-default">
														Loading state </button>
														<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn-circle btn red">
														Loading state </button>
														<button type="button" data-loading-text="Loading..." className="demo-loading-btn btn-circle btn blue">
														Loading state </button>
													</div>
													<h4>Single Toggle</h4>
													<div className="clearfix">
														<button type="button" className="btn btn-circle btn-primary" data-toggle="button">
														Single toggle </button>
														<button type="button" className="btn btn-circle btn-default" data-toggle="button">
														Single toggle </button>
														<button type="button" className="btn btn-circle red" data-toggle="button">
														Single toggle </button>
														<button type="button" className="btn btn-circle blue" data-toggle="button">
														Single toggle </button>
													</div>
													<h4>Checkbox</h4>
													<div className="clearfix">
														<div className="btn-group btn-group-circle" data-toggle="buttons">
															{/* <label className="btn default active">
															<input type="checkbox" className="toggle"> Option 1 </label>
															<label className="btn default">
															<input type="checkbox" className="toggle"> Option 2 </label>
															<label className="btn default">
															<input type="checkbox" className="toggle"> Option 3 </label> */}
														</div>
													</div>
													<div className="clearfix">
														<div className="btn-group btn-group-circle" data-toggle="buttons">
															{/* <label className="btn btn-default">
															<input type="checkbox" className="toggle"> Option 1 </label>
															<label className="btn btn-default active">
															<input type="checkbox" className="toggle"> Option 2 </label>
															<label className="btn btn-default">
															<input type="checkbox" className="toggle"> Option 3 </label> */}
														</div>
													</div>
													<h4>Radio</h4>
													<div className="clearfix">
														<div className="btn-group btn-group-circle" data-toggle="buttons">
															{/* <label className="btn blue active">
															<input type="radio" className="toggle"> Option 1 </label>
															<label className="btn blue">
															<input type="radio" className="toggle"> Option 2 </label>
															<label className="btn blue">
															<input type="radio" className="toggle"> Option 3 </label> */}
														</div>
													</div>
													<div className="clearfix">
														<div className="btn-group btn-group-circle" data-toggle="buttons">
															{/* <label className="btn btn-default active">
															<input type="radio" className="toggle"> Option 1 </label>
															<label className="btn btn-default">
															<input type="radio" className="toggle"> Option 2 </label>
															<label className="btn btn-default">
															<input type="radio" className="toggle"> Option 3 </label> */}
														</div>
													</div>
												</div>
											</div>
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

