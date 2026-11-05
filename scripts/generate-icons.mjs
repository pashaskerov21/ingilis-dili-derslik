// public/icon.svg -> favicon.ico, apple-touch-icon.png, icon-512.png
// İşlətmək: node scripts/generate-icons.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const svg = readFileSync(join(pub, 'icon.svg'));

const png = (size) =>
  sharp(svg, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/** PNG-daxilli ICO konteyneri (bütün müasir brauzerlər dəstəkləyir). */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const icoSizes = [16, 32, 48];
const ico = buildIco(
  await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) })))
);
writeFileSync(join(pub, 'favicon.ico'), ico);
writeFileSync(join(pub, 'apple-touch-icon.png'), await png(180));
writeFileSync(join(pub, 'icon-512.png'), await png(512));

console.log('✓ favicon.ico, apple-touch-icon.png, icon-512.png');
