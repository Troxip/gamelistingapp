import GenreList from "../components/GenreList";

export default function Home() {
  return (
    <div className="grid grid-cols-4 px-5">
      <div className="md:block hidden h-full">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">Game List</div>
    </div>
  );
}
