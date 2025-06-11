import './styles/Gallery.css';
import NavegationBar from '../components/barNavegation';

import IMG1 from './img/IMG_5405.JPG';
import IMG2 from './img/IMG_8913.JPG';
import IMG3 from './img/IMG_6781.JPG';
import IMG4 from './img/DSC03277.JPG';
import IMG5 from './img/IMG_8796.JPG';
import IMG6 from './img/IMG_8652.JPG';
import IMG7 from './img/IMG_8090.JPG';
import IMG8 from './img/IMG_8346.JPG';

const images = [
    { src: IMG1, alt: "1", className: 'typeone' },
    { src: IMG2, alt: "2", className: 'typetwo' },
    { src: IMG3, alt: "3", className: 'typeone', style: { height: 150 } },
    { src: IMG4, alt: "4", className: 'typeone', style: { height: 150 } },
    { src: IMG5, alt: "5", className: 'typetwo' },
    { src: IMG6, alt: "6", className: 'typeone', style: { height: 120 } },
    { src: IMG7, alt: "7", className: 'typeone', style: { height: 120 } },
    { src: IMG8, alt: "8", className: 'typetwo' },
];

export default function Gallery() {
    return (
        <div className='containerFull'>
            <NavegationBar />
            <div className='container-gallery'>
                <h1>Nossos Melhores Momentos</h1>
                <div className='section-one'>
                    {images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.src} 
                            alt={image.alt} 
                            className={image.className} 
                            style={image.style} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

