export const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray-200 px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h1 className="font-serif text-xl">Magic Fashion</h1>
          <p className="mt-2">Come and get us to be part of timeless style</p>
          <button className="mt-6 bg-gray-100 text-black px-6 py-2 rounded-md shadow hover:bg-amber-950 hover:text-white transition">Shop Now</button>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Our Product</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-10">Help</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Term of Service</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-400">© 2025 Magic Fashion. All Rights Reserved</p>
    </footer>
  );
}
