const mongoose = require("mongoose");
const { Schema } = mongoose;

const insuranceSchema = new Schema({
    id: Number,
    renterName: String,
    category: String,
    itemName: String,
    itemValue: Number,
});

mongoose.connect(
    "mongodb+srv://sa:sa123456@cluster0.mrohh.mongodb.net/Renter?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const dbConn = mongoose.connection;
dbConn.on("error", console.error.bind(console, "connection error:"));
dbConn.once("open", function () {
    console.log("MongoDB open evemt.");
});

const Insurance = mongoose.model("RenterInsurance", insuranceSchema);
class DBWorker {
    async getItems(callback) {
        try {
            const allInsurances = await Insurance.find({});
            // console.log(allInsurances);
            if (callback)
                callback(allInsurances);
            return allInsurances;
        } catch (error) {
            console.log(error);
        }
        return [];
    }

    async saveOrUpdate(item, callback) {
        try {
            const eixsting = await Insurance.findById(item._id);
            if (!eixsting) {
                console.log('create new item.');
                let newItem = new Insurance(item);
                await newItem.save();
            }
            else {
                await eixsting.update(item);
            }

            const allInsurances = await Insurance.find({});
            // console.log(allInsurances);
            return callback(allInsurances);

        } catch (error) {
            console.log(error);
        }
    }

    async deleteItem(itemId) {
        try {
            await Insurance.deleteOne({ _id: itemId });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DBWorker;