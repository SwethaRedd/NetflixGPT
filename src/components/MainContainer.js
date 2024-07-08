import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // early return - if (movies === null) return; or below line is right
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
