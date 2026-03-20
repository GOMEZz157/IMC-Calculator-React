const Button = ({ id, text }) => {
  return (
    <button
      id={id}
      className={`uppercase px-6 py-4 ${
        id === "clear-btn" ? "bg-gray" : "bg-red"
      } text-white cursor-pointer opacity-90 flex-1 hover:opacity-100`}
    >
      {text}
    </button>
  );
};

export default Button;