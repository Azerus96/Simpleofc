export default class MCCFRAgent {
  constructor() {
    this.progress = this.loadProgress();
  }

  loadProgress() {
    try {
      return require('../../progress/mccfr_progress.json');
    } catch (error) {
      return {};
    }
  }

  saveProgress() {
    const fs = require('fs');
    fs.writeFileSync('../../progress/mccfr_progress.json', JSON.stringify(this.progress));
  }

  makeMove(gameState) {
    return Math.floor(Math.random() * 13);
  }
}
