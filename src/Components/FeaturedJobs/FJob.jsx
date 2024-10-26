import PropTypes from "prop-types";
const FJob = ({ job }) => {
    
  const { logo, jobTitle, companyName, address, salaryRange, jobType } = job;

  return (
    <div className="w-[648px] h-96 border border-[#E8E8E8] justify-between rounded-md">
      <img src={logo} alt="" />
      <h2>{jobTitle}</h2>
      <h3>{companyName}</h3>
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
