import { Home, Loader, Menu, NewTask } from "../pages";

function AppUI() {
  return (
    <div className="overflow-hidden lg:flex">
      <Menu />
      <div className="w-full">
        <Home />
        <NewTask />
        <Loader />
      </div>
    </div>
  );
}
export { AppUI };
