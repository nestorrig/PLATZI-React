/* eslint-disable react/prop-types */

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="px-2 py-6 flex">
      <input
        className="dark:text-dark-normal-text relative p-4 w-full m-auto max-w-xl bg-completed-task dark:bg-dark-completed-task text-normal-text rounded-full outline-none focus:ring-2 focus:ring-completed-task focus:ring-opacity-50 placeholder-normal-text dark:placeholder-dark-normal-text placeholder-opacity-50"
        placeholder="Cortar cebolla"
        type="text"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
