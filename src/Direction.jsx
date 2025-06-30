import { Routes, Route } from 'react-router-dom'

import App from './pages/App.jsx'
import Class from './pages/Class.jsx'
import Gallery from './pages/Gallery.jsx'
import Thanks from './pages/Thanks.jsx'

export default function Direction() {

    return(

        <Routes>

            <Route path='/' index element={ <App /> } />
            <Route path='/class' element={ <Class /> } />
            <Route path='/gallery' element={ <Gallery /> } />
            <Route path='/thanks' element={ <Thanks /> } />

        </Routes>

    )

}