import { useElementContext } from "../context/ElementContext";
import ElementCard from "./ElementCard";

const Home = () => {
  const { elements } = useElementContext();

  const categories = [...new Set(elements.map((el) => el.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#A8D5BA] text-[#2E2E2E] p-4 sm:p-8 rounded-lg mb-8 border-green-600 border">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-2">
          Bienvenido a CapiFlix
        </h1>
        <p className="text-lg sm:text-base font-sans">
          Descubre una serie de videos de los roedores del momento
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#4A4A4A]">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {elements
              .filter((el) => el.category === category)
              .map((element) => (
                <ElementCard key={element.id} element={element} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
