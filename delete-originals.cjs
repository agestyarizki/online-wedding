const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) results = results.concat(walk(full));
    else results.push(full);
  }
  return results;
}

const base = path.join(__dirname, 'public/images');
const files = walk(base);
const toDelete = files.filter(f => {
  const ext = path.extname(f).toLowerCase();
  if (!['.jpg', '.jpeg', '.webp'].includes(ext)) return false;
  const webp = f.replace(/\.[^.]+$/, '.webp');
  return fs.existsSync(webp);
});

console.log(`Found ${toDelete.length} files to delete:`);
toDelete.forEach(f => {
  console.log('Deleting:', f);
  fs.unlinkSync(f);
});
console.log('Done!');

