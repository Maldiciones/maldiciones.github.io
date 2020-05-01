const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;

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
          <Route path="/:id"><Child /></Route>
        </Switch>
      </div>
</BrowserRouter>
)

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = props.match.params.id;
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }


ReactDOM.render(<App />, document.querySelector('#root'));