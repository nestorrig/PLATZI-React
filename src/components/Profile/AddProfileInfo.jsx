import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import { NameForm, ImageForm } from "./";

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
    setErrorMessage,
    errorMessage,
  } = useContext(TodoContext);

  const [inputValue, setInputValue] = useState(name);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNameSubmit = () => {
    if (inputValue === "") {
      setErrorMessage("Escribe un nombre");
      return;
    }
    if (inputValue.length > 40) {
      setErrorMessage("El nombre es muy largo, no mas de 30 caracteres");
      return;
    }
    setName(inputValue);
    closeForm();
    setInputValue("");
  };

  const handleImageSubmit = async () => {
    try {
      await uploadImage();
      closeForm();
    } catch (error) {
      console.log("image", errorMessage);
    }
  };

  const handleImageDelete = () => {
    setImage("");
    closeForm();
  };

  const closeForm = () => {
    setErrorMessage("");
    setActiveProfileForm(false);
    setActiveProfileFormSection(0);
  };

  const formComponents = {
    1: (
      <NameForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={handleNameSubmit}
      />
    ),
    2: (
      <ImageForm
        onFileSelect={handleFileSelect}
        onSubmit={handleImageSubmit}
        onDelete={handleImageDelete}
      />
    ),
  };

  if (activeProfileForm)
    return (
      <div className="fixed flex flex-col items-center justify-center bg-[#000000a9] w-screen h-screen top-0 left-0 z-20">
        <div className="flex flex-col bg-light-bg-200 dark:bg-dark-bg-200 p-4 rounded-md w-80 auto gap-4">
          <button
            onClick={closeForm}
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
            {formComponents[activeProfileFormSection]}
          </div>
        </div>
      </div>
    );
};
