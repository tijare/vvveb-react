import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import EditorTemplateDom from './EditorTemplateDom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
ReactDOM.render(
  <>
    <Router>
      <Switch>
      <Route path="/template">
          <EditorTemplateDom />
        </Route>
        <Route path="/">
          <App />
        </Route>
        
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);
