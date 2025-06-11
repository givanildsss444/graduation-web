import { Routes, Route } from 'react-router-dom'

import App from './pages/App.jsx'
import Class from './pages/Class.jsx'
import Gallery from './pages/Gallery.jsx'

export default function Direction() {

    return(

        <Routes>

            <Route path='/' index element={ <App /> } />
            <Route path='/class' element={ <Class /> } />
            <Route path='/gallery' element={ <Gallery /> } />

        </Routes>

    )

}