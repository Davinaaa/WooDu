import logo from '../logo.svg';


import './Home.css';

function renderCollections() {
  const collections = [];
  for(let i = 0; i < 12; i++) {
    collections.push(
      <img className="collectionItem" src={require(`../collection/woodu-${i}.png`)} alt={`woodu collection ${i}`} />
    )
  }
  return collections;
}
function Home() {
  return (
    <div className="home">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="woodu logo"/>
      </div>
      <div className="welcomeText">
        Browse from our
        <br/>
        100+ Collections
      </div>
      <div className="allCollections">
        {renderCollections()}
      </div>
    </div>
  );
}

export default Home;
