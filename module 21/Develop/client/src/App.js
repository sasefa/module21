import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchMovies from './pages/SearchMovies';
import SavedMovies from './pages/SavedMovies';
import Navbar from './components/Navbar';
import apolloClient from './config/apolloClient';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchMovies} />
            <Route exact path="/saved" component={SavedMovies} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
