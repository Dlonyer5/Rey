import React from 'react';

const Games = () => {
  return (
    <section id="games">
      <h2>Games that I play:</h2>
      <ul>
        <li>
          Mobile Legends: Bang Bang
          <br />
          <img src={require('./game1.jpg')} alt="Mobile Legends" width="80" height="80" />
        </li>
        <li>
          Genshin Impact
          <br />
          <img src={require('./game2.jpg')} alt="Genshin Impact" width="80" height="80" />
        </li>
        <li>
          Fortnite
          <br />
          <img src={require('./game3.jpg')} alt="Dota 2" width="80" height="80" />
        </li>
      </ul>
    </section>
  );
};

export default Games;

