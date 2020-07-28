import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";
// import $ from "jquery";
// import * as $ from 'jquery';



import '.../../../public/assets/global/plugins/jquery-nestable/jquery.nestable.css';
import '.../../../public/assets/global/plugins/jquery-nestable/jquery.nestable.js';
// import '.../../../public/assets/admin/pages/scripts/ui-nestable.js';


export default class Nestable extends Component {
	
	componentDidMount(e) {
		window.UINestable.init();
	
	}


    render(){
        return (
			<Fragment>

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
									<h1>Nestable List <small>Drag & drop hierarchical list with mouse and touch compatibility</small></h1>
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
									<Link to="#">UI Features</Link>
									<i className="fa fa-circle"></i>
								</li>
								<li>
									<Link to="#">Nestable List</Link>
								</li>
							</ul>
							<div className="note note-info note-shadow">
								<p>
									<span className="label label-danger">
									NOTE! </span>
									<span>
									<span className="bold">
									Nestable List Plugin </span>
									supported in Firefox, Chrome, Opera, Safari, Internet Explorer 10 and Internet Explorer 9 only. Internet Explorer 8 not supported. </span>
								</p>
							</div>
							<div className="portlet light">
								<div className="portlet-body">
									<div className="row">
										<div className="col-md-12">
											<div className="margin-bottom-10" id="nestable_list_menu">
												<button type="button" className="btn" data-action="expand-all">Expand All</button>
												<button type="button" className="btn" data-action="collapse-all">Collapse All</button>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<h3>Serialised Output (per list)</h3>
											<textarea id="nestable_list_1_output" className="form-control col-md-12 margin-bottom-10"></textarea>
											<textarea id="nestable_list_2_output" className="form-control col-md-12 margin-bottom-10"></textarea>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="portlet box blue">
												<div className="portlet-title">
													<div className="caption">
														<i className="fa fa-comments"></i>Nestable List 1
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
												<div className="portlet-body ">
													<div className="dd" id="nestable_list_1">
														<ol className="dd-list">
															<li className="dd-item" data-id="1">
																<div className="dd-handle">
																	Item 1
																</div>
															</li>
															<li className="dd-item" data-id="2">
																<div className="dd-handle">
																	Item 2
																</div>
																<ol className="dd-list">
																	<li className="dd-item" data-id="3">
																		<div className="dd-handle">
																			Item 3
																		</div>
																	</li>
																	<li className="dd-item" data-id="4">
																		<div className="dd-handle">
																			Item 4
																		</div>
																	</li>
																	<li className="dd-item" data-id="5">
																		<div className="dd-handle">
																			Item 5
																		</div>
																		<ol className="dd-list">
																			<li className="dd-item" data-id="6">
																				<div className="dd-handle">
																					Item 6
																				</div>
																			</li>
																			<li className="dd-item" data-id="7">
																				<div className="dd-handle">
																					Item 7
																				</div>
																			</li>
																			<li className="dd-item" data-id="8">
																				<div className="dd-handle">
																					Item 8
																				</div>
																			</li>
																		</ol>
																	</li>
																	<li className="dd-item" data-id="9">
																		<div className="dd-handle">
																			Item 9
																		</div>
																	</li>
																	<li className="dd-item" data-id="10">
																		<div className="dd-handle">
																			Item 10
																		</div>
																	</li>
																</ol>
															</li>
															<li className="dd-item" data-id="11">
																<div className="dd-handle">
																	Item 11
																</div>
															</li>
															<li className="dd-item" data-id="12">
																<div className="dd-handle">
																	Item 12
																</div>
															</li>
														</ol>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="portlet box green">
												<div className="portlet-title">
													<div className="caption">
														<i className="fa fa-comments"></i>Nestable List 2
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
													<div className="dd" id="nestable_list_2">
														<ol className="dd-list">
															<li className="dd-item" data-id="13">
																<div className="dd-handle">
																	Item 13
																</div>
															</li>
															<li className="dd-item" data-id="14">
																<div className="dd-handle">
																	Item 14
																</div>
															</li>
															<li className="dd-item" data-id="15">
																<div className="dd-handle">
																	Item 15
																</div>
																<ol className="dd-list">
																	<li className="dd-item" data-id="16">
																		<div className="dd-handle">
																			Item 16
																		</div>
																	</li>
																	<li className="dd-item" data-id="17">
																		<div className="dd-handle">
																			Item 17
																		</div>
																	</li>
																	<li className="dd-item" data-id="18">
																		<div className="dd-handle">
																			Item 18
																		</div>
																	</li>
																</ol>
															</li>
														</ol>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="portlet box yellow">
												<div className="portlet-title">
													<div className="caption">
														<i className="fa fa-comments"></i>Nestable List 3
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
													<div className="dd" id="nestable_list_3">
														<ol className="dd-list">
															<li className="dd-item dd3-item" data-id="13">
																<div className="dd-handle dd3-handle">
																</div>
																<div className="dd3-content">
																	Item 13
																</div>
															</li>
															<li className="dd-item dd3-item" data-id="14">
																<div className="dd-handle dd3-handle">
																</div>
																<div className="dd3-content">
																	Item 14
																</div>
															</li>
															<li className="dd-item dd3-item" data-id="15">
																<div className="dd-handle dd3-handle">
																</div>
																<div className="dd3-content">
																	Item 15
																</div>
																<ol className="dd-list">
																	<li className="dd-item dd3-item" data-id="16">
																		<div className="dd-handle dd3-handle">
																		</div>
																		<div className="dd3-content">
																			Item 16
																		</div>
																	</li>
																	<li className="dd-item dd3-item" data-id="17">
																		<div className="dd-handle dd3-handle">
																		</div>
																		<div className="dd3-content">
																			Item 17
																		</div>
																	</li>
																	<li className="dd-item dd3-item" data-id="18">
																		<div className="dd-handle dd3-handle">
																		</div>
																		<div className="dd3-content">
																			Item 18
																		</div>
																	</li>
																</ol>
															</li>
														</ol>
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

