import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const esto = [
    { img: "https://i.ibb.co/gPJjNtq/abraham.png", name: "abraham", id: 1 },
    { img: "https://i.ibb.co/sVw7jn1/abel.png", name: "abel", id: 2 },
    { img: "https://i.ibb.co/264dsDq/cain.png", name: "cain", id: 3 },
    { img: "https://i.ibb.co/xjN3sPD/David.png", name: "david", id: 4 },
    { img: "https://i.ibb.co/V2vw1pW/elias.png", name: "elias", id: 5 },
    { img: "https://i.ibb.co/gPJjNtq/abraham.png", name: "abraham", id: 6 },
    { img: "https://i.ibb.co/sVw7jn1/abel.png", name: "abel", id: 7 },
    { img: "https://i.ibb.co/264dsDq/cain.png", name: "cain", id: 8 },
    { img: "https://i.ibb.co/xjN3sPD/David.png", name: "david", id: 9 },
    { img: "https://i.ibb.co/V2vw1pW/elias.png", name: "elias", id: 10 },
    { img: "https://i.ibb.co/L8m5KJV/goliat.png", name: "goliat", id: 11 },
    { img: "https://i.ibb.co/L8m5KJV/goliat.png", name: "goliat", id: 12 },
    { img: "https://i.ibb.co/dLX9Dxq/moises.png", name: "moises", id: 13 },
    { img: "https://i.ibb.co/dLX9Dxq/moises.png", name: "moises", id: 14 },
    { img: "https://i.ibb.co/JszTTRv/salomon.png", name: "salomon", id: 15 },
    { img: "https://i.ibb.co/JszTTRv/salomon.png", name: "salomon", id: 16 },
  ];
  const [array, setArray] = useState([].sort(() => Math.random() - 0.5));
  const [seleccionado, setSeleccionado] = useState([]);
  const [iguales, setIguales] = useState([]);
  const [idselected, setIdselected] = useState([]);
  const [ok, setOk] = useState([]);
  const [finish, setFinish] = useState(false);
  const [comenzar, setComenzar] = useState(false);

  const seleccionar = (id) => {
    let pr = "";
    for (let i = 0; i < esto.length; i++) {
      if (esto[i].id == id) {
        setSeleccionado(seleccionado.concat(id));
        setIguales(iguales.concat(esto[i].name));
        setIdselected(idselected.concat(esto[i].id));
        pr = esto[i].name;
        iguales.includes(pr) && !idselected.includes(esto[i].id)
          ? (setOk(ok.concat(pr)),
            setTimeout(() => {
              setIguales([]);
              setSeleccionado([]);
              setIdselected([]);
            }, 1000))
          : iguales[0] != iguales[1] &&
            setTimeout(() => {
              setIguales([]);
              setIdselected([]);
              setSeleccionado([]);
            }, 1000);
      }
    }
  };

  const felicidades = () => {
    ok.length == 8 && setFinish(true);
  };

  useEffect(() => {
    felicidades();
  }, [ok]);
  const funciones = (id) => {
    idselected.length < 2 && seleccionar(id), felicidades();
  };

  const estart = () => {
    setComenzar(true);
    setArray(esto.sort(() => Math.random() - 0.5));
    setSeleccionado([]);
    setFinish(false);
    setIdselected([]);
    setOk([]);
  };

  return (
    <div className="App">
      <h2>aca va un titulo</h2>
      {finish ? (
        <h3>aca va una felicitacion</h3>
      ) : (
        comenzar && (
          <div className="content-carta">
            {array.map((e) => (
              <div className="space-cart">
                <div
                  className="carta"
                  key={e.id}
                  onClick={() => funciones(e.id)}
                >
                  {(seleccionado.includes(e.id) && seleccionado.length <= 2) ||
                  ok.includes(e.name) ? (
                    <img className="imag" src={e.img} alt={e.name} />
                  ) : (
                    <img
                      className="imag"
                      src="https://i.ibb.co/zFFZMKn/biblia.jpg"
                      alt="biblia"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )
      )}

      <button onClick={estart}>start</button>
    </div>
  );
}

export default App;
