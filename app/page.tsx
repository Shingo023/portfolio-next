import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="content-container">
        <div className="home-content">
          <p>Hello, there! I'm-</p>
          <h1 className="name">Shingo Sugi</h1>
          <p className="self-intro">
            learning web development at college
          </p>
        </div>

        <img
          className="profile-pic"
          src="/images/profile-pic4.png"
          alt="profile"
        />

        {/* <nav>
          <ul className="main-nav">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
}