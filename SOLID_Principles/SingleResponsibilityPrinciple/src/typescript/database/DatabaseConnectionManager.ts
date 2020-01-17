class Connect {
  private url: string;
  constructor() {
    this.url = '';
  }
  getConnection(url: string): Connect {
    this.url = url;
    return this;
  }
  prepareStatement(statement: string): Connect {
    if (!statement) throw new Error('writing to database failed');
    return this;
  }
  public disconnect() {
    console.log('disconnected');
  }
}
export default class DatabaseConnectManager {
  private static connectionInstance: DatabaseConnectManager = new DatabaseConnectManager();
  private conn: Connect;
  constructor() {
    this.conn = new Connect();
  }
  public static getManagerInstance(): DatabaseConnectManager {
    return this.connectionInstance;
  }
  public connect(): void {
    this.conn.getConnection('some/database/url');
    console.log('establishing database connection ');
  }

  public getConnectionObject(): Connect {
    return this.conn;
  }
}
