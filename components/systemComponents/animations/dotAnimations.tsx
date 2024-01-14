import "./dotAnimations.css";

const DotAnimations = () => {
  const dotCount = 48;
  const dots = [];

  for (let i = 1; i <= dotCount; i++) {
    const delay = (i - 1) * 0.5;
    const dotClass = `dot-${i}`;

    dots.push(
      <div key={i} className={`dot ${dotClass}`} />
    );
  }

  return <div className="dot-container">{dots}</div>;
};

export default DotAnimations;