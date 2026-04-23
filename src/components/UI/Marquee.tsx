import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span className="marquee-item">
          Live Online Learning <span>✦</span>
        </span>
        <span className="marquee-item">
          Practitioner-Led Curriculum <span>✦</span>
        </span>
        <span className="marquee-item">
          Internship Placement Guaranteed <span>✦</span>
        </span>
        <span className="marquee-item">
          6-Month Cohort Program <span>✦</span>
        </span>
        <span className="marquee-item">
          Nigeria's Best HR Instructors <span>✦</span>
        </span>
        <span className="marquee-item">
          Classes Recorded for Replay <span>✦</span>
        </span>
        <span className="marquee-item">
          PHRi-Aligned Certificates <span>✦</span>
        </span>
        <span className="marquee-item">
          Open to Transitioners & Students <span>✦</span>
        </span>
        {/* duplicate for seamless loop */}
        <span className="marquee-item">
          Live Online Learning <span>✦</span>
        </span>
        <span className="marquee-item">
          Practitioner-Led Curriculum <span>✦</span>
        </span>
        <span className="marquee-item">
          Internship Placement Guaranteed <span>✦</span>
        </span>
        <span className="marquee-item">
          6-Month Cohort Program <span>✦</span>
        </span>
        <span className="marquee-item">
          Nigeria's Best HR Instructors <span>✦</span>
        </span>
        <span className="marquee-item">
          Classes Recorded for Replay <span>✦</span>
        </span>
        <span className="marquee-item">
          PHRi-Aligned Certificates <span>✦</span>
        </span>
        <span className="marquee-item">
          Open to Transitioners & Students <span>✦</span>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
