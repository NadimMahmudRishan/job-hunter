import PropTypes from "prop-types";
const FJob = ({ job }) => {

  const { logo, jobTitle, companyName, address, salaryRange, jobType } = job;

  return (
    <div className="w-[648px] h-96 border border-[#E8E8E8] justify-between rounded-md">
      <img className="w-40" src={logo} alt="" />
      <h2 className="text-2xl font-bold text-[#474747]">{jobTitle}</h2>
      <h3 className="text-xl font-semibold text-[#757575]">{companyName}</h3>

      <div className="text-sm font-bold my-3 flex gap-4">
        <span className=" p-1 rounded-md border border-[#9873FF] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {jobType[0]}
        </span>
        <span className=" p-1 rounded-md border border-[#9873FF] border-[] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {jobType[1]}
        </span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <button className="btn bg-gradient-to-r from-[#7e8ffed9] to-[#9873ffd8]">
        View Details
      </button>
    </div>
  );
};

export default FJob;

FJob.propTypes = {
  job: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    salaryRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    jobType: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
