

const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;



// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

const Portfolio = props => {
  const { match } = props;

  let {id} = match.params;
  return (
      <div>
          Portfolio component
          <p>Url params: {id}</p>
      </div>
  );
};

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                      <Link to="/portfolio/6">Portfolio</Link>
                  </li>
              </ul>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/portfolio/:id" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

const Home = () => <p>Estamos en Home</p>;
const Contact = () => <p> Y Ahora en Contact</p>;

ReactDOM.render(<App />, document.querySelector('#root'));