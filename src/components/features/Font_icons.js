import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

export default class Font_icons extends Component {
	
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
		// window.open('http://fortawesome.github.io/Font-Awesome/icons/');
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
									<h1>Font Icons <small>font icons and more</small></h1>
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
									<Link to="#">Font Icons</Link>
								</li>
							</ul>
							{/* END PAGE BREADCRUMB  */}
							{/* END PAGE HEADER */}
							{/* BEGIN PAGE CONTENT */}
							<div className="row">
								<div className="col-md-12">
									<div className="tabbable tabbable-custom tabbable-noborder">
										<ul className="nav nav-tabs">
											<li className="active">
												<Link to="#tab_1_1" data-toggle="tab">
												Fontawesome Icons </Link>
											</li>
											<li>
												<Link to="#tab_1_3" data-toggle="tab">
												Simple Line Icons </Link>
											</li>
											<li>
												<Link to="#tab_1_2" data-toggle="tab">
												Glyphicons </Link>
											</li>
										</ul>
										<div className="tab-content">
											<div className="tab-pane active fontawesome-demo" id="tab_1_1">
												<div className="note note-success">
													<p>
														Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS. The complete set of 439 icons in Font Awesome 4.1.0
													</p>
													For more info check out: <Link target="_blank" onClick={ () => this.openTab('http://fortawesome.github.io/Font-Awesome/icons/') }>http://fortawesome.github.io/Font-Awesome/icons/</Link>
												</div>
												<h3>71 New Icons in 4.1</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-automobile"></i> fa-automobile <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bank"></i> fa-bank <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-behance"></i> fa-behance
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-behance-square"></i> fa-behance-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bomb"></i> fa-bomb
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-building"></i> fa-building
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cab"></i> fa-cab <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-car"></i> fa-car
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-child"></i> fa-child
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-o-notch"></i> fa-circle-o-notch
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-thin"></i> fa-circle-thin
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-codepen"></i> fa-codepen
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cube"></i> fa-cube
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cubes"></i> fa-cubes
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-database"></i> fa-database
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-delicious"></i> fa-delicious
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-deviantart"></i> fa-deviantart
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-digg"></i> fa-digg
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-drupal"></i> fa-drupal
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-empire"></i> fa-empire
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-envelope-square"></i> fa-envelope-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fax"></i> fa-fax
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-archive-o"></i> fa-file-archive-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-audio-o"></i> fa-file-audio-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-code-o"></i> fa-file-code-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-excel-o"></i> fa-file-excel-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-image-o"></i> fa-file-image-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-movie-o"></i> fa-file-movie-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-pdf-o"></i> fa-file-pdf-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-photo-o"></i> fa-file-photo-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-picture-o"></i> fa-file-picture-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-sound-o"></i> fa-file-sound-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-video-o"></i> fa-file-video-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-word-o"></i> fa-file-word-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-zip-o"></i> fa-file-zip-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ge"></i> fa-ge <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-git"></i> fa-git
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-git-square"></i> fa-git-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-google"></i> fa-google
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-graduation-cap"></i> fa-graduation-cap
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-hacker-news"></i> fa-hacker-news
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-header"></i> fa-header
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-history"></i> fa-history
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-institution"></i> fa-institution <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-joomla"></i> fa-joomla
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-jsfiddle"></i> fa-jsfiddle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-language"></i> fa-language
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-life-bouy"></i> fa-life-bouy <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-life-ring"></i> fa-life-ring
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-life-saver"></i> fa-life-saver <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mortar-board"></i> fa-mortar-board <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-openid"></i> fa-openid
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paper-plane"></i> fa-paper-plane
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paper-plane-o"></i> fa-paper-plane-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paragraph"></i> fa-paragraph
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paw"></i> fa-paw
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pied-piper"></i> fa-pied-piper
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pied-piper-alt"></i> fa-pied-piper-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pied-piper-square"></i> fa-pied-piper-square <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-qq"></i> fa-qq
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ra"></i> fa-ra <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rebel"></i> fa-rebel
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-recycle"></i> fa-recycle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-reddit"></i> fa-reddit
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-reddit-square"></i> fa-reddit-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-send"></i> fa-send <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-send-o"></i> fa-send-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share-alt"></i> fa-share-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share-alt-square"></i> fa-share-alt-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-slack"></i> fa-slack
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sliders"></i> fa-sliders
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-soundcloud"></i> fa-soundcloud
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-space-shuttle"></i> fa-space-shuttle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-spoon"></i> fa-spoon
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-spotify"></i> fa-spotify
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-steam"></i> fa-steam
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-steam-square"></i> fa-steam-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-stumbleupon"></i> fa-stumbleupon
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-stumbleupon-circle"></i> fa-stumbleupon-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-support"></i> fa-support <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-taxi"></i> fa-taxi
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tencent-weibo"></i> fa-tencent-weibo
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tree"></i> fa-tree
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-university"></i> fa-university
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-vine"></i> fa-vine
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-wechat"></i> fa-wechat <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-weixin"></i> fa-weixin
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-wordpress"></i> fa-wordpress
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-yahoo"></i> fa-yahoo
													</div>
												</div>
												<h3>Web Application Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-adjust"></i> fa-adjust
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-anchor"></i> fa-anchor
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-archive"></i> fa-archive
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows"></i> fa-arrows
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows-h"></i> fa-arrows-h
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows-v"></i> fa-arrows-v
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-asterisk"></i> fa-asterisk
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-automobile"></i> fa-automobile <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ban"></i> fa-ban
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bank"></i> fa-bank <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bar-chart-o"></i> fa-bar-chart-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-barcode"></i> fa-barcode
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bars"></i> fa-bars
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-beer"></i> fa-beer
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bell"></i> fa-bell
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bell-o"></i> fa-bell-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bolt"></i> fa-bolt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bomb"></i> fa-bomb
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-book"></i> fa-book
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bookmark"></i> fa-bookmark
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bookmark-o"></i> fa-bookmark-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-briefcase"></i> fa-briefcase
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bug"></i> fa-bug
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-building"></i> fa-building
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-building-o"></i> fa-building-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bullhorn"></i> fa-bullhorn
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bullseye"></i> fa-bullseye
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cab"></i> fa-cab <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-calendar"></i> fa-calendar
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-calendar-o"></i> fa-calendar-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-camera"></i> fa-camera
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-camera-retro"></i> fa-camera-retro
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-car"></i> fa-car
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-certificate"></i> fa-certificate
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check"></i> fa-check
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check-circle"></i> fa-check-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check-circle-o"></i> fa-check-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check-square"></i> fa-check-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check-square-o"></i> fa-check-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-child"></i> fa-child
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle"></i> fa-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-o"></i> fa-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-o-notch"></i> fa-circle-o-notch
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-thin"></i> fa-circle-thin
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-clock-o"></i> fa-clock-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cloud"></i> fa-cloud
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cloud-download"></i> fa-cloud-download
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cloud-upload"></i> fa-cloud-upload
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-code"></i> fa-code
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-code-fork"></i> fa-code-fork
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-coffee"></i> fa-coffee
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cog"></i> fa-cog
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cogs"></i> fa-cogs
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-comment"></i> fa-comment
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-comment-o"></i> fa-comment-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-comments"></i> fa-comments
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-comments-o"></i> fa-comments-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-compass"></i> fa-compass
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-credit-card"></i> fa-credit-card
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-crop"></i> fa-crop
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-crosshairs"></i> fa-crosshairs
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cube"></i> fa-cube
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cubes"></i> fa-cubes
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cutlery"></i> fa-cutlery
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-dashboard"></i> fa-dashboard <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-database"></i> fa-database
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-desktop"></i> fa-desktop
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-dot-circle-o"></i> fa-dot-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-download"></i> fa-download
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-edit"></i> fa-edit <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ellipsis-h"></i> fa-ellipsis-h
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ellipsis-v"></i> fa-ellipsis-v
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-envelope"></i> fa-envelope
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-envelope-o"></i> fa-envelope-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-envelope-square"></i> fa-envelope-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-eraser"></i> fa-eraser
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-exchange"></i> fa-exchange
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-exclamation"></i> fa-exclamation
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-exclamation-circle"></i> fa-exclamation-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-exclamation-triangle"></i> fa-exclamation-triangle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-external-link"></i> fa-external-link
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-external-link-square"></i> fa-external-link-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-eye"></i> fa-eye
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-eye-slash"></i> fa-eye-slash
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fax"></i> fa-fax
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-female"></i> fa-female
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fighter-jet"></i> fa-fighter-jet
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-archive-o"></i> fa-file-archive-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-audio-o"></i> fa-file-audio-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-code-o"></i> fa-file-code-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-excel-o"></i> fa-file-excel-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-image-o"></i> fa-file-image-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-movie-o"></i> fa-file-movie-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-pdf-o"></i> fa-file-pdf-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-photo-o"></i> fa-file-photo-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-picture-o"></i> fa-file-picture-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-sound-o"></i> fa-file-sound-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-video-o"></i> fa-file-video-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-word-o"></i> fa-file-word-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-zip-o"></i> fa-file-zip-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-film"></i> fa-film
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-filter"></i> fa-filter
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fire"></i> fa-fire
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fire-extinguisher"></i> fa-fire-extinguisher
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-flag"></i> fa-flag
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-flag-checkered"></i> fa-flag-checkered
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-flag-o"></i> fa-flag-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-flash"></i> fa-flash <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-flask"></i> fa-flask
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-folder"></i> fa-folder
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-folder-o"></i> fa-folder-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-folder-open"></i> fa-folder-open
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-folder-open-o"></i> fa-folder-open-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-frown-o"></i> fa-frown-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gamepad"></i> fa-gamepad
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gavel"></i> fa-gavel
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gear"></i> fa-gear <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gears"></i> fa-gears <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gift"></i> fa-gift
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-glass"></i> fa-glass
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-globe"></i> fa-globe
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-graduation-cap"></i> fa-graduation-cap
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-group"></i> fa-group <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-hdd-o"></i> fa-hdd-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-headphones"></i> fa-headphones
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-heart"></i> fa-heart
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-heart-o"></i> fa-heart-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-history"></i> fa-history
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-home"></i> fa-home
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-image"></i> fa-image <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-inbox"></i> fa-inbox
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-info"></i> fa-info
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-info-circle"></i> fa-info-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-institution"></i> fa-institution <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-key"></i> fa-key
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-keyboard-o"></i> fa-keyboard-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-language"></i> fa-language
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-laptop"></i> fa-laptop
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-leaf"></i> fa-leaf
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-legal"></i> fa-legal <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-lemon-o"></i> fa-lemon-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-level-down"></i> fa-level-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-level-up"></i> fa-level-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-life-bouy"></i> fa-life-bouy <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-life-ring"></i> fa-life-ring
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-life-saver"></i> fa-life-saver <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-lightbulb-o"></i> fa-lightbulb-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-location-arrow"></i> fa-location-arrow
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-lock"></i> fa-lock
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-magic"></i> fa-magic
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-magnet"></i> fa-magnet
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mail-forward"></i> fa-mail-forward <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mail-reply"></i> fa-mail-reply <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mail-reply-all"></i> fa-mail-reply-all <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-male"></i> fa-male
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-map-marker"></i> fa-map-marker
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-meh-o"></i> fa-meh-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-microphone"></i> fa-microphone
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-microphone-slash"></i> fa-microphone-slash
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-minus"></i> fa-minus
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-minus-circle"></i> fa-minus-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-minus-square"></i> fa-minus-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-minus-square-o"></i> fa-minus-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mobile"></i> fa-mobile
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mobile-phone"></i> fa-mobile-phone <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-money"></i> fa-money
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-moon-o"></i> fa-moon-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-mortar-board"></i> fa-mortar-board <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-music"></i> fa-music
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-navicon"></i> fa-navicon <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paper-plane"></i> fa-paper-plane
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paper-plane-o"></i> fa-paper-plane-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paw"></i> fa-paw
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pencil"></i> fa-pencil
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pencil-square"></i> fa-pencil-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pencil-square-o"></i> fa-pencil-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-phone"></i> fa-phone
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-phone-square"></i> fa-phone-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-photo"></i> fa-photo <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-picture-o"></i> fa-picture-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plane"></i> fa-plane
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plus"></i> fa-plus
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plus-circle"></i> fa-plus-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plus-square"></i> fa-plus-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plus-square-o"></i> fa-plus-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-power-off"></i> fa-power-off
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-print"></i> fa-print
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-puzzle-piece"></i> fa-puzzle-piece
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-qrcode"></i> fa-qrcode
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-question"></i> fa-question
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-question-circle"></i> fa-question-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-quote-left"></i> fa-quote-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-quote-right"></i> fa-quote-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-random"></i> fa-random
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-recycle"></i> fa-recycle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-refresh"></i> fa-refresh
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-reorder"></i> fa-reorder <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-reply"></i> fa-reply
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-reply-all"></i> fa-reply-all
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-retweet"></i> fa-retweet
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-road"></i> fa-road
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rocket"></i> fa-rocket
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rss"></i> fa-rss
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rss-square"></i> fa-rss-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-search"></i> fa-search
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-search-minus"></i> fa-search-minus
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-search-plus"></i> fa-search-plus
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-send"></i> fa-send <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-send-o"></i> fa-send-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share"></i> fa-share
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share-alt"></i> fa-share-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share-alt-square"></i> fa-share-alt-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share-square"></i> fa-share-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-share-square-o"></i> fa-share-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-shield"></i> fa-shield
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-shopping-cart"></i> fa-shopping-cart
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sign-in"></i> fa-sign-in
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sign-out"></i> fa-sign-out
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-signal"></i> fa-signal
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sitemap"></i> fa-sitemap
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sliders"></i> fa-sliders
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-smile-o"></i> fa-smile-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort"></i> fa-sort
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-alpha-asc"></i> fa-sort-alpha-asc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-alpha-desc"></i> fa-sort-alpha-desc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-amount-asc"></i> fa-sort-amount-asc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-amount-desc"></i> fa-sort-amount-desc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-asc"></i> fa-sort-asc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-desc"></i> fa-sort-desc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-down"></i> fa-sort-down <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-numeric-asc"></i> fa-sort-numeric-asc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-numeric-desc"></i> fa-sort-numeric-desc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sort-up"></i> fa-sort-up <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-space-shuttle"></i> fa-space-shuttle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-spinner"></i> fa-spinner
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-spoon"></i> fa-spoon
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-square"></i> fa-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-square-o"></i> fa-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-star"></i> fa-star
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-star-half"></i> fa-star-half
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-star-half-empty"></i> fa-star-half-empty <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-star-half-full"></i> fa-star-half-full <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-star-half-o"></i> fa-star-half-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-star-o"></i> fa-star-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-suitcase"></i> fa-suitcase
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-sun-o"></i> fa-sun-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-support"></i> fa-support <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tablet"></i> fa-tablet
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tachometer"></i> fa-tachometer
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tag"></i> fa-tag
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tags"></i> fa-tags
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tasks"></i> fa-tasks
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-taxi"></i> fa-taxi
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-terminal"></i> fa-terminal
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-thumb-tack"></i> fa-thumb-tack
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-thumbs-down"></i> fa-thumbs-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-thumbs-o-down"></i> fa-thumbs-o-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-thumbs-up"></i> fa-thumbs-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ticket"></i> fa-ticket
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-times"></i> fa-times
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-times-circle"></i> fa-times-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-times-circle-o"></i> fa-times-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tint"></i> fa-tint
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-trash-o"></i> fa-trash-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-tree"></i> fa-tree
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-trophy"></i> fa-trophy
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-truck"></i> fa-truck
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-umbrella"></i> fa-umbrella
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-university"></i> fa-university
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-unlock"></i> fa-unlock
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-unlock-alt"></i> fa-unlock-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-unsorted"></i> fa-unsorted <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-upload"></i> fa-upload
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-user"></i> fa-user
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-users"></i> fa-users
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-video-camera"></i> fa-video-camera
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-volume-down"></i> fa-volume-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-volume-off"></i> fa-volume-off
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-volume-up"></i> fa-volume-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-warning"></i> fa-warning <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-wheelchair"></i> fa-wheelchair
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-wrench"></i> fa-wrench
													</div>
												</div>
												<h3>File Type Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file"></i> fa-file
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-archive-o"></i> fa-file-archive-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-audio-o"></i> fa-file-audio-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-code-o"></i> fa-file-code-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-excel-o"></i> fa-file-excel-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-image-o"></i> fa-file-image-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-movie-o"></i> fa-file-movie-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-o"></i> fa-file-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-pdf-o"></i> fa-file-pdf-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-photo-o"></i> fa-file-photo-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-picture-o"></i> fa-file-picture-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-sound-o"></i> fa-file-sound-o <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-text"></i> fa-file-text
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-text-o"></i> fa-file-text-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-video-o"></i> fa-file-video-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-word-o"></i> fa-file-word-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-zip-o"></i> fa-file-zip-o <span className="text-muted">(alias)</span>
													</div>
												</div>
												<h3>Spinner Icons</h3>
												<div className="alert alert-success">
													<ul className="fa-ul">
														<li>
															<i className="fa fa-info-circle fa-lg fa-li"></i>
															These icons work great with the <code>fa-spin</code> className. Check out the spinning icons example.
														</li>
													</ul>
												</div>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-o-notch"></i> fa-circle-o-notch
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cog"></i> fa-cog
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gear"></i> fa-gear <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-refresh"></i> fa-refresh
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-spinner"></i> fa-spinner
													</div>
												</div>
												<h3>Form Control Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check-square"></i> fa-check-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-check-square-o"></i> fa-check-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle"></i> fa-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-circle-o"></i> fa-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-dot-circle-o"></i> fa-dot-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-minus-square"></i> fa-minus-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-minus-square-o"></i> fa-minus-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plus-square"></i> fa-plus-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-plus-square-o"></i> fa-plus-square-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-square"></i> fa-square
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-square-o"></i> fa-square-o
													</div>
												</div>
												<h3>Currency Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bitcoin"></i> fa-bitcoin <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-btc"></i> fa-btc
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cny"></i> fa-cny <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-dollar"></i> fa-dollar <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-eur"></i> fa-eur
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-euro"></i> fa-euro <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-gbp"></i> fa-gbp
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-inr"></i> fa-inr
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-jpy"></i> fa-jpy
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-krw"></i> fa-krw
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-money"></i> fa-money
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rmb"></i> fa-rmb <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rouble"></i> fa-rouble <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rub"></i> fa-rub
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-ruble"></i> fa-ruble <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rupee"></i> fa-rupee <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-try"></i> fa-try
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-turkish-lira"></i> fa-turkish-lira <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-usd"></i> fa-usd
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-won"></i> fa-won <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-yen"></i> fa-yen <span className="text-muted">(alias)</span>
													</div>
												</div>
												<h3>Text Editor Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-align-center"></i> fa-align-center
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-align-justify"></i> fa-align-justify
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-align-left"></i> fa-align-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-align-right"></i> fa-align-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-bold"></i> fa-bold
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chain"></i> fa-chain <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chain-broken"></i> fa-chain-broken
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-clipboard"></i> fa-clipboard
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-columns"></i> fa-columns
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-copy"></i> fa-copy <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-cut"></i> fa-cut <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-dedent"></i> fa-dedent <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-eraser"></i> fa-eraser
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file"></i> fa-file
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-o"></i> fa-file-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-text"></i> fa-file-text
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-file-text-o"></i> fa-file-text-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-files-o"></i> fa-files-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-floppy-o"></i> fa-floppy-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-font"></i> fa-font
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-header"></i> fa-header
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-indent"></i> fa-indent
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-italic"></i> fa-italic
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-link"></i> fa-link
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-list"></i> fa-list
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-list-alt"></i> fa-list-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-list-ol"></i> fa-list-ol
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-list-ul"></i> fa-list-ul
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-outdent"></i> fa-outdent
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paperclip"></i> fa-paperclip
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paragraph"></i> fa-paragraph
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-paste"></i> fa-paste <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-repeat"></i> fa-repeat
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rotate-left"></i> fa-rotate-left <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-rotate-right"></i> fa-rotate-right <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-save"></i> fa-save <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-scissors"></i> fa-scissors
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-strikethrough"></i> fa-strikethrough
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-subscript"></i> fa-subscript
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-superscript"></i> fa-superscript
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-table"></i> fa-table
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-text-height"></i> fa-text-height
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-text-width"></i> fa-text-width
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-th"></i> fa-th
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-th-large"></i> fa-th-large
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-th-list"></i> fa-th-list
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-underline"></i> fa-underline
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-undo"></i> fa-undo
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-unlink"></i> fa-unlink <span className="text-muted">(alias)</span>
													</div>
												</div>
												<h3>Directional Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-double-down"></i> fa-angle-double-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-double-left"></i> fa-angle-double-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-double-right"></i> fa-angle-double-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-double-up"></i> fa-angle-double-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-down"></i> fa-angle-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-left"></i> fa-angle-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-right"></i> fa-angle-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-angle-up"></i> fa-angle-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-down"></i> fa-arrow-circle-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-left"></i> fa-arrow-circle-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-o-down"></i> fa-arrow-circle-o-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-right"></i> fa-arrow-circle-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-circle-up"></i> fa-arrow-circle-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-down"></i> fa-arrow-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-left"></i> fa-arrow-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-right"></i> fa-arrow-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrow-up"></i> fa-arrow-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows"></i> fa-arrows
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows-alt"></i> fa-arrows-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows-h"></i> fa-arrows-h
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows-v"></i> fa-arrows-v
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-down"></i> fa-caret-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-left"></i> fa-caret-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-right"></i> fa-caret-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-caret-up"></i> fa-caret-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-circle-down"></i> fa-chevron-circle-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-circle-left"></i> fa-chevron-circle-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-circle-right"></i> fa-chevron-circle-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-circle-up"></i> fa-chevron-circle-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-down"></i> fa-chevron-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-left"></i> fa-chevron-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-right"></i> fa-chevron-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-chevron-up"></i> fa-chevron-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-hand-o-down"></i> fa-hand-o-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-hand-o-left"></i> fa-hand-o-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-hand-o-right"></i> fa-hand-o-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-hand-o-up"></i> fa-hand-o-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-long-arrow-down"></i> fa-long-arrow-down
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-long-arrow-left"></i> fa-long-arrow-left
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-long-arrow-right"></i> fa-long-arrow-right
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-long-arrow-up"></i> fa-long-arrow-up
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span>
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span>
													</div>
												</div>
												<h3>Video Player Icons</h3>
												<div className="row margin-bottom-20">
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-arrows-alt"></i> fa-arrows-alt
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-backward"></i> fa-backward
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-compress"></i> fa-compress
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-eject"></i> fa-eject
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-expand"></i> fa-expand
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fast-backward"></i> fa-fast-backward
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-fast-forward"></i> fa-fast-forward
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-forward"></i> fa-forward
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-pause"></i> fa-pause
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-play"></i> fa-play
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-play-circle"></i> fa-play-circle
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-play-circle-o"></i> fa-play-circle-o
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-step-backward"></i> fa-step-backward
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-step-forward"></i> fa-step-forward
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-stop"></i> fa-stop
													</div>
													<div className="fa-item col-md-3 col-sm-4">
														<i className="fa fa-youtube-play"></i> fa-youtube-play
													</div>
												</div>
												<h3>Brand Icons</h3>
												<div className="alert alert-success">
													<ul className="margin-bottom-none padding-left-lg">
														<li>
															All brand icons are trademarks of their respective owners.
														</li>
														<li>
															The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.
														</li>
													</ul>
													<div className="alert alert-warning">
														<h4><i className="fa fa-warning"></i> Warning!</h4>
														Apparently, Adblock Plus can remove Font Awesome brand icons with their "Remove Social Media Buttons" setting. We will not use hacks to force them to display. Please report an issue with Adblock Plus if you believe this to be an error. To work around this, you'll need to modify the social icon className names.
													</div>
													<div className="row margin-bottom-20">
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-adn"></i> fa-adn
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-android"></i> fa-android
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-apple"></i> fa-apple
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-behance"></i> fa-behance
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-behance-square"></i> fa-behance-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-bitbucket"></i> fa-bitbucket
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-bitbucket-square"></i> fa-bitbucket-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-bitcoin"></i> fa-bitcoin <span className="text-muted">(alias)</span>
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-btc"></i> fa-btc
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-codepen"></i> fa-codepen
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-css3"></i> fa-css3
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-delicious"></i> fa-delicious
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-deviantart"></i> fa-deviantart
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-digg"></i> fa-digg
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-dribbble"></i> fa-dribbble
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-dropbox"></i> fa-dropbox
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-drupal"></i> fa-drupal
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-empire"></i> fa-empire
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-facebook"></i> fa-facebook
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-facebook-square"></i> fa-facebook-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-flickr"></i> fa-flickr
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-foursquare"></i> fa-foursquare
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-ge"></i> fa-ge <span className="text-muted">(alias)</span>
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-git"></i> fa-git
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-git-square"></i> fa-git-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-github"></i> fa-github
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-github-alt"></i> fa-github-alt
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-github-square"></i> fa-github-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-gittip"></i> fa-gittip
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-google"></i> fa-google
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-google-plus"></i> fa-google-plus
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-google-plus-square"></i> fa-google-plus-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-hacker-news"></i> fa-hacker-news
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-html5"></i> fa-html5
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-instagram"></i> fa-instagram
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-joomla"></i> fa-joomla
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-jsfiddle"></i> fa-jsfiddle
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-linkedin"></i> fa-linkedin
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-linkedin-square"></i> fa-linkedin-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-linux"></i> fa-linux
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-maxcdn"></i> fa-maxcdn
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-openid"></i> fa-openid
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-pagelines"></i> fa-pagelines
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-pied-piper"></i> fa-pied-piper
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-pied-piper-alt"></i> fa-pied-piper-alt
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-pied-piper-square"></i> fa-pied-piper-square <span className="text-muted">(alias)</span>
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-pinterest"></i> fa-pinterest
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-pinterest-square"></i> fa-pinterest-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-qq"></i> fa-qq
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-ra"></i> fa-ra <span className="text-muted">(alias)</span>
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-rebel"></i> fa-rebel
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-reddit"></i> fa-reddit
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-reddit-square"></i> fa-reddit-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-renren"></i> fa-renren
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-share-alt"></i> fa-share-alt
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-share-alt-square"></i> fa-share-alt-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-skype"></i> fa-skype
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-slack"></i> fa-slack
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-soundcloud"></i> fa-soundcloud
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-spotify"></i> fa-spotify
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-stack-exchange"></i> fa-stack-exchange
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-stack-overflow"></i> fa-stack-overflow
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-steam"></i> fa-steam
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-steam-square"></i> fa-steam-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-stumbleupon"></i> fa-stumbleupon
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-stumbleupon-circle"></i> fa-stumbleupon-circle
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-tencent-weibo"></i> fa-tencent-weibo
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-trello"></i> fa-trello
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-tumblr"></i> fa-tumblr
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-tumblr-square"></i> fa-tumblr-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-twitter"></i> fa-twitter
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-twitter-square"></i> fa-twitter-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-vimeo-square"></i> fa-vimeo-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-vine"></i> fa-vine
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-vk"></i> fa-vk
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-wechat"></i> fa-wechat <span className="text-muted">(alias)</span>
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-weibo"></i> fa-weibo
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-weixin"></i> fa-weixin
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-windows"></i> fa-windows
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-wordpress"></i> fa-wordpress
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-xing"></i> fa-xing
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-xing-square"></i> fa-xing-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-yahoo"></i> fa-yahoo
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-youtube"></i> fa-youtube
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-youtube-play"></i> fa-youtube-play
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-youtube-square"></i> fa-youtube-square
														</div>
													</div>
													<h3>Medical Icons</h3>
													<div className="row margin-bottom-20">
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-ambulance"></i> fa-ambulance
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-h-square"></i> fa-h-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-hospital-o"></i> fa-hospital-o
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-medkit"></i> fa-medkit
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-plus-square"></i> fa-plus-square
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-stethoscope"></i> fa-stethoscope
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-user-md"></i> fa-user-md
														</div>
														<div className="fa-item col-md-3 col-sm-4">
															<i className="fa fa-wheelchair"></i> fa-wheelchair
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane glyphicons-demo" id="tab_1_2">
												<div className="note note-success">
													<p>
														Includes 200 glyphs in font format from the Glyphicon Halflings set. <Link to="http://glyphicons.com/" target="_blank">
														Glyphicons </Link>
														Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost.
													</p>
													For more info check out <Link to="http://getbootstrap.com/components/#glyphicons" target="_blank">http://getbootstrap.com/components/#glyphicons</Link>
												</div>
												<ul className="bs-glyphicons bs-glyphicons-list">
													<li>
														<span className="glyphicon glyphicon-asterisk">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-asterisk </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-plus">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-plus </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-euro">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-euro </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-minus">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-minus </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-cloud">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-cloud </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-envelope">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-envelope </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-pencil">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-pencil </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-glass">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-glass </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-music">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-music </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-search">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-search </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-heart">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-heart </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-star">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-star </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-star-empty">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-star-empty </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-user">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-user </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-film">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-film </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-th-large">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-th-large </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-th">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-th </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-th-list">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-th-list </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-ok">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-ok </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-remove">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-remove </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-zoom-in">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-zoom-in </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-zoom-out">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-zoom-out </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-off">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-off </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-signal">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-signal </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-cog">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-cog </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-trash">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-trash </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-home">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-home </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-file">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-file </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-time">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-time </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-road">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-road </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-download-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-download-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-download">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-download </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-upload">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-upload </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-inbox">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-inbox </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-play-circle">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-play-circle </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-repeat">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-repeat </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-refresh">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-refresh </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-list-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-list-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-lock">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-lock </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-flag">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-flag </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-headphones">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-headphones </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-volume-off">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-volume-off </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-volume-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-volume-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-volume-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-volume-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-qrcode">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-qrcode </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-barcode">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-barcode </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tag">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tag </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tags">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tags </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-book">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-book </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-bookmark">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-bookmark </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-print">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-print </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-camera">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-camera </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-font">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-font </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-bold">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-bold </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-italic">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-italic </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-text-height">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-text-height </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-text-width">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-text-width </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-align-left">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-align-left </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-align-center">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-align-center </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-align-right">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-align-right </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-align-justify">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-align-justify </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-list">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-list </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-indent-left">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-indent-left </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-indent-right">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-indent-right </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-facetime-video">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-facetime-video </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-picture">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-picture </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-map-marker">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-map-marker </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-adjust">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-adjust </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tint">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tint </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-edit">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-edit </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-share">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-share </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-check">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-check </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-move">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-move </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-step-backward">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-step-backward </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-fast-backward">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-fast-backward </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-backward">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-backward </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-play">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-play </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-pause">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-pause </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-stop">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-stop </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-forward">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-forward </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-fast-forward">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-fast-forward </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-step-forward">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-step-forward </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-eject">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-eject </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-chevron-left">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-chevron-left </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-chevron-right">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-chevron-right </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-plus-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-plus-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-minus-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-minus-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-remove-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-remove-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-ok-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-ok-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-question-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-question-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-info-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-info-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-screenshot">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-screenshot </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-remove-circle">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-remove-circle </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-ok-circle">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-ok-circle </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-ban-circle">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-ban-circle </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-arrow-left">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-arrow-left </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-arrow-right">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-arrow-right </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-arrow-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-arrow-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-arrow-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-arrow-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-share-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-share-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-resize-full">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-resize-full </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-resize-small">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-resize-small </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-exclamation-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-exclamation-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-gift">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-gift </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-leaf">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-leaf </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-fire">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-fire </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-eye-open">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-eye-open </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-eye-close">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-eye-close </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-warning-sign">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-warning-sign </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-plane">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-plane </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-calendar">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-calendar </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-random">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-random </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-comment">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-comment </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-magnet">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-magnet </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-chevron-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-chevron-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-chevron-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-chevron-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-retweet">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-retweet </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-shopping-cart">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-shopping-cart </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-folder-close">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-folder-close </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-folder-open">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-folder-open </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-resize-vertical">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-resize-vertical </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-resize-horizontal">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-resize-horizontal </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-hdd">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-hdd </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-bullhorn">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-bullhorn </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-bell">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-bell </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-certificate">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-certificate </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-thumbs-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-thumbs-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-thumbs-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-thumbs-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-hand-right">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-hand-right </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-hand-left">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-hand-left </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-hand-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-hand-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-hand-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-hand-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-circle-arrow-right">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-circle-arrow-right </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-circle-arrow-left">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-circle-arrow-left </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-circle-arrow-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-circle-arrow-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-circle-arrow-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-circle-arrow-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-globe">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-globe </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-wrench">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-wrench </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tasks">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tasks </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-filter">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-filter </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-briefcase">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-briefcase </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-fullscreen">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-fullscreen </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-dashboard">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-dashboard </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-paperclip">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-paperclip </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-heart-empty">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-heart-empty </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-link">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-link </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-phone">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-phone </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-pushpin">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-pushpin </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-usd">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-usd </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-gbp">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-gbp </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort-by-alphabet">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort-by-alphabet </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort-by-alphabet-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort-by-alphabet-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort-by-order">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort-by-order </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort-by-order-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort-by-order-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort-by-attributes">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort-by-attributes </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sort-by-attributes-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sort-by-attributes-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-unchecked">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-unchecked </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-expand">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-expand </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-collapse-down">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-collapse-down </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-collapse-up">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-collapse-up </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-log-in">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-log-in </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-flash">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-flash </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-log-out">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-log-out </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-new-window">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-new-window </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-record">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-record </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-save">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-save </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-open">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-open </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-saved">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-saved </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-import">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-import </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-export">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-export </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-send">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-send </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-floppy-disk">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-floppy-disk </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-floppy-saved">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-floppy-saved </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-floppy-remove">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-floppy-remove </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-floppy-save">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-floppy-save </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-floppy-open">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-floppy-open </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-credit-card">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-credit-card </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-transfer">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-transfer </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-cutlery">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-cutlery </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-header">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-header </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-compressed">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-compressed </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-earphone">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-earphone </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-phone-alt">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-phone-alt </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tower">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tower </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-stats">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-stats </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sd-video">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sd-video </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-hd-video">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-hd-video </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-subtitles">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-subtitles </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sound-stereo">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sound-stereo </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sound-dolby">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sound-dolby </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sound-5-1">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sound-5-1 </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sound-6-1">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sound-6-1 </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-sound-7-1">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-sound-7-1 </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-copyright-mark">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-copyright-mark </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-registration-mark">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-registration-mark </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-cloud-download">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-cloud-download </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-cloud-upload">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-cloud-upload </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tree-conifer">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tree-conifer </span>
													</li>
													<li>
														<span className="glyphicon glyphicon-tree-deciduous">
														</span>
														<span className="bs-glyphicon-className">
														glyphicon glyphicon-tree-deciduous </span>
													</li>
												</ul>
											</div>
											<div className="tab-pane" id="tab_1_3">
												<div className="note note-success">
													<p>
														Simple Line Icons. 162 Beautifully Crafted Webfont Icons. 
														{/* <br> */}
														For more info check out <Link to="http://graphicburger.com/simple-line-icons-webfont/" target="_blank">http://graphicburger.com/simple-line-icons-webfont/</Link>
													</p>
												</div>
												<div className="simplelineicons-demo">
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-user"></span>
													&nbsp;icon-user </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-user-female"></span>
													&nbsp;icon-user-female </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-users"></span>
													&nbsp;icon-users </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-user-follow"></span>
													&nbsp;icon-user-follow </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-user-following"></span>
													&nbsp;icon-user-following </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-user-unfollow"></span>
													&nbsp;icon-user-unfollow </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-trophy"></span>
													&nbsp;icon-trophy </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-speedometer"></span>
													&nbsp;icon-speedometer </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-social-youtube"></span>
													&nbsp;icon-social-youtube </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-social-twitter"></span>
													&nbsp;icon-social-twitter </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-social-tumblr"></span>
													&nbsp;icon-social-tumblr </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-social-facebook"></span>
													&nbsp;icon-social-facebook </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-social-dropbox"></span>
													&nbsp;icon-social-dropbox </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-social-dribbble"></span>
													&nbsp;icon-social-dribbble </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-shield"></span>
													&nbsp;icon-shield </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-screen-tablet"></span>
													&nbsp;icon-screen-tablet </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-screen-smartphone"></span>
													&nbsp;icon-screen-smartphone </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-screen-desktop"></span>
													&nbsp;icon-screen-desktop </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-plane"></span>
													&nbsp;icon-plane </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-notebook"></span>
													&nbsp;icon-notebook </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-moustache"></span>
													&nbsp;icon-moustache </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-mouse"></span>
													&nbsp;icon-mouse </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-magnet"></span>
													&nbsp;icon-magnet </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-magic-wand"></span>
													&nbsp;icon-magic-wand </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-hourglass"></span>
													&nbsp;icon-hourglass </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-graduation"></span>
													&nbsp;icon-graduation </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-ghost"></span>
													&nbsp;icon-ghost </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-game-controller"></span>
													&nbsp;icon-game-controller </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-fire"></span>
													&nbsp;icon-fire </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-eyeglasses"></span>
													&nbsp;icon-eyeglasses </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-envelope-open"></span>
													&nbsp;icon-envelope-open </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-envelope-letter"></span>
													&nbsp;icon-envelope-letter </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-energy"></span>
													&nbsp;icon-energy </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-emoticon-smile"></span>
													&nbsp;icon-emoticon-smile </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-disc"></span>
													&nbsp;icon-disc </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-cursor-move"></span>
													&nbsp;icon-cursor-move </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-crop"></span>
													&nbsp;icon-crop </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-credit-card"></span>
													&nbsp;icon-credit-card </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-chemistry"></span>
													&nbsp;icon-chemistry </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-bell"></span>
													&nbsp;icon-bell </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-badge"></span>
													&nbsp;icon-badge </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-anchor"></span>
													&nbsp;icon-anchor </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-action-redo"></span>
													&nbsp;icon-action-redo </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-action-undo"></span>
													&nbsp;icon-action-undo </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-bag"></span>
													&nbsp;icon-bag </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-basket"></span>
													&nbsp;icon-basket </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-basket-loaded"></span>
													&nbsp;icon-basket-loaded </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-book-open"></span>
													&nbsp;icon-book-open </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-briefcase"></span>
													&nbsp;icon-briefcase </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-bubbles"></span>
													&nbsp;icon-bubbles </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-calculator"></span>
													&nbsp;icon-calculator </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-call-end"></span>
													&nbsp;icon-call-end </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-call-in"></span>
													&nbsp;icon-call-in </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-call-out"></span>
													&nbsp;icon-call-out </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-compass"></span>
													&nbsp;icon-compass </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-cup"></span>
													&nbsp;icon-cup </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-diamond"></span>
													&nbsp;icon-diamond </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-direction"></span>
													&nbsp;icon-direction </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-directions"></span>
													&nbsp;icon-directions </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-docs"></span>
													&nbsp;icon-docs </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-drawer"></span>
													&nbsp;icon-drawer </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-drop"></span>
													&nbsp;icon-drop </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-earphones"></span>
													&nbsp;icon-earphones </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-earphones-alt"></span>
													&nbsp;icon-earphones-alt </span>
													</span>
													<span className="item-box">
													<span className="item">
													<span aria-hidden="true" className="icon-feed"></span>
											&nbsp;icon-feed </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-film"></span>
											&nbsp;icon-film </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-folder-alt"></span>
											&nbsp;icon-folder-alt </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-frame"></span>
											&nbsp;icon-frame </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-globe"></span>
											&nbsp;icon-globe </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-globe-alt"></span>
											&nbsp;icon-globe-alt </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-handbag"></span>
											&nbsp;icon-handbag </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-layers"></span>
											&nbsp;icon-layers </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-map"></span>
											&nbsp;icon-map </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-picture"></span>
											&nbsp;icon-picture </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-pin"></span>
											&nbsp;icon-pin </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-playlist"></span>
											&nbsp;icon-playlist </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-present"></span>
											&nbsp;icon-present </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-printer"></span>
											&nbsp;icon-printer </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-puzzle"></span>
											&nbsp;icon-puzzle </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-speech"></span>
											&nbsp;icon-speech </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-vector"></span>
											&nbsp;icon-vector </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-wallet"></span>
											&nbsp;icon-wallet </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-arrow-down"></span>
											&nbsp;icon-arrow-down </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-arrow-left"></span>
											&nbsp;icon-arrow-left </span>
											</span>
											<span className="item-box">
											<span className="item">
											<span aria-hidden="true" className="icon-arrow-right"></span>
											&nbsp;icon-arrow-right </span>
											</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-arrow-up"></span>
										&nbsp;icon-arrow-up </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-bar-chart"></span>
										&nbsp;icon-bar-chart </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-bulb"></span>
										&nbsp;icon-bulb </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-calendar"></span>
										&nbsp;icon-calendar </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-control-end"></span>
										&nbsp;icon-control-end </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-control-forward"></span>
										&nbsp;icon-control-forward </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-control-pause"></span>
										&nbsp;icon-control-pause </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-control-play"></span>
										&nbsp;icon-control-play </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-control-rewind"></span>
										&nbsp;icon-control-rewind </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-control-start"></span>
										&nbsp;icon-control-start </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-cursor"></span>
										&nbsp;icon-cursor </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-dislike"></span>
										&nbsp;icon-dislike </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-equalizer"></span>
										&nbsp;icon-equalizer </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-graph"></span>
										&nbsp;icon-graph </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-grid"></span>
										&nbsp;icon-grid </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-home"></span>
										&nbsp;icon-home </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-like"></span>
										&nbsp;icon-like </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-list"></span>
										&nbsp;icon-list </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-login"></span>
										&nbsp;icon-login </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-logout"></span>
										&nbsp;icon-logout </span>
										</span>
										<span className="item-box">
										<span className="item">
										<span aria-hidden="true" className="icon-loop"></span>
										&nbsp;icon-loop </span>
										</span>
										<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-microphone"></span>
									&nbsp;icon-microphone </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-music-tone"></span>
									&nbsp;icon-music-tone </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-music-tone-alt"></span>
									&nbsp;icon-music-tone-alt </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-note"></span>
									&nbsp;icon-note </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-pencil"></span>
									&nbsp;icon-pencil </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-pie-chart"></span>
									&nbsp;icon-pie-chart </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-question"></span>
									&nbsp;icon-question </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-rocket"></span>
									&nbsp;icon-rocket </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-share"></span>
									&nbsp;icon-share </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-share-alt"></span>
									&nbsp;icon-share-alt </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-shuffle"></span>
									&nbsp;icon-shuffle </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-size-actual"></span>
									&nbsp;icon-size-actual </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-size-fullscreen"></span>
									&nbsp;icon-size-fullscreen </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-support"></span>
									&nbsp;icon-support </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-tag"></span>
									&nbsp;icon-tag </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-trash"></span>
									&nbsp;icon-trash </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-umbrella"></span>
									&nbsp;icon-umbrella </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-wrench"></span>
									&nbsp;icon-wrench </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-ban"></span>
									&nbsp;icon-ban </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-bubble"></span>
									&nbsp;icon-bubble </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-camcorder"></span>
									&nbsp;icon-camcorder </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-camera"></span>
									&nbsp;icon-camera </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-check"></span>
									&nbsp;icon-check </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-clock"></span>
									&nbsp;icon-clock </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-close"></span>
									&nbsp;icon-close </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-cloud-download"></span>
									&nbsp;icon-cloud-download </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-cloud-upload"></span>
									&nbsp;icon-cloud-upload </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-doc"></span>
									&nbsp;icon-doc </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-envelope"></span>
									&nbsp;icon-envelope </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-eye"></span>
									&nbsp;icon-eye </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-flag"></span>
									&nbsp;icon-flag </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-folder"></span>
									&nbsp;icon-folder </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-heart"></span>
									&nbsp;icon-heart </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-info"></span>
									&nbsp;icon-info </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-key"></span>
									&nbsp;icon-key </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-link"></span>
									&nbsp;icon-link </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-lock"></span>
									&nbsp;icon-lock </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-lock-open"></span>
									&nbsp;icon-lock-open </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-magnifier"></span>
									&nbsp;icon-magnifier </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-magnifier-add"></span>
									&nbsp;icon-magnifier-add </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-magnifier-remove"></span>
									&nbsp;icon-magnifier-remove </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-paper-clip"></span>
									&nbsp;icon-paper-clip </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-paper-plane"></span>
									&nbsp;icon-paper-plane </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-plus"></span>
									&nbsp;icon-plus </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-pointer"></span>
									&nbsp;icon-pointer </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-power"></span>
									&nbsp;icon-power </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-refresh"></span>
									&nbsp;icon-refresh </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-reload"></span>
									&nbsp;icon-reload </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-settings"></span>
									&nbsp;icon-settings </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-star"></span>
									&nbsp;icon-star </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-symbol-female"></span>
									&nbsp;icon-symbol-female </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-symbol-male"></span>
									&nbsp;icon-symbol-male </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-target"></span>
									&nbsp;icon-target </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-volume-1"></span>
									&nbsp;icon-volume-1 </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-volume-2"></span>
									&nbsp;icon-volume-2 </span>
									</span>
									<span className="item-box">
									<span className="item">
									<span aria-hidden="true" className="icon-volume-off"></span>
									&nbsp;icon-volume-off </span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* END PAGE CONTENT */}
		</div>
	</div>
			</Fragment> 
        )
    }
}

