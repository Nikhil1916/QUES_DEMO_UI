/* eslint-disable react/prop-types */
const Quills = ({color, text}) => {
  return (
    <div className={`${color!="white" ? 'bg-blue-900 text-white': 'bg-[#f7f7f7] text-gray-400'} p-2 pt-2 pb-2 text-xs ml-4 rounded-full`}>
        {text}
    </div>
  )
}

export default Quills