import './styles/Gallery.css';
import NavegationBar from '../components/barNavegation';

import IMG1 from './img/IMG_5405.JPG';
import IMG2 from './img/IMG_8913.jpg';
import IMG3 from './img/IMG_6781.jpg';
import IMG4 from './img/DSC03277.JPG';
import IMG5 from './img/IMG_8796.jpg';
import IMG6 from './img/IMG_8525.jpg';
import IMG7 from './img/IMG_8652.jpg';
import IMG8 from './img/IMG_8090.jpg';
import IMG9 from './img/IMG_8346.JPG';
import IMG10 from './img/IMG_9868.JPG';

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10];

export default function Gallery() {
  return (
    <div className='gallery-wrapper'>
      <NavegationBar />

      <section className='gallery-content'>
        <h1 className='gallery-title'>Nossos Melhores Momentos</h1>

        <div className='gallery-masonry'>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`moment-${index + 1}`}
              className='gallery-item'
            />
          ))}
        </div>
      </section>
    </div>
  );
}
