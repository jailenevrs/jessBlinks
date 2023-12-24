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
   
   <p className='guidelines'>
<br></br>
    A non-refundable deposit is required to make an appointment (this deposit will go towards your service and secure your appointment). If the deposit if not sent then your appointment will not be booked. If you cancel less than 24 hours before your scheduled appointment then the deposit will be forfeited. Please be courteous and let me know before the 24 hour period. All final payments can either be through cashapp or zelle.<br></br>
    Zelle: 954-478-3247 <br></br>
    Cash App: $Jesslashed

   </p>
    </div>
   
  );
}

export default AppointmentMaker;
