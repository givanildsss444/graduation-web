import './styles/Gallery.css';

import NavegationBar from '../components/barNavegation';

import IMG1 from './img/IMG_5405.JPG';
import IMG2 from './img/IMG_8913.JPG';
import IMG3 from './img/IMG_6781.JPG'
import IMG4 from './img/DSC03277.JPG'
import IMG5 from './img/IMG_8796.JPG'
import IMG6 from './img/IMG_8525.JPG'
import IMG7 from './img/IMG_8652.JPG'
import IMG8 from './img/IMG_8090.JPG'
import IMG9 from './img/IMG_8346.JPG'
import IMG10 from './img/IMG_9868.JPG'



export default function Gallery() {
    
    return(

        <div className='containerFull'>

            <NavegationBar />

            
      
            <div className='container-gallery'>


                <div className='section-one'>
                    
                <h1>Nossos Melhores Momentos</h1>

                    <img src={IMG1} alt="1" className='typeone'/>
                    <img src={IMG2} alt="2" className='typetwo'/>
                    <img src={IMG3} alt="3" className='typeono' style={{height:150}}/>
                    <img src={IMG4} alt="4" className='typeone' style={{height:150}}/>
                    <img src={IMG6} alt="6" className='typetwo'/>
                    <img src={IMG7} alt="7" className='typeone' style={{height:120}}/>
                    <img src={IMG9} alt="9" className='typeone'style={{height:170}}/>
                    <img src={IMG5} alt="5" className='typetwo' style={{height:170}}/>
                    <img src={IMG8} alt="8" className='typetwo' style={{height:250}}/>
                    <img src={IMG10} alt="10" className='typeone'/>


                </div>
                

            </div>

        </div>

    )

}