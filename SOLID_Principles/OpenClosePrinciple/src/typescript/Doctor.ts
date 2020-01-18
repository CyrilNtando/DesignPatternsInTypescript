import Employee from './Employee';

export default class Doctor extends Employee {
  constructor(id: number, name: string, department: string, working: boolean) {
    super(id, name, department, working);
  }
  public performDuties(): void {
    this.diagnosePatient();
    this.prescribeMedicine();
  }
  private diagnosePatient(): void {
    console.log('Diagnosing Patient');
  }
  private prescribeMedicine(): void {
    console.log('Prescribing medication');
  }
}
