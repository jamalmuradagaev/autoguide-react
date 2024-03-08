import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";

const HomePage = lazy(() => import("./Home/Home"));
const ToursPage = lazy(() => import("./Tours/Tours"));
const LandmarksPage = lazy(() => import("./Landmarks/Landmarks"));
const HotelsPage = lazy(() => import("./Hotels/Hotels"));
const CarsharingPage = lazy(() => import("./Carsharing/Carsharing"));
const EntertainmentPage = lazy(() => import("./Entertainment/Entertainment"));

const ROUTESLIST = [
  { key: "tours", path: "/tours", Page: ToursPage },
  { key: "landmarks", path: "/landmarks", Page: LandmarksPage },
  { key: "hotels", path: "/hotels", Page: HotelsPage },
  { key: "carsharing", path: "/carsharing", Page: CarsharingPage },
  { key: "entertainment", path: "/entertainment/:id", Page: EntertainmentPage },
];

export const Routing = () => {
  return (
    <Suspense fallback={<h3>loading...</h3>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {ROUTESLIST.map(({ key, path, Page }) => (
            <Route key={key} path={path} element={<Page />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};
