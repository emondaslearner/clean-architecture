const entity = require("../../entity");

class Subscribe {
  constructor(database, error, emailService) {
    this.database = database;
    this.emailService = emailService;
    this.error = error;
  }

  async subscribe(email) {
    if (!email) {
      throw this.error.badRequest("Email:Email is missing");
    }

    const entityData = new entity.Subscribe({ email });
    const data = await this.database.save(entityData);
    return data;
  }
}

module.exports = Subscribe;
