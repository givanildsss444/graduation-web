import TimerCount from '../components/timerCount.jsx';
import NavegationBar from '../components/barNavegation.jsx';
import AcknowLedge from '../components/acknowLedge.jsx';
import InfoGraduation from '../components/infoGraduation.jsx';
import InfoClass from '../components/infoClass.jsx';
import InfoThanks from '../components/InfoThanks.jsx';
import Donate from '../components/InfoDonate.jsx';
import FormRegistration from '../components/infoRegistration.jsx';

import { IoArrowDownCircleOutline } from "react-icons/io5";

import './styles/App.css'

export default function App() {

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

      {/*}<InfoClass />*/}

      {/* ---------------------------------------------------------------------------- */}

      {/*}<InfoThanks />*/}

      {/* ---------------------------------------------------------------------------- */}

      <Donate />

      {/* ---------------------------------------------------------------------------- */}

      <FormRegistration />

      {/* ---------------------------------------------------------------------------- */}

    </div>

  );

}


