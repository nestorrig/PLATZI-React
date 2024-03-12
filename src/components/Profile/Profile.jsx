import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const Profile = () => {
  const {
    percentage,
    gradientColors,
    image,
    name,
    setActiveProfileForm,
    setActiveProfileFormSection,
    totalTodos,
  } = useContext(TodoContext);

  const gradientStyle = {
    backgroundImage: `conic-gradient(from 1deg at 50% 50%, ${gradientColors[0]} ${percentage}%, ${gradientColors[1]}  ${percentage}%)`,
  };

  return (
    <>
      <div
        className={`w-32 h-32 p-[2px] rounded-full rotate-[135deg] ${
          totalTodos === 0
            ? "border-2 border-light-bg-200 dark:border-dark-bg-200"
            : ""
        }`}
        style={gradientStyle}
      >
        <div className="relative bg-light-bg-300 dark:bg-dark-bg-300 w-full h-full rounded-full rotate-[225deg]">
          <figure className="w-full h-full rounded-full p-1">
            {image && (
              <img
                className="w-full h-full object-cover rounded-full"
                src={`data:image/png;base64,${image}`}
                alt="Uploaded"
              />
            )}
          </figure>
          <button
            className={`absolute z-10 bottom-0 right-0 w-8 h-8 grid place-content-center bg-light-primary-100 dark:bg-dark-primary-100 rounded-full shadow-button cursor-pointer transition-all ease-in-out duration-300 transform active:scale-75`}
            onClick={() => {
              setActiveProfileForm(true);
              setActiveProfileFormSection(2);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <article>
        <h2 className="text-2xl font-bold mt-4">
          {name ? name : "Agrega un Nombre"}
        </h2>
        <button
          className="text-xs text-light-text-200 dark:text-dark-text-200 underline"
          onClick={() => {
            setActiveProfileForm(true);
            setActiveProfileFormSection(1);
          }}
        >
          Change your name
        </button>
      </article>
    </>
  );
};
