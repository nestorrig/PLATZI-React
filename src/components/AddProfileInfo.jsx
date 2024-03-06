import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export const AddProfileInfo = () => {
  const {
    name,
    setName,
    handleFileSelect,
    uploadImage,
    setImage,
    activeProfileForm,
    setActiveProfileForm,
    activeProfileFormSection,
    setActiveProfileFormSection,
  } = useContext(TodoContext);

  const [inputValue, setInputValue] = useState(name);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const modifieName = () => {
    setName(inputValue);
    setActiveProfileForm(false);
    setActiveProfileFormSection(0);
  };

  if (activeProfileForm)
    return (
      <div className="fixed flex flex-col items-center justify-center bg-[#000000a9] w-screen h-screen top-0 left-0 z-20">
        <div className="flex flex-col bg-light-bg-200 dark:bg-dark-bg-200 p-4 rounded-md w-80 auto gap-4">
          <button
            onClick={() => setActiveProfileForm(!activeProfileForm)}
            className="ml-auto w-10 h-10 flex justify-center items-center rounded-full  bg-light-bg-300 dark:bg-dark-bg-300"
          >
            <svg
              className="rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-light-bg-200 dark:fill-dark-bg-200"
                d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col items-strecth justify-center text-light-text-100 dark:text-dark-text-100">
            {activeProfileFormSection === 1 ? (
              <>
                <h2 className="text-2xl font-bold mb-8">Editar Nombre</h2>
                <input
                  type="text"
                  id="name"
                  placeholder="Capipepo Martinez"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="rounded-md p-2 dark:bg-dark-bg-300"
                />
                <button
                  onClick={modifieName}
                  className="mt-4 bg-light-primary-100 dark:bg-dark-primary-100 text-dark-text-100 p-2 rounded-md"
                >
                  Siguiente
                </button>
              </>
            ) : activeProfileFormSection === 2 ? (
              <>
                <h2 className="text-2xl font-bold mb-8">Imagen de perfil</h2>
                <input
                  type="file"
                  id="image"
                  onChange={handleFileSelect}
                  className="w-full border-2 border-light-bg-300 dark:border-dark-bg-300 rounded-md p-2"
                />
                <div className="flex items-stretch gap-4 mt-4">
                  <button
                    onClick={() => {
                      setImage("");
                      setActiveProfileForm(false);
                      setActiveProfileFormSection(0);
                    }}
                    className="w-1/2 border-2 border-light-primary-100 dark:border-dark-primary-100 text-light-text-100 dark:text-dark-text-100 p-2 rounded-md"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => {
                      uploadImage();
                      setActiveProfileForm(false);
                      setActiveProfileFormSection(0);
                    }}
                    className="w-1/2 bg-light-primary-100 dark:bg-dark-primary-100 text-dark-text-100 p-2 rounded-md"
                  >
                    Siguiente
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
};
