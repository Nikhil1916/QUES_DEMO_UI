import { list } from "../Utilities/Constants";

const Table = () => {
  return (
    <div>
      <table>
        <thead className="text-sm font-medium rounded uppercase text-black-400">
          <tr>
            <th scope="col" className="pr-20 py-3 font-medium">ORDER ID</th>
            <th scope="col" className="pr-20 py-3 font-medium">STATUS</th>
            <th scope="col" className="pr-20 py-3 font-medium">TRANSACTION ID</th>
            <th scope="col" className="pr-20 py-3 font-medium">REFUND DATE</th>
            <th scope="col" className="pr-20 py-3 text-right font-medium">ORDER AMOUNT</th>
          </tr>
        </thead>
        <tbody>
            {
                list?.map((data,i)=>{
                    return <tr className="border-b" key={data.id+i}>
                        <td className="pr-20 py-3 font-normal text-xs">{data.id}</td>
                        <td className="pr-20 py-3 font-normal text-xs">
                            <span className={``}></span>
                            <span>{data.status}</span>
                        </td>
                        <td className="pr-20 py-3 font-normal text-xs">{data.transactionId}</td>
                        <td className="pr-20 py-3 font-normal text-xs">{data.refundDate}</td>
                        <td className="pr-20 py-3 font-normal text-xs">{data.orderAmount}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
