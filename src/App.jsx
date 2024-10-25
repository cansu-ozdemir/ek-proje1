import React, { useState } from "react";  // useState'i tek import'ta alabiliriz
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [user, setUser] = useState(null);
  const [team, setTeam] = useState([]);

  return (
    <div>
      <Header user={user} team={team} />
      <Switch>
        <Route exact path="/">
          <Login setUser={setUser} />
        </Route>

        <Route path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/product/:id">
          <ProductDetail team={team} setTeam={setTeam} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;