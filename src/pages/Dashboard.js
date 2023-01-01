import AdminBoard from "../components/AdminBoard";
import Header from "../components/Header";
// import JobPosting from "../components/JobPosting";
import SideBar from "../components/SideBar";
// import Users from "../components/Users";


const Dashboard = () => {
      
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="h-5/6 grid grid-cols-6 gap-2 px-24">
        <SideBar />
        <div className="col-span-5 border-l-2 overflow-y-auto h-screen pt-16">
          <AdminBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
