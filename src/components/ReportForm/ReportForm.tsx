import React, { useState } from 'react';
import { Severity } from '../../types';
import './ReportForm.css';

interface ReportFormProps {
  onSubmit: (incident: { title: string; description: string; severity: Severity }) => void;
  onCancel: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Medium');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: { title?: string; description?: string } = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onSubmit({ title, description, severity });
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <div className="error-message">{errors.title}</div>}
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <div className="error-message">{errors.description}</div>}
      </div>
      
      <div className="form-group">
        <label>Severity</label>
        <div className="severity-options">
          <label className="severity-option">
            <input
              type="radio"
              name="severity"
              value="Low"
              checked={severity === 'Low'}
              onChange={() => setSeverity('Low')}
            />
            <span className="radio-label">Low</span>
          </label>
          <label className="severity-option">
            <input
              type="radio"
              name="severity"
              value="Medium"
              checked={severity === 'Medium'}
              onChange={() => setSeverity('Medium')}
            />
            <span className="radio-label">Medium</span>
          </label>
          <label className="severity-option">
            <input
              type="radio"
              name="severity"
              value="High"
              checked={severity === 'High'}
              onChange={() => setSeverity('High')}
            />
            <span className="radio-label">High</span>
          </label>
        </div>
      </div>
      
      <div className="form-actions">
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Submit Incident
        </button>
      </div>
    </form>
  );
};

export default ReportForm;