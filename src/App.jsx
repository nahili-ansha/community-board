import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Code Learning Resources</h1>
        <p>12 useful platforms to practice, reference, and grow your coding skills</p>
      </header>

      <main className="container">
        <section className="grid">

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/freecodecamp/400/240" alt="freeCodeCamp" />
            <div className="card-body">
              <h3>freeCodeCamp</h3>
              <p>Hands-on coding challenges and projects, all free.</p>
              <a href="https://www.freecodecamp.org/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/khan/400/240" alt="Khan Academy" />
            <div className="card-body">
              <h3>Khan Academy</h3>
              <p>Interactive lessons in JavaScript, HTML/CSS, and SQL.</p>
              <a href="https://www.khanacademy.org/computing" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/coursera/400/240" alt="Coursera" />
            <div className="card-body">
              <h3>Coursera</h3>
              <p>Courses from top universities, free to audit.</p>
              <a href="https://www.coursera.org/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/grasshopper/400/240" alt="Grasshopper" />
            <div className="card-body">
              <h3>Grasshopper</h3>
              <p>Google’s fun mobile app for learning coding basics.</p>
              <a href="https://grasshopper.app/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/edx/400/240" alt="edX" />
            <div className="card-body">
              <h3>edX</h3>
              <p>Harvard’s CS50 and other top computer science courses.</p>
              <a href="https://www.edx.org/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/codecademy/400/240" alt="Codecademy" />
            <div className="card-body">
              <h3>Codecademy</h3>
              <p>Interactive coding paths for web, data, and more.</p>
              <a href="https://www.codecademy.com/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/udemy/400/240" alt="Udemy" />
            <div className="card-body">
              <h3>Udemy</h3>
              <p>Affordable coding courses taught by industry pros.</p>
              <a href="https://www.udemy.com/courses/development/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/brilliant/400/240" alt="Brilliant.org" />
            <div className="card-body">
              <h3>Brilliant.org</h3>
              <p>Interactive lessons in logic, math, and computer science.</p>
              <a href="https://brilliant.org/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/w3schools/400/240" alt="W3Schools" />
            <div className="card-body">
              <h3>W3Schools</h3>
              <p>Quick references and tutorials for web development.</p>
              <a href="https://www.w3schools.com/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/mdn/400/240" alt="MDN Web Docs" />
            <div className="card-body">
              <h3>MDN Web Docs</h3>
              <p>Official documentation for HTML, CSS, JavaScript, and APIs.</p>
              <a href="https://developer.mozilla.org/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/stack/400/240" alt="Stack Overflow" />
            <div className="card-body">
              <h3>Stack Overflow</h3>
              <p>Q&A community for programmers with millions of answers.</p>
              <a href="https://stackoverflow.com/" target="_blank">Visit</a>
            </div>
          </article>

          <article className="card">
            <img className="card-img" src="https://picsum.photos/seed/github/400/240" alt="GitHub" />
            <div className="card-body">
              <h3>GitHub</h3>
              <p>Host code, collaborate on projects, and explore open source.</p>
              <a href="https://github.com/" target="_blank">Visit</a>
            </div>
          </article>

        </section>
      </main>
    </>
  );
}

export default App;
