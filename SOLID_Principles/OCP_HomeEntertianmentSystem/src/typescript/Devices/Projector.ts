import Device from './Device';

export default class Projector implements Device {
  switchOn(): void {
    console.log('turning On Projector');
  }
  switchOFF(): void {
    console.log('turning OFF Projector');
  }
}
