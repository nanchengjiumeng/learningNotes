const commander = require('commander');
const fs = require('fs')
const path = require('path')
const { prompt } = require('inquirer')
const program = new commander.Command();
const chalk = require('chalk');

// const execa = require('execa');
 
// (async () => {
//     const {stdout} = await execa('npm', ['uninstall', 'vue']);
//     console.log(stdout);
//     //=> 'unicorns'
// })();

const newContactPrompts = [
    {name: 'firstName', message: 'First Name'},
    {name: 'lastName', message: 'Last Name'},
    {name: 'phoneNumber', message: 'Phone Number'}
  ]

const getContacts = () => JSON.parse(fs.readFileSync('./contacts.json'))
const saveContacts = (contacts) => fs.writeFileSync('./contacts.json', JSON.stringify(contacts, null, 2))


program
    .version('1.0.0', '-v, --version')
  
    program
    .command('new')
    .alias('n')
    .description('add a new contact')
    .action(() => {
      prompt(newContactPrompts)
        .then(({firstName, lastName, phoneNumber}) => {
          const key = firstName + ' ' + lastName
          const contacts = getContacts()
          contacts[key] = {firstName, lastName, phoneNumber}
          saveContacts(contacts)
        })
    })

program
    .command('list')
    .alias('l')
    .description('list all contacts')
    .action(()=>{
        const contacts = getContacts()
        prompt([
          {
            type: 'list',
            name: 'selected',
            message: 'Select a contact',
            choices: Object.keys(contacts)
          }
        ])
          .then(({selected}) => {
            const contact = contacts[selected]
            console.log(JSON.stringify(contact, null, 2))
          })
    })

program
    .command('create <filename>')
    .action((filename, opt)=>{
        console.log(opt.name());
        
        require(path.join(__dirname, filename))
    })
    
program.parse(process.argv)




