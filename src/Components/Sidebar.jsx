import { items } from "../Utilities/Constants";
const Sidebar = () => {
  return (
    <div className="fixed cursor-pointer w-[224px] h-screen overflow-x-auto bg-customSidebarBlue transition-transform transform duration-500 ease-in-out hidden sm:block">
      <div className="text-white p-2 m-2 ml-4 flex gap-2">
        <div>
          <img src="src/assets/avatar--MnDm4gU.png" width={"50px"} />
        </div>
        <div className="flex flex-col text-gray-300">
          <span>Dukaan Ui</span>
          <span className="underline">Visit Store</span>
        </div>
      </div>
      {items?.map((item, i) => {
        return (
          <div key={i} className="text-gray-300 p-2 m-2 ml-4 flex gap-2">
            {item.icon}
            {item?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
