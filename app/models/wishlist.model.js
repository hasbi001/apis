module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        article_id: String

      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Wishlist = mongoose.model("wishlist", schema);
    return Wishlist;
  };