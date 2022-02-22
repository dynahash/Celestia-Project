import { Route, BrowserRouter, Routes as Routing } from 'react-router-dom'
import App from '../components/App/App';
import Teste from '../components/Teste/Teste';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routing>
        <Route path='/app' element={<App/>}/>
        <Route path='/teste' element={<Teste/>}/>
      </Routing>
    </BrowserRouter>
  )
}

export default Routes;