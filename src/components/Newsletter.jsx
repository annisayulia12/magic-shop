export const Newsletter = () => {
  return (
    <section className="bg-gray-100 text-center py-12 px-6 mb-20">
      <h3 className="text-2xl font-semibold">Join Our Newsletter</h3>
      <p className="text-lg font-light text-gray-600 mt-2">
        <br />Be the first who will know our latest product, pepular stock, and big discount.
      </p>
      <div className="flex justify-center mt-6">
        <input
          type="email"
          placeholder="Enter your email here"
          className="px-4 py-2 rounded-l-full border"
        />
        <button className="px-6 py-2 bg-zinc-700 text-white rounded-r-full">Join Now</button>
      </div>
    </section>
  );
}
