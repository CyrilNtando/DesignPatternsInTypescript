import { FormatType } from './FormatType';
export default class ReportFormatter {
  private formattedOutput: string;
  constructor(object: Object, formatType: FormatType) {
    switch (formatType) {
      case 'XML':
        this.formattedOutput = this.convertObjectToXML(object);
        break;
      case 'CSV':
        this.formattedOutput = this.convertObjectToCSV(object);
        break;
      default:
        this.formattedOutput = '';
    }
  }
  private convertObjectToXML(object: Object): string {
    return `XML : ${object.toString()}`;
  }
  private convertObjectToCSV(object: Object): string {
    return `CSV : ${object.toString()}`;
  }

  public getFormattedValue(): string {
    return this.formattedOutput;
  }
}
