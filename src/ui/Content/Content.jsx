import { PropTypes } from "prop-types";
import s from "./Content.module.scss";

export const Content = ({ children }) => {
  return <div className={s.Content}>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.children,
};
