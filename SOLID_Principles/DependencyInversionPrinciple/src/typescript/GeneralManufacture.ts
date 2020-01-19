export default abstract class GeneralManufacture {
  public Process(): void {
    this.assembly();
    this.testing();
    this.packaging();
    this.storage();
  }
  public abstract assembly(): void;
  public abstract testing(): void;
  public abstract packaging(): void;
  public abstract storage(): void;
}
