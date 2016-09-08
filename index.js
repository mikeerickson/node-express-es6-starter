const express = require('express')
const app     = express()
const msg     = require('gulp-messenger')
const chalk   = require('chalk')
const fs      = require('fs')
const Twig    = require('twig')

var twig = Twig.twig;

// // This section is optional and used to configure twig.
// app.set("twig options", {
//     strict_variables: false
// });

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// default route to index.html
// app.get('*', (req, res) => {
//   res.write(fs.readFileSync(path.join(__dirname, 'public/index.html')));
//   res.end();
// });

app.get('/', (req, res) => {
  res.render('index.twig', {
    firstName: 'Mike',
    lastName: 'Erickson',
    message : 'Hello'
  });
});

// lets startup this puppy
app.listen(app.get('port'), () => {
  console.log(chalk.cyan('Server Started ' + new Date()));
  const serverInfo = chalk.yellow(`http://localhost:${app.get('port')}`)
  msg.log('\n')
  msg.success('=', `               Application Running On: ${serverInfo}`, '=')
})
