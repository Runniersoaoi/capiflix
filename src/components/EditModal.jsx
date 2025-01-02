import { useForm } from "react-hook-form";
import { useElementContext } from "../context/ElementContext";

const EditModal = ({ element, onClose }) => {
  const { updateElement } = useElementContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: element,
  });

  const onSubmit = (data) => {
    if (window.confirm("¿Estás seguro de que quieres guardar estos cambios?")) {
      updateElement(element.id, data);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-4 sm:p-8 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#2E2E2E]">
          Editar Elemento
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-[#4A4A4A] mb-2">Título</label>
            <input
              {...register("title", { required: "Este campo es requerido" })}
              className="w-full p-2 border rounded"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-[#4A4A4A] mb-2">Categoría</label>
            <input
              {...register("category", { required: "Este campo es requerido" })}
              className="w-full p-2 border rounded"
            />
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-[#4A4A4A] mb-2">Imagen URL</label>
            <input
              {...register("image", { required: "Este campo es requerido" })}
              className="w-full p-2 border rounded"
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-[#4A4A4A] mb-2">Video URL</label>
            <input
              {...register("video", { required: "Este campo es requerido" })}
              className="w-full p-2 border rounded"
            />
            {errors.video && (
              <span className="text-red-500 text-sm">
                {errors.video.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-[#4A4A4A] mb-2">Descripción</label>
            <textarea
              {...register("description", {
                required: "Este campo es requerido",
              })}
              className="w-full p-2 border rounded"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              type="submit"
              className="bg-[#8C9A74] hover:bg-[#A8D5BA] text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
            >
              Guardar Cambios
            </button>
            <button
              onClick={onClose}
              className="bg-[#FFA785] hover:bg-[#FF8C61] text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
