import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate skill bar after component mounts
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-primary font-medium">{label}</span>
        <span className="text-accent font-medium">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;