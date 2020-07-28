import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';


export default class Container extends Component {
    componentDidMount() {
    
        var obj = { name : 'jhon do', age : 20, email:'jhon@email.com'};
    
            //set data with local storage
        localStorage.setItem('Mydata',JSON.stringify(obj));
    
            //set data with session storage
        sessionStorage.setItem('Mysession',JSON.stringify(obj));
        
    
        window.Metronic.init(); // init metronic core componets
        window.Layout.init(); // init layout
        window.Demo.init(); // init demo features
        window.QuickSidebar.init(); // init quick sidebar
        window.Index.init(); // init index page
        // window.Tasks.initDashboardWidget(); // init tash dashboard widget
        
    }
  
      
    render(){
        return (
            <React.Fragment>
                <Header />

                <div className="clearfix">
                </div>
                
                <noscript>
                You need to enable JavaScript to run this app.
                </noscript>

                <div className="page-container">
                    <Sidebar />
                    <Content />
                </div>

                <Footer />
            </React.Fragment>
            
        )
    }
}