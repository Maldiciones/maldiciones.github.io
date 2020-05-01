import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


const App = props => (
<BrowserRouter>
<div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
</BrowserRouter>
)

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

   return (
   <div>
    <h3>ID: {id}</h3>
   </div>
  );
 }


ReactDOM.render(<App />, document.querySelector('#root'));