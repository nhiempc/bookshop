//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-regular';

//Components
import HomePageComponents from './components/homepageComponents/index';
import DetailBookComponents from './components/detailBookComponents/index';

//Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Layout
import Header from './components/layout/header';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';

function App() {
  return (
    <Router>
      <div className="App">
          <Header branding = "Nhiem Book Shop"/>
          <Menu/>
        <Switch>
          <Route 
            path = "/" exact
            component = {HomePageComponents}>
          </Route>
          <Route 
            path = "/detail" 
            component = {DetailBookComponents}>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
