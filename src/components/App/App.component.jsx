import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoPlayer from '../../pages/VideoPlayer';
import Store from '../../utils/store';
import PrivateRoute from '../Private/PrivateRoute.component';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import LoginPage from '../../pages/Login/Login.page';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Store>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/player/:videoURL">
                <VideoPlayer />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute exact path="/favorites">
                <FavoritesPage />
              </PrivateRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </Store>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
