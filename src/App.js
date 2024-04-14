import './App.css';
import Header from './components/header/Header';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js'

function App() {

  let router = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      {router}
    </div>
  );
}

export default App;
