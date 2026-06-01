import { useEffect, useRef, useState } from 'react'
import heroVideo from '../assets/Home_VImeo_4_pp.mp4'
import heroPoster from '../assets/hero-poster.jpg'

function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

    const onPlaying = () => setIsPlaying(true)

    tryPlay()
    video.addEventListener('canplay', tryPlay)
    video.addEventListener('playing', onPlaying)

    // 微信内置浏览器：需在 JSBridge 就绪后用 getNetworkType invoke 解锁播放
    const wxReady = () => {
      if (window.WeixinJSBridge && window.WeixinJSBridge.invoke) {
        window.WeixinJSBridge.invoke('getNetworkType', {}, tryPlay)
      } else {
        tryPlay()
      }
    }
    if (window.WeixinJSBridge && window.WeixinJSBridge.invoke) {
      wxReady()
    } else {
      document.addEventListener('WeixinJSBridgeReady', wxReady, false)
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
      video.removeEventListener('playing', onPlaying)
      document.removeEventListener('WeixinJSBridgeReady', wxReady, false)
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
          poster={heroPoster}
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
        <img
          className={`hero__poster${isPlaying ? ' is-hidden' : ''}`}
          src={heroPoster}
          alt=""
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
