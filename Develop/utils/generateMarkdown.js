
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}


function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'MIT License';
    case 'Apache 2.0':
      return 'Apache License 2.0';
    case 'GPL 3.0':
      return 'GNU General Public License v3.0';
    default:
      return '';
  }
}


function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 

${data.installation}

## Usage 

${data.usage} 

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing 

${data.contributing} 

## Tests 

${data.tests}

## Questions 

Any questions please contact via email: ${data.email} or if you want to see more of my work checkout my Github: [${data.username}](https://github.com/${data.username}).
`;
}


module.exports = generateMarkdown;
