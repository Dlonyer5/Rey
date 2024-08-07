import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={require('./profile-pic.jpg')} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
      <p>Hello,My name is Reynold Bantug and im 3rd year college student.</p>
    </section>
  );
};

export default About;
