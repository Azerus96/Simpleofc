export default class A3CAgent {
  constructor() {
    this.progress = this.loadProgress();
  }

  loadProgress() {
    try {
      return require('../../progress/a3c_progress.json');
    } catch (error) {
      return {};
    }
  }

  saveProgress() {
    const fs = require('fs');
    fs.writeFileSync('../../progress/a3c_progress.json', JSON.stringify(this.progress));
  }

  makeMove(gameState) {
    return Math.floor(Math.random() * 13);
  }
}
