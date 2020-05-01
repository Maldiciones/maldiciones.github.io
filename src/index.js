//Mis imports




// Obtain the root 
const rootElement = document.getElementById('root');
const e = React.createElement;
// Create a ES6 class component    
class ShoppingList extends React.Component { 
// Use the render function to return JSX component      
    render() 
    { 
        return (
        <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <img src="./src/imagenes/Logo.png" />
        </div>
      );
    } 
}


    // Create a function to wrap up your component
class App extends React.Component {
    render ()
    {
        return
            (
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

                    
                </div>
            )
    }
}

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

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    
      <App />,
    
      rootElement,
  );