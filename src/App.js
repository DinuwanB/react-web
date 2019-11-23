import React from 'react';
import { Switch,Route  } from 'react-router-dom';

import HomePage from './pages/homepage.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/navBar/nvabar.component';
import Footer from './components/footer/footer.component';

class App extends React.Component  {

  render() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch> 
    <Footer/> 
    </div>
  );
  }
}

export default App;
