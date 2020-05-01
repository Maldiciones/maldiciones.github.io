

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
const Serie = () => <p>Estamos en Serie </p>;
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
                      <Link to="/Serie/6/Publicacion/9"><li>Serie 6 Publi 9</li></Link>
                      <Link to="/NF"><li>NF</li></Link>
                      <Link to="/Historieta"><li>Historieta</li></Link>
                      <Link to="/Ejemplar"><li>Ejemplar</li></Link>
                 
                  
              </ul>
              <Switch>
                  <Route exact path="/" component={Inicio} />
                  <Route exact path="/Editoriales" component={Editoriales} />
                  <Route exact path="/Autores" component={Autores} />
                  <Route exact path="/Autor" component={Autor} />
                  <Route exact path="/Serie" component={Serie} />
                  <Route exact path="/Serie/:serie" component={SerieConNumero} />
                  <Route exact path="/Serie/:serie/Publicacion/:publi" component={SeriePublicacion} />
                  <Route exact path="/NF" component={NF} />
                  <Route exact path="/Historieta" component={Historieta} />
                  <Route exact path="/Ejemplar" component={Ejemplar} />
              </Switch>
          </BrowserRouter>
      </div>
  );
}


const SeriePublicacion = (props) => {

  return (
    <div>
        SeriePublicacio component: <br/>
        props.match.params.serie : {props.match.params.serie}  <br/>
        props.match.params.publi : {props.match.params.publi}  <br/>
        {console.log({props})}
    </div>
  );
};

const SerieConNumero = (props) => {

  return (
    <div>
        Calamar component: <br/>
        props.match.params.serie : {props.match.params.serie}  <br/>
       
    </div>
  );
};




ReactDOM.render(<App />, document.querySelector('#root'));