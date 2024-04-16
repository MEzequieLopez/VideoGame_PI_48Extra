import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres } from "../../redux/actions";


const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);

  const [post, setPost] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    launchDate: "",
    rating: 0,
    genreId: [],
    origin: "DB",
  });

  
  const [uniquePlatforms, setUniquePlatforms] = useState([]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSummit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/videogames", post);
      alert("Carga exitosa");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSelector = (event) => {
    const { value } = event.target;
    const changeNumber = Number(value);
    if (!post.genreId.includes(value)) {
      if (value === "" || value === "--") {
        setPost({ ...post });
      }
      setPost({
        ...post,
        genreId: [...post.genreId, changeNumber],
      });
    }
  };
  const getPlataforsClear = async () => {
    try {
      const array = [];
      const response = await axios.get("http://localhost:3001/videogames");
      const responseClear = response.data;
      responseClear.forEach((data) => {
        array.push(...data.platforms);
      });
      const uniqueArray = [...new Set(array)];
      return uniqueArray;
    } catch (error) {}
  };

  const handleSelectorP = (event) => {
    const { value } = event.target;
    const platfomsUnico = uniquePlatforms[value];

    // Verifica si la plataforma seleccionada es válida y no está vacía
    if (platfomsUnico !== "" && platfomsUnico !== "--") {
      // Actualiza el estado post con la plataforma seleccionada
      setPost({
        ...post,
        platforms: platfomsUnico, // Asigna la plataforma seleccionada directamente
      });
    }
  };
  const handleDeletePlatforms = (event, platformDelete) => {
    event.stopPropagation();
    if (platformDelete)
      setPost({
        ...post,
        platforms: "",
      });
  };
  const handleDeleteGenre = (event, genreDelete) => {
    event.stopPropagation();
    const newGenres = post.genreId.filter((genre) => genre !== genreDelete);
    setPost({
      ...post,
      genreId: newGenres,
    });
  };

  useEffect(() => {
    const fetchPlatforms = async () => {
      const platforms = await getPlataforsClear();
      setUniquePlatforms(platforms);
    };
    fetchPlatforms();
  }, []);

  useEffect(() => {
    const getGenres = async () => {
      try {
        dispatch(getAllGenres());
      } catch (error) {
        console.log(error.message);
      }
    };
    getGenres();
  }, [dispatch]);

  return (
    <div>
      <h1>FORMULARIO</h1>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <form onSubmit={handleSummit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            placeholder="image"
            name="image"
            id="image"
            onChange={handleChange}
          />
           
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="description"
            name="description"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="launchDate">Launch Date:</label>
          <input
            type="date"
            placeholder="launchDate"
            name="launchDate"
            id="launchDate"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            placeholder="rating"
            name="rating"
            id="rating"
            onChange={handleChange}
          />
        </div>
        <div className="formsSelect">
          <select name="genre" id="genre" value="" onChange={handleSelector}>
            <option value="" disabled hidden>
              --
            </option>

            {allGenres.map((genre, index) => (
              <option key={index} value={index}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="GenresSelect">
          {post.genreId.map((genre) => (
            <div className="genresButton" key={genre}>
              <button onClick={(event) => handleDeleteGenre(event, genre)}>
                {allGenres[genre]}
              </button>
            </div>
          ))}
        </div>
        <div className="formsSelect">
          <select
            name="platform"
            id="platform"
            value=""
            onChange={handleSelectorP}>
            <option value="" disabled hidden>
              --
            </option>
            {uniquePlatforms.map((platform, index) =>
              platform.length > 1 ? (
                <option key={index} value={index}>
                  {platform}
                </option>
              ) : null
            )}
          </select>
        </div>
        {post.platforms && (
          <div className="platformsButton" key={post.platforms}>
            <button
              onClick={(event) => handleDeletePlatforms(event, post.platforms)}
            >
              {post.platforms}
            </button>
          </div>
        )}
        <hr />
        <div className="buttonSubmit">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
