export default class ClashService {

  constructor(resource) {
    this._deck_resource = resource('api/random-deck');
  }

  list() {
    return this._deck_resource
      .query()
      .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Could not retrieve a random deck.');
            });
  }

  search(id) {
        return this._deck_resource
            .get({ id })
            .then(res => res.json());
    }
}
