import { readFile as _readFile } from 'fs';

function readFile() {
    _readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Isi file:\n', data);
    });
}

export default readFile;
