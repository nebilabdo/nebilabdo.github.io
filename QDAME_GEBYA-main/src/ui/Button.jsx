/* eslint-disable react/prop-types */
function Button({ onClick, children, styles }) {
  return (
    <button
      onClick={onClick}
      className={` px-4 py-1 rounded-full text-white transition-all duration-300 ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;
