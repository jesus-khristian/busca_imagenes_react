import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaImagenes from "./components/ListaImagenes";


function App() {
  const [consult, setConsult] = useState("");
  const [images, handleImages] = useState([]);
  const [pagActual, setPagActual] = useState(1);
  const [totalPag, setTotalPag] = useState(1);

  useEffect(() => {
    if (consult === "") return;
    const callApi = async () => {
      const numXpage = 30;
      const key = process.env.REACT_APP_MYKEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${consult}&per_page=${numXpage}&page=${pagActual}`;
      const res = await (await fetch(url)).json();
      handleImages(res.hits);
      const calcularTotalPaginas = Math.ceil(res.totalHits / numXpage);
      setTotalPag(calcularTotalPaginas);
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    callApi();
  }, [consult, pagActual]);

  const paginaAnterior = () => {
    const newPag = pagActual - 1;
    if (newPag === 0) return;
    setPagActual(newPag);
  };

  const paginaSig = () => {
    const newPag = pagActual + 1;
    if (newPag > totalPag) return;
    setPagActual(newPag);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Busca imagenes</p>
        <Formulario setConsult={setConsult} />
      </div>
      <div className="row justify-content-center">
        {consult === "" ? null : (
          <p className="alert alert-info">
            {pagActual} - {totalPag}
          </p>
        )}
        <ListaImagenes images={images} />
        {pagActual === 1 ? null : (
          <button
            className="btn btn-info m-1"
            type="button"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}
        {pagActual === totalPag ? null : (
          <button className="btn btn-info m-1" onClick={paginaSig}>
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
