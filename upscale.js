const sharp = require('sharp');
const fs = require('fs');

async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(2048, 2048, { kernel: sharp.kernel.lanczos3 })
      .toFile(outputPath);
    console.log('Upscaled', outputPath);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function main() {
  await processImage('/home/akhil/.gemini/antigravity-ide/brain/b2423c7d-498d-4ad2-a606-d3576b222705/hero_landscape_1790148002669.png', 'public/hero.jpg');
  await processImage('/home/akhil/.gemini/antigravity-ide/brain/b2423c7d-498d-4ad2-a606-d3576b222705/wedding_landscape_1790148016661.png', 'public/moments/wedding.jpg');
  await processImage('/home/akhil/.gemini/antigravity-ide/brain/b2423c7d-498d-4ad2-a606-d3576b222705/private_landscape_1790148051894.png', 'public/moments/private.jpg');
  await processImage('/home/akhil/.gemini/antigravity-ide/brain/b2423c7d-498d-4ad2-a606-d3576b222705/anniversary_landscape_1790148105515.png', 'public/moments/anniversary.jpg');
}

main();
