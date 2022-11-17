import picture from '../assets/foto-Mari.jpg'
export function Img(props) {
    return (
        <a href="https://github.com/mariprs"><img src={picture} className={props.img} alt="Foto de Mariana Pires, uma mulher de pele média, de cabelo cacheado grande (ela cortou recentemente), pele média, dando um sorrisinho de lado pra foto, que é uma selfie tirada no espelho de um armário branco" />/Mariprs</a>
    )
   }