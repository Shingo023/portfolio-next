export default function About() {
  return <>

      {/* ===== Top Profile ===== */}
      <div className="top-content">
        <section className="profile">
          <img
            className="profile__img"
            src="/images/profile-pic2.png"
            alt="profile"
          />
          <h2 className="profile__name">Shingo</h2>
        </section>
      </div>

      {/* ===== About Me ===== */}
      <div className="content1">
        <article className="article1">
          <h3 className="article__title">A bit about me</h3>
          <p className="article__text">
            I have been learning web development at college in Vancouver
            since this summer. I'm really enjoying learning a lot of new
            skills every day and creating something by myself. Before
            coming to Vancouver, I worked as an English teacher at schools
            in Japan for more than 10 years. I find that teaching and
            coding have a lot in common. To get successful results, you
            need to improve your skills and make a lot of trial and error,
            and I love that process!
          </p>
        </article>
      </div>

      {/* ===== Skills & Interests ===== */}
      <div className="content2">
        <div className="article-container">

          <article className="article2">
            <h3 className="article__title">Skills</h3>

            <div className="article-text-container">
              <h2 className="article__sub-title">
                technical skills:
              </h2>
              <ul className="article__items">
                <li className="article__item">HTML</li>
                <li className="article__item">CSS</li>
                <li className="article__item">SASS</li>
              </ul>
            </div>

            <div className="article-text-container">
              <h2 className="article__sub-title">
                soft skills:
              </h2>
              <ul className="article__items">
                <li className="article__item">Empathy</li>
                <li className="article__item">Cultural awareness</li>
                <li className="article__item">Work ethic</li>
              </ul>
            </div>
          </article>

          <article className="article3">
            <h3 className="article__title">Interests</h3>
            <ul className="article__items">
              <li className="article__item">Chess</li>
              <li className="article__item">Music</li>
              <li className="article__item">Learning English</li>
            </ul>
          </article>

        </div>

        <div className="img-outer">
          <img
            className="chess__img"
            src="/images/img__chess.avif"
            alt="chess"
          />
        </div>

      </div>
    </>;
}