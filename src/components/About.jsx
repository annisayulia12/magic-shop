import icon from "../assets/icon.jpg";

export const About = () => {
  return (
    <section id="about" className="px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
  {/* Teks */}
  <div className="flex flex-col justify-center h-full">
    <span className="mb-4 px-3 py-1 border rounded-full inline-block text-sm w-max">
      About
    </span>
    <p className="text-gray-700 leading-relaxed mb-6">
      Magic is a fashion brand dedicated to timeless socks. We work with trusted artisans and use premium, sustainable materials to ensure quality in every stitch. More than comfort, our socks carry an air of elegance and mystery — designed for those who value style that lasts.
    </p>
    <div className="flex flex-wrap gap-4 mb-6">
      <span className="flex items-center text-green-500 text-sm">
        ✅ Collections that endure.
      </span>
      <span className="flex items-center text-green-500 text-sm">
        ✅ Timeless collections.
      </span>
    </div>
    <button className="px-5 py-2 bg-zinc-700 text-white rounded-lg w-max mb-8">
      Learn More →
    </button>

    {/* Statistik */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4 className="text-2xl font-bold">88%</h4>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <h4 className="text-2xl font-bold">10K+</h4>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>

  {/* Gambar */}
  <div className="flex justify-center items-center">
    <img src={icon} alt="About socks" className="rounded-xl w-75 h-auto" />
  </div>
</section>

  );
};
