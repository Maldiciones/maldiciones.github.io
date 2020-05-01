const Link = ReactRouterDOM.Link,
Route = ReactRouterDOM.Route;

const App = props => (
<ReactRouterDOM.HashRouter>
<ul>
<li><Link to="/">TO HOME</Link></li>
<li><Link to="/a">TO A</Link></li>
<li><Link to="/b">TO B</Link></li>
</ul>

<Route path="/" exact component={Home} />
<Route path="/a" component={A} />
<Route path="/b" component={B} />
</ReactRouterDOM.HashRouter>
)

const Home = props => <h1>CASA</h1>
const A = props => <h1>LETRA A</h1>
const B = props => <h1>LETRA B</h1>

ReactDOM.render(<App />, document.querySelector('#root'));