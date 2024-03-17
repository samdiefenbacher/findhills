const replaceInFile = require("replace-in-file");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

// Define the placeholder and the actual API key
const placeholder = "%GOOGLE_API_KEY%";
const apiKey = process.env.GOOGLE_API_KEY;
console.log(process.env.GOOGLE_API_KEY);

// Make sure the API key is provided
if (!apiKey) {
  console.error("Error: GOOGLE_API_KEY environment variable is not set.");
  process.exit(1);
}

// Define the directory containing HTML files
const directory = "./dist"; // Change this to your build directory

// Define the file types to search for placeholders
const fileTypes = [".html"]; // Add more file types if necessary

// Define the options for replacement
const options = {
  files: `${directory}/**/*`,
  from: new RegExp(placeholder, "g"),
  to: apiKey,
};

// Perform the replacement
replaceInFile(options)
  .then((results) => {
    console.log("Replacement complete:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
