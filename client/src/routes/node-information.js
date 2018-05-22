import {HttpWrapper} from 'services/http-wrapper';

export class NodeInformation {
  info;

  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  attached() {
    return this.http.get('/').then(result => {
      this.info = result;
    });
  }
}
