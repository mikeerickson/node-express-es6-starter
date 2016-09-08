
'use strict'

const express = require('express')
const app     = express()
const msg     = require('gulp-messenger')
const chalk   = require('chalk')
const Twig    = require('twig')
const _       = require('lodash')

var twig = Twig.twig;

// This section is optional and used to configure twig.
app.set('twig options', {
    strict_variables: false
});

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))  // static directory

// Custom routes (not convered by static files, uses twig template engine)
app.get('/', (req, res) => {
  res.render('index.twig', {
    firstName: 'Mike',
    lastName: 'Erickson'
  });
});

// lets startup this puppy
app.listen(app.get('port'), () => {
  msg.log('\n')
  console.log(chalk.cyan('Server Started ' + new Date()));
  msg.log('\n')
  const serverInfo = chalk.yellow(`http://localhost:${app.get('port')}`);
  msg.success('=', _.pad(`Application Running On: ${serverInfo}`, 80), '=')
})
