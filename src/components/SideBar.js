import { useEffect, useState } from "react";
import { RxDashboard, RxPerson, RxSection, RxPieChart } from "react-icons/rx";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const [page, pageset] = useState("dashboard");
  let navigate = useNavigate();
  useEffect(() => {
    getpageurl();
  }, []);
  const getpageurl = () => {
    var location = window.location.href;
    var part = location.split("//").pop().split("/")[1];
    pageset(part);
  };
  return (
    <div className="col-span-1 pt-28 overflow-y-auto">
      <div className="flex flex-col py-8">
        {page === "dashboard" ? (
          <div className="flex flex-row my-4">
            <RxDashboard size={24} className="text-blue-900" />
            <text
              className="text-lg mx-2 text-blue-900 font-medium"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </text>
          </div>
        ) : (
          <div className="flex flex-row my-4">
            <RxDashboard size={24} className="text-gray-500" />
            <text
              className="text-lg mx-2 text-gray-500 hover:font-medium hover:text-blue-800"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </text>
          </div>
        )}
        {page === "users" ? (
          <div className="flex flex-row my-4">
            <RxPerson size={24} className="text-blue-900" />
            <text
              className="text-lg mx-2 text-blue-900 font-medium"
              onClick={() => navigate("/users")}
            >
              Users
            </text>
          </div>
        ) : (
          <div className="flex flex-row my-4">
            <RxPerson size={24} className="text-gray-500" />
            <text
              className="text-lg mx-2 text-gray-500 hover:font-medium hover:text-blue-800"
              onClick={() => navigate("/users")}
            >
              Users
            </text>
          </div>
        )}
        {page === "jobposting" ? (
          <div className="flex flex-row my-4">
            <RxSection size={24} className="text-blue-900" />
            <text
              className="text-lg mx-2 text-blue-900 font-medium"
              onClick={() => navigate("/jobposting")}
            >
              Job Posting
            </text>
          </div>
        ) : (
          <div className="flex flex-row my-4">
            <RxSection size={24} className="text-gray-500" />
            <text
              className="text-lg mx-2 text-gray-500 hover:font-medium hover:text-blue-800"
              onClick={() => navigate("/jobposting")}
            >
              Job Posting
            </text>
          </div>
        )}

        <div className="flex flex-row my-4">
          <RxPieChart size={24} className="text-gray-500" />
          <text className="text-lg mx-2 text-gray-500 hover:font-medium hover:text-blue-800">
            Transactions
          </text>
        </div>
        <div className="flex flex-row my-4">
          <AiOutlineUserAdd size={24} className="text-gray-500" />
          <text
            className="text-lg mx-2 text-gray-500 hover:font-medium hover:text-blue-800"
            onClick={() => navigate("/superlancer")}
          >
            Superlancer
          </text>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
