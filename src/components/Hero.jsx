function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true" />
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
