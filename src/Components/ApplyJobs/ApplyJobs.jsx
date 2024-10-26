import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorJobApplication } from "../../Utility/localStorage";
import AJob from "./AJob";
import { RiArrowDropDownLine } from "react-icons/ri";

const ApplyJobs = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  const [displayjobApplied, setDisplayJobApplied] = useState([]);
  useEffect(() => {
    const storedJobsId = getStorJobApplication();
    if (storedJobsId.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobsId.includes(job.id));
      setJobApplied(appliedJobs);
      setDisplayJobApplied(appliedJobs);
    }
  }, [jobs]);

  const handelFilter = (item) => {
    if (item == "All") {
      setDisplayJobApplied(jobApplied);
      return;
    } else if (item == "Remote") {
       const temp = jobApplied.filter(
         (job) => job.jobType[0] === "Remote" || job.jobType[1] === "Remote"
       );
       setDisplayJobApplied(temp);
    } else if (item == "Full Time") {
     const temp = jobApplied.filter(
       (job) => job.jobType[0] === "Full Time" || job.jobType[1] === "Full Time"
     );
       setDisplayJobApplied(temp);} else if (item == "Onsite") {
     const temp = jobApplied.filter(
       (job) => job.jobType[0] === "Onsite" || job.jobType[1] === "Onsite"
     );
       setDisplayJobApplied(temp);}
  };

  return (
    <div className="md:w-[1400px] w-72 mx-auto flex flex-col">
      <h2 className="text-center text-[#1A1919] text-3xl font-bold md:my-6 my-3">
        Applyed jobs
      </h2>
      <div className="w-full flex justify-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 md:w-32 text-sm">
            Filter By <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="text-right">
              <a onClick={() => handelFilter("All")}>All</a>
            </li>
            <li className="text-right">
              <a onClick={() => handelFilter("Remote")}>Remote</a>
            </li>
            <li className="text-right">
              <a onClick={() => handelFilter("Full Time")}>Full Time</a>
            </li>
            <li className="text-right">
              <a onClick={() => handelFilter("Onsite")}>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        {displayjobApplied.map((job) => (
          <AJob key={job.id} job={job}></AJob>
        ))}
      </div>
    </div>
  );
};

export default ApplyJobs;
