/* eslint-disable react/prop-types */

function TodoList({ children }) {
  return <ul className="py-14 pr-7 pl-4 w-full flex flex-col">{children}</ul>;
}

export { TodoList };
