import { TourCard } from "../../ui/TourCard/TourCard";
import { Container } from "../../ui";
import s from "./Tours.module.scss";
import { toursData } from "../../shared/data/toursData";


const Tours = () => {
  console.log(toursData)
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <section className={s.toursList}>
          <TourCard
            title="Трёхдневный тур 'Звёзды Дагестана'"
            description="Наши туры навсегда влюбляют в горный Дагестан. Ведь с нашей командой иначе и быть не может!"
            price={25000}
          />
        </section>
      </Container>
    </div>
  );
};

export default Tours;
