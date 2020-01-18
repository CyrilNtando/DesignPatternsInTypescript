import Employee from './Employee';
export default class Nurse extends Employee {
  constructor(id: number, name: string, department: string, working: boolean) {
    super(id, name, department, working);
  }
  public performDuties(): void {
    this.checkVitalSign();
    this.drawBlood();
    this.cleanPatientArea();
  }

  private checkVitalSign(): void {
    console.log('checking vital Signs');
  }
  private drawBlood(): void {
    console.log("taking patient's blood");
  }
  private cleanPatientArea(): void {
    console.log("Cleaning patient's room");
  }
}
