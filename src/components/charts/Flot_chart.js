import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";


import '.../../../public/assets/global/plugins/flot/jquery.flot.min.js';
import '.../../../public/assets/global/plugins/flot/jquery.flot.resize.min.js';
import '.../../../public/assets/global/plugins/flot/jquery.flot.pie.min.js';
import '.../../../public/assets/global/plugins/flot/jquery.flot.stack.min.js';
import '.../../../public/assets/global/plugins/flot/jquery.flot.crosshair.min.js';
import '.../../../public/assets/global/plugins/flot/jquery.flot.categories.min.js';

export default class Flot_chart extends Component {

	componentDidMount() {
		
		window.ChartsFlotcharts.init();
		window.ChartsFlotcharts.initCharts();
		window.ChartsFlotcharts.initPieCharts();
		window.ChartsFlotcharts.initBarCharts();

	}

    render(){
        return (
			<Fragment>

         	<div className="page-content-wrapper">
				<div className="page-content">
					{/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
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
							{/* /.modal-content */}
						</div>
						{/* /.modal-dialog */}
					</div>
					{/* /.modal */}
					{/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
					{/* BEGIN PAGE HEADER*/}
					{/* BEGIN PAGE HEAD */}
					<div className="page-head">
						{/* BEGIN PAGE TITLE */}
						<div className="page-title">
							<h1>Flotchart <small>Attractive JavaScript plotting for jQuery</small></h1>
						</div>
						{/* END PAGE TITLE */}
						{/* BEGIN PAGE TOOLBAR */}
						<div className="page-toolbar">
							{/* BEGIN THEME PANEL */}
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
							{/* END THEME PANEL */}
						</div>
						{/* END PAGE TOOLBAR */}
					</div>
					{/* END PAGE HEAD */}
					{/* BEGIN PAGE BREADCRUMB */}
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
							<Link to="#">Flotchart</Link>
						</li>
					</ul>
					{/* END PAGE BREADCRUMB */}
					{/* END PAGE HEADER*/}
					{/* BEGIN CHART PORTLETS*/}
					<div className="row">
						<div className="col-md-12">
							{/* BEGIN BASIC CHART PORTLET*/}
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Basic Chart
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
									<div id="chart_1" className="chart">
									</div>
								</div>
							</div>
							{/* END BASIC CHART PORTLET*/}
							{/* BEGIN TRACKING CURVES PORTLET*/}
							<div className="portlet box green">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Tracking Curves
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
									<div id="chart_3" className="chart">
									</div>
								</div>
							</div>
							{/* END TRACKING CURVES PORTLET*/}
							{/* BEGIN DYNAMIC CHART PORTLET*/}
							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Dynamic Chart
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
									<div id="chart_4" className="chart">
									</div>
								</div>
							</div>
							{/* END DYNAMIC CHART PORTLET*/}
							{/* BEGIN STACK CHART CONTROLS PORTLET*/}
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Stack Chart Controls
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
									<div id="chart_5" style={{height:'350px'}}>
									</div>
									<div className="btn-toolbar">
										<div className="btn-group stackControls">
											<input type="button" className="btn blue" value="With stacking"/>
											<input type="button" className="btn red" value="Without stacking"/>
										</div>
										<div className="space5">
										</div>
										<div className="btn-group graphControls">
											<input type="button" className="btn" value="Bars"/>
											<input type="button" className="btn" value="Lines"/>
											<input type="button" className="btn" value="Lines with steps"/>
										</div>
									</div>
								</div>
							</div>
							{/* END STACK CHART CONTROLS PORTLET*/}
							{/* BEGIN INTERACTIVE CHART PORTLET*/}
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Interactive Chart
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
									<div id="chart_2" className="chart">
									</div>
								</div>
							</div>
							{/* END INTERACTIVE CHART PORTLET*/}
							{/* BEGIN BASIC CHART PORTLET*/}
							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Bar Chart
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
									<div id="chart_1_1_legendPlaceholder">
									</div>
									<div id="chart_1_1" className="chart">
									</div>
								</div>
							</div>
							{/* END BASIC CHART PORTLET*/}
							{/* BEGIN BASIC CHART PORTLET*/}
							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Horizontal Bar Chart
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
									<div id="chart_1_2" className="chart">
									</div>
								</div>
							</div>
							{/* END BASIC CHART PORTLET*/}
						</div>
					</div>
					{/* END CHART PORTLETS*/}
					{/* BEGIN PIE CHART PORTLET*/}
					<div className="row">
						<div className="col-md-6">
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Default
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Default Pie with Legend.</h4>
									<div id="pie_chart" className="chart">
									</div>
								</div>
							</div>
							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph1
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Default Pie without Legend</h4>
									<div id="pie_chart_1" className="chart">
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph2
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Added a semi-transparent background to the labels and a custom labelFormatter function.</h4>
									<div id="pie_chart_2" className="chart">
									</div>
								</div>
							</div>
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph3
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Slightly more transparent label backgrounds and adjusted the radius values to place them within the pie.</h4>
									<div id="pie_chart_3" className="chart">
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* END PIE CHART PORTLET*/}
					{/* BEGIN PIE CHART PORTLET*/}
					<div className="row">
						<div className="col-md-6">
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph4
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Semi-transparent, black-colored label background.</h4>
									<div id="pie_chart_4" className="chart">
									</div>
								</div>
							</div>
							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph5
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Semi-transparent, black-colored label background placed at pie edge.</h4>
									<div id="pie_chart_5" className="chart">
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph6
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Added a semi-transparent background to the labels and a custom labelFormatter function.</h4>
									<div id="pie_chart_6" className="chart">
									</div>
								</div>
							</div>
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph7
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>Labels can be hidden if the slice is less than a given percentage of the pie (10% in this case).</h4>
									<div id="pie_chart_7" className="chart">
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* END PIE CHART PORTLET*/}
					{/* BEGIN PIE CHART PORTLET*/}
					<div className="row">
						<div className="col-md-6">
							<div className="portlet box yellow">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph8
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>The radius can also be set to a specific size (even larger than the container itself).</h4>
									<div id="pie_chart_8" className="chart">
									</div>
								</div>
							</div>
							<div className="portlet box purple">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph9
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>The pie can be tilted at an angle.</h4>
									<div id="pie_chart_9" className="chart">
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="portlet box blue">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph10
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>A donut hole can be added.</h4>
									<div id="donut" className="chart">
									</div>
								</div>
							</div>
							<div className="portlet box red">
								<div className="portlet-title">
									<div className="caption">
										<i className="fa fa-gift"></i>Graph11
									</div>
									<div className="tools">
										<Link to="#portlet-config" data-toggle="modal" className="config">
										</Link>
										<Link to="#" className="reload">
										</Link>
									</div>
								</div>
								<div className="portlet-body">
									<h4>The pie can be made interactive with hover and click events.</h4>
									<div id="interactive" className="chart">
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* END PIE CHART PORTLET*/}
					{/* END PAGE CONTENT*/}
				</div>
			</div>

			</Fragment> 
        )
    }
}

