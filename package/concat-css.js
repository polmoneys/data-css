import fs from 'fs';
import path from 'path';

const sourceFolders = [
    './src/theme',
    './src/fonts',
    './src/form',
    './src/group',
    './src/media',
    './src/utils',
];
const destinationFile = './dist/merged.css';

const mergedContent = sourceFolders.reduce((content, folder) => {
    const files = fs.readdirSync(folder);

    files.forEach((file) => {
        if (file.endsWith('.css')) {
            const filePath = path.join(folder, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const fileName = path.parse(file).name;
            content += `/* [${fileName}] */\n${fileContent}\n`;
        }
    });

    return content;
}, '');

fs.writeFileSync(destinationFile, mergedContent, 'utf-8');

console.log('CSS files concatenated successfully.');
