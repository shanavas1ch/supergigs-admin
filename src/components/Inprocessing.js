import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Alljobinprocessdata } from "../Api/Job";

// eslint-disable-next-line react/prop-types
const Inprocessing = ({onchangestatus}) => {
  const [alljobdata, setalljobdata] = useState([]);
  const [jobdata, setjobdata] = useState([]);
  useEffect(() => {
    getjobdata();
  }, []);
  const getjobdata = async () => {
    var alljobinreviewdata = await Alljobinprocessdata();
    setalljobdata(alljobinreviewdata);
    setjobdata(alljobinreviewdata);
  };
  const searchjob = (e) => {
    if (e.target.value.length !== 0) {
      var filterdata = [];
      for (var i = 0; i < alljobdata.length; i++) {
        if (
          alljobdata[i].job.toLowerCase().match(e.target.value.toLowerCase()) ||
          alljobdata[i].company_name
            .toLowerCase()
            .match(e.target.value.toLowerCase())
        ) {
          filterdata.push(alljobdata[i]);
        }
      }
      setjobdata(filterdata);
    } else {
      setjobdata(alljobdata);
    }
  };
  const checkdata = () => {
    onchangestatus(true)
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search By Project or Company Name"
        className="w-96 h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
        onChange={searchjob}
      />

      <div className="flex flex-col">
        {jobdata.length !== 0
          ? jobdata.map((data, index) => (
              <div
                className="w-11/12 h-52 my-4 rounded-xl bg-white drop-shadow-md hover:drop-shadow-2xl"
              key={index}
              onClick={checkdata}
              >
                <div className="grid grid-cols-12">
                  <div>
                    <Avatar size="90" src={data.logo} className="rounded" />
                  </div>
                  <div className="col-span-8 mx-4 my-6">
                    <h4>{data.job}</h4>
                    <h6 className="text-blue-900">{data.company_name}</h6>
                  </div>
                  <div className="col-span-3 mx-4 my-6 text-right	">
                    <h4 className="text-gray-600">{data.location}</h4>
                    <h6 className="text-gray-900">${data.price} /hr</h6>
                  </div>
                  <div className="col-span-12 mx-4">
                    <h6 className="my-2">Job Description</h6>
                    <p className="text-gray-600 my-2">{data.description}</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Inprocessing;
