import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>What Helped Me Succeed in CS</h1>
        <p>resources, communities, and habits that moved the needle</p>
      </header>

      <main className="container">
        <section className="grid">

          <article className="card">
            {/* Use the image from public/ with a root-relative path. Files in public are served at '/'. */}
            <img className="card-img" src="/colorstack.jpeg" alt="ColorStack logo" title="ColorStack" />
            <div className="card-body">
              <h3>ColorStack</h3>
              <p>Community, mentorship, and opportunities for Black & Latinx CS students.</p>
              <a href="https://www.colorstack.org/about-us" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/codepath.jpeg" alt="codepath" />
            <div className="card-body">
              <h3>CodePath</h3>
              <p>Industry-taught courses and interview prep that level up your skills.</p>
              <a href="https://www.codepath.org/about" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/nsbe.png" alt="Coursera" />
            <div className="card-body">
              <h3>NSBE</h3>
              <p>Leadership, conferences, and a strong support network for engineers.</p>
              <a href="https://nsbe.org/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/leetcode.png" alt="Grasshopper" />
            <div className="card-body">
              <h3>LeetCode</h3>
              <p>Daily problem-solving reps that sharpened my DSA fundamentals.</p>
              <a href="https://leetcode.com/problemset/all-code-essentials/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/peer-study.jpg" alt="edX" />
            <div className="card-body">
              <h3>Peer Study Groups</h3>
              <p>Harvard’s CS50 and other top computer science courses.</p>
              <a href="https://info.lse.ac.uk/staff/divisions/Teaching-and-Learning-Centre/Assets/Documents/Quick-Guides/PeerStudy-HoDs-HardCopy-Final2.pdf" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/hackathon.jpg" alt="Codecademy" />
            <div className="card-body">
              <h3>Hackathons & Projects</h3>
              <p>Hands-on builds to apply concepts and talk about in interviews.</p>
              <a href="https://www.codecademy.com/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/resume.jpg" alt="resume" />
            <div className="card-body">
              <h3>Resume Reviews</h3>
              <p>Iterating with peers, mentors, and career centers for a crisp story.</p>
              <a href="https://www.overleaf.com/gallery/tagged/cv" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/linkedin.jpg" alt="linkedin" />
            <div className="card-body">
              <h3>LinkedIn Networking</h3>
              <p>Alumni, recruiters, and communities—informational chats cold apps.</p>
              <a href="https://www.linkedin.com/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/career-fairs.png" alt="careerfairs" />
            <div className="card-body">
              <h3>Career Fairs & Conferences</h3>
              <p>Real conversations, tailored pitches, and follow-ups that convert.</p>
              <a href="https://www.indeed.com/career-advice/finding-a-job/what-to-do-at-a-career-fair" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/mentoring.jpeg" alt="MDN Web Docs" />
            <div className="card-body">
              <h3>Mentorship</h3>
              <p>Guidance from seniors, pros, and professors—shortcuts to wisdom.</p>
              <a href="https://en.wikipedia.org/wiki/Mentorship" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/time-management.png" alt="Stack Overflow" />
            <div className="card-body">
              <h3>Consistency & Time Management</h3>
              <p>Protected focus blocks, weekly goals, and systems over motivation.</p>
              <a href="https://www.linkedin.com/pulse/consistency-key-time-management-janet-janssen" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="/reflection.jpg" alt="GitHub" />
            <div className="card-body">
              <h3>Reflection & Documentation</h3>
              <p>Journaling learnings to track progress and reinforce concepts.</p>
              <a href="https://uark.pressbooks.pub/eportolio/chapter/reflective-expression/" target="_blank">Visit</a>
            </div>
          </article>

        </section>
      </main>
    </>
  );
}

export default App;
