import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './modules/layouts/Header';
import Footer from './modules/layouts/Footer';
import Home from './modules/pages/Home';
import { Fragment } from 'react';
import './assets/css/common.css'

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Route path="/" component={Home} />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
