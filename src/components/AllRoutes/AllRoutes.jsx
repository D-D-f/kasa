import { Routes, Route } from "react-router-dom";
import PageDescription from "../PageDescription/PageDescription";
import About from "../About/About";
import Home from "../Home/Home";
import NotFound from "../Utils/NotFound/NotFound";

const AllRoutes = ({ data }) => {
  return (
    <Routes>
      <Route path="/" exact element={<Home data={data} />} />
      <Route path="/:id" element={<PageDescription data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
