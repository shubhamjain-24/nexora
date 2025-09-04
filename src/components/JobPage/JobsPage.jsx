import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import JobApplicationForm from './JobApplicationForm';
import { jobData } from '../../Data/jobdata';
import './JobsPage.css';

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (jobKey) => {
    setSelectedJob(jobKey);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  if (selectedJob) {
    return (
      <JobApplicationForm 
        jobKey={selectedJob} 
        onBack={handleBackToJobs}
      />
    );
  }

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1 className="jobs-title">Open Positions</h1>
        <p className="jobs-subtitle">Join our team and help shape the future of job searching</p>
      </div>
      
      <div className="jobs-grid">
        {Object.entries(jobData).map(([jobKey, job]) => (
          <div key={jobKey} className="job-card">
            <div className="job-card-header">
              <h2 className="job-card-title">{job.title}</h2>
              <div className="job-card-location">
                <IoLocationOutline className="location-icon" />
                <span>{job.location}</span>
              </div>
            </div>
            
            <div className="job-card-content">
              <div className="job-card-description">
                {/* Extract first paragraph from description */}
                <p>
                  {typeof job.description === 'object' && job.description.props && job.description.props.children 
                    ? job.description.props.children.find(child => 
                        child.type === 'p' && typeof child.props.children === 'string'
                      )?.props.children.substring(0, 150) + '...'
                    : 'Join our team in this exciting role and make a meaningful impact.'
                  }
                </p>
              </div>
              
              <div className="job-card-footer">
                <div className="job-card-salary">
                  {/* Extract salary from description */}
                  {typeof job.description === 'object' && job.description.props && job.description.props.children 
                    ? job.description.props.children
                        .filter(child => child.type === 'p' && child.props.children && Array.isArray(child.props.children))
                        .find(p => p.props.children.some(child => 
                          typeof child === 'string' && child.includes('Pay Range')
                        ))?.props.children.find(child => 
                          typeof child === 'string' && child.includes('₹')
                        ) || 'Competitive Salary'
                    : 'Competitive Salary'
                  }
                </div>
                <button 
                  className="apply-btn"
                  onClick={() => handleApplyClick(jobKey)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;