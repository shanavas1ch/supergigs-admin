import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import { Allchart, AlldashboardData } from "../Api/dashboard";

const AdminBoard = () => {
  const [chartdata, chartdataset] = useState([]);
  const [dashboard_data, dashboard_dataset] = useState([]);
  useEffect(() => {
    getChartdata();
  }, []);
  const getChartdata = async () => {
    var allchartdata = await Allchart();
    var dashboardData = await AlldashboardData();
    chartdataset(allchartdata);
    dashboard_dataset(dashboardData);
  };
  var option = {
    xAxis: {
      type: "category",
      data: chartdata[0] !== undefined ? chartdata[0].day : [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: chartdata[0] !== undefined ? chartdata[0].data : [],
        type: "line",
        smooth: true,
        animation: true,
      },
    ],
  };
  console.log(dashboard_data);
  return (
    <>
      <h1 className="text-2xl mx-4 my-8 font-medium">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mx-4">
        <div className="bg-white p-4 rounded drop-shadow-lg hover:drop-shadow-2xl">
          <span className="text-3xl font-semibold text-blue-900">
            {dashboard_data[0] !== undefined
              ? dashboard_data[0].Freelancers
              : 0}
          </span>
          <br />
          <text className="text-gray-500">Freelancers</text>
        </div>
        <div className="bg-white p-4 rounded drop-shadow-lg hover:drop-shadow-2xl">
          <span className="text-3xl font-semibold text-blue-900">
            {dashboard_data[0] !== undefined
              ? dashboard_data[0].Superlancers
              : 0}
          </span>
          <br />
          <text className="text-gray-500">Superlancers</text>
        </div>
        <div className="bg-white p-4 rounded drop-shadow-lg hover:drop-shadow-2xl">
          <span className="text-3xl font-semibold text-blue-900">
            {dashboard_data[0] !== undefined ? dashboard_data[0].Companies : 0}
          </span>
          <br />
          <text className="text-gray-500">Companies</text>
        </div>
        <div className="bg-white p-4 rounded drop-shadow-lg hover:drop-shadow-2xl">
          <span className="text-3xl font-semibold text-blue-900">
            {dashboard_data[0] !== undefined
              ? dashboard_data[0].Job_Posting
              : 0}
          </span>
          <br />
          <text className="text-gray-500">Job Posting</text>
        </div>
      </div>
      <div className="mx-8 my-8">
        <h3 className="text-xl">Users Summary</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 flex flex-col my-8">
            <div className="bg-white p-6 my-4 rounded-xl border-gray-500 hover:bg-sky-50 hover:drop-shadow-2xl hover:border-blue-900 hover:border-4">
              <span className="text-4xl font-semibold text-gray-700">
                {dashboard_data[0] !== undefined
                  ? dashboard_data[0].Freelancers_earning
                  : 0}
              </span>
              <br />
              <text className="text-gray-500 text-lg">Freelancers</text>
            </div>
            <div className="bg-white p-6 my-4 rounded-xl border-gray-500 hover:bg-sky-50 hover:drop-shadow-2xl hover:border-blue-900 hover:border-4">
              <span className="text-4xl font-semibold text-gray-700">
                {dashboard_data[0] !== undefined
                  ? dashboard_data[0].Companies_earning
                  : 0}
              </span>
              <br />
              <text className="text-gray-500 text-lg">Companies</text>
            </div>
          </div>
          <div className="col-span-3">
            <ReactEcharts option={option} />;
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBoard;
