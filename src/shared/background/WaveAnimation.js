import "./WaveAnimation.css";

function AnimatedBackground(props) {

  return (
    <div className={`ocean ${props.reverse ? 'reverse' : ''}`}>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}

export default AnimatedBackground;
