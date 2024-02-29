/* eslint-disable react/prop-types */
import { useContext } from "react";
// import "./styles/CreateTodoButton.css";
import { TodoContext } from "./TodoContext";

function CreateTodoButton() {
  const { setOpenModal, openModal } = useContext(TodoContext);
  return (
    <>
      <button
        className={`fixed z-10 bottom-4 right-4 w-16 h-16 grid place-content-center bg-light-primary-100 dark:bg-dark-primary-100 rounded-full shadow-button cursor-pointer transition-all ease-in-out duration-300 transform active:scale-75 ${
          openModal ? "" : ""
        }`}
        onClick={() => {
          setOpenModal((prevState) => !prevState);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
          ></path>
        </svg>
      </button>
    </>
  );
}

export { CreateTodoButton };
