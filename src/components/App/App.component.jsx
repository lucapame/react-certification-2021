import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoPlayer from '../../pages/VideoPlayer';
import Store from '../../utils/store';

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
