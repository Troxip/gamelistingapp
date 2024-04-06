export default function TrendingGames({ allGames }) {
  console.log(allGames);
  return (
    <>
      <h1 className="mt-4 font-bold text-[30px] dark:text-white dark: white">
        Trending Games
      </h1>
      <div className="gap-2 grid grid-cols-4 mt-4">
        {allGames.map((game) => (
          <div key={game.id} className="relative">
            <div className="bottom-0 absolute">
              <h1 className="font-bold text-white text-x">{game.name}</h1>
            </div>
            <img
              src={game.background_image}
              alt={`${game.name} image`}
              className="rounded-lg h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
