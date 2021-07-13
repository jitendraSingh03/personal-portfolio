import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import './index.css'                                                                                        
function App() {
  return (
    <>                                                                                 
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>  
          <Route path='/service' component={Service}/>  
          <Redirect to='/'/>
      </Switch>
    </>
  );
}
export default App;