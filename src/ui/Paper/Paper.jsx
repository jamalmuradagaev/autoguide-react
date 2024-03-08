import propTypes from "prop-types";
import cn from "classnames";
import s from "./Paper.module.scss";

export const Paper = ({ children, className }) => {
  return <div className={cn(s.Paper, className)}>{children}</div>;
};

Paper.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};
