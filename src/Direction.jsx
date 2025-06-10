import { Routes, Route } from 'react-router-dom'

import App from './pages/App.jsx'
import Class from './pages/Class.jsx'

export default function Direction() {

    return(

        <Routes>

            <Route path='/home' index element={ <App /> } />
            <Route path='/class' element={ <Class /> } />

        </Routes>

    )

}