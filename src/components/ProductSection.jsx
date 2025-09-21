import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import image1 from "../assets/item1.jpg";
import image2 from "../assets/item2.jpg";
import image3 from "../assets/item3.jpg";
import image4 from "../assets/item4.jpg";
import image5 from "../assets/item5.jpg";
import image6 from "../assets/item6.jpg";
import image7 from "../assets/item7.jpg";
import image8 from "../assets/item8.jpg";


// Data dummy
const newArrival = [
  { id: 1, name: "Eclipse", desc: "A classic that never fades", price: "$8.99", img: image1 },
  { id: 2, name: "Aurora", desc: "Sustainability with style", price: "$12.49", img: image2 },
  { id: 3, name: "Eclipse", desc: "Softness you can feel, elegance you can see", price: "$12.49", img: image3 },
  { id: 4, name: "Velour", desc: "Sustainability with style", price: "$12.49", img: image4 },
  { id: 5, name: "Obsidian", desc: "A classic that never fades", price: "$12.49", img: image5 },
  { id: 6, name: "Velour", desc: "Softness you can feel", price: "$12.49", img: image7 },
];

const recommended = [
  { id: 1, name: "Obsidian", desc: "Strength meets sophistication", price: "$12.49", img: image5 },
  { id: 2, name: "Aurora", desc: "Sustainability with style", price: "$12.49", img: image6 },
  { id: 3, name: "Eclipse", desc: "A classic that never fades", price: "$8.99", img: image7 },
  { id: 4, name: "Velour", desc: "Softness you can feel", price: "$12.49", img: image8 },
  { id: 5, name: "Obsidian", desc: "Softness you can feel", price: "$12.49", img: image3 },
  { id: 6, name: "Velour", desc: "Softness you can feel", price: "$12.49", img: image2 },
];

export const ProductSection = () => {
  return (
    <div className="px-8 py-12">
     {/* New Arrival */}
        <h2 className="text-center font-bold text-xl mb-6">NEW ARRIVAL</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
        {newArrival.map((product) => (
            <div key={product.id} className="min-w-[200px] border p-4 rounded-lg text-center flex-shrink-0">
            <img src={product.img} alt={product.name} className="w-full h-80 object-cover mb-4 rounded-lg" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.desc}</p>
            <p className="mt-2 font-bold">{product.price}</p>
            <div className="flex justify-center gap-4 mt-2 text-zinc-700">
                <button className="px-2 py-1 border-zinc-700 rounded-full hover:bg-zinc-700 hover:text-white transition">
                <FaHeart size={18}/>
                </button>
                <button className="px-2 py-1 border-zinc-700 rounded-full hover:bg-zinc-700 hover:text-white transition">
                <FaShoppingCart size={18}/>
                </button>
            </div>
            </div>
        ))}
        </div>


      {/* Recommended For You */}
        <h2 className="text-center font-bold text-xl mb-6">RECOMENDED FOR YOU</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
        {recommended.map((product) => (
            <div key={product.id} className="min-w-[200px] border p-4 rounded-lg text-center flex-shrink-0">
            <img src={product.img} alt={product.name} className="w-full h-80 object-cover mb-4 rounded-lg" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.desc}</p>
            <p className="mt-2 font-bold">{product.price}</p>
            <div className="flex justify-center gap-4 mt-2 text-zinc-700">
                <button className="px-2 py-1 border-zinc-700 rounded-full hover:bg-zinc-700 hover:text-white transition">
                <FaHeart size={18}/>
                </button>
                <button className="px-2 py-1 border-zinc-700 rounded-full hover:bg-zinc-700 hover:text-white transition">
                <FaShoppingCart size={18}/>
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};
