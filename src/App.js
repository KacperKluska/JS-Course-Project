import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Layout />
      </Router>
    </UserContextProvider>
  );
}

export default App;
