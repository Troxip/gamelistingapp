import { useEffect, useState } from "react";
import { getGenreList } from "../Services/GlobalApi";

export default function GenreList() {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenreList = async () => {
      try {
        const response = await getGenreList();
        setGenreList(response.data.results);
      } catch (error) {
        console.error("Error fetching genre list:", error);
      }
    };

    fetchGenreList();
  }, []);
  console.log(genreList);

  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white">Genres</h2>
      {genreList.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-2 hover:bg-slate-300 hover:dark:bg-gray-600 mb-2 p-2 rounded-lg hover:font-bold transition-all duration-200 cursor-pointer ease-out group"
        >
          <img
            src={item.image_background}
            alt="Game image"
            className="group-hover:scale-105 rounded-lg w-12 h-12 transition-all duration-200 ease-out object-cover"
          />
          <h3 className="text-[18px] dark:text-white">{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
