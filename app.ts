import 'colors';
import { showMenu, pause } from './helpers/mensajes';


const main = async() => {
    console.log('Hola Mundo');

    let opt: unknown = '';

    do {
        opt = await showMenu();
        console.log({opt});
        if (opt !== '0') await pause(); 
    } while (opt !== '0');

    showMenu();
    pause();
    
}

main();
