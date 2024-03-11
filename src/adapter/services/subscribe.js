const database = require("../../repositories/database/mongoose/Implementation");
const model = require("../../repositories/database/mongoose/models/subscribe");
const usecase = require("../../usecases");
const error = require("../../utils/error");

class Subscribe {
  constructor({ email }) {
    this.email = email;
  }

  async subscribe() {
    const dataStore = new database(model);
    return await new usecase.Subscribe(dataStore, error).subscribe(this.email);
  }
}


module.exports = Subscribe;