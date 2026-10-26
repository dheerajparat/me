export const profile = {
  name: 'Dheeraj Parat', handle: 'PARAT', domain: 'parat.space',
  github: 'https://github.com/dheerajparat', twitter: 'https://x.com/dheerajparat',
  youtube: 'https://youtube.com/@creationwithdheeraj', // Add the verified channel URL when available.
  youtubeName: 'Creation with Dheeraj',
  email: 'dheerajparat@gmail.com', // Add a public contact email here when ready.
  photo: '/parat-avatar.webp', // Add a local portrait path here when a real photo is available.
}

export type Project = { name: string; status: string; category: string; summary: string; detail: string; tech: string[]; repo?: string; mark: string; }
export const projects: Project[] = [
  { name: 'Academic Async', status: 'Building', category: 'Android', mark: 'A/', summary: 'An academic calendar designed around the rhythms of a real semester.', detail: 'Calendar and event scheduling, offline reminders powered by WorkManager, with attendance and syllabus tracking concepts.', tech: ['Kotlin', 'Jetpack Compose', 'WorkManager'], },
  { name: 'Roomie Split', status: 'Backend project', category: 'Backend', mark: 'R/', summary: 'A shared expense service that helps roommates keep a clear view of the numbers.', detail: 'A FastAPI REST backend designed to pair with a Flutter client, with authentication and PostgreSQL storage.', tech: ['FastAPI', 'PostgreSQL', 'Neon', 'Railway'], repo: 'https://github.com/dheerajparat/roomie_split_backend' },
  { name: 'DevBox', status: 'In development', category: 'Tools', mark: 'D/', summary: 'One workspace for keeping development projects ready to run.', detail: 'Exploring project manifests, metadata, and run instructions across local and remote environments, including ESP32 builds.', tech: ['CLI', 'JSON', 'IoT'] },
  { name: 'ESP32 OLED Experiments', status: 'Experiments', category: 'Embedded', mark: 'E/', summary: 'Small experiments where firmware meets a tiny screen.', detail: 'MicroPython, SSD1306 display drivers, serial debugging, and practical hardware/software integration.', tech: ['ESP32', 'MicroPython', 'SSD1306'] },
  { name: 'UPI QR Display', status: 'Prototype / concept', category: 'Embedded', mark: 'QR', summary: 'Exploring a compact payment display for an ESP32-connected screen.', detail: 'A concept for rendering a payment QR on a small display; implementation status remains experimental.', tech: ['ESP32', 'OLED', 'QR'] },
  { name: 'Browser & Utility Bench', status: 'Ongoing ideas', category: 'Tools', mark: '↗', summary: 'A home for practical browser experiments and developer utilities.', detail: 'An evolving space for download utilities, microcontroller training interfaces, and small web-based tools.', tech: ['Web', 'JavaScript', 'Utilities'] },
]

export const skills = [
  { group: 'Code & application development', icon: '01', entries: [['Python','Working with'],['C','Working with'],['Kotlin','Working with'],['Dart','Working with'],['HTML · CSS · JavaScript','Working with'],['Flutter','Working with'],['Jetpack Compose','Working with'],['FastAPI','Working with'],['REST APIs','Working with']] },
  { group: 'Backend & infrastructure', icon: '02', entries: [['PostgreSQL','Working with'],['MongoDB','Exploring'],['Neon','Working with'],['Railway','Working with'],['Git & GitHub','Working with'],['Docker','Exploring'],['Linux administration','Working with'],['SSH & remote access','Working with'],['API auth & deployment','Exploring']] },
  { group: 'Embedded & electronics', icon: '03', entries: [['ESP32 · ESP8266','Working with'],['Arduino · 8051','Familiar'],['MicroPython · ESP-IDF','Exploring'],['SSD1306 OLED','Working with'],['UART · I²C · PWM','Familiar'],['ADC · DAC','Familiar'],['Circuit prototyping','Working with']] },
  { group: 'Networks & security', icon: '04', entries: [['TCP/IP · IPv4 · IPv6','Familiar'],['Subnetting · DNS · DHCP','Familiar'],['NAT · PAT · VLAN','Familiar'],['STP · OSPF · EIGRP','Exploring'],['Linux security','Exploring'],['SSH authentication','Working with'],['Cybersecurity labs','Exploring']] },
  { group: 'Tools & environments', icon: '05', entries: [['Ubuntu Linux','Working with'],['Android Studio','Working with'],['VS Code','Working with'],['Flutter SDK','Working with'],['Python venv','Working with'],['Terminal & shell','Working with']] },
] as const
