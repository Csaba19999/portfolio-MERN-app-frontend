import "./LoadingSpinner.css";

function LoadingSpinner(props) {
  return (
    <div className="spinner">
      <div
        style={{ width: props.spinnerSize, height: props.spinnerSize }}
        className="lds-roller"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
