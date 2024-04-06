import { useEffect, useState } from "react";
import { getAllGames } from "../Services/GlobalApi";
import GenreList from "../components/GenreList";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";

export default function Home() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const getAllGamesList = async () => {
      const res = await getAllGames();
      setAllGames(res.data.results);
    };

    getAllGamesList();
  }, []);

  return (
    <div className="grid grid-cols-4 px-5">
      <div className="md:block hidden h-full">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        <Banner gameBanner={allGames[0]} />
        <TrendingGames allGames={allGames} />
      </div>
    </div>
  );
}
