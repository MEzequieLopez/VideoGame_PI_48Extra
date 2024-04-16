import Card from "../card/card.component"


function Cards({ allVideoGames }) {
    const videoGamesList = allVideoGames;
    
    return (
      <div>
        {videoGamesList?.map((videoGame) => (
          <Card key={videoGame.id} videoGames={videoGame} /> 
        ))}
      </div>
    );
  }
export default Cards