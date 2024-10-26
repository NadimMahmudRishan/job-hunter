import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const AJob = ({ job }) => {
  const { id, logo, jobTitle, companyName, address, salaryRange, jobType } =
    job;
  return (
    <div className="w-[1400px] flex mx-auto justify-between items-center border border-[#E8E8E8] rounded-lg shadow-md md:my-6 md:p-5">
      <img className="w-60" src={logo} alt="" />
      <div>
        <h2 className="text-[#474747] text-2xl font-semibold">{jobTitle}</h2>
        <h4 className="text-[#757575] font-light">{companyName}</h4>
        <div className="text-sm font-bold my-3 flex gap-4">
          <span className=" px-3 py-1 rounded-md border border-[#9873FF] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            {jobType[0]}
          </span>
          <span className=" px-3 py-1 rounded-md border border-[#9873FF] border-[] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            {jobType[1]}
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-1 md:gap-5 text-[#757575] text-sm md:text-lg">
          <span className="flex items-center gap-1">
            <IoLocationOutline /> {address}
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineDollar /> {salaryRange[0]}K - {salaryRange[1]}K
          </span>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn bg-gradient-to-r from-[#7e8ffed9] to-[#9873ffd8] text-white mt-2 md:mt-0">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AJob;

AJob.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    salaryRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    jobType: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
