export default function Icon({ name, size = 20, ...props }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <path d="M7 17 17 7M7 7h10v10" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13.5A8.7 8.7 0 0 1 10.5 3 9 9 0 1 0 20.5 13.5Z" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    layers: <path d="m3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4" />,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" /></>,
    ai: <><rect x="6" y="6" width="12" height="12" rx="3" /><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5M10 10h4v4h-4z" /></>,
    cloud: <path d="M6 18a5 5 0 1 1 1-9.9A6 6 0 0 1 18.7 9a4.5 4.5 0 0 1 0 9H6Z" />,
    shield: <><path d="m12 2 8 3v7c0 5-8 10-8 10S4 17 4 12V5l8-3Z" /><path d="m8 11 3 3 5-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    pin: <><path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    github: <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .2-2-1-3 4 0 7-2 7-6 0-2-.7-3-2-4 .3-1 .3-3 0-4-2 0-4 1-5 2a14 14 0 0 0-4 0C9 2 7 1 5 1c-.5 1-.5 3 0 4-1.2 1-2 2-2 4 0 4 3 6 7 6-1 1-1 2-1 3v4" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name === 'sparkles' ? 'ai' : name] || paths.code}</svg>
}
