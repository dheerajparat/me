import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const serverDir = path.join(root, '.portfolio-ssr')
const serverBundle = path.join(serverDir, 'entry-server.js')
const { render, profile } = await import(pathToFileURL(serverBundle).href)
const htmlPath = path.join(dist, 'index.html')
let document = await readFile(htmlPath, 'utf8')
const rendered = render()

document = document.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)

const sameAs = [profile.github, profile.twitter, profile.youtube].filter(Boolean)
const person = {
  '@type': 'Person',
  '@id': `${profile.domain.startsWith('http') ? profile.domain : `https://${profile.domain}`}/#person`,
  name: profile.name,
  alternateName: profile.handle,
  url: 'https://parat.space/',
  description: 'Developer, electronics enthusiast, and systems learner exploring software, Linux, embedded engineering, networking, and cybersecurity.',
  knowsAbout: ['Software development', 'Linux', 'Embedded systems', 'Electronics', 'IoT', 'Backend engineering', 'Android development', 'Networking', 'Cybersecurity'],
  sameAs,
  ...(profile.photo ? { image: profile.photo.startsWith('http') ? profile.photo : `https://${profile.domain.replace(/^https?:\/\//, '')}${profile.photo.startsWith('/') ? '' : '/'}${profile.photo}` } : {}),
  ...(profile.email ? { email: profile.email } : {}),
}
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': 'https://parat.space/#website', name: 'PARAT — Dheeraj Parat', url: 'https://parat.space/', inLanguage: 'en-IN' },
    { '@type': 'ProfilePage', '@id': 'https://parat.space/#profile', url: 'https://parat.space/', name: 'Dheeraj Parat (Parat) — Developer, Linux & Embedded Projects', mainEntity: person, isPartOf: { '@id': 'https://parat.space/#website' }, inLanguage: 'en-IN' },
  ],
}
const jsonLd = JSON.stringify(graph).replaceAll('<', '\\u003c')
document = document.replace('</head>', `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`)
await writeFile(htmlPath, document)
await rm(serverDir, { recursive: true, force: true })
console.log('Prerendered portfolio HTML and ProfilePage JSON-LD into dist/index.html')
