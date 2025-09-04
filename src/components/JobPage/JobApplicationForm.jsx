import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './JobApplicationForm.css';
import { IoLocationOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { jobData } from '../../Data/jobdata';

const CLOUDINARY_CLOUD_NAME = 'dwrrxyffb';
const CLOUDINARY_UPLOAD_PRESET = 'Candidate_Form';

const EMAILJS_SERVICE_ID = 'service_r0o16gp';
const EMAILJS_TEMPLATE_ID = 'template_r9i69sp';
const EMAILJS_PUBLIC_KEY = 'bbMpCrBdBH4BK6w3i';

function JobApplicationForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jobKey = searchParams.get('job') || 'python';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredFirstName: '',
    email: '',
    phone: '',
    linkedInProfile: '',
    codingLanguages: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');
  const [coverLetterFileName, setCoverLetterFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get job data based on jobKey, fallback to python if not found
  const currentJob = jobData[jobKey] || jobData.python;

  const handleBackToJobs = () => {
    navigate('/jobs');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file selection for resume
  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFileName(file.name);
    } else {
      setResumeFileName('');
    }
  };

  // Handle file selection for cover letter
  const handleCoverLetterFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverLetterFileName(file.name);
    } else {
      setCoverLetterFileName('');
    }
  };

  // Upload function
  const uploadFile = async (file) => {
    if (!file) return null;

    console.log('🚀 Starting RAW upload for:', file.name, 'Size:', file.size, 'bytes');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`;
      console.log('📡 Uploading to RAW endpoint:', endpoint);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      console.log('📊 Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ RAW upload failed:', errorText);
        throw new Error(`RAW upload failed: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('✅ RAW upload successful:', result);
      
      if (result.secure_url) {
        console.log('🔗 Generated RAW URL:', result.secure_url);
        
        try {
          const testResponse = await fetch(result.secure_url, { method: 'HEAD' });
          if (testResponse.ok) {
            console.log('✅ URL verified as accessible!');
          } else {
            console.log('⚠️ URL test returned status:', testResponse.status);
          }
        } catch (testError) {
          console.log('⚠️ URL test failed (might be CORS):', testError.message);
        }
        
        return result.secure_url;
      }

      throw new Error('No secure_url in response');
      
    } catch (error) {
      console.error('💥 Upload error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const resumeFile = e.target.elements['resume-file-input'].files[0];
    const coverLetterFile = e.target.elements['cover-letter-file-input'].files[0];

    try {
      if (!resumeFile) {
        setSubmitMessage('Please select a resume file.');
        setIsSubmitting(false);
        return;
      }

      setSubmitMessage('Uploading resume...');
      
      const uploadedResumeUrl = await uploadFile(resumeFile);
      
      if (!uploadedResumeUrl) {
        throw new Error('Failed to upload resume file');
      }

      let uploadedCoverLetterUrl = 'N/A';
      if (coverLetterFile) {
        setSubmitMessage('Uploading cover letter...');
        uploadedCoverLetterUrl = await uploadFile(coverLetterFile);
        
        if (!uploadedCoverLetterUrl) {
          console.warn('Cover letter upload failed, continuing without it');
          uploadedCoverLetterUrl = 'N/A';
        }
      }

      setSubmitMessage('Sending email...');

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_email: 'nexaura495@gmail.com',
        firstName: formData.firstName,
        lastName: formData.lastName,
        preferredFirstName: formData.preferredFirstName || 'N/A',
        email: formData.email,
        phone: formData.phone,
        linkedInProfile: formData.linkedInProfile,
        codingLanguages: formData.codingLanguages,
        website: formData.website || 'N/A',
        resumeUrl: uploadedResumeUrl,
        coverLetterUrl: uploadedCoverLetterUrl,
        resumeFileName: resumeFile.name,
        coverLetterFileName: coverLetterFile ? coverLetterFile.name : 'N/A',
        jobTitle: currentJob.title,
        jobKey: jobKey
      };

      console.log('📧 Sending email with RAW URLs:', {
        resumeUrl: uploadedResumeUrl,
        coverLetterUrl: uploadedCoverLetterUrl
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitMessage('');
      
      setFormData({
        firstName: '', 
        lastName: '', 
        preferredFirstName: '', 
        email: '', 
        phone: '',
        linkedInProfile: '', 
        codingLanguages: '', 
        website: '',
      });
      
      e.target.elements['resume-file-input'].value = '';
      if (e.target.elements['cover-letter-file-input']) {
        e.target.elements['cover-letter-file-input'].value = '';
      }
      setResumeFileName('');
      setCoverLetterFileName('');
      setIsSubmitted(true);

    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="job-application-container">
      {/* Back Button */}
      <button className="back-button" onClick={handleBackToJobs}>
        <IoArrowBackOutline /> Back to Jobs
      </button>

      {/* Job Header Section */}
      <div className="job-header">
        <div className="job-title-wrapper">
          <h1 className="job-title">{currentJob.title}</h1>
          <button className="apply-button-top">Apply</button>
        </div>
        <p className="job-location">
          <IoLocationOutline /> {currentJob.location}
        </p>
      </div>

      {/* Job Description */}
      <div className="job-description">
        {currentJob.description}
      </div>

      <div className="seprator"></div>

      {/* Application Form Section */}
      <form onSubmit={handleSubmit} className="application-form">
        <h2>Apply for this job</h2>
        <p className="required-fields-note"> <span style={{color:"red"}}>*</span> Indicates a required field</p>

        {/* Personal Information */}
        <div className="form-group floating-label">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="firstName">First Name <span className="required">*</span></label>
        </div>

        <div className="form-group floating-label">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="lastName">Last Name <span className="required">*</span></label>
        </div>

        <div className="form-group floating-label">
          <input
            type="text"
            id="preferredFirstName"
            name="preferredFirstName"
            value={formData.preferredFirstName}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="preferredFirstName">Preferred First Name</label>
        </div>

        <div className="form-group floating-label">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="email">Email <span className="required">*</span></label>
        </div>

        <div className="form-group floating-label">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="phone">Phone <span className="required">*</span></label>
        </div>

        {/* Resume/CV Upload */}
        <div className="upload-section">
          <label className="upload-label">Resume/CV <span className="required">*</span></label>
          <div className="upload-buttons">
            <label htmlFor="resume-file-input" className="upload-btn attach">Attach</label>
            <input
              type="file"
              id="resume-file-input"
              name="resume-file-input"
              className="hidden-file-input"
              accept=".pdf,.doc,.docx,.txt,.rtf"
              required
              onChange={handleResumeFileChange}
            />
            <button type="button" className="upload-btn link">Dropbox</button>
            <button type="button" className="upload-btn link">Google Drive</button>
            <button type="button" className="upload-btn link">Enter manually</button>
          </div>
          {resumeFileName && (
            <div className="file-selected">
              <span className="file-icon">📄</span>
              <span className="file-name">{resumeFileName}</span>
              <button 
                type="button" 
                className="remove-file"
                onClick={() => {
                  document.getElementById('resume-file-input').value = '';
                  setResumeFileName('');
                }}
              >
                ✕
              </button>
            </div>
          )}
          <p className="file-type-note">Accepted file types: pdf, doc, docx, txt, rtf</p>
        </div>

        {/* Cover Letter Upload (Optional) */}
        <div className="upload-section">
          <label className="upload-label">Cover Letter (Optional)</label>
          <div className="upload-buttons">
            <label htmlFor="cover-letter-file-input" className="upload-btn attach">Attach</label>
            <input
              type="file"
              id="cover-letter-file-input"
              name="cover-letter-file-input"
              className="hidden-file-input"
              accept=".pdf,.doc,.docx,.txt,.rtf"
              onChange={handleCoverLetterFileChange}
            />
            <button type="button" className="upload-btn link">Dropbox</button>
            <button type="button" className="upload-btn link">Google Drive</button>
            <button type="button" className="upload-btn link">Enter manually</button>
          </div>
          {coverLetterFileName && (
            <div className="file-selected">
              <span className="file-icon">📄</span>
              <span className="file-name">{coverLetterFileName}</span>
              <button 
                type="button" 
                className="remove-file"
                onClick={() => {
                  document.getElementById('cover-letter-file-input').value = '';
                  setCoverLetterFileName('');
                }}
              >
                ✕
              </button>
            </div>
          )}
          <p className="file-type-note">Accepted file types: pdf, doc, docx, txt, rtf</p>
        </div>

        <div className="spacing"></div>
    
        {/* Additional Information */}
        <div className="form-group floating-label">
          <input
            type="url"
            id="linkedInProfile"
            name="linkedInProfile"
            value={formData.linkedInProfile}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="linkedInProfile">LinkedIn Profile <span className="required">*</span></label>
        </div>

        <div className="form-group floating-label">
          <textarea
            id="codingLanguages"
            name="codingLanguages"
            value={formData.codingLanguages}
            onChange={handleChange}
            required
            rows="4"
            placeholder=" "
          ></textarea>
          <label htmlFor="codingLanguages">Which coding languages are you most experienced with? <span className="required">*</span></label>
        </div>

        <div className="form-group floating-label">
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="website">Website</label>
        </div>

        <button type="submit" className={`submit-application-button ${isSubmitting ? 'loading' : ''} ${isSubmitted ? 'submitted' : ''}`} disabled={isSubmitting || isSubmitted}>
          {isSubmitted ? (
            <>
              <div className="success-checkmark">✓</div>
              <span>Application Submitted!</span>
            </>
          ) : isSubmitting ? (
            <>
              <div className="loading-spinner"></div>
              <span>Submitting...</span>
            </>
          ) : (
            'Submit application'
          )}
        </button>
        
        {submitMessage && !isSubmitting && (
          <p className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default JobApplicationForm;