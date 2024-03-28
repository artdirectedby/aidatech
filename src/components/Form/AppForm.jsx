import React, { useState, useRef } from 'react';
import './appform.css'
function AppForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '', // Added company's name state variable
    projectDetails: '',
    file: null,
    requestNDA: false
  });
  const [fileName, setFileName] = useState('Attach files');
  const fileInputRef = useRef(null);
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! Check console for form data.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main">
        <p className="title">Build your ideal app today</p>
        <div className="fields">
          <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="phone" id="phone" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
          <input type="text" id="company" name="company" placeholder="Company's name" value={formData.company} onChange={handleChange} />
          <textarea
            id="projectDetails"
            name="projectDetails"
            placeholder="Tell us about your project"
            value={formData.projectDetails}
            onChange={handleChange}
          />
          <div className="file-input-container" onClick={handleFileInputClick}>
            <span className="paperclip-icon"></span>
            <span className="filename-placeholder">{fileName}</span>
            <input
              type="file"
              id='file'
              name='file'
              ref={fileInputRef}
              onChange={handleChange}
              style={{ display: 'none' }}
              value={formData.file}
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="requestNDA"
              name="requestNDA"
              checked={formData.requestNDA}
              onChange={handleChange}
            />
            <label className="checkbox-text" htmlFor="requestNDA">Request an NDA</label>
        </div>
        </div>
      </div>
      <button className="send-button" type="submit">
        <div className="button-text">Send</div>
        <img
          className="arrow"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65fda43e03961e9ed716ec98/releases/6602ed9a4c12977b15c77f7e/img/vector-7-1.svg"
        />
      </button>
    </form>
  );
}

export default AppForm;
