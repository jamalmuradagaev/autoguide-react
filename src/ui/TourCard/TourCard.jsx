import cn from "classnames";
import s from "./TourCard.module.scss";
import { Button } from "../Button/Button";
import propTypes from "prop-types";
export const TourCard = ({ className, photos, title, description, price }) => {
  return (
    <div className={cn(s.TourCard, className)}>
      <div className={s.img}>
        <img src="https://www.tourdom.ru/upload/iblock/520/52046b5a46dc93a9afd019774d1e1ea2.jpg" />
      </div>

      <div className={s.content}>
        <h4>{title}</h4>
        <p>{description}</p>

        <div className={s.price}>
          <b>{price} ₽</b>

          <Button className={s.button} variant="outlined">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  className: propTypes.string,
  photos: propTypes.array,
  title: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
};
