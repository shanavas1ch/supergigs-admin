import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Alljobinreviewdata, Allapplied_freelancer } from "../Api/Job";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import verifyTick from "../assets/img/verified.png";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoMdArrowRoundBack } from "react-icons/io";

// eslint-disable-next-line no-unused-vars, react/prop-types
const JobView = ({ onchangestatus }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "20%",
      border: "1px solid lightgray",
      bgcolor: "red",
      boxShadow: 24,
      borderRadius: "10px",
      p: 4,

      position: "absolute",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      outline: "none",
      padding: "5px",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#9ca3af82",
    },
  };
  const [jobdata, setjobdata] = useState([]);
  const [appliedlist, setappliedlist] = useState([]);
  const [shorlistlist, setshorlistlist] = useState([]);
  const [allappliedlist, setallappliedlist] = useState([]);
  const [allshorlistlist, setallshorlistlist] = useState([]);
  useEffect(() => {
    getjobdata();
  }, []);
  const getjobdata = async () => {
    var alljobinreviewdata = await Alljobinreviewdata();
    var allapplied_freelancer = await Allapplied_freelancer();
    setjobdata(alljobinreviewdata);
    if (allapplied_freelancer.length !== 0) {
      var applieddata = [],
        shorlistdata = [];
      for (var i = 0; i < allapplied_freelancer.length; i++) {
        if (allapplied_freelancer[i].applied == true) {
          applieddata.push(allapplied_freelancer[i]);
        } else if (allapplied_freelancer[i].shorlist == true) {
          shorlistdata.push(allapplied_freelancer[i]);
        }
      }
      setappliedlist(applieddata);
      setshorlistlist(shorlistdata);
      setallappliedlist(applieddata);
      setallshorlistlist(shorlistdata);
    }
  };

  async function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [shortstatus, setshortstatus] = useState(false);
  const shoerlistbtn = () => {
    setshortstatus(!shortstatus);
  };
  const shorlistname = (e) => {
    if (e.target.value.length !== 0) {
      var filterdata = [];
      for (var i = 0; i < allshorlistlist.length; i++) {
        if (
          allshorlistlist[i].first_name
            .toLowerCase()
            .match(e.target.value.toLowerCase()) ||
          allshorlistlist[i].last_name
            .toLowerCase()
            .match(e.target.value.toLowerCase())
        ) {
          filterdata.push(allshorlistlist[i]);
        }
      }
      setshorlistlist(filterdata);
    } else {
      setshorlistlist(allshorlistlist);
    }
  };
  const appliedname = (e) => {
    if (e.target.value.length !== 0) {
      var filterdata = [];
      for (var i = 0; i < allappliedlist.length; i++) {
        if (
          allappliedlist[i].first_name
            .toLowerCase()
            .match(e.target.value.toLowerCase()) ||
          allappliedlist[i].last_name
            .toLowerCase()
            .match(e.target.value.toLowerCase())
        ) {
          filterdata.push(allappliedlist[i]);
        }
      }
      setappliedlist(filterdata);
    } else {
      setappliedlist(allappliedlist);
    }
  };

  return (
    <>
      <div className="flex flex-row my-4 px-4 py-4">
        <IoMdArrowRoundBack
          size={24}
          className="text-blue-900 my-1"
          onClick={() => onchangestatus()}
        />
        <text
          className="text-lg mx-2 text-blue-900 font-medium"
          onClick={() => onchangestatus()}
        >
          Job Postings
        </text>
      </div>

      <div className="flex flex-col">
        {jobdata.length !== 0 ? (
          <div className="w-11/12 h-52 my-4 px-4 py-4">
            <div className="grid grid-cols-12">
              <div>
                <Avatar size="90" src={jobdata[0].logo} className="rounded" />
              </div>
              <div className="col-span-8 mx-4 my-6">
                <h4>{jobdata[0].job}</h4>
                <h6 className="text-blue-900">{jobdata[0].company_name}</h6>
              </div>
              <div className="col-span-3 mx-4 my-6 text-right	">
                <h4 className="text-gray-600">{jobdata[0].location}</h4>
                <h6 className="text-gray-900">${jobdata[0].price} /hr</h6>
              </div>
              <div className="col-span-12 mx-4">
                <h6 className="my-2">Job Description</h6>
                <p className="text-gray-600 my-2">{jobdata[0].description}</p>
              </div>
            </div>

            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Budget</th>
                  <th className="px-4 py-2">Hours Required</th>
                  <th className="px-4 py-2">Experience</th>
                  <th className="px-4 py-2">Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-4 py-2">Remote</td>
                  <td className=" px-4 py-2"> 15/hr</td>
                  <td className=" px-4 py-2"> 7hrs/day</td>
                  <td className=" px-4 py-2"> Professional</td>
                  <td className=" px-4 py-2">
                    <div className="flex">
                      <div className="flex text-blue-700 text-center bg-blue-200 px-4 py-2 m-2 rounded-md">
                        Figma
                      </div>
                      <div className="flex text-blue-700 text-center bg-blue-200 px-4 py-2 m-2 rounded-md">
                        Framer
                      </div>
                      <div className="flex text-blue-700 text-center bg-blue-200 px-4 py-2 m-2 rounded-md">
                        Adobe XD
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="border" />
            <Tabs className="w-full mx-4">
              <TabList className="flex space-x-8 my-8">
                <Tab>
                  <text className="text-gray-500 font-normal hover:underline">
                    Shortlisted Freelancers
                  </text>
                </Tab>

                <Tab>
                  <text className="text-gray-500 font-normal hover:underline">
                    Applied Freelancers
                  </text>
                </Tab>
              </TabList>

              <TabPanel className="w-full">
                <div className="my-8">
                  <h3 className="px-2 text-xl"> Shortlisted Freelancers</h3>
                  <input
                    type="text"
                    placeholder="Search By Name Or Mail Address"
                    className="w-72 h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
                    onChange={shorlistname}
                  />
                  <div className="grid gap-6 grid-cols-3 grid-rows-3">
                    {shorlistlist.length !== 0
                      ? shorlistlist.map((data, index) => (
                          <>
                            <div
                              className="bg-white h-fit pb-4 w-80 rounded border-2 hover:drop-shadow-2xl hover:scale-105"
                              onClick={openModal}
                              id={data.id}
                              key={index}
                            >
                              <div className="flex justify-between" id="1">
                                <Avatar
                                  size="90"
                                  src={data.profile}
                                  className="mx-2 my-4 rounded-full"
                                />
                                <img src={verifyTick} className="h-16" />
                              </div>
                              <div
                                className="px-4 py-2 flex justify-between"
                                id="6"
                              >
                                <h6 className="text-xl font-bold">
                                  {data.first_name} {data.last_name}
                                </h6>
                                <button className="bg-gradient-to-r text-white text-sm h-8 px-4 from-[#8797E0] to-[#7D56C5]">
                                  Shortlisted
                                </button>
                              </div>
                              <div className="px-4 py-2 flex" id="3">
                                <GrLocation size={24} />{" "}
                                <text className="px-2 text-gray-500 font-normal">
                                  {data.address}
                                </text>
                              </div>
                              <div className="px-4 flex justify-between" id="2">
                                <text>{data.role}</text>
                                <text className="font-lighter">
                                  <span className="font-bold">
                                    $ {data.price}
                                  </span>
                                  /hr
                                </text>
                              </div>
                            </div>
                          </>
                        ))
                      : null}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="my-8">
                  <h3 className="px-2 text-xl">Applied Freelancers</h3>
                  <input
                    type="text"
                    placeholder="Search By Name Or Mail Address"
                    className="w-72 h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
                    onChange={appliedname}
                  />
                  <div className="grid gap-6 grid-cols-3 grid-rows-3">
                    {appliedlist.length !== 0
                      ? appliedlist.map((data, index) => (
                          <div
                            className="bg-white h-fit pb-4 w-80 rounded border-2 hover:drop-shadow-2xl hover:scale-105"
                            onClick={openModal}
                            id="1"
                            key={index}
                          >
                            <div className="flex justify-between" id="1">
                              <Avatar
                                size="90"
                                src={data.profile}
                                className="mx-2 my-4 rounded-full"
                              />
                              <img src={verifyTick} className="h-16" />
                            </div>
                            <div className="px-4 py-2 flex" id="6">
                              <h6 className="text-xl font-bold">
                                {data.first_name} {data.last_name}
                              </h6>
                            </div>
                            <div className="px-4 py-2 flex" id="3">
                              <GrLocation size={24} />{" "}
                              <text className="px-2 text-gray-500 font-normal">
                                {data.address}
                              </text>
                            </div>
                            <div className="px-4 flex justify-between" id="2">
                              <text>{data.role}</text>
                              <text className="font-lighter">
                                <span className="font-bold">
                                  $ {data.price}
                                </span>
                                /hr
                              </text>
                            </div>
                            <div className="flex items-center justify-center w-full">
                              {data.shorlist == true ? (
                                <button className="bg-gradient-to-r w-full text-white text-sm rounded h-12 mx-4 my-4 from-[#8797E0] to-[#7D56C5]">
                                  Assigned
                                </button>
                              ) : (
                                <button className="bg-gradient-to-r w-full text-white text-sm rounded h-12 mx-4 my-4 from-[#EF3859] to-[#B92276]">
                                  Assign
                                </button>
                              )}
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        ) : null}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="border"
      >
        <div>
          <div className="flex justify-between">
            <Avatar
              size="90"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
              className="mx-2 my-4 rounded-full"
            />
            <img src={verifyTick} className="h-16" />
          </div>
          <div className="px-4 py-2 flex">
            <h6 className="text-xl font-bold">Mathesh Suresh</h6>
          </div>
          <div className="px-4 py-2 flex">
            <GrLocation size={24} />{" "}
            <text className="px-2 text-gray-500 font-normal">Chennai</text>
          </div>
          <div className="px-4 flex justify-between">
            <text>Full Stack Developer</text>
            <text className="font-lighter">
              <span className="font-bold">$ 50</span>
              /hr
            </text>
          </div>
          <div className="flex px-4 py-4">
            <AiFillTwitterCircle color="#1F3A8A" size={36} />
            <AiFillInstagram color="#1F3A8A" size={36} />
          </div>
          <div className="flex w-full px-4 pb-4 items-center justify-between">
            <button className="h-10 w-20 bg-[#EBEEFA]">Figma</button>
            <button className="h-10 w-20 bg-[#EBEEFA]">React</button>
            <button className="h-10 w-20 bg-[#EBEEFA]">Node</button>
          </div>

          <div className="flex flex-col items-center px-4">
            {shortstatus == false ? (
              <button
                className="h-12 my-1 w-full text-white rounded bg-gradient-to-r from-[#EF3859] to-[#B92276] font-medium"
                onClick={shoerlistbtn}
              >
                Shortlist
              </button>
            ) : (
              <button
                className="h-12 my-1 w-full text-rose-600 border-2 border-rose-600 font-medium"
                onClick={shoerlistbtn}
              >
                Shortlisted
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobView;
