import { Route, BrowserRouter, Routes as Routing } from 'react-router-dom'
import { SobreNos } from '../components/SobreNos/index';
import { Teste } from '../components/Teste';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routing>
        <Route path='/Sobre-nos' element={<SobreNos/>}/>
        <Route path='/teste' element={<Teste/>}/>
      </Routing>
    </BrowserRouter>
  )
}

export default Routes;