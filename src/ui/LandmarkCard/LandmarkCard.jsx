import { Button } from "../Button/Button";
import cn from "classnames";
import s from "./LandmarkCard.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

export const LandmarkCard = ({
  className,
  name,
  id,
  location,
  description,
  pathPhoto,
}) => {
  const navigate = useNavigate();

  console.log(pathPhoto);

  return (
    <div className={cn(s.LandmarkCard, className)}>
      <div className={s.img}>
        <img src={"localhost/static/" + pathPhoto[0]} alt={name} />
      </div>

      <div className={s.content}>
        <div className={s.title}>
          <h3>{name}</h3>
          <Button
            className={s.button}
            variant="light"
            onClick={() => navigate(`${id}`)}
          >
            Подробнее
          </Button>
        </div>

        <p className={s.text}>{description}</p>

        <div className={s.info}>
          <div className={s.infoTitle}>
            <b>Адрес</b>

            <span>{location}</span>
          </div>

          <div className={s.infoTitle}>
            <b>Режим работы</b>

            <span>нет</span>
          </div>
        </div>
      </div>
    </div>
  );
};

LandmarkCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  pathPhoto: PropTypes.array.isRequired,
};
