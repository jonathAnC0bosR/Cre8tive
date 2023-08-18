const Input = (props) => {
  return (
    <div className="flex flex-col w-full mb-1 lg:pr-7 md:pr-4 pr-2">
      <label>{props.label}</label>
      {props.children}
      <input
        type={props.type}
        className={`${props.styles} w-full border-2 border-pink-600 rounded-md bg-zinc-800 `}
        value={props.value}
        onChange={props.onChange}
        name= {props.name}
      />
    </div>
  );
};

export default Input;
