import { list } from "../Utilities/Constants";

const Table = () => {
  return (
    <div>
      <table className="w-full">
        <thead className="text-sm font-light rounded uppercase text-black-400">
          <tr>
            <th  className="pr-20 py-3 font-mono text-center">ORDER ID</th>
            <th  className="pr-20 py-3 font-mono text-center">STATUS</th>
            <th  className="pr-20 py-3 font-mono text-center">TRANSACTION ID</th>
            <th  className="pr-20 py-3 font-mono text-center">REFUND DATE</th>
            <th  className="pr-20 pt-3 text-right font-mono text-center">ORDER AMOUNT</th>
          </tr>
        </thead>
        <tbody className="w-full">
            {
                list?.map((data,i)=>{
                    return <tr className="border-b" key={data.id+i}>
                        <td className="pr-20 py-3 font-normal text-xs text-center">{data.id}</td>
                        <td className="pr-20 py-3 font-normal text-xs text-center">
                        <div className="flex items-center gap-1 justify-center">
                            <div className={`${data.status == 'Successful' ? 'bg-green-400' : data.status == 'Failed' ? 'bg-red-400' : 'bg-yellow-400'} h-2 w-2 rounded-full`}></div>
                            <span>{data.status}</span>
                        </div>
                        </td>
                        <td className="pr-20 py-3 font-normal text-xs text-center">{data.transactionId}</td>
                        <td className="pr-20 py-3 font-normal text-xs text-center">{data.refundDate}</td>
                        <td className="pr-20 py-3 font-normal text-xs text-center">{data.orderAmount}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
