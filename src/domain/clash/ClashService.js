export default class ClashService {

  constructor(resource,id='') {
    this._deck_resource = resource('api/random-deck');
    this._all_arenas_resource = resource('api/arenas');
    this._all_cards_resource = resource('api/cards');
    this._all_chests_resource = resource('api/chests');
    this._all_leagues_resource = resource('api/leagues');
    this._all_players_resource = resource('api/players');

    if(id) {
      let url = `api/cards/${id}`;
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
