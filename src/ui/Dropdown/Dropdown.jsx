import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Dropdown.module.scss";
import { useState } from "react";

export const Dropdown = ({ title, text, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(s.Dropdown, className)}
      onClick={() => setOpen((prev) => !prev)}
    >
      <h3 className={s.title}>{title}</h3>
      <p className={cn(s.text, open && s.showText)}>{text}</p>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
