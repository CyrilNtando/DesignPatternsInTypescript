import Employee from './Employee';

export default class HospitalManagement {
  public callUpon(employee: Employee): void {
    employee.performDuties();
  }
}
