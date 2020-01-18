export default abstract class Employee {
  private id: number;
  private name: string;
  private department: string;
  private working: boolean;
  private _this = this;
  constructor(id: number, name: string, department: string, working: boolean) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.working = working;
  }
  public abstract performDuties(): void;
  public toString() {
    return `id=${this._this.id} name=${this._this.name} department=${this.department} working=${this.working} `;
  }
}
