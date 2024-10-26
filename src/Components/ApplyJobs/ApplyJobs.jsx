import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorJobApplication } from "../../Utility/localStorage";
import AJob from "./AJob";

const ApplyJobs = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  useEffect(() => {
    const storedJobsId = getStorJobApplication();
    if (storedJobsId.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobsId.includes(job.id));
      setJobApplied(appliedJobs);
    }
  }, []);
  return (
    <div>
      <h2 className="text-center text-[#1A1919] text-3xl font-bold md:my-6 my-3">Applyed jobs</h2>
      <div className="flex flex-col">
        {jobApplied.map((job) => (
          <AJob key={job.id} job={job}></AJob>
        ))}
      </div>
    </div>
  );
};

export default ApplyJobs;
