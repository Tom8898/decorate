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

    // 微信内置浏览器需等 JSBridge 就绪后才允许自动播放
    const onBridgeReady = () => tryPlay()
    if (window.WeixinJSBridge) {
      tryPlay()
    } else {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    }

    // 兜底：首次用户手势（触摸/点击）时解锁播放
    const onUserGesture = () => {
      tryPlay()
      document.removeEventListener('touchstart', onUserGesture)
      document.removeEventListener('click', onUserGesture)
    }
    document.addEventListener('touchstart', onUserGesture, { once: true })
    document.addEventListener('click', onUserGesture, { once: true })

    return () => {
      video.removeEventListener('canplay', tryPlay)
      document.removeEventListener('WeixinJSBridgeReady', onBridgeReady, false)
      document.removeEventListener('touchstart', onUserGesture)
      document.removeEventListener('click', onUserGesture)
    }
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
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5-page"
          x5-video-player-fullscreen="false"
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
