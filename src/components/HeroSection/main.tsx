import { Card } from "../index";

const Main = () => {
  return (
    <div className="max-w-screen-xl py-10 pb-20 px-4 mx-auto animate__animated animate__fadeInUp animate__delay-4s">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold font-outfit">Layanan Kami</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Jelajahi berbagai fitur pelayanan publik kami yang mudah dan cepat.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Main;
