const inquirer = require('inquirer')

const startPrompt = [
    { //update list
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    }
  ]


// fix inquirer path to where it needs to go
inquirer
  .prompt(startPrompt)
  .then((data) => {
    const filename = `${data.name}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });