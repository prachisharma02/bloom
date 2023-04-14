const mongoose = require("mongoose");

const chatModel = mongoose.schema(
  //defining schema
  {
    chatName: { type: String, trim: true }, //chat is of type string and trim always true as to remove extra space
    isgroupchat: { type: Boolean, default: false }, // groupchat is not always so it will be either true or false
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, // it is pf type array cuz there can be many users
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      //for current mesage
      ref: "Message", //referring to the message in the database
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId, // this will contain  id to the  particular user for reference
      ref: "User",
    },
  },
  {
    timestamp: true,
  }
);
const Chat = mongoose.model("Chat", chatModel); //converting into model
module.exports = Chat;
