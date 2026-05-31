import { useEffect, useRef } from 'react'
import heroVideo from '../assets/Home_VImeo_4_pp.mp4'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true

    const tryPlay = () => {
      const promise = video.play()
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {})
      }
    }

    tryPlay()
    video.addEventListener('canplay', tryPlay)
    return () => video.removeEventListener('canplay', tryPlay)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">Polished Plaster · New Zealand</p>
        <h1 className="hero__title">
          Crafting
          <br />
          Emotive Spaces.
        </h1>
        <p className="hero__lead">
          A design-led premium interior finishes company providing an end-to-end
          wrap-around service of design, supply, and installation to commercial
          and residential clients across New Zealand.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#products">
            Discover the range
          </a>
          <a className="btn" href="#about">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
