import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const JobCategory = () => {
  const categories = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div className="mx-auto flex flex-col md:w-[1400px]">
        <div className="text-center">
          <h2 className=" text-3xl md:text-5xl font-extrabold text-[#1a1919e0] mb-3">
            Job Category List
          </h2>
          <p className="text-sm md:text-lg text-[#757575] font-medium mb-5 mx-5 md:mx-0">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 mx-auto md:w-full justify-between items-center gap-2 md:gap-5">
          {categories.map((categori, xid) => (
            <Category key={xid} categori={categori}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
