// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//THIS IS WHERE I BUILD THE BADGE
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//THIS IS WHERE I BUILD UP THE LINK FROM THE LICENSE THAT I CHOSE
function renderLicenseLink(license) {
return '[license](https://www.example.com)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// THIS IS WHERE I BUILD THE ARE THAT HAS THE LICENSE 
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  -Installation
  - Usage
  - License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
