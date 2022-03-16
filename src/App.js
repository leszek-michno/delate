import React, { useState } from "react";
import "./App.css";
import Car from "./Car";


const App = () => {
  const [cars, setCars] = useState([
    { id: 1, name: "Fiat" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Audi" },
    { id: 4, name: "Toyota" },
  ]);

  const handleDelete = (id) => {
    const newCars = [...cars];
    const index = newCars.findIndex((car) => car.id === id);
    cars.splice(index, 1);
    setCars([...cars]);
  };

  const carsList = cars.map((car) => (
    <Car
      key={car.id}
      name={car.name}
      delete={handleDelete.bind(this, car.id)}
    />
  ));

  return <ul>{carsList}</ul>;
};

export default App;
<li></li>;
