const sharp = require('sharp');

async function processImage() {
  try {
    const inputPath = 'WEB ART WORK_MOMENTS_png.png';
    const outputPath = 'app/icon.png';
    
    // Trim away empty space, then extract the left-most square
    const trimmed = await sharp(inputPath).trim().toBuffer();
    const metadata = await sharp(trimmed).metadata();
    
    // The logo seal is on the left, so we crop a square equal to its height.
    const size = metadata.height;
    
    await sharp(trimmed)
      .extract({ left: 0, top: 0, width: size, height: size })
      // Resize it to 512x512, which is optimal for favicons/app icons
      .resize(512, 512)
      .toFile(outputPath);
      
    console.log('Successfully extracted seal:', size, 'x', size);
  } catch (error) {
    console.error('Error:', error);
  }
}

processImage();
