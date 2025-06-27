import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building2, Briefcase, IndianRupee } from 'lucide-react';

const LatestJobCard = () => {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer space-y-4">
      {/* Company & Location */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
            <Building2 size={18} className="text-gray-600" />
            Company Name
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={14} className="text-gray-400" />
            India
          </p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div>
        <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
        <p className="text-sm text-gray-600 mt-1">
          We are looking for a skilled frontend developer with React experience.
        </p>
      </div>

      {/* Job Info Badges */}
      <div className="flex flex-wrap gap-2 pt-2">
        <Badge variant="outline" className="text-blue-700 font-medium bg-blue-50 border-blue-200">
          <Briefcase size={14} className="mr-1" />
          12 Positions
        </Badge>
        <Badge variant="outline" className="text-red-700 font-medium bg-red-50 border-red-200">
          Part Time
        </Badge>
        <Badge variant="outline" className="text-purple-700 font-medium bg-purple-50 border-purple-200">
          <IndianRupee size={14} className="mr-1" />
          24 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
    