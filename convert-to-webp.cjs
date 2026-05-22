// Script Node.js untuk mengonversi semua JPG.webp ke WebP di public/images/* (CommonJS)
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folders = [
  'public/images/galery',
  'public/images/galery/backup',
  'public/images/galery/backup 2',
  'public/images/couple',
  'public/images/decoration',
  'public/images/stories',
  'public/images',
];

async function convertFolder(folder) {
  const files = fs.readdirSync(folder);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
      const filePath = path.join(folder, file);
      const webpPath = filePath.replace(ext, '.webp');
      try {
        if (!fs.existsSync(webpPath)) {
          await sharp(filePath)
            .webp({ quality: 75 })
            .toFile(webpPath);
          console.log('Converted:', webpPath);
        }
      } catch (err) {
        console.error('Failed to convert', filePath, err.stack || err.message);
      }
    }
  }
}

(async () => {
  for (const folder of folders) {
    if (fs.existsSync(folder)) {
      await convertFolder(folder);
    }
  }
  console.log('WebP conversion done.');
})();
