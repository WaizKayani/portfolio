import React from 'react';
import './WorkPermit.css';

const workPermitData = {
  visaStatus: 'F-1 OPT (STEM)',
  expiryDate: '2027-07-01',
  additionalInfo: 'Eligible for full-time employment in the US. STEM extension available for 24 months after graduation.'
};

const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I&apos;m currently on a <strong>{workPermitData.visaStatus}</strong> 🛂, which allows me to work in the US! 🇺🇸 My visa is valid until <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong> 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
