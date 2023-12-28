const Button = ({ label, onClick, otherClasses }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${otherClasses ? otherClasses : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
