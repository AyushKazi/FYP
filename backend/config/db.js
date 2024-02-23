import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("electro", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// const connectdb = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connected to the db");
//   } catch (error) {
//     console.log("Unable to cinnect to db ", error);
//   }
// };

//making table
// sequelize.sync();

export const db = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database Connection Successful!");
    })
    .catch((error) => {
      console.log("Unable to connect to db ", error);
    });
};
