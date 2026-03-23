const Button = ({ id, text, action, type = "button", className = "" }) => {
  const handleAction = (e) => {
    action(e);
  };
  return (
    <button
      id={id}
      type={type}
      className={`rounded uppercase px-6 py-4 ${
        id === "clear-btn" ? "bg-gray" : "bg-red"
      } text-white cursor-pointer opacity-90 flex-1 hover:opacity-100 ${className}`}
      onClick={handleAction}
    >
      {text}
    </button>
  );
};

export default Button;
