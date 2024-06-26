import GamesByGenreId from "./GamesByGenreId";

export default function TrendingGames({ allGames }) {
  console.log(allGames);
  return (
    <>
      <h1 className="md:block hidden mt-4 font-bold text-[30px] dark:text-white dark: white">
        Trending Games
      </h1>
      <div className="gap-3 hidden md:grid md:grid-cols-3 lg:grid-cols-4 mt-4">
        {allGames.map(
          (game, index) =>
            index < 4 && (
              <div
                key={game.id}
                className="hover:scale-105 transition-all duration-300 cursor-pointer ease-in-out"
              >
                <img
                  src={game.background_image}
                  alt={`${game.name} image`}
                  className="rounded-t-xl h-64 object-cover"
                />
                <div className="bg-slate-500 p-2 rounded-b-lg w-full h-20 text">
                  <h1 className="font-bold text-white text-x">{game.name}</h1>
                </div>
              </div>
            )
        )}
      </div>
      <GamesByGenreId gameList={allGames} />
    </>
  );
}
