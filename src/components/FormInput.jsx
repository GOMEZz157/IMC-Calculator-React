const FormInput = ({ type = "text", name, placeholder, htmlFor, id, text }) => {
  return (
    <div id="form-control" className="flex flex-1 flex-col mb-4">
      <label htmlFor={htmlFor} className="font-bold mb-2.5 text-light-gray">
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="px-2 py-4 bg-white text-black rounded outline-none"
      />
    </div>
  );
};

export default FormInput;
