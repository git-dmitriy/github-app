import React from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
  const cards = new Array(15).fill("").map((_, idx) => idx);
  console.log(cards);
  return (
    <>
      <Search />

      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </>
  );
};
