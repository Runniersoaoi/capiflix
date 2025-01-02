import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const ElementContext = createContext();

export const useElementContext = () => useContext(ElementContext);

export const ElementProvider = ({ children }) => {
  const [elements, setElements] = useState(() => {
    const storedElements = localStorage.getItem("elements");
    return storedElements
      ? JSON.parse(storedElements)
      : [
          {
            id: 1,
            title: "Capibaras en la Selva",
            category: "Naturaleza",
            image:
              "https://www.junglexperiences.com/wp-content/smush-webp/2023/09/capibara-especie-exotica-scaled.jpg.webp",
            video: "https://youtu.be/i-c1aL3einA",
            description: "Capibaras explorando la frondosa selva tropical.",
          },
          {
            id: 2,
            title: "Baño de Capibaras",
            category: "Agua",
            image:
              "https://thumbs.dreamstime.com/b/ba%C3%B1o-de-capibara-lindo-el-bonito-la-granja-se-est%C3%A1-ba%C3%B1ando-234799325.jpg",
            video: "https://youtu.be/Ja-d577tOic",
            description:
              "Un grupo de capibaras disfrutando de un refrescante baño.",
          },
          {
            id: 3,
            title: "Capibaras en el Amanecer",
            category: "Paisajes",
            image:
              "https://www.ngenespanol.com/wp-content/uploads/2021/02/capibara-el-roedor-mas-amistoso-del-mundo-que-ayuda-a-otros-animales-capibaras.jpg",
            video: "https://www.youtube.com/shorts/pG-OgliIDuE?feature=share",
            description: "Capibaras pastando mientras el sol comienza a salir.",
          },
          {
            id: 4,
            title: "Juegos de Capibaras",
            category: "Comportamiento",
            image:
              "https://thumbs.dreamstime.com/b/capibara-jugando-en-el-espect%C3%A1culo-acu%C3%A1tico-zool%C3%B3gico-de-tailandia-muchos-capibars-juegan-espect%C3%A1culos-acu%C3%A1ticos-zool%C3%B3gicos-220013105.jpg",
            video: "https://www.youtube.com/shorts/vBRAsV4HH_U?feature=share",
            description: "Capibaras jóvenes jugando y corriendo en la pradera.",
          },
          {
            id: 5,
            title: "Capibaras y sus Amigos",
            category: "Comportamiento",
            image:
              "https://thumbs.dreamstime.com/b/una-familia-de-capibaras-descansa-en-la-parte-poco-profunda-del-r%C3%ADo-su-h%C3%A1bitat-natural-340796187.jpg",
            video: "https://www.youtube.com/shorts/diJGyIShnN4?feature=share",
            description: "Capibaras interactuando con otras especies.",
          },
          {
            id: 6,
            title: "El Rey de la Charca",
            category: "Agua",
            image:
              "https://live.staticflickr.com/3911/15193354852_9f3372563b_b.jpg",
            video: "https://www.youtube.com/shorts/VCazCtoAEo0?feature=share",
            description:
              "Un majestuoso capibara descansando en su charca favorita.",
          },
          {
            id: 7,
            title: "Capibaras bajo la Lluvia",
            category: "Naturaleza",
            image:
              "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicqUtDtZnPBEWwzxnYvRkwAut2Uwn5kf46ufsee7G7YE10Klvi9tBJhbLeWrtX6RrQcrzlsN4iQoDLPDK7qN6qDWbU-snmw_iy4E9rTuj-PWsIAfdNGNr0egXf_Tnn-kpBY7HDzafXuHv9/s1600/Capibara+ba%25C3%25B1andose.jpg",
            video: "https://www.youtube.com/shorts/2iAN-QN3TnY?feature=share",
            description: "Capibaras disfrutando de la lluvia en el bosque.",
          },
          {
            id: 8,
            title: "Atardecer en la Sabana",
            category: "Paisajes",
            image:
              "https://img.freepik.com/fotos-premium/brasil-capibara-roedor-mas-grande-junto-al-agua-al-atardecer-pantanal_517630-3676.jpg",
            video: "https://www.youtube.com/shorts/kCu9bHDEkKU?feature=share",
            description: "Capibaras descansando mientras el sol se pone.",
          },
          {
            id: 9,
            title: "Capibaras Curiosos",
            category: "Comportamiento",
            image:
              "https://www.ngenespanol.com/wp-content/uploads/2024/07/conociendo-a-los-capibaras-los-roedores-mas-grandes-y-amigables.jpg",
            video: "https://www.youtube.com/shorts/qCgfomahXGk?feature=share",
            description: "Capibaras investigando su entorno con curiosidad.",
          },
          {
            id: 10,
            title: "Familia de Capibaras",
            category: "Naturaleza",
            image:
              "https://inaturalist-open-data.s3.amazonaws.com/photos/10691626/large.jpg",
            video: "https://youtu.be/cdMcvJHBGpM",
            description: "Una familia de capibaras unida en la naturaleza.",
          },
          {
            id: 11,
            title: "Capibaras y el Río",
            category: "Agua",
            image:
              "https://dam.ngenespanol.com/wp-content/uploads/2021/08/capibaras2.jpg",
            video: "https://www.youtube.com/shorts/wUoiRVgtJVk?feature=share",
            description: "Capibaras navegando en un tranquilo río.",
          },
          {
            id: 12,
            title: "Capibaras bajo las Estrellas",
            category: "Paisajes",
            image:
              "https://files.worldwildlife.org/wwfcmsprod/images/Capybara_babies_Boliiva/story_carousel/6pdly7dvyp_Medium_WW261629.jpg",
            video: "https://youtu.be/GmPZUCd89p8",
            description: "Capibaras descansando bajo un cielo estrellado.",
          },
          {
            id: 13,
            title: "Capibaras y la Primavera",
            category: "Naturaleza",
            image:
              "https://www.ngenespanol.com/wp-content/uploads/2024/11/parques-y-reservas-donde-puedes-observar-y-convivir-con-capibaras.jpg",
            video: "https://www.youtube.com/shorts/kCu9bHDEkKU?feature=share",
            description:
              "Capibaras disfrutando de los colores de la primavera.",
          },
          {
            id: 14,
            title: "Capibaras Buceadores",
            category: "Agua",
            image:
              "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/01/01/capibarap.jpeg",
            video: "https://www.youtube.com/shorts/aMN6EqP-6HM?feature=share",
            description: "Capibaras explorando las profundidades de un lago.",
          },
          {
            id: 15,
            title: "Capibaras en el Horizonte",
            category: "Paisajes",
            image:
              "https://delamazonas.com/wp-content/uploads/2020/05/Capibara.jpg",
            video: "https://youtu.be/vOeliQfjUzA",
            description:
              "Capibaras contemplando el horizonte en un paisaje idílico.",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("elements", JSON.stringify(elements));
  }, [elements]);

  const addElement = (newElement) => {
    setElements([...elements, { ...newElement, id: Date.now() }]);
    toast.success("Elemento creado con éxito");
  };

  const updateElement = (id, updatedElement) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, ...updatedElement } : el))
    );
    toast.success("Elemento actualizado con éxito");
  };

  const deleteElement = (id) => {
    setElements(elements.filter((el) => el.id !== id));
    toast.success("Elemento eliminado con éxito");
  };

  return (
    <ElementContext.Provider
      value={{ elements, addElement, updateElement, deleteElement }}
    >
      {children}
    </ElementContext.Provider>
  );
};
