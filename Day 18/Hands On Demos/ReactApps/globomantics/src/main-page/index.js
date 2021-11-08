import { useEffect, useState, useMemo, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouse";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HousesContext from "../context/housesContext";
import MyHeader from "../styles/MyHeader";
import MyHOC from "../hoc/MyHOC";

function App() {
  //  const fetchHouses = useCallback( async () => {
  //     const rsp = await fetch("./houses.json");
  //     const houses = await rsp.json();
  //     setAllHouses(houses);
  //   },[]);

  //   fetchHouses();
  // }, [fetchHouses]);

  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  const header = <Header subtitle="Providing houses all over the world" />;
  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          {header}
          <HouseFilter />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>
            <Route path="/styles/header">
              <MyHeader />
            </Route>
            <Route path="/hoc">
              <MyHOC />
            </Route>
            <Route path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
