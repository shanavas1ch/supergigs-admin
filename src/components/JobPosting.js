import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InReview from "./InReview";
import Incompleted from "./Incompleted";
import Inprocessing from "./Inprocessing";
import { useState } from "react";
import JobView from './Jobview'

const JobPosting = () => {
  const [components, setcomponents] = useState("Review");
  const [joblist, setjoblist] = useState(true);

  const onchangestatus = () => {
    setjoblist(!joblist);
  };
  return (
    <>
      {joblist === true ? (
        <>
          <h1 className="text-2xl mx-4 my-8 font-medium">Job Postings</h1>
          <Tabs className="w-full mx-4">
            <TabList className="flex space-x-8 my-8">
              {components === "Review" ? (
                <Tab
                  onClick={() => {
                    setcomponents("Review");
                  }}
                >
                  <text className="text-blue-900 font-medium hover:underline">
                    In Review
                  </text>
                </Tab>
              ) : (
                <Tab
                  onClick={() => {
                    setcomponents("Review");
                  }}
                >
                  <text className="text-gray-500 font-normal hover:underline">
                    In Review
                  </text>
                </Tab>
              )}
              {components === "Progress" ? (
                <Tab
                  onClick={() => {
                    setcomponents("Progress");
                  }}
                >
                  <text className="text-blue-900 font-medium hover:underline">
                    In Progress
                  </text>
                </Tab>
              ) : (
                <Tab
                  onClick={() => {
                    setcomponents("Progress");
                  }}
                >
                  <text className="text-gray-500 font-normal hover:underline">
                    In Progress
                  </text>
                </Tab>
              )}
              {components === "Completed" ? (
                <Tab
                  onClick={() => {
                    setcomponents("Completed");
                  }}
                >
                  <text className="text-blue-900 font-medium hover:underline">
                    Completed
                  </text>
                </Tab>
              ) : (
                <Tab
                  onClick={() => {
                    setcomponents("Completed");
                  }}
                >
                  <text className="text-gray-500 font-normal hover:underline">
                    Completed
                  </text>
                </Tab>
              )}
            </TabList>

            <TabPanel className="w-full">
              <InReview onchangestatus={onchangestatus} />
            </TabPanel>
            <TabPanel>
              <Inprocessing onchangestatus={onchangestatus} />
            </TabPanel>
            <TabPanel>
              <Incompleted onchangestatus={onchangestatus} />
            </TabPanel>
          </Tabs>
        </>
      ) : <JobView onchangestatus={onchangestatus}/>}
    </>
  );
};

export default JobPosting;
