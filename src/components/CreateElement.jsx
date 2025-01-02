import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useElementContext } from "../context/ElementContext";

const CreateElement = () => {
  const { addElement } = useElementContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addElement(data);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2E2E2E] text-center">
        Crear Nuevo Elemento
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto space-y-6"
      >
        <div>
          <label className="block text-[#4A4A4A] mb-2">Título</label>
          <input
            {...register("title", { required: "Este campo es requerido" })}
            className="w-full p-2 border rounded"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
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
            <span className="text-red-500 text-sm">{errors.image.message}</span>
          )}
        </div>
        <div>
          <label className="block text-[#4A4A4A] mb-2">Video URL</label>
          <input
            {...register("video", { required: "Este campo es requerido" })}
            className="w-full p-2 border rounded"
          />
          {errors.video && (
            <span className="text-red-500 text-sm">{errors.video.message}</span>
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
        <button
          type="submit"
          className="bg-[#F8E9A1] hover:bg-[#FFA785] text-[#2E2E2E] font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
        >
          Crear Elemento
        </button>
      </form>
    </div>
  );
};

export default CreateElement;
