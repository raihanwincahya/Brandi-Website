import './App.css';
import Routing from './components/route/Routing';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  );
}

export default App;
