import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

import '.../../../public/assets/global/plugins/jquery.pulsate.min.js';
import '.../../../public/assets/global/plugins/jquery-bootpag/jquery.bootpag.min.js';
import '.../../../public/assets/global/plugins/holder.js';


export default class General_components extends Component {
	componentDidMount() {
		window.UIGeneral.init();
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
									<h1>General Components <small>general ui components</small></h1>
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
									<Link to="#">General Components</Link>
								</li>
							</ul>
							{/* END PAGE BREADCRUMB  */}
							{/* END PAGE HEADER */}
							{/* BEGIN PAGE CONTENT */}
							<div className="row">
								<div className="col-md-6">
									{/* BEGIN ALERTS PORTLET */}
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs font-green-sharp"></i>
												<span className="caption-subject font-green-sharp bold uppercase">Alerts</span>
												<span className="caption-helper">alert samples...</span>
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
											<h4 className="block">Default Alerts</h4>
											<div className="alert alert-success">
												<strong>Success!</strong> The page has been added.
											</div>
											<div className="alert alert-info">
												<strong>Info!</strong> You have 198 unread messages.
											</div>
											<div className="alert alert-warning">
												<strong>Warning!</strong> Your monthly traffic is reaching limit.
											</div>
											<div className="alert alert-danger">
												<strong>Error!</strong> The daily cronjob has failed.
											</div>
											<h4 className="block">Dismissable Alerts</h4>
											<div className="alert alert-warning alert-dismissable">
												<button type="button" className="close" data-dismiss="alert" aria-hidden="true"></button>
												<strong>Warning!</strong> Something went wrong. Please check.
											</div>
											<h4 className="block">Links in alerts</h4>
											<div className="alert alert-success alert-dismissable">
												<button type="button" className="close" data-dismiss="alert" aria-hidden="true"></button>
												<strong>WOW!</strong> Well done and everything looks OK. <Link to="" className="alert-link">
												Please check this one as well </Link>
											</div>
										</div>
									</div>
									{/* END ALERTS PORTLET */}
								</div>
								<div className="col-md-6">
									{/* BEGIN ALERTS PORTLET */}
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs font-red-sunglo"></i>
												<span className="caption-subject font-red-sunglo bold uppercase">Notes</span>
												<span className="caption-helper">notes samples...</span>
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
											<div className="note note-success">
												<h4 className="block">Success! Some Header Goes Here</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
												</p>
											</div>
											<div className="note note-info">
												<h4 className="block">Info! Some Header Goes Here</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, mattis consectetur purus sit amet eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
												</p>
											</div>
											<div className="note note-danger">
												<h4 className="block">Danger! Some Header Goes Here</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit mattis consectetur purus sit amet.\ Cras mattis consectetur purus sit amet fermentum.
												</p>
											</div>
											<div className="note note-warning">
												<h4 className="block">Warning! Some Header Goes Here</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit mattis consectetur purus sit amet. Cras mattis consectetur purus sit amet fermentum.
												</p>
											</div>
										</div>
									</div>
									{/* END ALERTS PORTLET */}
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									{/* BEGIN INLINE NOTIFICATIONS PORTLET */}
									<div className="portlet box blue">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Inline Notifications
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
											<div className="alert alert-block alert-danger fade in">
												<button type="button" className="close" data-dismiss="alert"></button>
												<h4 className="alert-heading">Error!</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
												</p>
												<p>
													<Link className="btn red" to="#">
													Do this </Link>
													<Link className="btn blue" to="#">
													Cancel </Link>
												</p>
											</div>
											<div className="alert alert-block alert-success fade in">
												<button type="button" className="close" data-dismiss="alert"></button>
												<h4 className="alert-heading">Success!</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
												</p>
												<p>
													<Link className="btn green" to="#">
													Do this </Link>
													<Link className="btn btn-link" to="#">
													Cancel </Link>
												</p>
											</div>
											<div className="alert alert-block alert-info fade in">
												<button type="button" className="close" data-dismiss="alert"></button>
												<h4 className="alert-heading">Info!</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
												</p>
												<p>
													<Link className="btn purple" to="#">
													Do this </Link>
													<Link className="btn dark" to="#">
													Cancel </Link>
												</p>
											</div>
											<div className="alert alert-block alert-warning fade in">
												<button type="button" className="close" data-dismiss="alert"></button>
												<h4 className="alert-heading">Warning!</h4>
												<p>
													Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
												</p>
												<p>
													<Link className="btn red" to="#">
													Do this </Link>
													<Link className="btn blue" to="#">
													Cancel </Link>
												</p>
											</div>
										</div>
									</div>
									<div className="portlet box grey-cascade">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Pulsate
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
											<h4>Pulsate any page elements.</h4>
											<div className="margin-top-10 margin-bottom-10 clearfix">
												<table className="table table-bordered table-striped">
													<tbody>
														<tr>
															<td>
																Repeating Pulsate
															</td>
															<td>
																<div id="pulsate-regular" style={{padding:'5px'}}>
																	Repeating Pulsate
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<button className="btn green" id="pulsate-once">Pulsate Once</button>
															</td>
															<td>
																<div id="pulsate-once-target" style={{padding:'5px'}}>
																	Pulsate me
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<button className="btn red" id="pulsate-crazy">Crazy Pulsate :)</button>
															</td>
															<td>
																<div id="pulsate-crazy-target" style={{padding:'5px'}}>
																	Pulsate me
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<span className="label label-danger">
											NOTE! </span>
											<span>
											Pulsate is supported in Latest Firefox, Chrome, Opera, Safari and Internet Explorer 9 and Internet Explorer 10 only. </span>
										</div>
									</div>
									{/* END PULSATE PORTLET */}
									{/* BEGIN MODAL DIALOG PORTLET */}
									<div className="portlet box purple">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Modal Dialogs
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
											<h4>Click on below buttons to check it out.</h4>
											{/* Button to trigger modal  */}
											<Link to="#myModal1" role="button" className="btn blue" data-toggle="modal">
											Modal Dialog </Link>
											<Link to="#myModal2" role="button" className="btn red" data-toggle="modal">
											Alert </Link>
											<Link to="#myModal3" role="button" className="btn yellow" data-toggle="modal">
											Confirm </Link>
											{/* Modal  */}
											<div id="myModal1" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
												<div className="modal-dialog">
													<div className="modal-content">
														<div className="modal-header">
															<button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
															<h4 className="modal-title">Modal title</h4>
														</div>
														<div className="modal-body">
															<p>
																Body goes here...
															</p>
														</div>
														<div className="modal-footer">
															<button className="btn default" data-dismiss="modal" aria-hidden="true">Close</button>
															<button className="btn yellow">Save</button>
														</div>
													</div>
												</div>
											</div>
											<div id="myModal2" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
												<div className="modal-dialog">
													<div className="modal-content">
														<div className="modal-header">
															<button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
															<h4 className="modal-title">Alert Header</h4>
														</div>
														<div className="modal-body">
															<p>
																Body goes here...
															</p>
														</div>
														<div className="modal-footer">
															<button data-dismiss="modal" className="btn green">OK</button>
														</div>
													</div>
												</div>
											</div>
											<div id="myModal3" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true">
												<div className="modal-dialog">
													<div className="modal-content">
														<div className="modal-header">
															<button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
															<h4 className="modal-title">Confirm Header</h4>
														</div>
														<div className="modal-body">
															<p>
																Body goes here...
															</p>
														</div>
														<div className="modal-footer">
															<button className="btn default" data-dismiss="modal" aria-hidden="true">Close</button>
															<button data-dismiss="modal" className="btn blue">Confirm</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* END MODAL DIALOG PORTLET */}
									{/* BEGIN TOOLTIPS PORTLET */}
									<div className="portlet box red">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Tooltips
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
											<p>
												Tight pants next level keffiyeh <Link to="#" className="tooltips" data-original-title="Very long toolips Very long toolips Very long toolips Very long toolips">
												you probably </Link>
												haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <Link to="#" className="tooltips" data-original-title="Another tooltip">
												have a </Link>
												terry richardson vinyl chambray. <Link to="#" className="tooltips" title="12" data-original-title="The last tip!">
												twitter handle </Link>
												freegan cred raw denim single-origin coffee viral.
											</p>
											<button className="btn tooltips" data-container="body" data-placement="top" data-original-title="Tooltip in top">Top</button>
											<button className="btn tooltips" data-container="body" data-placement="left" data-original-title="Tooltip in left">Left</button>
											<button className="btn tooltips" data-container="body" data-placement="right" data-original-title="Tooltip in right">Right</button>
											<button className="btn tooltips" data-container="body" data-placement="bottom" data-original-title="Tooltip in bottom">Bottom</button>
											<div className="inline-block tooltips" data-container="body" data-original-title="Tooltip goes here">
												<button type="button" className="btn btn-default disabled">Disabled1</button>
											</div>
										</div>
									</div>
									{/* END TOOLTIPS PORTLET */}
									{/* BEGIN TOOLTIPS PORTLET */}
									<div className="portlet box blue">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Tooltips In Slim Scroll
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
											<div className="scroller" style={{height:'150px'}} data-always-visible="1" data-rail-visible="0">
												<button className="btn tooltips" data-container="body" data-placement="top" data-original-title="Tooltip in top">Top</button>
												<button className="btn tooltips" data-container="body" data-placement="left" data-original-title="Tooltip in left">Left</button>
												<button className="btn tooltips" data-container="body" data-placement="right" data-original-title="Tooltip in right">Right</button>
												<button className="btn tooltips" data-container="body" data-placement="bottom" data-original-title="Tooltip in bottom">Bottom</button>
												<div className="inline-block tooltips" data-container="body" data-original-title="Tooltip goes here">
													<button type="button" className="btn btn-default disabled">Disabled</button>
												</div>
												<p>
													Tight pants next level keffiyeh <Link to="#" className="tooltips" data-container="body" data-original-title="Default tooltip">
													you probably </Link>
													haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <Link to="#" className="tooltips" data-container="body" data-original-title="Another tooltip">
													have a </Link>
													terry richardson vinyl chambray. <Link to="#" className="tooltips" title="12" data-container="body" data-original-title="The last tip!">
													twitter handle </Link>
													freegan cred raw denim single-origin coffee viral.
												</p>
												<button className="btn tooltips" data-container="body" data-placement="top" data-original-title="Tooltip in top">Top</button>
												<button className="btn tooltips" data-container="body" data-placement="left" data-original-title="Tooltip in left">Left</button>
												<button className="btn tooltips" data-container="body" data-placement="right" data-original-title="Tooltip in right">Right</button>
												<button className="btn tooltips" data-container="body" data-placement="bottom" data-original-title="Tooltip in bottom">Bottom</button>
												<div className="inline-block tooltips" data-container="body" data-original-title="Tooltip goes here">
													<button type="button" className="btn btn-default disabled">Disabled</button>
												</div>
												<p>
													Tight pants next level keffiyeh <Link to="#" className="tooltips" data-container="body" data-original-title="Default tooltip">
													you probably </Link>
													haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <Link to="#" className="tooltips" data-container="body" data-original-title="Another tooltip">
													have a </Link>
													terry richardson vinyl chambray. <Link to="#" className="tooltips" title="12" data-container="body" data-original-title="The last tip!">
													twitter handle </Link>
													freegan cred raw denim single-origin coffee viral.
												</p>
											</div>
										</div>
									</div>
									{/* END TOOLTIPS PORTLET */}
									{/* BEGIN POPOVERS PORTLET */}
									<div className="portlet box yellow">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Popovers
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
											<p>
												Tight pants next level keffiyeh <Link to="#" className="popovers" data-container="body" data-content="Popover body goes here! Popover body goes here!" data-original-title="Default Popover">
												trigger me on click </Link>
												haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <Link to="#" className="popovers" data-container="body" data-trigger="hover" data-content="Popover body goes here! Popover body goes here!" data-original-title="Another Popover">
												trigger me on hover </Link>
												terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa.
											</p>
											<button className="btn popovers" data-container="body" data-trigger="hover" data-placement="top" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in top">Top</button>
											<button className="btn popovers" data-container="body" onClick={ () => this.getData() } data-trigger="hover" data-placement="left" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in left">Left</button>
											<button className="btn popovers" data-container="body" data-trigger="hover" data-placement="right" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in right">Right</button>
											<button className="btn popovers" data-container="body" data-trigger="hover" data-placement="bottom" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in bottom">Bottom</button>
											<div className="inline-block popovers" data-container="body" data-trigger="hover" data-placement="bottom" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in bottom">
												<button type="button" className="btn btn-default disabled">Disabled</button>
											</div>
										</div>
									</div>
									{/* END POPOVERS PORTLET */}
									{/* BEGIN POPOVERS PORTLET */}
									<div className="portlet box green">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Popovers In Slim Scroll
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
											<div className="scroller" style={{height:'150px'}} data-always-visible="1" data-rail-visible="0">
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="top" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in top">Top</button>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="left" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in left">Left</button>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="right" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in right">Right</button>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="bottom" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in bottom">Bottom</button>
												<div className="inline-block popovers" data-trigger="hover" data-container="body" data-placement="bottom" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in bottom">
													<button type="button" className="btn btn-default disabled">Disabled</button>
												</div>
												<p>
													Tight pants next level keffiyeh <Link to="#" className="popovers" data-container="body" data-content="Popover body goes here! Popover body goes here!" data-original-title="Default Popover">
													trigger me on click </Link>
													haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <Link to="#" className="popovers" data-container="body" data-trigger="hover" data-content="Popover body goes here! Popover body goes here!" data-original-title="Another Popover">
													trigger me on hover </Link>
													terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa.
												</p>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="top" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in top">Top</button>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="left" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in left">Left</button>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="right" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in right">Right</button>
												<button className="btn popovers" data-trigger="hover" data-container="body" data-placement="bottom" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in bottom">Bottom</button>
												<div className="inline-block popovers" data-trigger="hover" data-container="body" data-placement="bottom" data-content="Popover body goes here! Popover body goes here!" data-original-title="Popover in bottom">
													<button type="button" className="btn btn-default disabled">Disabled</button>
												</div>
												<p>
													Tight pants next level keffiyeh <Link to="#" className="popovers" data-container="body" data-content="Popover body goes here! Popover body goes here!" data-original-title="Default Popover">
													trigger me on click </Link>
													haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <Link to="#" className="popovers" data-container="body" data-trigger="hover" data-content="Popover body goes here! Popover body goes here!" data-original-title="Another Popover">
													trigger me on hover </Link>
													terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa.
												</p>
											</div>
										</div>
									</div>
									{/* END POPOVERS PORTLET */}
									{/* BEGIN POPOVERS PORTLET */}
									<div className="portlet box blue">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>List Groups
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
											<h4 className="block">Basic</h4>
											<ul className="list-group">
												<li className="list-group-item">
													Cras justo odio
												</li>
												<li className="list-group-item">
													Dapibus ac facilisis in
												</li>
												<li className="list-group-item">
													Morbi leo risus
												</li>
												<li className="list-group-item">
													Porta ac consectetur ac
												</li>
												<li className="list-group-item">
													Vestibulum at eros
												</li>
											</ul>
											<h4 className="block">Custom Colors(refer to ui_colors.html for more colors)</h4>
											<ul className="list-group">
												<li className="list-group-item bg-blue">
													Cras justo odio
												</li>
												<li className="list-group-item bg-red">
													Dapibus ac facilisis in
												</li>
												<li className="list-group-item bg-green">
													Morbi leo risus
												</li>
												<li className="list-group-item bg-purple">
													Porta ac consectetur ac
												</li>
												<li className="list-group-item bg-yellow">
													Vestibulum at eros
												</li>
											</ul>
											<h4 className="block">Badges</h4>
											<ul className="list-group">
												<li className="list-group-item">
													Cras justo odio <span className="badge badge-default">
													3 </span>
												</li>
												<li className="list-group-item">
													Dapibus ac facilisis in <span className="badge badge-success">
													11 </span>
												</li>
												<li className="list-group-item">
													Morbi leo risus <span className="badge badge-danger">
													new </span>
												</li>
												<li className="list-group-item">
													Porta ac consectetur ac <span className="badge badge-warning">
													4 </span>
												</li>
												<li className="list-group-item">
													Vestibulum at eros <span className="badge badge-info">
													3 </span>
												</li>
											</ul>
											<h4 className="block">Contextual States</h4>
											<ul className="list-group">
												<li className="list-group-item">
													Default
												</li>
												<li className="list-group-item list-group-item-success">
													Success
												</li>
												<li className="list-group-item list-group-item-info">
													Info <span className="badge badge-warning">
													3 </span>
												</li>
												<li className="list-group-item list-group-item-warning">
													Warning <span className="badge badge-default">
													3 </span>
												</li>
												<li className="list-group-item list-group-item-danger">
													Danger
												</li>
											</ul>
											<h4 className="block">Linked Contextual Items</h4>
											<div className="list-group">
												<Link to="#" className="list-group-item">
												Default </Link>
												<Link to="#" className="list-group-item list-group-item-success">
												Success </Link>
												<Link to="#" className="list-group-item list-group-item-info">
												Info <span className="badge badge-warning">
												3 </span>
												</Link>
												<Link to="#" className="list-group-item list-group-item-warning">
												Warning <span className="badge badge-default">
												3 </span>
												</Link>
												<Link to="#" className="list-group-item list-group-item-danger">
												Danger </Link>
											</div>
											<h4 className="block">Custom Content</h4>
											<div className="list-group">
												<Link to="#" className="list-group-item active">
												<h4 className="list-group-item-heading">List group item heading</h4>
												<p className="list-group-item-text">
													Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
												</p>
												</Link>
												<Link to="#" className="list-group-item">
												<h4 className="list-group-item-heading">List group item heading</h4>
												<p className="list-group-item-text">
													Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
												</p>
												</Link>
												<Link to="#" className="list-group-item">
												<h4 className="list-group-item-heading">List group item heading</h4>
												<p className="list-group-item-text">
													Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
												</p>
												</Link>
											</div>
										</div>
									</div>
									{/* END POPOVERS PORTLET */}
									{/* BEGIN POPOVERS PORTLET */}
									<div className="portlet box green">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Panels
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
											<h4 className="block">Basic Panels</h4>
											<div className="panel panel-default">
												<div className="panel-heading">
													Panel heading without title
												</div>
												<div className="panel-body">
													Panel content
												</div>
											</div>
											<div className="panel panel-default">
												<div className="panel-heading">
													<h3 className="panel-title">Panel title</h3>
												</div>
												<div className="panel-body">
													Panel content
												</div>
											</div>
											<div className="panel panel-default">
												<div className="panel-body">
													Panel content
												</div>
												<div className="panel-footer">
													Panel footer
												</div>
											</div>
											<div className="clearfix">
												<h4 className="block">Contextual Panels</h4>
												<div className="panel panel-default">
													<div className="panel-heading">
														<h3 className="panel-title">Primary Panel</h3>
													</div>
													<div className="panel-body">
														Panel content
													</div>
												</div>
												<div className="panel panel-primary">
													<div className="panel-heading">
														<h3 className="panel-title">Primary Panel</h3>
													</div>
													<div className="panel-body">
														Panel content
													</div>
												</div>
												<div className="panel panel-success">
													<div className="panel-heading">
														<h3 className="panel-title">Success Panel</h3>
													</div>
													<div className="panel-body">
														Panel content
													</div>
												</div>
												<div className="panel panel-info">
													<div className="panel-heading">
														<h3 className="panel-title">Info Panel</h3>
													</div>
													<div className="panel-body">
														Panel content
													</div>
												</div>
												<div className="panel panel-warning">
													<div className="panel-heading">
														<h3 className="panel-title">Warning Panel</h3>
													</div>
													<div className="panel-body">
														Panel content
													</div>
												</div>
												<div className="panel panel-danger">
													<div className="panel-heading">
														<h3 className="panel-title">Danger Panel</h3>
													</div>
													<div className="panel-body">
														Panel content
													</div>
												</div>
											</div>
											<div className="clearfix">
												<h4 className="block">With Tables</h4>
												<div className="panel panel-success">
													{/* Default panel contents  */}
													<div className="panel-heading">
														<h3 className="panel-title">Panel Title</h3>
													</div>
													<div className="panel-body">
														<p>
															Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.
														</p>
													</div>
													{/* Table  */}
													<table className="table">
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
															@mdo
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
															Thornton
														</td>
														<td>
															@fat
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
															the Bird
														</td>
														<td>
															@twitter
														</td>
													</tr>
													</tbody>
													</table>
												</div>
											</div>
											<div className="clearfix">
												<h4 className="block">With List Groups</h4>
												<div className="panel panel-warning">
													{/* Default panel contents  */}
													<div className="panel-heading">
														<h3 className="panel-title">Panel Title</h3>
													</div>
													<div className="panel-body">
														<p>
															Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.
														</p>
													</div>
													{/* List group  */}
													<ul className="list-group">
														<li className="list-group-item">
															Cras justo odio <span className="badge badge-default">
															3 </span>
														</li>
														<li className="list-group-item">
															Dapibus ac facilisis in <span className="badge badge-success">
															11 </span>
														</li>
														<li className="list-group-item">
															Morbi leo risus <span className="badge badge-danger">
															new </span>
														</li>
														<li className="list-group-item">
															Porta ac consectetur ac <span className="badge badge-warning">
															4 </span>
														</li>
														<li className="list-group-item">
															Vestibulum at eros <span className="badge badge-info">
															3 </span>
														</li>
														<li className="list-group-item">
															Vestibulum at eros
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									{/* BEGIN PROGRESS BARS PORTLET */}
									<div className="portlet box green">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Progress Bars
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
											<div className="note note-warning">
												<h4 className="block">Cross-browser compatibility</h4>
												<p>
													Progress bars use CSS3 transitions and animations to achieve some of their effects. These features are not supported in Internet Explorer 9 and below or older versions of Firefox. Opera 12 does not support animations.
												</p>
											</div>
											<h3>Basic</h3>
											<div className="progress">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
													<span className="sr-only">
													40% Complete (success) </span>
												</div>
											</div>
											<div className="progress">
												<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
													<span className="sr-only">
													20% Complete </span>
												</div>
											</div>
											<div className="progress">
												<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
													<span className="sr-only">
													60% Complete (warning) </span>
												</div>
											</div>
											<div className="progress">
												<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
													<span className="sr-only">
													80% Complete </span>
												</div>
											</div>
											<h3>Striped</h3>
											<div className="progress progress-striped">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
													<span className="sr-only">
													40% Complete (success) </span>
												</div>
											</div>
											<div className="progress progress-striped">
												<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
													<span className="sr-only">
													20% Complete </span>
												</div>
											</div>
											<div className="progress progress-striped">
												<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
													<span className="sr-only">
													60% Complete (warning) </span>
												</div>
											</div>
											<div className="progress progress-striped">
												<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
													<span className="sr-only">
													80% Complete (danger) </span>
												</div>
											</div>
											<h3>Animated</h3>
											<div className="progress progress-striped active">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
													<span className="sr-only">
													40% Complete (success) </span>
												</div>
											</div>
											<div className="progress progress-striped active">
												<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
													<span className="sr-only">
													20% Complete </span>
												</div>
											</div>
											<div className="progress progress-striped active">
												<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
													<span className="sr-only">
													60% Complete (warning) </span>
												</div>
											</div>
											<div className="progress progress-striped active">
												<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
													<span className="sr-only">
													80% Complete (danger) </span>
												</div>
											</div>
											<h3>Stacked</h3>
											<div className="progress">
												<div className="progress-bar progress-bar-success" style={{width: '35%'}}>
													<span className="sr-only">
													35% Complete (success) </span>
												</div>
												<div className="progress-bar progress-bar-warning" style={{width: '20%'}}>
													<span className="sr-only">
													20% Complete (warning) </span>
												</div>
												<div className="progress-bar progress-bar-danger" style={{width: '10%'}}>
													<span className="sr-only">
													10% Complete (danger) </span>
												</div>
											</div>
										</div>
									</div>
									{/* END PROGRESS BARS PORTLET */}
									{/* BEGIN LABELS AND BADGES PORTLET */}
									<div className="portlet box blue">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Labels & Badges
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
											<h4 className="block">Labels & Badges Styles</h4>
											<table className="table table-bordered table-striped">
											<thead>
											<tr>
												<th>
													className
												</th>
												<th>
													Labels
												</th>
												<th>
													Badges
												</th>
												<th>
													Roundless Badges
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td>
													Default
												</td>
												<td>
													<span className="label label-default">
													Default </span>
												</td>
												<td>
													<span className="badge badge-default">
													5 </span>
												</td>
												<td>
													<span className="badge badge-default badge-roundless">
													3 </span>
												</td>
											</tr>
											<tr>
												<td>
													Primary
												</td>
												<td>
													<span className="label label-primary">
													Primary </span>
												</td>
												<td>
													<span className="badge badge-primary">
													4 </span>
												</td>
												<td>
													<span className="badge badge-primary badge-roundless">
													Hot </span>
												</td>
											</tr>
											<tr>
												<td>
													Info
												</td>
												<td>
													<span className="label label-info">
													Info </span>
												</td>
												<td>
													<span className="badge badge-info">
													6 </span>
												</td>
												<td>
													<span className="badge badge-info badge-roundless">
													New </span>
												</td>
											</tr>
											<tr>
												<td>
													Success
												</td>
												<td>
													<span className="label label-success">
													Success </span>
												</td>
												<td>
													<span className="badge badge-success">
													1 </span>
												</td>
												<td>
													<span className="badge badge-success badge-roundless">
													2 </span>
												</td>
											</tr>
											<tr>
												<td>
													Danger
												</td>
												<td>
													<span className="label label-danger">
													Danger </span>
												</td>
												<td>
													<span className="badge badge-danger">
													3 </span>
												</td>
												<td>
													<span className="badge badge-danger badge-roundless">
													5 </span>
												</td>
											</tr>
											<tr>
												<td>
													Warning
												</td>
												<td>
													<span className="label label-warning">
													Warning </span>
												</td>
												<td>
													<span className="badge badge-warning">
													12 </span>
												</td>
												<td>
													<span className="badge badge-warning badge-roundless">
													3 </span>
												</td>
											</tr>
											</tbody>
											</table>
											<h4 className="block">Labels In Headings</h4>
											<div className="well">
												<h1>Example heading <span className="label label-default">
												default </span>
												</h1>
												<h2>Example heading <span className="label label-success">
												success </span>
												</h2>
												<h3>Example heading <span className="label label-danger">
												danger </span>
												</h3>
												<h4 className="block">Example heading <span className="label label-info">
												info </span>
												</h4>
												<h4>Example heading <span className="label label-warning">
												warning </span>
												</h4>
												<h6>Example heading <span className="label label-primary">
												primary </span>
												</h6>
											</div>
											<div className="clearfix">
												<h4 className="block">Badges in Navs</h4>
												<ul className="nav nav-pills">
													<li className="active">
														<Link to="#">
														Home <span className="badge1">
														42 </span>
														</Link>
													</li>
													<li>
														<Link to="#">
														Profile </Link>
													</li>
													<li>
														<Link to="#">
														Messages <span className="badge badge-danger">
														3 </span>
														</Link>
													</li>
												</ul>
												<div className="clearfix margin-bottom-10">
												</div>
												<ul className="nav nav-pills nav-stacked" style={{maxWidth: '260px'}}>
													<li className="active">
														<Link to="#">
														<span className="badge badge-warning pull-right">
														42 </span>
														Home </Link>
													</li>
													<li>
														<Link to="#">
														Profile </Link>
													</li>
													<li>
														<Link to="#">
														<span className="badge badge-success pull-right">
														3 </span>
														Messages </Link>
													</li>
												</ul>
											</div>
											<div className="clearfix">
												<h4 className="block">Badges in Inline Dropdowns</h4>
												<div className="dropdown inline clearfix">
													{/* Link or button to toggle dropdown  */}
													<ul className="dropdown-menu" role="menu">
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Action <span className="badge badge-success">
															2 </span>
															</Link>
														</li>
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Another action <span className="badge badge-warning">
															5 </span>
															</Link>
														</li>
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Something here <span className="badge badge-danger">
															7 </span>
															</Link>
														</li>
														<li role="presentation" className="divider">
														</li>
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Separated link <span className="badge badge-info">
															12 </span>
															</Link>
														</li>
													</ul>
												</div>
												<div className="clearfix">
												</div>
												<h4 className="block">Badges in Button Dropdowns</h4>
												<div className="btn-group ">
													<button className="btn blue dropdown-toggle" data-toggle="dropdown">Open Me!<i className="fa fa-angle-down"></i>
													</button>
													<ul className="dropdown-menu" role="menu">
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Action <span className="badge badge-success">
															2 </span>
															</Link>
														</li>
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Another action <span className="badge badge-warning">
															5 </span>
															</Link>
														</li>
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Something here <span className="badge badge-danger">
															7 </span>
															</Link>
														</li>
														<li role="presentation" className="divider">
														</li>
														<li role="presentation">
															<Link role="menuitem" tabIndex="-1" to="#">
															Separated link <span className="badge badge-info">
															12 </span>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									{/* END LABELS AND BADGES PORTLET */}
									{/* BEGIN PAGINATION PORTLET */}
									<div className="portlet box purple">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Pagination
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
											<div>
												<ul className="pagination pagination-lg">
													<li>
														<Link to="#">
														<i className="fa fa-angle-left"></i>
														</Link>
													</li>
													<li>
														<Link to="#">
														1 </Link>
													</li>
													<li>
														<Link to="#">
														2 </Link>
													</li>
													<li>
														<Link to="#">
														3 </Link>
													</li>
													<li>
														<Link to="#">
														4 </Link>
													</li>
													<li>
														<Link to="#">
														5 </Link>
													</li>
													<li>
														<Link to="#">
														6 </Link>
													</li>
													<li>
														<Link to="#">
														<i className="fa fa-angle-right"></i>
														</Link>
													</li>
												</ul>
											</div>
											<div>
												<ul className="pagination">
													<li>
														<Link to="#">
														<i className="fa fa-angle-left"></i>
														</Link>
													</li>
													<li>
														<Link to="#">
														1 </Link>
													</li>
													<li>
														<Link to="#">
														2 </Link>
													</li>
													<li>
														<Link to="#">
														3 </Link>
													</li>
													<li>
														<Link to="#">
														4 </Link>
													</li>
													<li>
														<Link to="#">
														5 </Link>
													</li>
													<li>
														<Link to="#">
														6 </Link>
													</li>
													<li>
														<Link to="#">
														<i className="fa fa-angle-right"></i>
														</Link>
													</li>
												</ul>
											</div>
											<div>
												<ul className="pagination pagination-sm">
													<li>
														<Link to="#">
														<i className="fa fa-angle-left"></i>
														</Link>
													</li>
													<li>
														<Link to="#">
														1 </Link>
													</li>
													<li>
														<Link to="#">
														2 </Link>
													</li>
													<li>
														<Link to="#">
														3 </Link>
													</li>
													<li>
														<Link to="#">
														4 </Link>
													</li>
													<li>
														<Link to="#">
														5 </Link>
													</li>
													<li>
														<Link to="#">
														6 </Link>
													</li>
													<li>
														<Link to="#">
														<i className="fa fa-angle-right"></i>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									{/* END PAGINATION PORTLET */}
									{/* BEGIN PAGINATION PORTLET */}
									<div className="portlet box yellow">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Pager With Aligned Links
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
											<h4 className="block">Default</h4>
											<div className="well">
												Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
											</div>
											<ul className="pager">
												<li className="previous">
													<Link to="#">
													&larr; Older </Link>
												</li>
												<li className="next">
													<Link to="#">
													Newer &rarr; </Link>
												</li>
											</ul>
											<h4 className="block">Optional Disabled State</h4>
											<div className="well">
												Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
											</div>
											<ul className="pager">
												<li className="previous disabled">
													<Link to="#">
													&larr; Older </Link>
												</li>
												<li className="next">
													<Link to="#">
													Newer &rarr; </Link>
												</li>
											</ul>
											<h4 className="block">With Styled Buttons & Icons</h4>
											<div className="well">
												Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
											</div>
											<ul className="pager">
												<li className="previous">
													<Link to="#" className="btn blue">
													<i className="fa fa-angle-left"></i> Older </Link>
												</li>
												<li className="next">
													<Link to="#" className="btn blue">
													Newer <i className="fa fa-angle-right"></i>
													</Link>
												</li>
											</ul>
										</div>
									</div>
									{/* END PAGINATION PORTLET */}
									{/* BEGIN PAGINATION PORTLET */}
									<div className="portlet box purple">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Dynamic Pagination(jQuery Bootpag)
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div>
												<h4 className="block">Basic Pagination</h4>
												<p id="dynamic_pager_content1" className="well">
													Page 1 content here
												</p>
												<p id="dynamic_pager_demo1">
												</p>
											</div>
											<hr />
											<div>
												<h4 className="block">Advance Pagination</h4>
												<p id="dynamic_pager_content2" className="well">
													Page 1 content here
												</p>
												<p id="dynamic_pager_demo2">
												</p>
											</div>
										</div>
									</div>
									{/* END PAGINATION PORTLET */}
									<div className="portlet box grey-cascade">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Wells
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div className="well well-lg">
												<h4 className="block">I am a large well</h4>
												<p>
													Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
												</p>
											</div>
											<div className="well">
												<h4 className="block">I am a default well</h4>
												<p>
													Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
												</p>
											</div>
											<div className="well well-sm">
												<h4 className="block">I am a small well</h4>
												<p>
													Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
												</p>
											</div>
										</div>
									</div>
									<div className="portlet box purple">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Media Objects
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div className="note note-success">
												<p>
													Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left or right aligned image alongside textual content.
												</p>
											</div>
											<div className="clearfix">
												<ul className="media-list">
													<li className="media">
														<Link className="pull-left" to="#">
														<img className="media-object" src={'holder.js/64x64'} alt=""/>
														</Link>
														<div className="media-body">
															<h4 className="media-heading">Media heading</h4>
															<p>
																Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
															</p>
															{/* Nested media object  */}
															<div className="media">
																<Link className="pull-left" to="#">
																<img className="media-object" src={'holder.js/64x64'} alt=""/>
																</Link>
																<div className="media-body">
																	<h4 className="media-heading">Nested media heading</h4>
																	Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
																	{/* Nested media object  */}
																	<div className="media">
																		<Link className="pull-left" to="#">
																		<img className="media-object" src={'holder.js/64x64'} alt=""/>
																		</Link>
																		<div className="media-body">
																			<h4 className="media-heading">Nested media heading</h4>
																			Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
																		</div>
																	</div>
																</div>
															</div>
															{/* Nested media object  */}
															<div className="media">
																<Link className="pull-left" to="#">
																<img className="media-object" src={'holder.js/64x64'} alt=""/>
																</Link>
																<div className="media-body">
																	<h4 className="media-heading">Nested media heading</h4>
																	Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
																</div>
															</div>
														</div>
													</li>
													<li className="media">
														<Link className="pull-right" to="#">
														<img className="media-object" src={'holder.js/64x64'} alt=""/>
														</Link>
														<div className="media-body">
															<h4 className="media-heading">Media heading</h4>
															Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="portlet box green">
										<div className="portlet-title">
											<div className="caption">
												<i className="fa fa-cogs"></i>Thumbnails
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div className="note note-info">
												<p>
													Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.
												</p>
											</div>
											<h4 className="block">Default</h4>
											<div className="row">
												<div className="col-sm-6 col-md-3">
													<Link to="#" className="thumbnail">
													<img src={'holder.js/100%x180'} alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}}/>
													</Link>
												</div>
												<div className="col-sm-6 col-md-3">
													<Link to="#" className="thumbnail">
													<img src={'holder.js/100%x180'} alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}}/>
													</Link>
												</div>
												<div className="col-sm-6 col-md-3">
													<Link to="#" className="thumbnail">
													<img src={'holder.js/100%x180'} alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}}/>
													</Link>
												</div>
												<div className="col-sm-6 col-md-3">
													<Link to="#" className="thumbnail">
													<img src={'holder.js/100%x180'} alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}}/>
													</Link>
												</div>
											</div>
											<h4 className="block">Custom Content</h4>
											<div className="row">
												<div className="col-sm-12 col-md-6">
													<div className="thumbnail">
														<img src={'holder.js/100%x200'} alt="" style={{width: '100%', height: '200px'}}/>
														<div className="caption">
															<h3>Thumbnail label</h3>
															<p>
																Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
															</p>
															<p>
																<Link to="#" className="btn blue">
																Button </Link>
																<Link to="#" className="btn default">
																Button </Link>
															</p>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-md-6">
													<div className="thumbnail">
														<img src={'holder.js/100%x200'} alt="" style={{width: '100%', height: '200px'}}/>
														<div className="caption">
															<h3>Thumbnail label</h3>
															<p>
																Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
															</p>
															<p>
																<Link to="#" className="btn red">
																Button </Link>
																<Link to="#" className="btn default">
																Button </Link>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* END PAGINATION PORTLET */}
							</div>
						</div>
						{/* END PAGE CONTENT */}
					</div>
			</Fragment> 
        )
    }
}

