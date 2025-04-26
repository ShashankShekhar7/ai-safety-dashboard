import React, { useState } from 'react';
import { Incident, Severity, SortDirection } from '../../types';
import { mockIncidents } from '../../data/mockData';
import IncidentList from '../IncidentList/IncidentList';
import ReportForm from '../ReportForm/ReportForm';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filterSeverity, setFilterSeverity] = useState<Severity | 'All'>('All');
  const [sortDirection, setSortDirection] = useState<SortDirection>('Newest First');
  const [showReportForm, setShowReportForm] = useState<boolean>(false);

  // Filter incidents based on severity
  const filteredIncidents = incidents.filter(incident => 
    filterSeverity === 'All' ? true : incident.severity === filterSeverity
  );

  // Sort incidents based on date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    if (sortDirection === 'Newest First') {
      return b.reportedDate.getTime() - a.reportedDate.getTime();
    } else {
      return a.reportedDate.getTime() - b.reportedDate.getTime();
    }
  });

  // Add new incident
  const handleAddIncident = (newIncident: Omit<Incident, 'id' | 'reportedDate'>) => {
    const incident: Incident = {
      ...newIncident,
      id: (incidents.length + 1).toString(),
      reportedDate: new Date()
    };
    setIncidents([...incidents, incident]);
    setShowReportForm(false);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>HumanChain</h1>
      </header>
      
      <div className="dashboard-content">
        <div className="robot-visual">
          <div className="robot-head">
            {/* Robot face visualization */}
          </div>
          <div className="severity-indicators">
            {/* <div className="severity-title">Reported Dolines</div> */}
            <div className="severity-badges">
              <div className="severity-badge high">
                <div className="badge-icon"></div>
                <span>High</span>
                {/* <span className="badge-label">Rioghluse</span> */}
              </div>
              <div className="severity-badge medium">
                <div className="badge-icon"></div>
                <span>Medium</span>
                {/* <span className="badge-label">Ciuoed</span> */}
              </div>
              <div className="severity-badge low">
                <div className="badge-icon"></div>
                <span>Low</span>
                {/* <span className="badge-label">Prestel</span> */}
              </div>
              <div className="severity-badge medium-green">
                <div className="badge-icon"></div>
                <span>Medium</span>
                {/* <span className="badge-label">Tiegh</span> */}
              </div>
              <div className="severity-badge medium-teal">
                <div className="badge-icon"></div>
                <span>Medium</span>
                {/* <span className="badge-label">Rerceited</span> */}
              </div>
              <div className="severity-badge info">
                <div className="badge-icon"></div>
                <span>Info</span>
                {/* <span className="badge-label">Smiuet</span> */}
              </div>
              <div className="severity-badge low-info">
                <div className="badge-icon"></div>
                <span>Low</span>
                {/* <span className="badge-label">Seavrity</span> */}
              </div>
            </div>
          </div>
        </div>

        <div className="control-panel">
          <div className="incidents-header">
            <h2>AI Safety Incidents</h2>
            <div className="control-buttons">
              <button className="report-button" onClick={() => setShowReportForm(!showReportForm)}>
                Report a Flare
              </button>
              <div className="incidents-count">
                <span>{incidents.length} Total Incident</span>
              </div>
              {/* <button className="view-details-button">View Details</button> */}
              <div className="reported-date">
                {/* <button>Reported Date</button> */}
              </div>
            </div>
          </div>

          <div className="filter-controls">
            <button 
              className={filterSeverity === 'All' ? 'active' : ''} 
              onClick={() => setFilterSeverity('All')}
            >
              All Issues
            </button>
            <button 
              className={filterSeverity === 'Low' ? 'active' : ''} 
              onClick={() => setFilterSeverity('Low')}
            >
              Low
            </button>
            <button 
              className={filterSeverity === 'Medium' ? 'active' : ''} 
              onClick={() => setFilterSeverity('Medium')}
            >
              Medium
            </button>
            <button 
              className={filterSeverity === 'High' ? 'active' : ''} 
              onClick={() => setFilterSeverity('High')}
            >
              High
            </button>
          </div>

          <div className="sort-controls">
            <button 
              className={sortDirection === 'Newest First' ? 'active' : ''} 
              onClick={() => setSortDirection('Newest First')}
            >
              Newest First
            </button>
            <button 
              className={sortDirection === 'Oldest First' ? 'active' : ''} 
              onClick={() => setSortDirection('Oldest First')}
            >
              Oldest First
            </button>
          </div>

          <IncidentList incidents={sortedIncidents} />
        </div>
      </div>

      {showReportForm && (
        <div className="report-form-overlay">
          <div className="report-form-container">
            <h2>Report New Incident</h2>
            <ReportForm onSubmit={handleAddIncident} onCancel={() => setShowReportForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;