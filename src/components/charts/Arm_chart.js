import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

import '.../../../public/assets/global/plugins/amcharts/amcharts/amcharts.js';
import '.../../../public/assets/global/plugins/amcharts/amcharts/serial.js';
import '.../../../public/assets/global/plugins/amcharts/amcharts/pie.js';
import '.../../../public/assets/global/plugins/amcharts/amcharts/radar.js';
import '.../../../public/assets/global/plugins/amcharts/amcharts/themes/light.js';
import '.../../../public/assets/global/plugins/amcharts/amcharts/themes/patterns.js';
import '.../../../public/assets/global/plugins/amcharts/amcharts/themes/chalk.js';
import '.../../../public/assets/global/plugins/amcharts/ammap/ammap.js';
import '.../../../public/assets/global/plugins/amcharts/ammap/maps/js/worldLow.js';
import '.../../../public/assets/global/plugins/amcharts/amstockcharts/amstock.js';




export default class Arm_chart extends Component {
	componentDidMount() {
		window.ChartsAmcharts.init();
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
							<h1>Amchart <small>Charting library & maps. Where all data goes visual</small></h1>
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
							<Link to="#">Charts</Link>
							<i className="fa fa-circle"></i>
						</li>
						<li>
							<Link to="#">Amchart</Link>
						</li>
					</ul>
					
					<div className="row">
						<div className="col-md-12">
							<div className="note note-shadow note-success">
								<p>
									You can download and use all amCharts products for free. The only limitation of the free version is that a small link to this web site will be displayed in the top left corner of your charts. If you would like to use charts without this link, or you appreciate the software and would like to support its creators, <Link to="http://www.amcharts.com/online-store/" target="_blank">
									please purchase a commercial license</Link>.
								</p>
								<p>
									<span className="label label-warning">Exclusively for Metronic users:</span>&nbsp; After purchasing Metronic you will get a promo code for <span className="label label-danger">15% DISCOUNT</span> for commercial license of amChart. To find the promo code please check the readme.txt file in the Metronic's purchased package.
								</p>
								<p>
									For more info please chech the plugin's official demos & documentation <Link to="http://www.amcharts.com/demos/" target="_blank">http://www.amcharts.com/demos/</Link>
								</p>
							</div>
							
							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Bar Charts</span>
												<span className="caption-helper">column and line mix</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_1" className="chart" style={{height: '500px'}}>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							
							<div className="row">
								<div className="col-md-12">
								
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Line & Area</span>
												<span className="caption-helper">duration on value axis</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_2" className="chart" style={{height: '400px'}}>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							
							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Line & Area</span>
												<span className="caption-helper">with changing color</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_3" className="chart" style={{height: '400px'}}>
											</div>
										</div>
									</div>
								</div>
							</div>
			
							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Bar & Line</span>
												<span className="caption-helper">bar and line chart mix</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_4" className="chart" style={{height: '400px'}}>
											</div>
										</div>
									</div>
								</div>
							</div>
				
							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> 3D Chart</span>
												<span className="caption-helper">3d cylinder chart</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_5" className="chart" style={{height: '400px'}}>
											</div>
											<div className="well margin-top-20">
												<div className="row">
													<div className="col-sm-3">
														<label className="text-left">Top Radius:</label>
														<input className="chart_5_chart_input" data-property="topRadius" type="range" min="0" max="1.5" defaultValue={"1"} step="0.01"/>
													</div>
													<div className="col-sm-3">
														<label className="text-left">Angle:</label>
														<input className="chart_5_chart_input" data-property="angle" type="range" min="0" max="89" defaultValue={"30"} step="1"/>
													</div>
													<div className="col-sm-3">
														<label className="text-left">Depth:</label>
														<input className="chart_5_chart_input" data-property="depth3D" type="range" min="1" max="120" defaultValue={"40"} step="1"/>
													</div>
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
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Simple Pie Chart</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_6" className="chart" style={{height: '525px'}}>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> 3D Pie Chart</span>
												<span className="caption-helper">bar and line chart mix</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_7" className="chart" style={{height: '400px'}}>
											</div>
											<div className="well margin-top-20">
												<div className="row">
													<div className="col-sm-3">
														<label className="text-left">Top Radius:</label>
														<input className="chart_7_chart_input" data-property="topRadius" type="range" min="0" max="1.5" defaultValue={"1"} step="0.01"/>
													</div>
													<div className="col-sm-3">
														<label className="text-left">Angle:</label>
														<input className="chart_7_chart_input" data-property="angle" type="range" min="0" max="89" defaultValue={"30"} step="1"/>
													</div>
													<div className="col-sm-3">
														<label className="text-left">Depth:</label>
														<input className="chart_7_chart_input" data-property="depth3D" type="range" min="1" max="120" defaultValue={"40"} step="1"/>
													</div>
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
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Polar Chart</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_8" className="chart" style={{height: '400px'}}>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Radar Chart</span>
												<span className="caption-helper">bar and line chart mix</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_9" className="chart" style={{height: '400px'}}>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Map with Bubbles</span>
												<span className="caption-helper">world population</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_10" className="chart" style={{height: '600px'}}>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Flight Routes Map</span>
												<span className="caption-helper">interactive flight routes map</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_11" className="chart" style={{height: '500px'}}>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="portlet light">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-haze"></i>
												<span className="caption-subject bold uppercase font-green-haze"> Stock Charts</span>
												<span className="caption-helper">with stock events</span>
											</div>
											<div className="tools">
												<Link to="#" className="collapse">
												</Link>
												<Link to="#portlet-config" data-toggle="modal" className="config">
												</Link>
												<Link to="#" className="reload">
												</Link>
												<Link to="#" className="fullscreen">
												</Link>
												<Link to="#" className="remove">
												</Link>
											</div>
										</div>
										<div className="portlet-body">
											<div id="chart_12" className="chart" style={{height: '500px'}}>
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

