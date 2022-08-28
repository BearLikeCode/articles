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
import { BodyWrapper } from './components/BodyWrapper';

function App() {
  return (
    <>
      <Router>
        <Header />
        <BodyWrapper>
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
          </BodyWrapper>
      </Router>
    </>
  );
}

export default App;
