import 'colors';
import { showMenu, pause } from './helpers/mensajes';
import { inquireMenu } from './helpers/inquire';


const main = async() => {

    let opt: string | unknown = '';

    do {
        // opt = await inquireMenu();
        opt = await showMenu();
        console.log({opt});
        if (opt !== '0') {
            await pause();
        }
    } while (opt !== '0');
    
}

main();
