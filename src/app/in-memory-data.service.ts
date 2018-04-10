import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, title: 'CS:GO', description: 'very cancer' },
      { id: 12, title: 'Rainbow Six: Siege', description: 'fun game, bad server' },
      { id: 13, title: 'Resident Evil', description: 'scary' },
      { id: 14, title: 'Outlast', description:'very scary'},
      { id: 15, title: 'Wolfenstein', description: 'gory' },
      { id: 16, title: 'DOOM', description: 'very gory' },
      { id: 17, title: 'Battlefield', description: 'quite fun'},
      { id: 18, title: 'DOTA', description: 'also another cancer'},
      { id: 19, title: 'Ghost Recon', description: 'very fun'},
      { id: 20, title: 'Just Cause', description: 'michael bay'}
    ];
    return {games};
  }
}
