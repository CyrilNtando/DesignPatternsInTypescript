import Employee from './domains/Employee';
import EmployeeDAO from './domain.dao/EmployeeDAO';
import EmployeeReportFormatter from './reporting/EmployeeReportFormatter';

const jane = new Employee(234, 'Jane', 'Finance', true);

class ClientModule {
  private static employeeDAO: EmployeeDAO = new EmployeeDAO();

  public static hireEmployee(employee: Employee) {
    this.employeeDAO.saveEmployee(employee);
  }

  public static terminateEmployee(employee: Employee): void {
    this.employeeDAO.deleteEmployee(employee);
  }
}

ClientModule.hireEmployee(jane);
ClientModule.hireEmployee(jane);
