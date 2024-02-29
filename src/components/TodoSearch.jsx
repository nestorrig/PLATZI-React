/* eslint-disable react/prop-types */

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="px-2 py-6 flex">
      <input
        className="dark:text-dark-text-100 text-light-text-100 relative p-4 w-full m-auto max-w-xl bg-light-bg-200 dark:bg-dark-bg-200 rounded-full outline-none focus:ring-2 focus:ring-light-bg-300 dark:focus:ring-dark-bg-300 focus:ring-opacity-50 placeholder-light-text-200 dark:placeholder-dark-text-200 placeholder-opacity-50"
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
