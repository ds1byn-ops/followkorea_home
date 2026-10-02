// vite build 후 실행: SSR 번들로 App을 HTML로 렌더해 dist/index.html의 #root에 주입한다.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrEntry = path.resolve('dist-ssr', 'entry-server.js');
const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const indexPath = path.join(dist, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('#root 자리를 찾지 못함');
fs.writeFileSync(indexPath, html.replace(marker, `<div id="root">${appHtml}</div>`));
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });
console.log(`prerender: ${appHtml.length.toLocaleString()} bytes 주입`);
