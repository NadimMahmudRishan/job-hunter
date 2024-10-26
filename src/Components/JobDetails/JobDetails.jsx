import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsJournalRichtext } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    phone,
    email,
    address,
    salaryRange,
    jobDescription,
    jobResponsibility,
    education,
    experience,
    jobTitle,
  } = job;
  return (
    <div>
      <div className="flex flex-col md:flex-row md:w-[1400px] md:mx-auto md:gap-9 md:h-[800px] justify-center items-center  mx-5">
        {/* Left side */}
        <div className="md:w-2/3 md:h-[400px] flex flex-col justify-between">
          <p className="text-[#757575] text-sm md:text-lg ">
            <span className="font-bold text-black">Job Description: </span>
            {jobDescription}
          </p>
          <p className="text-[#757575] text-sm md:text-lg ">
            <span className="font-bold text-black">Job Responsibility: </span>
            {jobResponsibility}
          </p>
          <p className="font-bold text-sm md:text-lg ">
            Educational Requirements:
          </p>
          <p className="text-[#757575] text-sm md:text-lg ">{education}</p>
          <p className="font-bold text-sm md:text-lg ">Experiences:</p>
          <p className="text-[#757575] text-sm md:text-lg ">
            {experience} Years in this field.
          </p>
        </div>
        {/* Right side */}
        <div className="md:w-1/3">
          <div className="w-full  md:h-[400px] h-72 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] md:p-10 rounded-lg flex flex-col justify-around p-5">
            <h3 className="font-bold text-lg md:text-xl">Job Details</h3>
            <hr />
            <div className=" text-sm md:text-xl">
              <p className="text-[#757575] flex items-center gap-3">
                <AiOutlineDollarCircle className="text-[#7E90FE]" />
                <span className="font-semibold text-black">Salary : </span>
                {salaryRange[0]}K - {salaryRange[1]}K (Per Month)
              </p>
              <p className="text-[#757575] flex items-center gap-3">
                <BsJournalRichtext className="text-[#7E90FE]" />
                <span className="font-semibold text-black">Job Title : </span>
                {jobTitle}
              </p>
            </div>
            <h3 className="font-bold text-lg md:text-xl">
              Contact Information
            </h3>
            <hr />
            <div className=" text-sm md:text-xl">
              <p className="text-[#757575] flex items-center gap-3">
                <FiPhone className="text-[#7E90FE]" />
                <span className="font-semibold text-black">Phone : </span>
                {phone}
              </p>
              <p className="text-[#757575] flex items-center gap-3">
                <AiOutlineMail className="text-[#7E90FE]" />
                <span className="font-semibold text-black">Email : </span>
                {email}
              </p>
              <p className="text-[#757575] flex items-center gap-3">
                <IoLocationOutline className="text-[#7E90FE]" />
                <span className="font-semibold text-black">Address : </span>
                {address}
              </p>
            </div>
          </div>
          <button className="btn bg-gradient-to-r from-[#7e8ffed9] to-[#9873ffd8] text-white mt-2 my-4 md:my-7 w-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;