const Link = ReactRouterDOM.Link,
Route = ReactRouterDOM.Route;

const App = props => (
<ReactRouterDOM.HashRouter>
<ul>
<li><Link to="/">A TU PUTA CASA HOMBRE</Link></li>
<li><Link to="/a">TO A</Link></li>
<li><Link to="/b">TO B</Link></li>
</ul>

<Route path="/" exact component={Home} />
<Route path="/a" component={A} />
<Route path="/b" component={B} />
</ReactRouterDOM.HashRouter>
)

const Home = props => <h1>CASA { "Page location is :" + window.location.href}</h1>
const A = props => <h1>LETRA A { "Page location is :" + window.location.href}</h1>
const B = props => <h1>LETRA B { "Page location is :" + window.location.href}</h1>

ReactDOM.render(<App />, document.querySelector('#root'));