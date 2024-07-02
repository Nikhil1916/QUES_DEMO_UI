/* eslint-disable react/prop-types */

const Cards = ({title, showWarning, orderCount,amount}) => {
  return (
    <div className="bg-white rounded-md shadow-lg p-2 m-4">
    <div className="text-gray-700">
      {title}
    </div>
    <div className="flex justify-between">
      <div>{amount}</div>
      {orderCount && <div>{orderCount} Order(s)</div>}
    </div>
    </div>
  )
}

export default Cards