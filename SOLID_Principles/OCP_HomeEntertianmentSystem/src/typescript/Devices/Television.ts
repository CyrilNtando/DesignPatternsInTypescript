import Device from './Device';

export default class Television implements Device {
  switchOn(): void {
    console.log('turning On Television');
  }
  switchOFF(): void {
    console.log('turning OFF Television');
  }
}
