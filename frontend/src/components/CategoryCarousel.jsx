import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Code,
  Paintbrush,
  Database,
  Brain,
  ShieldCheck,
  BarChart3,
  User,
  Cpu,
  Smartphone,
  Languages,
  Search,
  PenTool,
  Server,
  HardDrive,
} from 'lucide-react';

const categories = [
  { name: 'Frontend Developer', icon: <Code size={18} /> },
  { name: 'Backend Developer', icon: <Server size={18} /> },
  { name: 'FullStack Developer', icon: <Briefcase size={18} /> },
  { name: 'Data Scientist', icon: <Brain size={18} /> },
  { name: 'Graphic Designer', icon: <Paintbrush size={18} /> },
  { name: 'UI/UX Designer', icon: <PenTool size={18} /> },
  { name: 'DevOps Engineer', icon: <HardDrive size={18} /> },
  { name: 'Cybersecurity Analyst', icon: <ShieldCheck size={18} /> },
  { name: 'Marketing Manager', icon: <BarChart3 size={18} /> },
  { name: 'HR Specialist', icon: <User size={18} /> },
  { name: 'AI/ML Engineer', icon: <Cpu size={18} /> },
  { name: 'Mobile Developer', icon: <Smartphone size={18} /> },
  { name: 'Translator', icon: <Languages size={18} /> },
  { name: 'SEO Specialist', icon: <Search size={18} /> },
];

const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-6xl px-4 mx-auto my-16">
      <h2 className="text-2xl font-semibold text-center mb-6">Explore Categories</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((cat, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-2/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <Button
                variant="outline"
                className="w-full rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                {cat.icon}
                {cat.name}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
