import React from 'react';
import loadingGif from '../images/gif/loading-gear.gif'

const Loading = () => {
  return (
    <div className="loading">
      <h4>room data loading...</h4>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
}

export default Loading;