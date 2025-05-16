import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './src/App.jsx'

export default function RoutesPages() {

    return(


        <BrowserRouter>

            <Routes>

                <Route path='/' element={<App />}/>
                <Route path='*' element={<h1>error 404</h1>}/>
                

            </Routes>

        </BrowserRouter>

    )


}