import React from 'react';
import { Incident } from '../../types';
import IncidentItem from '../IncidentItem/IncidentItem';
import './IncidentList.css';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <div className="no-incidents">No incidents found matching your criteria.</div>
      ) : (
        incidents.map(incident => (
          <IncidentItem key={incident.id} incident={incident} />
        ))
      )}
    </div>
  );
};

export default IncidentList;