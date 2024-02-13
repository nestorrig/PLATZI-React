/* eslint-disable react/prop-types */
import "./styles/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  const handleClick = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <button className="CreateTodoButton" onClick={handleClick}>
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
