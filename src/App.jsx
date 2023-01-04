import Style from "./App.module.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./components/AllRoutes/AllRoutes";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch("./data.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setData(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={Style.App}>
        <Header />
        <AllRoutes data={data} />
      </div>
      <Footer />
    </>
  );
};

export default App;
