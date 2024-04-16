import { Link } from "react-router-dom";
import  SearchBar  from "../searchBar/searchBar.component.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { getAllGenres,videogamesByGenre,videogamesByOrder,videogameByApiOrDb } from "../../redux/actions";
import { getAllGenres } from "../../redux/actions";

function NavBar({ handlerChange, handlerSubmit }) {

const dispatch = useDispatch()
const allGenres = useSelector((state) => state.allGenres);
console.log(allGenres);

// const handleFiltrosOrigin = ({target}) => {
//   dispatch(videogameByApiOrDb(target.value))
// }
// const handleFiltrosOrden = ({target}) => {
//   dispatch(videogamesByOrder(target.value))
// }
// const handleFiltroGenre = ({target}) => {
//   dispatch(videogamesByGenre(target.value))
// }

  useEffect(() => {
    const getGenres = async () => {
      try {
        dispatch( getAllGenres());
      } catch (error) {
        console.log(error.message);
      }
    }
    getGenres()
  }, [dispatch]);



  return (
    <div>
      <nav>
      <h1>VideoGame App</h1>
      <Link to="/">
      <button>Log out </button>
      </Link>
      {<SearchBar handlerChange={handlerChange} handlerSubmit={handlerSubmit} />}
    </nav>
    <div className="forGenres">
      <label>For Genres:</label>
      <select name="filtro"  id="filtro" defaultValue="sin filtro" onChange={""} >
      <option value="sin filtro" key="sin filtro">Sin filtro</option>
           
      { 
        allGenres.map((genre, index) => (
          <option key={index} name={index}  >{genre}</option>
        ))
      }
      </select>
    </div>
    <div className="filtroAZ">
                <label>Orden: </label>
                <select name="filtro" id="filtro" defaultValue="sin filtro" onChange={""}>
                    <option value="sin filtro" key="sin filtro">Sin filtro</option>
                    <option value="a-z" key="a-z" >Ascendente</option>
                    <option value="z-a" key="z-a">Descendente</option>
                </select>
            </div>
            <div className="filtroDBoAPI">
                <label>api/db: </label>
                <select name="filtro" id="filtro" defaultValue="ambos" onChange={""}>
                    <option value="ambos" key="ambos">Ambos</option>
                    <option value="API" key="API" >API</option>
                    <option value="DB" key="DB">DB</option>
                </select>
            </div>
    </div>
    
  );
}

export default NavBar;
