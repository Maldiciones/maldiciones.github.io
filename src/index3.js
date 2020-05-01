

const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;



// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.
const Inicio = () => <p>Estamos en Inicio</p>;
const Editoriales = () => <p>Estamos en Editoriales</p>;
const Autores = () => <p>Estamos en Autores</p>;
const Autor = () => <p>Estamos en Autor </p>;

const NF = () => <p>Estamos en NF</p>;
const Historieta = () => <p>Estamos en Historieta</p>;
const Ejemplar = () => <p>Estamos en Ejemplar</p>;

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <ul>
                  
                      <Link exact to="/"><li>Inicio</li></Link>
                      <Link to="/Editoriales"><li>Editoriales</li></Link>
                      <Link to="/Autores"><li>Autores</li></Link>
                      <Link to="/Autor"><li>Autor</li></Link>
                      <Link to="/Serie"><li>Serie</li></Link>
                      <Link to="/Serie/7"><li>Serie 7</li></Link>
                      <Link to="/NF"><li>NF</li></Link>
                      <Link to="/Historieta"><li>Historieta</li></Link>
                      <Link to="/Ejemplar"><li>Ejemplar</li></Link>
                 
                  
              </ul>
              <Switch>
                  <Route exact path="/" component={Inicio} />
                  <Route path="/Editoriales" component={Editoriales} />
                  <Route path="/Autores" component={Autores} />
                  <Route path="/Autor" component={Autor} />
                  <Route path="/Serie" component={Serie} />
                  <Route path="/NF" component={NF} />
                  <Route path="/Historieta" component={Historieta} />
                  <Route path="/Ejemplar" component={Ejemplar} />
              </Switch>
          </BrowserRouter>
      </div>
  );
}


const Serie = (props) => {
  const { match } = props;
 
 
  return (
    <div>    

       Serie component: <br/>
        props.match.path : {props.match.path}  <br/>
        props.match.url : {props.match.url}  <br/>
        props.location.pathname : {props.location.pathname}  <br/> <br/> <br/> <br/> 
      <Switch>
        <Route exact path={props.match.path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${props.match.path}/:topicId`} component={Calamar} />         
      </Switch>
    </div>
  );
};

const Calamar = (props) => {

  return (
    <div>
        Calamar component: <br/>
        props.match.params.topicId : {props.match.params.topicId}  <br/>
       
    </div>
  );
};




ReactDOM.render(<App />, document.querySelector('#root'));