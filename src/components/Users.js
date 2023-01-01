import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Freelancer from "./Freelancer";
import Recruiters from "./Recruiters";

const Users = () => {
  const [components, setcomponents] = useState("Freelancers");
  return (
    <>
      <h1 className="text-2xl mx-4 my-8 font-medium">Users</h1>
      <Tabs className="w-full mx-4">
        <TabList className="flex space-x-8 my-8">
          {components === "Freelancers" ? (
            <Tab
              onClick={() => {
                setcomponents("Freelancers");
              }}
            >
              <text className="text-blue-900 font-medium hover:underline">
                Freelancers
              </text>
            </Tab>
          ) : (
            <Tab
              onClick={() => {
                setcomponents("Freelancers");
              }}
            >
              <text className="text-gray-500 font-normal hover:underline">
                Freelancers
              </text>
            </Tab>
          )}
          {components === "Recruiters" ? (
            <Tab
              onClick={() => {
                setcomponents("Recruiters");
              }}
            >
              <text className="text-blue-900 font-medium hover:underline">
                Recruiters
              </text>
            </Tab>
          ) : (
            <Tab
              onClick={() => {
                setcomponents("Recruiters");
              }}
            >
              <text className="text-gray-500 font-normal hover:underline">
                Recruiters
              </text>
            </Tab>
          )}
        </TabList>

        <TabPanel className="w-full">
          <Freelancer />
        </TabPanel>
        <TabPanel>
          <Recruiters />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Users;
