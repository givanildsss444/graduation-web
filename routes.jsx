import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './src/pages/Home.jsx'
import Inscription from './src/pages/Inscription.jsx'

export default function RoutesPages() {

    return(


        <BrowserRouter>

            <Routes>

                <Route path='https://formaturaifal2026.netlify.app' element={<Home />}/>
                <Route path='https://formaturaifal2026.netlify.app/inscription' element={<Inscription />}/>
                <Route path='*' element={<h1>error 404</h1>}/>
                

            </Routes>

        </BrowserRouter>

    )


}