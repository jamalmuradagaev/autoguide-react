import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({ children, className, variant, onClick, ...props }) => {
  return (
    <button
      className={cn(styles.Button, styles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
