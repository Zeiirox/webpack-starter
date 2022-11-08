import '../css/componentes.css';
import webpackLogo from '../assets/img/webpacklogo.png';

export const crearElementos = ( nombre ) => {

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = webpackLogo;
    document.body.append(img);

}