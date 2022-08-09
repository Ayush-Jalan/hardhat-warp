export class Contract {
  private name: string;
  private solidityFile: string;
  private deployedAddress = '';
  private deployTxHash = '';

  constructor(name: string, solidityFile: string) {
    this.name = name;
    this.solidityFile = solidityFile;
  }

  getName() {
    return this.name;
  }

  getSolidityFile() {
    return this.solidityFile;
  }

  setDeployedAddress(add: string) {
    this.deployedAddress = add;
  }

  setDeployTxHash(hash: string) {
    this.deployTxHash = hash;
  }

  getCairoFile() {
    return this.solidityFile.slice(0, -4).replace('_', '__').concat(`__WC__${this.name}.cairo`);
  }
}