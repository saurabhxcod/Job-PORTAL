
import LatestJobCard from './LatestJobCard';

const LatestJobs = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-10">
        <span className="text-[#6A38C2]">Latest & Top </span>
        Job Openings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
