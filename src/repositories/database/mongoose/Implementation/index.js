class Implementation {
  constructor(Model) {
    this.Model = Model;
  }

  async save(requestedData) {
    const data = new this.Model(requestedData);

    await data.save();
    return data._doc;
  }
}

module.exports = Implementation;
