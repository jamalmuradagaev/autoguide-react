import s from "./LandmarkMiniCard.module.scss";
import PropTypes from "prop-types";

export const LandmarkMiniCard = ({
  img,
  title,
  watchTime,
  workTime,
  ticket,
}) => {
  return (
    <div className={s.LandmarkMiniCard}>
      <div className={s.imgWrapper}>
        <img src={img} alt={title} />
      </div>

      <div className={s.content}>
        <h4>{title}</h4>
        <div className={s.options}>
          <span>Время на просмотр: {watchTime} минут</span>
          <span>Режим работы: {workTime}</span>
          <span>Билет: {ticket}</span>
        </div>
      </div>
    </div>
  );
};

LandmarkMiniCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  watchTime: PropTypes.string,
  workTime: PropTypes.string,
  ticket: PropTypes.string,
};
