import {Session} from 'services/session';

export class App {
  static inject = [Session];
  constructor(session) {
    this.session = session;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia Lcoin';
    config.map([
      { route: ['', 'wallet'], name: 'wallet', moduleId: 'routes/wallet', nav: true, title: 'Wallet' },
      { route: 'node-info', name: 'node-info', moduleId: 'routes/node-information', nav: true, title: 'Node Info' },
      { route: 'explorer', name: 'explorer', moduleId: 'routes/explorer/index', nav: true, title: 'Explorer' }
    ]);

    this.router = router;
  }
}
