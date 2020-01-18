import Device from './Device';

export default class SoundSystem implements Device {
  switchOn(): void {
    console.log('turning On Surrounding Sound');
  }
  switchOFF(): void {
    console.log('turning OFF Surrounding Sound');
  }
}
