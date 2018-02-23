export default class ClashService {

  constructor(resource,id='') {
    this._deck_resource = resource('http://www.clashapi.xyz/api/random-deck');
    this._all_arenas_resource = resource('http://www.clashapi.xyz/api/arenas');
    this._all_cards_resource = resource('http://www.clashapi.xyz/api/cards');
    this._all_chests_resource = resource('http://www.clashapi.xyz/api/chests');
    this._all_leagues_resource = resource('http://www.clashapi.xyz/api/leagues');
    this._all_players_resource = resource('http://www.clashapi.xyz/api/players');

    if(id) {
      let url = `http://www.clashapi.xyz/api/cards/${id}`;
      this._card_resource = resource(url);
    }

  }

  listArenas() {
    return this._all_arenas_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve the arenas.');
      });
  }

  listCards() {
    return this._all_cards_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve the cards.');
      });
  }

  listChests() {
    return this._all_chests_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve the chests.');
      });
  }

  listDeck() {
    return this._deck_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve a random deck.');
      });
  }

  listLeagues() {
    return this._all_leagues_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve the leagues.');
      });
  }

  listPlayers() {
    return this._all_players_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve the players.');
      });
  }

  search(id) {
    return this._card_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve a random deck.');
    });
  }
}
