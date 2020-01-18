import Nurse from './Nurse';
import Doctor from './Doctor';
import HospitalManagement from './HospitalManagement';

const peggy = new Nurse(1, 'peggy', 'cancer Ward', true);
const Steve = new Doctor(2, 'Steve', 'cancer Ward', true);

const hospitalManagement = new HospitalManagement();
hospitalManagement.callUpon(peggy);

hospitalManagement.callUpon(Steve);
