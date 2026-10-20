import React from "react";

function Hero() {
  return (
    <>
      <div className="container text-center mt-5 mb-5">
        <div className="row">
          <h2>
            <br />
            <strong>
              We pioneered the discount broking model in india.
              <br />
              Now, we are breaking ground with our technology
            </strong>
          </h2>
        </div>
        <br /> <br /> <br />
        <hr />
        <br /> <br />
        <div className="container">
          <div className="row">
            <div className="col-2 text-start"></div>
            <div className="col-4 text-start">
              <p>
                Tradeora is a modern financial technology platform developed
                using React.js, Node, HTML5, and CSS3 to create a responsive,
                interactive, and user-friendly interface.
              </p>
              <p>
                {" "}
                React's component-based architecture helps us build reusable UI
                components such as the navigation bar, homepage sections,
                pricing cards, and footer, making the application easier to
                maintain and scale.{" "}
              </p>
              <p>
                {" "}
                Bootstrap is used for responsive layouts, grid systems, and UI
                styling, helping ensure a consistent experience across desktop,
                tablet, and mobile devices.
              </p>
              The frontend is organized into structured components and pages to
              improve code readability, maintainability, and future development.
            </div>
            <div className="col-1 text-start"></div>

            <div className="col-4 text-start">
              <p>
                The development workflow also incorporates Git and <br />
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/amitadhikarieditor-rgb/tradeora"
                >
                  GitHub{" "}
                </a>
                for version control, branch management, collaboration, and
                tracking code changes throughout the project.
              </p>

              <p>
                Individual components and features are developed and integrated
                into the main application through a structured workflow.{" "}
              </p>

              <p>
                Tradeora is designed with scalability and maintainability in
                mind, providing a foundation for future backend integration,
                secure authentication, financial data services, and other
                interactive features.
              </p>

              <p>
                The overall goal is to combine modern web technologies with a
                clean interface to deliver a smooth and accessible digital
                experience.
              </p>
            </div>
            <div className="col-1 text-start"></div>
          </div>
        </div>{" "}

      </div>

      <div className="container text-center">
        <h1>people</h1>
      </div>
      <div className="container p-5">
        <div className="row">
                  <div className="col-1 "></div>
          <div className="mt-3 col-4 ">
            <img className="ms-5"
              style={{ borderRadius: "50%", width:'67%' }}
              src="/media/nithinKamath.jpg"
              alt="founder's pic"
            />
            <br/><br/>
             <h4 className="me-5 text-center"><strong>Someone from the internet</strong></h4>
             <p className="me-5 text-center">Founder, CEO</p>
          </div>
          
          <div className="col-6">
           
            <p className="fs-5">
              I don't personally know this gentleman, but I came across his
              photograph while exploring an official website. Something about
              his pose caught my attention and made me curious about the person
              behind the picture. He looked confident, focused, and passionate,
              as if he had a clear vision of what he wanted to achieve.<br/><br/><br/>
              <p>Sometimes, a simple photograph can leave a lasting impression
              without revealing much about the person in it. I found his
              expression and overall personality in the photograph quite
              inspiring. As someone who is building Tradeora, I wanted to make
              my website more meaningful by featuring people whose photographs
              caught my attention.</p>
            </p>
          </div>
        </div>
      </div>
      <br/> <br/> 
    </>
  );
}

export default Hero;
