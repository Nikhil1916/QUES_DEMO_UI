import Table from "./Table";

const TableBody = () => {
  return (
    <div className="m-4 bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <input
          placeholder="Search features, tutorils etc"
          className="p-2 w-[24rem]  rounded-md border border-gray"
        />
        <div className="flex">
          <div className="p-2 border border-gray-200 rounded-md text-gray-500 flex items-center gap-2">
            <span className="font-semibold">Sort</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
          <div className="p-2 ml-2 mr-2 border border-gray-200 rounded-md text-gray-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default TableBody;
