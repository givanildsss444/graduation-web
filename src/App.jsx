import TimerCount from './components/timerCount.jsx';
import NavegationBar from './components/barNavegation.jsx';
import AcknowLedge from './components/acknowLedge.jsx';
import InfoGraduation from './components/infoGraduation.jsx';
import InfoClass from './components/infoClass.jsx';
import Thanks from './components/thanks.jsx';
import Donate from './components/donate.jsx';
import Registration from './components/registration.jsx';

import { IoArrowDownCircleOutline } from "react-icons/io5";

import './App.css'

export default function Home() {

  return(

    <div className='containerFull'>

      <NavegationBar />


      <div className='info-date' id='date'>
        
        <TimerCount />
        <AcknowLedge />

      </div>

      {/* ---------------------------------------------------------------------------- */}
      <a href="#graduation">
        <IoArrowDownCircleOutline  style={{height:'45px', width:'45px', color:'white'}}/>
      </a>

      <InfoGraduation />

      {/* ---------------------------------------------------------------------------- */}

      <InfoClass />

      {/* ---------------------------------------------------------------------------- */}

      <Thanks />

      {/* ---------------------------------------------------------------------------- */}

      <Donate />

      {/* ---------------------------------------------------------------------------- */}

      <Registration />

      {/* ---------------------------------------------------------------------------- */}

    </div>

  );

}


