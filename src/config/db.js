const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gagabi92:JUniknr9cYlRhjxY@cluster0.gq1h8.mongodb.net/?tls=true"
    )
    .then(() => {
      console.log("Banco de dados conectado ! 🚀");
    })
    .catch((error) => {
      console.log("Não foi possivel conectar ao banco de dado.");
    });
};

module.exports = connectDB;
