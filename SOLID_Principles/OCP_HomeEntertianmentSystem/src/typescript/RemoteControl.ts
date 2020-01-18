import Device from './Devices/Device';
export default class RemoteControl {
  protected device: Device;
  constructor(device: Device) {
    this.device = device;
  }
  public connect(device: Device): void {
    this.device = device;
  }

  public turnOnDevice(): void {
    this.device.switchOn();
  }
  public turnOFFDevice(): void {
    this.device.switchOFF();
  }
}
