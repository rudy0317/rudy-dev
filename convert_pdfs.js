const fs = require('fs');
const path = require('path');

function findPdfs(dir, pdfList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPdfs(filePath, pdfList);
    } else if (filePath.toLowerCase().endsWith('.pdf')) {
      pdfList.push(filePath);
    }
  }
  return pdfList;
}

const assetsDir = path.join(__dirname, 'public', 'assets');
const pdfs = findPdfs(assetsDir);
console.log(`FOUND_PDFS:${pdfs.length}`);
pdfs.forEach(p => console.log(p));
