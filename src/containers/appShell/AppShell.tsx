/**
 *
 * This component has all routers defined for an application.
 *
 */
// tslint:disable: prettier
import React from 'react';
import SearchPage from 'Containers/home';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'Containers/pageNotFound';

class AppShell extends React.Component<{}, {}> {

  public render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/movies-gallery" component={SearchPage} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppShell;
