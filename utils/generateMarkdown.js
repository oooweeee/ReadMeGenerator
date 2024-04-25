// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//THIS IS WHERE I BUILD THE BADGE
function renderLicenseBadge(license) {
  if (!license) return "";
  const badges = {
    MIT: "License: MIT",
    GPLv2: "!License: GPL v2",
    Apache: "!License: Apache",
    GPLv3: "!License: GPL v3",
  };
  return badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//THIS IS WHERE I BUILD UP THE LINK FROM THE LICENSE THAT I CHOSE
function renderLicenseLink(license) {
  if (!license) return "";
  const links = {
    MIT: "MIT License",
    GPLv2: "GPL v2 License",
    Apache: "Apache License 2.0",
    GPLv3: "GPL v3 License",
  };
  return "[license](https://www.example.com)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// THIS IS WHERE I BUILD THE AREA THAT HAS THE LICENSE
function renderLicenseSection(license) {
  if (!license) return "";
  return `## License
This project is licensed under the ${renderLicenseLink(license)}.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents 
  -Installation
  - Usage
  - License

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
