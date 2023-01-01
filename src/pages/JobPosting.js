import Header from "../components/Header";
import Jobposting from "../components/JobPosting";
import SideBar from "../components/SideBar";

const JobPosting = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="h-5/6 grid grid-cols-6 gap-2 px-24">
        <SideBar />
        <div className="col-span-5 border-l-2 overflow-y-auto h-screen pt-16">
          <Jobposting />
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
