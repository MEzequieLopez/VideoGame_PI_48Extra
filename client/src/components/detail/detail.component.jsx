
import { Link } from "react-router-dom";
function GameDetail({ videoGames }) {
    const { name, id, image, platforms, description, launchDate, genres, rating } = videoGames;
  
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <ul>
          {typeof platforms === "string" ? (
            <li key={`platform-${id}`}>{platforms}</li>
          ) : (
            platforms.map((platform, index) => (
              <li key={`platform-${id}-${index}`}>{platform}</li>
            ))
          )}
          <li key={`description-${id}`}>{description}</li>
          <li key={`launchDate-${id}`}>{launchDate}</li>
          <li>{id}</li>
          <li key={`rating-${id}`}>{rating}</li>
          {genres.map((genre, index) => (
            <li key={`genre-${id}-${index}`}>{genre.name}</li>
          ))}
        </ul>
        <Link to="/home"><button>back</button></Link>
      </div>
    );
}
  export default GameDetail;