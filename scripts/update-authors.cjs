const gitAuthors = require("grunt-git-authors");

// list of contributers from prior the split out of Smallest Federated Wiki repo.
const priorAuthors = [
  "Ward Cunningham <ward@c2.com>",
  "Nick Niemeir <nick.niemeir@gmail.com>",
  "Ryan Bennett <nomad.ry@gmail.com>"
];

gitAuthors.updatePackageJson( { priorAuthors: priorAuthors }, (error) => {
  if (error) {
    console.log("Error: ", error)
  }
} )

gitAuthors.updateAuthors({ priorAuthors: priorAuthors }, (error, filename) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(filename, "updated");
  }
});