import "./App.css";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Quills from "./Components/Quills";
import Sidebar from "./Components/Sidebar";
import TableBody from "./Components/TableBody";

function App() {
  return (
    <>
      <div className="flex items-start">
        <Sidebar />
        <div className="flex-1 ml-0 sm:ml-56">
          <Header />
          <div className="pt-20">
          <h1 className="font-medium m-2 text-xl ml-4">Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Cards
              title={"Amount Pending"}
              amount={"$92,300"}
              orderCount={"23"}
              isBlue="true"
            />
            <Cards
              title={"Amount Pending"}
              amount={"$92,300"}
              orderCount={"23"}
            />
            <Cards title={"Amount Pending"} amount={"$92,30,000"} />
          </div>
          <h1 className="font-medium m-2 text-xl ml-4">
            Transactions | This Month
          </h1>
          <div className="flex">
            <Quills text="Payouts (22)" />
            <Quills text={"Refunds (6)"} color="white" />
          </div>
          <TableBody/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
