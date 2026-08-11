const { pdf } = require('pdf-to-img');
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

async function convertAll() {
  const assetsDir = path.join(__dirname, 'public', 'assets');
  const pdfs = findPdfs(assetsDir);
  console.log(`Starting conversion for ${pdfs.length} PDF files...`);

  for (let i = 0; i < pdfs.length; i++) {
    const pdfPath = pdfs[i];
    const pngPath = pdfPath.replace(/\.pdf$/i, '.png');
    console.log(`[${i + 1}/${pdfs.length}] Converting: ${path.basename(pdfPath)}`);
    try {
      const document = await pdf(pdfPath, { scale: 2 });
      let pageNum = 1;
      for await (const image of document) {
        if (pageNum === 1) {
          fs.writeFileSync(pngPath, image);
          console.log(` -> Saved: ${path.basename(pngPath)}`);
        }
        pageNum++;
      }
    } catch (err) {
      console.error(` -> Failed: ${err.message}`);
    }
  }
  console.log('ALL CONVERSIONS COMPLETE!');
}

convertAll();
