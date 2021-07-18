import Navbar from './Navbar';
import Home from './Home';
import GetQuote from './GetQuote';
import HowItWorks from './HowItWorks';
import Event from './Event';
import Explore from './Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Footer from './Footer';
import Help from './Help';
import HomeFr from './HomeFr';
import GetQuote1 from './GetQuote1';
import GetQuote2 from './GetQuote2';
import GetQuote3 from './GetQuote3';
import GetQuote4 from './GetQuote4';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

function App() {
  const title = "Welcome to Jack the Consultant";
  const link = "www.abc.com"

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/get-Quote1">
            <GetQuote1 />
          </Route>
          <Route exact path="/get-Quote2">
            <GetQuote2 />
          </Route>
          <Route exact path="/get-Quote3">
            <GetQuote3 />
          </Route>
          <Route exact path="/get-Quote4">
            <GetQuote4 />
          </Route>
          <Route exact path="/get-quote">
            <GetQuote />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/fr">
            <HomeFr />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
