import ReportFormatter from './ReportFormatter';
import Employee from '../domains/Employee';
import { FormatType } from './FormatType';
export default class EmployeeReportFormatter extends ReportFormatter {
  private anEmployee: Employee;

  private formatType: string;

  constructor(employee: Employee, formatType: FormatType) {
    super(employee, formatType);
    this.anEmployee = employee;
    this.formatType = formatType;
  }

  public getFormattedEmployee(): string {
    return this.getFormattedValue();
  }
}
