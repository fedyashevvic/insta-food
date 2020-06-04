const express = require(`express`);
const mongoose = require(`mongoose`);
const exphbs = require(`express-handlebars`)
const ifroutes = require(`./routes/instafood.js`);
const path = require(`path`);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const hbs = exphbs.create({
  defaultLayout: `main`,
  extname: `hbs`
});

app.engine(`hbs`, hbs.engine);
app.set('view engine', 'hbs');
app.set(`views`, `views`);
app.use(express.urlencoded({ extended: true }));
app.use(ifroutes);
async function start() {
  try {
    await mongoose.connect(`mongodb+srv://IFadmin:instafood123@cluster0-hdt1m.mongodb.net/users`, {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log(`server has been started`)
    })    
  } catch {
    console.log(e);
  }
}

start();
