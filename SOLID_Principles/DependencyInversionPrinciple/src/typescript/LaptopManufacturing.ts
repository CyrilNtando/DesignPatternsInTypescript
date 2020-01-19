import GeneralManufacture from './GeneralManufacture';

export default class LaptopManufacturing extends GeneralManufacture {
  public assembly(): void {
    console.log('assembling Laptops');
  }
  public testing(): void {
    console.log('testing Laptops');
  }
  public packaging(): void {
    console.log('packaging Laptops');
  }
  public storage(): void {
    console.log('Storing ready to ship Laptops');
  }
}
