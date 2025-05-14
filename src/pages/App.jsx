import TimerCount from '../components/timerCount.jsx'
import NavegationBar from '../components/barNavegation.jsx'
import AcknowLedge from '../components/acknowLedge.jsx'
import './App.css'

export default function App() {

  return(

    <div className='containerFull'>

      <NavegationBar />

      <div className='info-more'>
        
        <TimerCount />
        <AcknowLedge />

      </div>

    </div>

  );
}


