import React from "react";
import "../App.css";
const memoIMG = () => {
  const esto = [
    { img: "uno", name: "uno", id: 1 },
    { img: "dos", name: "dos", id: 2 },
    { img: "tres", name: "tres", id: 3 },
    { img: "cuatro", name: "cuatro", id: 4 },
    { img: "cinco", name: "cinco", id: 5 },
    { img: "uno", name: "uno", id: 6 },
    { img: "dos", name: "dos", id: 7 },
    { img: "tres", name: "tres", id: 8 },
    { img: "cuatro", name: "cuatro", id: 9 },
    { img: "cinco", name: "cinco", id: 10 },
  ];
  return (
    <div>
      {array.map((e) => (
        <App key={e.id} carta={e.img} />
      ))}
    </div>
  );
};

export default memoIMG;
