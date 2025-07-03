import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Calendar, MapPin, User2 } from "lucide-react";

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="max-w-5xl mx-auto my-10 px-6 sm:px-10 py-10 bg-white shadow-xl rounded-3xl border border-gray-100">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Senior Software Engineer</h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400" /> Bangalore, India
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full">12 Positions</Badge>
            <Badge className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full">Part-time</Badge>
            <Badge className="bg-purple-100 text-purple-700 font-medium px-3 py-1 rounded-full">24 LPA</Badge>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 hover:bg-gray-100"
          >
            <Bookmark className="h-5 w-5" />
          </Button>

          <Button
            disabled={isApplied}
            className={`px-6 py-2 text-white font-semibold rounded-xl shadow transition-all duration-300 ${
              isApplied
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#6A38C2] hover:bg-[#542ea2]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-8 mb-6" />

      {/* Details Section */}
      <div className="space-y-5 text-gray-700 text-sm sm:text-base">
        <div className="flex items-start sm:items-center gap-2">
          <span className="font-semibold w-36">Role:</span>
          <span className="text-gray-800">Senior Software Engineer</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="font-semibold w-36">Location:</span>
          <span className="text-gray-800">Bangalore, India</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-semibold w-36">Description:</span>
          <span className="text-gray-800">
            Lead the backend architecture, mentor engineers, and deliver high-performance APIs in a fast-paced product environment.
          </span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="font-semibold w-36">Experience:</span>
          <span className="text-gray-800">7+ years</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="font-semibold w-36">Salary:</span>
          <span className="text-gray-800">₹24,00,000 / year</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="font-semibold w-36">Applicants:</span>
          <span className="text-gray-800 flex items-center gap-1">
            <User2 className="h-4 w-4 text-gray-500" /> 132 people applied
          </span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="font-semibold w-36">Posted On:</span>
          <span className="text-gray-800 flex items-center gap-1">
            <Calendar className="h-4 w-4 text-gray-500" /> 17 Oct 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
