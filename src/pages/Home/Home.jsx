import { Link } from "react-router-dom";
import { FAQ } from "../../shared/data/FAQ";
import { reasons } from "../../shared/data/reasons";
import {
  Container,
  Dropdown,
  Frosted,
  LandmarkMiniCard,
  LocationMap,
  Paper,
} from "../../ui";
import { previewLandmarks } from "../../shared/data/previewLandmarks";
import ToursIcon from "../../assets/mainPage/tours-icon.svg?react";
import AutoIcon from "../../assets/mainPage/auto-icon.svg?react";
import FoodmenuIcon from "../../assets/mainPage/foodmenu-icon.svg?react";
import HotelsIcon from "../../assets/mainPage/hotels-icon.svg?react";
import s from "./Home.module.scss";
import { team } from "../../shared/data/team";

const Home = () => {
  return (
    <div className={s.Home}>
      <section className={s.intro}>
        <div className={s.introInner}>
          <h1>Дагестан</h1>
          <i>
            Погрузитесь в мир исторической красоты и культурного разнообразия
          </i>
        </div>
      </section>

      <section className={s.welcome}>
        <div className={s.welcomeInner}>
          <h2>Добро пожаловать в мир Республики Дагестан</h2>
          <p>
            Республика Дагестан - это уникальное место, где сочетаются древние
            традиции и современность, где культурное наследие и природное
            богатство создают неповторимый опыт для путешественников. Здесь вы
            сможете проникнуться величием и многогранностью этого прекрасного
            региона, оставив незабываемые впечатления.
          </p>
        </div>
      </section>

      {/* <section className={s.about}>
        <div className={s.aboutInner}>
          <h2>О Дагестане</h2>
        </div>
      </section> */}

      <section className={s.reasons}>
        <div className={s.reasonsInner}>
          <h2>Причины поехать в Дагестан</h2>

          <div className={s.reasonsList}>
            <Container>
              {reasons.map(({ title, text }, index) => {
                return (
                  <Frosted
                    className={s.reasonsListItem}
                    key={title + index}
                    variant="light"
                  >
                    <h3>{title}</h3> <p>{text}</p>
                  </Frosted>
                );
              })}
            </Container>
          </div>
        </div>
      </section>

      <section className={s.FAQ}>
        <h2>Частые вопросы</h2>

        <div className={s.quesList}>
          {FAQ.map(({ title, text }, index) => {
            return <Dropdown key={title + index} title={title} text={text} />;
          })}
        </div>
      </section>

      <section className={s.landmarks}>
        <Container>
          <h2>Достопримечательности республики Дагестан</h2>
          <Link to="/landmarks" className={s.showAllLink}>
            показать все
          </Link>
          <div className={s.landmarksInner}>
            {previewLandmarks.map(
              ({ img, title, watchTime, workTime, ticket }, index) => {
                return (
                  <LandmarkMiniCard
                    key={title + index}
                    img={img}
                    title={title}
                    watchTime={watchTime}
                    workTime={workTime}
                    ticket={ticket}
                  />
                );
              }
            )}
          </div>

          <div className={s.landmarksGeo}>
            <LocationMap />
          </div>
        </Container>
      </section>

      <section className={s.aboutUs}>
        <Container>
          <h2>О нас</h2>
          <div className={s.aboutUsInner}>
            <div className={s.aboutUsText}>
              <p>
                Добро пожаловать в мир путешествий и приключений! Мы рады
                приветствовать вас на нашем сайте, посвященном туризму. Мы -
                команда опытных и страстных путешественников, объединенных общей
                целью - помочь вам создать незабываемые впечатления и открыть
                для себя удивительные места по всей республике.
              </p>
              <p>
                Что делает наш сайт особенным? Мы тщательно подобрали лучшие
                функции и сервисы, чтобы удовлетворить все ваши потребности и
                предоставить вам полный контроль над вашим путешествием.
              </p>
            </div>

            <div className={s.aboutUsCards}>
              <Paper>
                <ToursIcon />
                <h4>Увлекательные туры</h4>
                <p>Насыщенные программы с яркими и уникальными локациями</p>
              </Paper>
              <Paper>
                <AutoIcon />
                <h4>Доступный транспорт</h4>
                <p>Разнообразность каршейринга и услуг авто</p>
              </Paper>
              <Paper>
                <FoodmenuIcon />
                <h4>Национальное меню</h4>
                <p>
                  Изысканные блюда, приготовленные из свежих местных продуктов
                </p>
              </Paper>
              <Paper>
                <HotelsIcon />
                <h4>Уютные отели</h4>
                <p>Широкий выбор комфортабельных и стильных гостиниц</p>
              </Paper>
            </div>
          </div>
        </Container>
      </section>

      <section className={s.mobileApp}>
        <Container>
          <h2>Открой новые горизонты с нашим мобильным приложением!</h2>
          <div className={s.mobileAppInner}>
            <p>
              Добро пожаловать в захватывающий мир нашего мобильного приложения!
              Если ты ищешь способ расширить свои горизонты, найти новые
              возможности и получить удовольствие от уникального
              пользовательского опыта, а также воспользоваться удивительной
              функцией <b>Автогида</b>, то ты попал по адресу.
            </p>

            <div className={s.mobileImg}>
              <img src="src/assets/mainPage/mobile-img.png" alt="Телефон" />
            </div>
          </div>
        </Container>
      </section>

      <section className={s.team}>
        <Container>
          <h2>Команда</h2>
          <p>Проект Ассоциации (школьников айтишников) </p>

          <div className={s.teamMatesList}>
            {team.map(({ title, mates }) => {
              return (
                <Paper key={title}>
                  <h3>{title}</h3>
                  <ul>
                    {mates.map((el) => (
                      <li key={el}>{el}</li>
                    ))}
                  </ul>
                </Paper>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
