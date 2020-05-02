

const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const NoMatch = ReactRouterDOM.NoMatch;
const Redirect = ReactRouterDOM.Redirect;

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.
const Inicio = () => <p>Estamos en Inicio</p>;
const Editoriales = () => <p>Estamos en Editoriales</p>;
const Autores = () => <p> Estamos en Autores ADIOS <Link to="/Serie/605/Publicacion/1520">BOTON</Link></p> ;
const Autor = () => <p>Estamos en Autor </p>;
const Serie = () => <p>Estamos en Serie </p>;
const NF = () => <p>Estamos en NF</p>;
const Historieta = () => <p>Estamos en Historieta</p>;
const Ejemplar = () => <p>Estamos en Ejemplar</p>;
const Error404 = () => <p> ESTAS EN EL 404 GUAPO</p>;
function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Inicio} />
                  <Route exact path="/Editoriales/" component={Editoriales} />
                  <Route exact path="/Autores" component={Autores} />
                  <Route exact path="/Autor" component={Autor} />
                  <Route exact path="/Serie" component={Serie} />
                  <Route exact path="/Serie/:serie" component={SerieConNumero} />
                  <Route exact path="/Serie/:serie/Publicacion/:publi" component={SeriePublicacion} />
                  <Route exact path="/NF" component={NF} />
                  <Route exact path="/Historieta" component={Historieta} />
                  <Route exact path="/Ejemplar" component={Ejemplar} />
                  <Route path="/no-encontrado"component={Error404} />
                  <Redirect to="/no-encontrado" />
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

const Menu = (props) => {

  return (
    <ul>
                  
                  <li><Link exact to="/">Inicio</Link></li>
                  <li><Link to="/Editoriales">Editoriales</Link></li>
                  <li><Link to="/Autores">Autores</Link></li>
                  <li><Link to="/Autor">Autor</Link></li>
                  <li><Link to="/Serie">Serie</Link></li>
                  <li><Link to="/Serie/7">Serie 7</Link></li>
                  <li><Link to="/Serie/6/Publicacion/9">Serie 6 Publi 9</Link></li>
                  <li><Link to="/NF">NF</Link></li>
                  <li><Link to="/Historieta">Historieta</Link></li>
                  <li><Link to="/Ejemplar">Ejemplar</Link></li>
                  <li><Link to="/Serie/palabra/">/Serie/palabra/</Link></li>


</ul>


  );

};


ReactDOM.render(<App />, document.querySelector('#root'));