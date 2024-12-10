function Button(props) {
  return (
    <button {...props} className="bg-slate-400 rounded-md text-white">{props.children}</button>
  );
}

export default Button;
