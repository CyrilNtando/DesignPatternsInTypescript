import Employee from '../domains/Employee';
import databaseConnectionManager from '../database/DatabaseConnectionManager';

export default class EmployeeDAO {
  private connectionManager: databaseConnectionManager;
  constructor() {
    this.connectionManager = databaseConnectionManager.getManagerInstance();
  }
  public saveEmployee(employee: Employee) {
    this.connectionManager.connect();
    this.connectionManager
      .getConnectionObject()
      .prepareStatement('insert into employees')
      .disconnect();
    console.log(`save ${employee.toString} into the database`);
  }
  public deleteEmployee(employee: Employee) {
    console.log(`deleted ${employee.toString} from the database`);
  }
}
