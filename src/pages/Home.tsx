import home_image from "../images/home.jpg";

const Home = () => {
  return (
    <figure className="w-2/3 mx-auto relative mt-12">
      <figcaption className="pl-24 pr-24 pt-6 pb-6 backdrop-blur-sm bg-white/30 rounded-2xl absolute top-8 left-12 text-white font-bold text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        Home Page - Ticket shopping app
      </figcaption>
      <img className="w-full rounded-lg" src={home_image} alt="wallpaper" />
    </figure>
  );
};

export default Home;
