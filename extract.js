const path = require('path');

const extractFilePath = (url) => {
    let filename = 'index.html';
    if (url.length > 1) {
        filename = url.substring(1);
        console.log(filename);
    }

    let filepath = path.resolve(__dirname, 'app', filename);
    if (filename === 'main.js.map') {
        return path.resolve(__dirname, 'app/scripts/dist', 'main.js.map');
    }

    return filepath;
};

module.exports = {
    extractFilePath
};