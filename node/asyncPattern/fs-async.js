const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    const first = await readFile("../node.js/content/first.txt", "utf8");
    await writeFile("../node.js/content/first.txt", "k a khabar");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("../node.js/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
