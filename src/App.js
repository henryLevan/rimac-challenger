import './styles/styles.scss';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/home'
import Plans from './pages/plans/plans'
import Summary from './pages/summary/summary'
import UserContext from './context/User/UserContext'
import UserState from './context/User/UserState'

function App() {
  return (
    <UserState>
      <div className="Aplicacion">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="planes" element={ <Plans /> } />
          <Route path="resumen" element={ <Summary /> } />
        </Routes>
      </div>
    </UserState>
  );
}

export default App;
