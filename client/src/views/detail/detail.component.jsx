
import { useEffect } from "react";
import { getVideoGameByDetail } from "../../redux/actions";
import { useDispatch, useSelector, } from "react-redux";
import { useParams } from "react-router-dom";
import GameDetail from "../../components/detail/detail.component";

function Detail() {
  const { id } =  useParams()
  const dispatch = useDispatch();
  const usersCopy = useSelector((state) => state.videoGameDetail);
  useEffect(() => {
    dispatch(getVideoGameByDetail(id));
  }, [dispatch, id]);
  
  return (
    <div>
    {usersCopy?.map((videoGame) => ( 
        <GameDetail key={id} videoGames={videoGame} />
    ))}
    </div>
  );
}

export default Detail;