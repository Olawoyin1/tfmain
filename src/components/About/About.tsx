import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about-inner">
        <div>
          <div className="eyebrow">
            Our Mission
          </div>
          <h2 className="sec-h">
            We're Closing the Gap Between <em className="italic">HR Education</em> and HR Reality.
          </h2>
          <p className="sec-p">
            The HR profession in Nigeria is full of passionate, talented people — many of whom have never had a structured
            path to develop their careers. Universities teach outdated theory. Online courses sell slides. Internships are
            scrappy, unguided, and hard to get.
            <br /><br />
            Talent Factory changes that. We built the program we wish existed when we were starting out — one that takes
            you from wherever you are today to career-ready in six months, with real learning, real experience, and real
            credentials to show for it.
          </p>
        </div>
        
        <div className="about-right">
          <div className="about-stat">
            <div className="as-num">
              3 mo
            </div>
            <div className="as-title">
              Of Live, Practitioner-Led Learning
            </div>
            <div className="as-desc">
              12 modules taught by senior HR professionals from Nigeria's most respected companies —
              not lecturers who last sat in an HR office a decade ago.
            </div>
          </div>
          
          <div className="about-stat">
            <div className="as-num">
              3 mo
            </div>
            <div className="as-title">
              Of Guaranteed Internship Experience
            </div>
            <div className="as-desc">
              Every student who completes the learning phase is placed at a real company. No hunting.
              No rejections. We match you, place you, and support you the whole way through.
            </div>
          </div>
          
          <div className="about-stat">
            <div className="as-num">
              2x
            </div>
            <div className="as-title">
              Certificates That Mean Something
            </div>
            <div className="as-desc">
              One for completing the learning phase. One for completing your internship. Both
              PHRi-aligned, digitally issued, and recognised by employers in our growing partner network.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
