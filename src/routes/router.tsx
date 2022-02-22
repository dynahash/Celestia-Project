import { Route, BrowserRouter, Routes as Routing } from 'react-router-dom'
import App from '../components/App';
import Teste from '../components/Teste';

const Routes = () => {
  return (
      <BrowserRouter>
        <Routing>
            <Route path='/app' element={<App/>} />
            <Route path='/teste' element={<Teste/>}></Route>
        </Routing>
      </BrowserRouter>
  )
}

export default Routes;