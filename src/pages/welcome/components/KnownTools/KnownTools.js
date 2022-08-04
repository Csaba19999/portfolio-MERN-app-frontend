import './KnownTools.css';
import background from './background.png';
import { Fragment } from 'react';

function KnownTools() {
  return (
    <Fragment>
      <h3>Általam ismert eszközök</h3>
      <div className="slideshow">
      <div className="mover-1" style={{
        backgroundImage: `url(${background})`
      }}></div>
    </div>
    </Fragment>
    
  );
}

export default KnownTools;
