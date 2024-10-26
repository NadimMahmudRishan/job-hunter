import { useEffect, useState } from "react";
import FJob from "./FJob";

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);


    useEffect(()=>{
        fetch("featuredJobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
      <div className="flex flex-col justify-center items-center my-5 ">
        <div className="md:w-[1400px] mx-auto flex flex-col">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-[#1a1919e0] mb-3">
              Featured Jobs
            </h2>
            <p className="text-lg text-[#757575] font-medium mb-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between md:w-full mx-auto gap-10">
            {jobs.map((job) => (
              <FJob className="w-full" key={job.id} job={job}></FJob>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FeaturedJobs;