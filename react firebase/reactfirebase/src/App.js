import { Header } from './components/Header'
import './config/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Main} from './pages/Main';
import {Article} from './pages/Article';
import {NewArticle} from './pages/NewArticle';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route path="/article/:id">
              <Article />
            </Route>
            <Route path="/new">
              <NewArticle />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
