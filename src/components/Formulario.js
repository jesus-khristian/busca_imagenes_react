import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ setConsult }) => {
  const [termOfSearch, setTermOfSearch] = useState("");
  const [error, setError] = useState(false);

  const searchImage = (e) => {
    e.preventDefault();
    if (termOfSearch.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setConsult(termOfSearch);
  };

  return (
    <form onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca imagenes, ejemplo: tecnologia o deportes"
            onChange={(e) => setTermOfSearch(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            value="Buscar"
            className="form-control form-control-lg btn btn-primary btn-lg"
          />
        </div>
       
        {error ? <Error message="Campo requerido" /> : null}
      </div>
    </form>
  );
};

Formulario.propTypes = {
  setConsult: PropTypes.func.isRequired,
};

export default Formulario;
