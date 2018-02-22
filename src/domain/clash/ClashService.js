export default class ClashService {

  constructor(resource,id='') {
    this._deck_resource = resource('api/random-deck');
    this._all_cards_resource = resource('api/cards');

    if(id) {
      let url = `api/cards/${id}`;
      this._card_resource = resource(url);
    }

  }

  listCards() {
    return this._all_cards_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve the cards.');
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

  search(id) {
    return this._card_resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Could not retrieve a random deck.');
    });
  }
}
