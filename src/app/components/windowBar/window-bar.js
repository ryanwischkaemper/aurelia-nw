var gui = require('nw.gui');

export class WindowBar {
  win = gui.Window.get();
  version = gui.App.manifest.version;

  constructor() {
    this.win.isMaximized = false;
    this.win.on('maximize', () => this.win.isMaximized = true);
    this.win.on('unmaximize', () => this.win.isMaximized = false);
  }

  close = ()=> this.win.close();
  minimize = ()=> this.win.minimize();

  maximize() {
    if (this.win.isMaximized) {
      this.win.unmaximize();
    } else {
      this.win.maximize();
    }
  }
}
