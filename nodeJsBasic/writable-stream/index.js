const fs = require('fs');
const { resolve } = require('path');


// writableStream.write('Ini merupakan teks baris pertama!\n');
// writableStream.write('Ini merupakan teks baris kedua!\n');
// writableStream.end('Akhir dari writable stream!');


const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));


readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log('gk ada asu')
    }
})

readableStream.on('end', () => {
    writableStream.end();
})