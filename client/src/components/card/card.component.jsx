import { Link } from "react-router-dom";



function Card({ videoGames }) {
 const { id, name, image, genres } = videoGames;

 return (
    <div>
      <Link to={`/home/${id}`}>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </Link>
    </div>
 );
}

export default Card;