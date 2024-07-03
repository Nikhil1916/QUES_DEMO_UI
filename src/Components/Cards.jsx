/* eslint-disable react/prop-types */

const Cards = ({title, orderCount,amount, isBlue=false}) => {
  return (
    <div className={` rounded-md shadow-lg m-4 ${isBlue ? 'bg-blue-900 pt-2' : 'bg-white p-2 h-[5.5rem]'}`}>
        <div className={`flex gap-2 items-center p-2 ${isBlue ? 'text-white' : 'text-gray-700' }`}>
          <span>{title} </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        <div className="flex justify-between pl-2 pb-2 pr-2">
          <div className={`${isBlue ? 'text-white' : 'text-gray-700' }`}>{amount}</div>
          {orderCount && <div className={ `${isBlue ? 'text-white' : 'text-blue-700' } underline`}>{orderCount} Order(s)</div>}
        </div>
      {
          isBlue  ?  (<div className={`${isBlue ? 'rounded-b-md flex justify-between p-2 text-white bg-blue-800' : ''}`}>
            <p>Next payout date:</p>
            <p>Today, 04:00 PM</p>
          </div>):""
      }
    </div>
  );
}

export default Cards