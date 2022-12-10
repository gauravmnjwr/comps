import propTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  //wraped component
  return (
    <button {...rest} className="px-3 py-1.5 border border-blue-800 bg-blue-500 text-white">
      {children}
    </button>
  ); //underlying element
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error("Invalid Props");
    }
  },
};

export default Button;
