import { useEffect, useState } from "react";
const Table = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMoreData(page);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page > 1) {
      loadMoreData(page);
    }
  }, [page]);

  const handleScroll = () => {
    console.log(loading);
    if(loading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => {
        return prevPage + 1;
      });
    }
  };

  const loadMoreData = async (page) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 500);
    });
    setLoading(true);
    const newData = await generateDummyData(page);
    setData((prevData) => [...prevData, ...newData]);
    setLoading(false);
  };

  const generateDummyData = async (page) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 1000);
    });
    const items = [];
    for (let i = 1; i <= 10; i++) {
      items.push({
        id: `Item ${(page - 1) * 10 + i}`,
        status:
          Math.round(Math.random() * 10) > 8
            ? "Successful"
            : Math.round(Math.random() * 10) < 3
            ? "Failed"
            : "Processing",
        transactionId: "131634495747",
        refundDate: Date.now() - Math.floor(Math.random() * 10000),
        orderAmount: "$" + Math.floor(Math.random() * 1000),
      });
    }
    return items;
  };

  return (
    <div>
      <table className="w-full">
        <thead className="text-sm font-light rounded uppercase text-black-400">
          <tr>
            <th className="pr-20 py-3 font-mono text-center">ORDER ID</th>
            <th className="pr-20 py-3 font-mono text-center">STATUS</th>
            <th className="pr-20 py-3 font-mono text-center">TRANSACTION ID</th>
            <th className="pr-20 py-3 font-mono text-center">REFUND DATE</th>
            <th className="pr-20 pt-3 text-right font-mono text-center">
              ORDER AMOUNT
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data?.map((data, i) => {
            return (
              <tr className="border-b" key={data.id + i}>
                <td className="pr-20 py-3 font-normal text-xs text-center">
                  {data.id}
                </td>
                <td className="pr-20 py-3 font-normal text-xs text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <div
                      className={`${
                        data.status == "Successful"
                          ? "bg-green-400"
                          : data.status == "Failed"
                          ? "bg-red-400"
                          : "bg-yellow-400"
                      } h-2 w-2 rounded-full`}
                    ></div>
                    <span>{data.status}</span>
                  </div>
                </td>
                <td className="pr-20 py-3 font-normal text-xs text-center">
                  {data.transactionId}
                </td>
                <td className="pr-20 py-3 font-normal text-xs text-center">
                  {data.refundDate}
                </td>
                <td className="pr-20 py-3 font-normal text-xs text-center">
                  {data.orderAmount}
                </td>
              </tr>
            );
          })}
          {loading &&
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((d, i) => {
              return (
                <tr className="border-b animate-pulse" key={`skeleton-${i}`}>
                  <td className="pr-20 py-3 font-normal text-xs text-center">
                    <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
                  </td>
                  <td className="pr-20 py-3 font-normal text-xs text-center">
                    <div className="flex items-center gap-1 justify-center">
                      <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
                      <span className="h-4 bg-gray-300 rounded w-16"></span>
                    </div>
                  </td>
                  <td className="pr-20 py-3 font-normal text-xs text-center">
                    <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
                  </td>
                  <td className="pr-20 py-3 font-normal text-xs text-center">
                    <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
                  </td>
                  <td className="pr-20 py-3 font-normal text-xs text-center">
                    <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
