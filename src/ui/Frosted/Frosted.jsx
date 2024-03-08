import PropTypes from "prop-types";
import s from "./Frosted.module.scss";
import cn from "classnames";

export const Frosted = ({ children, variant, className, ...props }) => {
  return (
    <div className={cn(s.Frosted, s[variant], className)} {...props}>
      {children}
    </div>
  );
};

Frosted.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};
