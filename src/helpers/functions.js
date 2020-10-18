import React from 'react';

import ind_cactus from '../images/individual_cactus.jpg';
import studio from '../images/studio.jpg';
import chiky from '../images/chicky.jpg';

function randomImgs(setContent) {
  setTimeout(() => {
    setContent(<>
        <img className="img a" src="https://images.unsplash.com/photo-1587174453608-d3df7d236e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="multiple_cactus"/>
        <img className="img b" src="https://images.unsplash.com/photo-1600966590792-15d382da753d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="ind_cactus"/>
        <img className="img c" src="https://images.unsplash.com/photo-1518631824846-8a5ff1bcdc7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="sun_cactus"/>
        <img className="img d" src="https://images.unsplash.com/photo-1599666768293-8b35faa27da5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="studio_cactus"/>
        <img className="img e" src="https://images.unsplash.com/photo-1510711547938-04fb9010e471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="pust_cactus"/>
        <img className="img f" src="https://images.unsplash.com/photo-1493834685523-df9beaf95762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="ck_cactus"/>
    </>);
  }, 20000);
  setTimeout(() => {
    setContent(<>
        <img className="img a" src="https://images.unsplash.com/photo-1602181688953-5d2b5323b430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="multiple_cactus"/>
        <img className="img b" src="https://images.unsplash.com/photo-1591135146136-ba5777990510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="ind_cactus"/>
        <img className="img c" src="https://images.unsplash.com/photo-1513347116933-d7e4f7b45587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80" alt="sun_cactus"/>
        <img className="img d" src="https://images.unsplash.com/photo-1581572145515-5c6c361286ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="studio_cactus"/>
        <img className="img e" src="https://images.unsplash.com/photo-1543371049-abf7c6d8991b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="pust_cactus"/>
        <img className="img f" src="https://images.unsplash.com/photo-1550551845-cedbec077d64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="ck_cactus"/>
    </>);
  }, 40000);
  setTimeout(() => {
    setContent(<>
        <img className="img c all" src="https://images.unsplash.com/photo-1550551845-cedbec077d64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="pust_cactus"/>
    </>);
  }, 60000);
  return setContent(
    <>
      <img className="img a" src="https://images.unsplash.com/photo-1485446197264-b463f851fa6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="multiple_cactus"/>
      <img className="img b" src={ind_cactus} alt="ind_cactus"/>
      <img className="img c" src="https://images.unsplash.com/photo-1532497207947-46090359598e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="sun_cactus"/>
      <img className="img d" src={studio} alt="studio_cactus"/>
      <img className="img e" src="https://images.unsplash.com/photo-1496281488047-dfb3c44cd701?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="pust_cactus"/>
      <img className="img f" src={chiky} alt="ck_cactus"/>
    </>
  );
}

export default randomImgs;
