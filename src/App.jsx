import React, { useState } from 'react'

const tracks = [
  { id: 1, title: 'I', driveId: '105ZLZBFoCsUPVmwuwNKbh619LV0VjAKB' },
  { id: 2, title: 'II', driveId: '1y1FtEIlYDYaJ-RH95HbSUqtCQVA0phTR' },
  { id: 3, title: 'III', driveId: '1hjts4_QEfOK6mkYJzTqGjvJl00U_WEll' },
  { id: 4, title: 'Goodnight', driveId: '1oFiR0R2XRiHE88JfLmCrfJ75XTLFupEi' },
  { id: 5, title: "Michelle's Spring Waltz", driveId: '1FrWLWZ8r369VLTyxDv6tMwgodxvtb4SS' },
]

function driveDownloadUrl(driveId) {
  return `https://drive.google.com/uc?export=download&id=${driveId}`
}

function TrackRow({ track, index }) {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`track-row ${active ? 'active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span className="track-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="track-title">{track.title}</span>
      <a
        className="download-btn"
        href={driveDownloadUrl(track.driveId)}
        download
        aria-label={`Download ${track.title}`}
      >
        &#8675; download
      </a>
    </div>
  )
}


export default function App() {
  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="header">
        <img
          src="/S5300019.JPG"
          alt=""
          className="hero-image"
        />
        <div className="header-text">
          <p className="label">digital download</p>
          <h1 className="title">— 20 —</h1>
          <p className="subtitle">free downloads &bull; high quality mp3</p>
        </div>
      </header>

      <main className="track-list">
        {tracks.map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} />
        ))}
      </main>

      <footer className="footer">
        <p>6/30/2006 💕 6/30/2026</p>
      </footer>
    </div>
  )
}
