import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './src/pages/App.jsx'
import ConfirmPresence from './src/pages/ConfirmPresence.jsx'

export default function RoutesPages() {

    return(


        <BrowserRouter>

            <Routes>

                <Route path='/' element={<App />}/>
                <Route path='/confirmPresence' element={<ConfirmPresence />}/>
                <Route path='*' element={<h1>error 404</h1>}/>
                

            </Routes>

        </BrowserRouter>

    )


}