import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="App">
      <div className="me_pic">
        <img src="/olli_ympyra.png" alt="me" />
      </div>
      <h1>Olli Salakari</h1>
      <div className="card">
        <i>Architect: systems, software & data</i>
        <p></p>
        <br></br>
        <a href="https://www.linkedin.com/in/olli-salakari-81641347/">
          Linkedin
        </a>
        <br></br>
        <a href="https://ollis.medium.com">Medium / Blog</a>
        <br></br>
        <a href="https://github.com/ollisala">Github</a>
        <br></br>Mastodon: @ollisala@hachyderm.io
      </div>
    </div>
  );
};

export default Home;
