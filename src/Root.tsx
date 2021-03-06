import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from 'pages/Main';

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
