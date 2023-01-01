import Avatar from "react-avatar";
import verifyTick from "../assets/img/verified.png";
import { GrLocation } from "react-icons/gr";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Allfreelancer } from "../Api/users";
import Modal from "react-modal";

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
const Super = () => {
  const [allfreelancerdata, setallfreelancerdata] = useState([]);
  const [freelancerdata, setfreelancerdata] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [singledata, setsingledata] = useState([]);

  useEffect(() => {
    getfreelancer();
  }, []);
  const getfreelancer = async () => {
    var allfreelancer = await Allfreelancer();
    setfreelancerdata(allfreelancer);
    setallfreelancerdata(allfreelancer);
  };
  const searchBy = async (e) => {
    if (e.target.value.length !== 0) {
      var filterdata = [];
      for (var i = 0; i < allfreelancerdata.length; i++) {
        if (
          allfreelancerdata[i].first_name
            .toLowerCase()
            .match(e.target.value.toLowerCase()) ||
          allfreelancerdata[i].last_name
            .toLowerCase()
            .match(e.target.value.toLowerCase())
        ) {
          filterdata.push(allfreelancerdata[i]);
        }
      }
      setfreelancerdata(filterdata);
    } else {
      setfreelancerdata(allfreelancerdata);
    }
  };
//   async function openModal(e) {
//     var checkdata = await allfreelancerdata.filter((data, index) => {
//       return index == e.target.id;
//     });
//     setsingledata(checkdata);
//     setIsOpen(true);
//   }

  function closeModal() {
    setIsOpen(false);
  }
  const changestatus = () => {
    var finaldata = [];
    for (var i = 0; i < allfreelancerdata.length; i++) {
      if (allfreelancerdata[i].id == singledata[0].id) {
        if (allfreelancerdata[i].superlance == false) {
          allfreelancerdata[i].superlance = true;
          finaldata.push(allfreelancerdata[i]);
          setsingledata([allfreelancerdata[i]]);
        } else {
          allfreelancerdata[i].superlance = false;
          finaldata.push(allfreelancerdata[i]);
        }
      } else {
        finaldata.push(allfreelancerdata[i]);
      }
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
        {freelancerdata.length !== 0
          ? freelancerdata.map((data, index) => (
              <div
                className="bg-white h-72 w-72 rounded border hover:drop-shadow-2xl hover:scale-105"
               
                key={index}
                id={index}
              >
                <div className="flex justify-between" id={index}>
                  <Avatar
                    size="90"
                    src={data.profile}
                    className="mx-2 my-4 rounded-full"
                  />
                  {data.verification === true ? (
                    <img src={verifyTick} className="h-16" />
                  ) : null}
                </div>
                <div className="px-4 py-2 flex" id={index}>
                  <h6 className="text-xl font-bold">
                    {data.first_name} {data.last_name}
                  </h6>
                </div>
                <div className="px-4 py-2 flex" id={index}>
                  <GrLocation size={24} />{" "}
                  <text className="px-2 text-gray-500 font-normal">
                    {data.address}
                  </text>
                </div>
                <div className="px-4 flex justify-between" id={index}>
                  <text>{data.role}</text>
                  <text className="font-lighter">
                    <span className="font-bold">$ {data.price}</span>/hr
                  </text>
                </div>
                
              </div>
            ))
          : null}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="border"
      >
        {singledata.length !== 0 ? (
          <div>
            <div className="flex justify-between">
              <Avatar
                size="90"
                src={singledata[0].profile}
                className="mx-2 my-4 rounded-full"
              />
              {singledata[0].verification === true ? (
                <img src={verifyTick} className="h-16" />
              ) : null}
            </div>
            <div className="px-4 py-2 flex">
              <h6 className="text-xl font-bold">
                {singledata[0].first_name} {singledata[0].last_name}
              </h6>
            </div>
            <div className="px-4 py-2 flex">
              <GrLocation size={24} />{" "}
              <text className="px-2 text-gray-500 font-normal">
                {singledata[0].address}
              </text>
            </div>
            <div className="px-4 flex justify-between">
              <text>{singledata[0].role}</text>
              <text className="font-lighter">
                <span className="font-bold">$ {singledata[0].price}</span>
                /hr
              </text>
            </div>
            <div className="flex px-4 py-4">
              {singledata[0].twitter === true ? (
                <AiFillTwitterCircle color="#1F3A8A" size={36} />
              ) : null}
              {singledata[0].instagram === true ? (
                <AiFillInstagram color="#1F3A8A" size={36} />
              ) : null}
            </div>
            <div className="flex px-4">
              <h6 className="font-medium">Verified?</h6>
            </div>
            <div className="px-4 py-2 flex">
              <div>
                <input
                  type="radio"
                  id="Yes"
                  className="border-0 w-8 h-4"
                  name="fav_language"
                  value="Yes"
                />
                <label htmlFor="Yes" className="mr-4 text-lg">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="No"
                  className="border-0 w-8 h-4"
                  name="fav_language"
                  value="No"
                />
                <label htmlFor="No" className="mr-4 text-lg">
                  No
                </label>
              </div>
            </div>

            <div className="flex px-4">
              <h6 className="font-medium">Assign Badge</h6>
            </div>
            <div className="px-4 py-2 flex">
              <div className="">
                <input
                  type="radio"
                  id="1"
                  name="fav_language"
                  className="border-0 w-8 h-4"
                  value="1"
                />
                <label htmlFor="1" className="mr-4 text-lg">
                  1
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="2"
                  className="border-0 w-8 h-4"
                  name="fav_language"
                  value="2"
                />
                <label htmlFor="2" className="mr-4 text-lg">
                  2
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  className="border-0 w-8 h-4"
                  id="3"
                  name="fav_language"
                  value="3"
                />
                <label htmlFor="3" className="mr-4 text-lg">
                  3
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  className="border-0 w-8 h-4"
                  id="4"
                  name="fav_language"
                  value="4"
                />
                <label htmlFor="4" className="mr-4 text-lg">
                  4
                </label>
              </div>
            </div>
            <div className="flex flex-col items-start px-4">
              <h6 className="font-medium ">Tech Assessment Score</h6>
              <input
                type="text"
                className="bg-gray-100 rounded w-full h-12 my-4 px-2 border"
                id="4"
                name="fav_language"
                placeholder="Enter Score"
              />
            </div>
            <div>
              {singledata[0].superlance === false ? (
                <button
                  className="h-12 my-1 w-full text-white rounded bg-gradient-to-r from-[#EF3859] to-[#B92276] font-medium"
                  onClick={changestatus}
                >
                  Promote as a Superlancer
                </button>
              ) : (
                <button
                  className="h-12 my-1 w-full text-rose-600 border-2 border-rose-600 rounded bg-white font-medium"
                  onClick={changestatus}
                >
                  Remove Superlancer
                </button>
              )}

              <button className="h-12 my w-full text-white rounded bg-blue-900 font-medium">
                Submit
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
};

export default Super;
