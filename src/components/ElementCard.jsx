import { useState } from "react";
import { useElementContext } from "../context/ElementContext";
import EditModal from "./EditModal";

const ElementCard = ({ element }) => {
  const { deleteElement } = useElementContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este elemento?")
    ) {
      deleteElement(element.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={element.image}
        alt={element.title}
        className="w-full h-40 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2E2E2E]">
          {element.title}
        </h3>
        <p className="text-sm sm:text-base font-sans text-[#4A4A4A] mb-4">
          {element.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="bg-[#8C9A74] hover:bg-[#A8D5BA] text-white font-semibold py-2 px-4 rounded transition duration-300 w-full sm:w-auto text-base"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#FFA785] hover:bg-[#FF8C61] text-white font-semibold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
          >
            Eliminar
          </button>
        </div>
      </div>
      {isEditModalOpen && (
        <EditModal
          element={element}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ElementCard;
