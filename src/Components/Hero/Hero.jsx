const Hero = () => {
  return (
    <div className="hero min-h-96 md:h-[500px] bg-[#7e8ffe2f] md:relative">
      <div className="hero-content flex-col lg:flex-row-reverse md:pb-0 mb-0">
        <div className="md:w-96">
          <img
            src="https://i.ibb.co.com/xgJxPQ1/user.png"
            className="md:max-w-md max-w-60 required md:absolute bottom-0"
          />
        </div>
        <div className="max-w-[570px] h-full flex flex-col items-start">
          <h1 className="md:text-6xl text-3xl font-bold">
            One Step Closer To Your <br />
            <samp className="text-[#7E90FE]">Dream Job</samp>
          </h1>
          <p className="py-6 text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
