import { useContext } from "react";
import { TodoContext } from "../components";

export function Loader() {
  const { loading } = useContext(TodoContext);
  return (
    loading && (
      <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center">
        <div className="loader"></div>
      </div>
    )
  );
}
