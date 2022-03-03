import '../css/componentes.css';
import ctulogo from '../assets/img/ctu-logo.png';

export const saludar = (nombre) =>{
    console.log('creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    
    document.body.append(h1);

    //creando imagen
    //const img = document.createElement('img');
    //img.src = ctulogo;
    //document.body.append(img);
}
