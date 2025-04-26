import React, { useState } from 'react';
import { Incident } from '../../types';
import { format } from 'date-fns';
import './IncidentItem.css';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const getSeverityClass = (severity: string) => {
    switch(severity) {
      case 'High': return 'severity-high';
      case 'Medium': return 'severity-medium';
      case 'Low': return 'severity-low';
      default: return '';
    }
  };

  const formatDate = (date: Date) => {
    return format(date, 'MMM dd, yyyy');
  };

  return (
    <div className="incident-item">
      <div className="incident-summary">
        <div className="incident-title">{incident.title}</div>
        <div className={`incident-severity ${getSeverityClass(incident.severity)}`}>
          {incident.severity}
        </div>
        <div className="incident-count">
          {/* {Math.floor(Math.random() * 10)} {Math.random() > 0.5 ? 'Inci' : 'Datt'} */}
        </div>
        <div className="incident-date">{formatDate(incident.reportedDate)}</div>
        <button 
          className="view-details-btn"
          onClick={() => setExpanded(!expanded)}
        >
          View Details
        </button>
      </div>
      
      {expanded && (
        <div className="incident-details">
          <div className="incident-description">
            <h4>Description</h4>
            <p>{incident.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;