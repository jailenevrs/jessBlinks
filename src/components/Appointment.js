import React from 'react';

function AppointmentMaker() {
  const openCalendlyWidget = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/jessblinks' });
    return false;
  };

  return (
    <div className='scheduleApt'>
      <h2>Schedule an Appointment</h2>
      <button className='button-52' onClick={openCalendlyWidget}>Book Now</button>
    </div>
  );
}

export default AppointmentMaker;
