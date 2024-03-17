/* eslint-disable react/prop-types */

function TodoList({ children }) {
  return <ul className="py-14 px-4 w-full flex flex-col">{children}</ul>;
}

export { TodoList };
