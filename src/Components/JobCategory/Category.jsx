import PropTypes from "prop-types";

const Category = ({ categori }) => {
  const { logo, jobTitle, available } = categori;
  return (
    <div className="bg-[#7E90FE0D] md:w-80 w-44 p-2 md:p-8 rounded-md text-left md:h-64 flex flex-col justify-around">
      <img
        className="w-20 mb-3 bg-[#7E90FE1A] p-5 rounded-md mx-auto md:mx-0"
        src={logo}
        alt=""
      />
      <div className="mx-auto md:mx-0">
        <h3 className="text-[#474747] font-bold text-lg md:text-xl md:text-left text-center ">
          {jobTitle}
        </h3>
        <p className="text-[#A3A3A3] font-medium text-sm md:text-left text-center ">
          {available} Jobs Available
        </p>
      </div>
    </div>
  );
};

export default Category;
Category.propTypes = {
  categori: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    available: PropTypes.number.isRequired,
  }).isRequired,
};
