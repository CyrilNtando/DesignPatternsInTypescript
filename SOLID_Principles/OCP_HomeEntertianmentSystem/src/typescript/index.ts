import Projector from './Devices/Projector';
import Television from './Devices/Television';
import SoundSystem from './Devices/SoundSystem';

import RemoteControl from './RemoteControl';

const controller = new RemoteControl(new Television());
controller.turnOnDevice();
controller.connect(new Projector());
controller.turnOnDevice();

controller.connect(new SoundSystem());
controller.turnOnDevice();
