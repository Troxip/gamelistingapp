import { useEffect } from "react";

export default function GamesByGenreId({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  });

  return (
    <>
      <h1 className="mt-12 mb-4 font-bold text-[30px] dark:text-white">
        Popular Games
      </h1>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[80%]">
        {gameList.map((game) => (
          <div key={game.id} className="bg-slate-500 p-2 rounded-md">
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-t-md h-[80%] object-cover"
            />
            <h2 className="mt-2 font-bold text-[12px] text-white">
              {game.name}
              <span className="bg-green-100 ml-2 p-1 rounded-sm font-medium text-[10px] text-green-700">
                {game.metacritic}
              </span>
            </h2>
            <div>
              ⭐{game.rating}💬{game.reviews_count}🔥{game.suggestions_count}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
