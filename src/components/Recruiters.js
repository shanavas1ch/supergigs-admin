import Avatar from "react-avatar";
import verifyTick from "../assets/img/verified.png";
import { GrLocation } from "react-icons/gr";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Allrecruitersdata } from "../Api/users";

const Recruiters = () => {
  const [newallallrecruiters, setnewallallrecruiters] = useState([]);
  const [allrecruiters, setallrecruiters] = useState([]);
  useEffect(() => {
    getfreelancer();
  }, []);
  const getfreelancer = async () => {
    var allrecruiters = await Allrecruitersdata();
    setallrecruiters(allrecruiters);
    setnewallallrecruiters(allrecruiters);
  };
  const searchBy = async (e) => {
    if (e.target.value.length !== 0) {
      var filterdata = [];
      for (var i = 0; i < newallallrecruiters.length; i++) {
        if (
          newallallrecruiters[i].first_name
            .toLowerCase()
            .match(e.target.value.toLowerCase()) ||
          newallallrecruiters[i].last_name
            .toLowerCase()
            .match(e.target.value.toLowerCase())
        ) {
          filterdata.push(newallallrecruiters[i]);
        }
      }
      setallrecruiters(filterdata);
    } else {
      setallrecruiters(newallallrecruiters);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search By Name Or Mail Address"
        className="w-72 h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
        onChange={searchBy}
      />

      <div className="grid gap-6 grid-cols-3 grid-rows-3">
        {allrecruiters.length !== 0
          ? allrecruiters.map((data, index) => (
              <div className="bg-white h-80 w-72 rounded border  hover:drop-shadow-2xl hover:scale-105" key={index}>
                <div className="flex justify-between">
                  <Avatar
                    size="90"
                    src={data.profile}
                    className="mx-2 my-4 rounded-full"
                  />
                  {data.verification === true ? (
                    <img src={verifyTick} className="h-16" />
                  ) : null}
                </div>
                <div className="px-4 py-2 flex">
                  <h6 className="text-xl font-bold">
                    {data.first_name} {data.last_name}
                  </h6>
                </div>
                <div className="px-4 py-2 flex">
                  <GrLocation size={24} />{" "}
                  <text className="px-2 text-gray-500 font-normal">
                    {data.address}
                  </text>
                </div>
                <div className="px-4 flex justify-between">
                  <text>{data.role}</text>
                  <text className="font-lighter">
                    <span className="font-bold">$ {data.price}</span>/hr
                  </text>
                </div>
                <div className="flex px-4 py-4">
                  {data.twitter === true ? (
                    <AiFillTwitterCircle color="#1F3A8A" size={36} />
                  ) : null}
                  {data.instagram === true ? (
                    <AiFillInstagram color="#1F3A8A" size={36} />
                  ) : null}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Recruiters;
