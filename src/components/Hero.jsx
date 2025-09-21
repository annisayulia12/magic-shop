import heroImg from "../assets/hero.png";

export const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-[450px] md:h-[500px] object-cover"
      />

      {/* Overlay & Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold max-w-2xl">
          Uncover the Secret of Perfect Style.
        </h2>
        <p className="mt-3 italic text-base md:text-lg">
          Socks that combine elegance, comfort, and mystery.
        </p>
        <button className="mt-6 bg-amber-950 text-white px-6 py-2 rounded-md shadow hover:bg-gray-100 hover:text-black transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
