import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './src/pages/Home.jsx'
import Inscription from './src/pages/Inscription.jsx'

export default function RoutesPages() {

    return(


        <BrowserRouter>

            <Routes>

                <Route path='/home' element={<Home />}/>
                <Route path='/inscription' element={<Inscription />}/>
                <Route path='*' element={<h1>error 404</h1>}/>
                

            </Routes>

        </BrowserRouter>

    )


}