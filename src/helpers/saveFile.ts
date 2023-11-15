import fs from 'fs';

let file = './database/data.json';

export const saveDB = (data: any) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

export const readDB = () => {
    if (!fs.existsSync(file)) {
        return null;
    }

    let inf = fs.readFileSync(file, { encoding: 'utf-8' });
    let data = JSON.parse(inf);
    return data;
}