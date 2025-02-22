import React from 'react';

import './Card.css';

export const Card = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Egor Oschepkov</h1>
        <p>Full-stack developer</p>
        <div className="photo-placeholder">
          <img src=" /photo.jpg" alt="Egor Oschepkov" className="photo" />
        </div>
      </header>

      <main>
        <section className="section">
          <h2>Overview</h2>
          <p>I’m a full-stack developer since 2022.</p>
          <h3>Skills:</h3>
          <ul>
            <li>Making responsive and mobile-friendly interfaces</li>
            <li>
              Creating reliable web-applications with JavaScript/TypeScript and
              React
            </li>
            <li>Working with component libraries like Material-UI</li>
            <li>Implementing RESTful API services</li>
            <li>Integrating with external API</li>
            <li>Implementing authentication</li>
            <li>Setting up CI/CD with GitLab-CI</li>
            <li>Unit and integration tests</li>
          </ul>
        </section>

        <section className="section">
          <h2>Tech Stack</h2>
          <ul>
            <li>JavaScript, ES6, TypeScript</li>
            <li>Node.js, Express, NestJS, TypeORM</li>
            <li>React, Redux, Redux Toolkit, RTK Query</li>
            <li>Java, Spring Boot, JDBC, Maven</li>
            <li>PostgreSQL</li>
            <li>FastAPI, Clip</li>
            <li>SmartActors</li>
            <li>Jest, JUnit, Mockito</li>
          </ul>
        </section>

        <section className="section">
          <h2>Education</h2>
          <p>
            <strong>Dostoevsky Omsk State University</strong> (2020–present)
          </p>
          <p>
            Faculty of Digital Technologies and Cybersecurity, Applied
            Mathematics and IT
          </p>
        </section>

        <section className="section">
          <h2>Work Experience</h2>

          <article className="experience">
            <h3>Boat Management System</h3>
            <p>
              <strong>7bits LLC</strong> (Nov 2023 – May 2024)
            </p>
            <p>
              A web-based system that helps boat owners to manage their boats.
              It provides possibilities to register boats inside the system,
              prepare their web-representation and share with people who want to
              rent it. The service is adapted for use on desktop and mobile
              devices.
            </p>
            <h4>Tasks:</h4>
            <ul>
              <li>
                Implementing forms with tabs and various number and type of
                fields for creating, editing, searching boats and their
                representations using React Hook Form.
              </li>
              <li>
                Displaying system entities search results in different table
                forms with Material React Table library.
              </li>
              <li>
                Unit and integration tests for services and controllers on the
                backend.
              </li>
            </ul>
            <h4>Tech Stack:</h4>
            <ul>
              <li>TypeScript</li>
              <li>React, Redux Toolkit, RTK Query</li>
              <li>Material UI</li>
              <li>Node.js, NestJS</li>
              <li>Jest</li>
              <li>TypeORM, PostgreSQL</li>
            </ul>
          </article>

          <article className="experience">
            <h3>Low-code Actors</h3>
            <p>
              <strong>7bits LLC</strong> (July 2023 – Nov 2023)
            </p>
            <p>
              Full-stack web application, which is a visual low-code tool for
              creating, assembling, and storing source code and building
              artifacts (actors, features, business cases) in the repository for
              further use within the framework of the SmartActors framework.
            </p>
            <h4>Tech Stack:</h4>
            <ul>
              <li>React.js</li>
              <li>SmartActors</li>
              <li>PostgreSQL</li>
              <li>GitLab CI</li>
              <li>Redux</li>
              <li>RTK Query</li>
            </ul>
          </article>

          <article className="experience">
            <h3>UH Photo</h3>
            <p>
              <strong>Pet Project</strong> (Feb 2023 – May 2023)
            </p>
            <p>
              A web-application for storing photos with semantic search
              capabilities. You can search for similar photos in the database or
              search based on textual descriptions.
            </p>
            <h4>Tech Stack:</h4>
            <ul>
              <li>React+TypeScript</li>
              <li>Redux</li>
              <li>RTK Query</li>
              <li>PostgreSQL</li>
              <li>Spring</li>
              <li>FastAPI</li>
              <li>Clip</li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>Email: egor.oshchepkov@7bits.it</p>
        <p>Location: Omsk, Russia (UTC+6)</p>
        <p>English level: A2 (Pre-Intermediate)</p>
      </footer>
    </div>
  );
};
