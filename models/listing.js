const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    type: String,
    default:
      "https://www.bing.com/images/search?view=detailV2&ccid=fPMxWJIm&id=6CDD171B8E3FFB0EE317D7645E74B6B6EC78875C&thid=OIP.fPMxWJImv76oBuo2XxMzCwHaLG&mediaurl=https%3a%2f%2fimages.unsplash.com%2fphoto-1599302592205-d7d683c83eea%3ffm%3djpg%26q%3d60%26w%3d3000%26ixlib%3drb-4.0.3%26ixid%3dM3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8fDA%253D&exph=4495&expw=3000&q=unsplash+sunset+image&mode=overlay&FORM=IQFRBA&ck=8B04F715D946A8E69DC3DAB60AD2E863&selectedIndex=0&idpp=serp",
    set: (v) =>
      v === ""
        ? "https://www.bing.com/images/search?view=detailV2&ccid=fPMxWJIm&id=6CDD171B8E3FFB0EE317D7645E74B6B6EC78875C&thid=OIP.fPMxWJImv76oBuo2XxMzCwHaLG&mediaurl=https%3a%2f%2fimages.unsplash.com%2fphoto-1599302592205-d7d683c83eea%3ffm%3djpg%26q%3d60%26w%3d3000%26ixlib%3drb-4.0.3%26ixid%3dM3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8fDA%253D&exph=4495&expw=3000&q=unsplash+sunset+image&mode=overlay&FORM=IQFRBA&ck=8B04F715D946A8E69DC3DAB60AD2E863&selectedIndex=0&idpp=serp"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
