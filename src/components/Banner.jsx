export default function Banner({ gameBanner = [] }) {
  console.log(gameBanner);
  return (
    <figure className="relative">
      <div className="bottom-0 absolute bg-gradient-to-t from-slate-900 to-transparent p-5 w-full">
        <h2 className="font-bold text-white text-xl">{gameBanner.name}</h2>
        <button className="bg-blue-700 px-2 py-1 rounded-lg text-white">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        alt="Game Banner"
        className="object-top rounded-xl w-full md:h-[320px] object-cover"
      />
    </figure>
  );
}
