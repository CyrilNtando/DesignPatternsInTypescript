import GeneralManufacturing from './GeneralManufacture';

export default class PhoneManufacturing extends GeneralManufacturing {
  public assembly(): void {
    console.log('assembling Mobile Device');
  }
  public testing(): void {
    console.log('testing Mobile Devices');
  }
  public packaging(): void {
    console.log('packaging Mobile Device');
  }
  public storage(): void {
    console.log('Storing ready to ship Mobile Devices');
  }
}
