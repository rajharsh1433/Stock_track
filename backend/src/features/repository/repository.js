import mongoose from "mongoose";
import Price from "../schemma/schemma.js";
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const API_KEY = process.env.API_KEY;

const dataFetchandStore = async () => {
  try {
    // Clear existing data
    await Price.deleteMany({});
    const response = await axios.post("https://api.livecoinwatch.com/coins/list", {
      currency: "USD",
      sort: "rank",
      order: "ascending",  // Corrected spelling from "dscending" to "descending"
      offset: 0,
      limit: 20,
      meta: false,
    }, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      }
    });

    const data = response.data;
    //console.log(data);

    // Assuming Price is a Mongoose model and data contains an array of coin information
    for (const coin of data) {
      const price = new Price({
        // Map the properties from the API response to your schema fields
        name: coin.code,
        price: coin.rate
        // Add other necessary fields here
      });

      await price.save();
    }

    console.log("Data fetched and stored successfully.");
  } catch (error) {
    console.error("Error fetching and storing data:", error.message);
  }
};

setInterval(dataFetchandStore, 2000);

export const getData = async () => {
  try {
    const data = await Price.find().sort({price:-1}).limit(20).select('name price');
    console.log(data);
    if (!data) {
      console.log("DB error, unable to fetch data");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};


