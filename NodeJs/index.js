//npm init -y
//npm install mongodb-legacy
//npm install express
//npm install cors
//npm i nodemon -D (aggiungo poi "start": "nodemon index.js" nello script del package.json e lancio con npm start) 

const { ObjectId } = require('mongodb-legacy');
var connString = 'mongodb://127.0.0.1:27017';
const MongoClient = require('mongodb-legacy').MongoClient;
const client = new MongoClient(connString);
const db = client.db('Ferramenta');
const prodotti = db.collection('Catalogo');
var express = require('express');
var app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());

//importo il middleware creato e lo rendo disponibile a tutte le pagine
const middleware = require('./middleware');
app.use(middleware());


app.get('/', (req,res)=>{
    res.redirect('/ferramenta/catalogo');
})

//Metodo get elenco
app.get('/ferramenta/catalogo', (req, res) => {
    prodotti.find().toArray().then(result => {
        if (result === null) {
            res.status(404).send("Catalogo non presente");
        } else {
            res.json(result);
        }
    }).catch(error => {
        res.status(500).send(error.message);
    });
});

//Metodo get con catalogo striminzito, per ritornare solo alcuni valori di un prodotto che voglio mostrare
app.get('/ferramenta/catalogo-min', (req, res) => {

    prodotti.find().toArray().then(result => {
        if (result === null) {
            res.status(404).send("Catalogo non presente");
        } else {
            const nuoviProdotti = result.map((prodotto) => {
                const { nome, prezzo } = prodotto;
                return { nome, prezzo };
            })
            res.json({success: true, data: nuoviProdotti});
        }
    }).catch(error => {
        res.status(500).send(error.message);
    });    
});

//Metodo get per il dettaglio
app.get('/ferramenta/catalogo/:codice', (req, res) => {
    prodotti.findOne({ codice: req.params.codice }).then(result => {
        if (result === null) {
            res.status(404).send("Prodotto non esistente");
        } else {
            res.json(result);
        }
    }).catch(error => {
        res.status(500).send(error.message);
    });
});


//Metodo post inserimento  
app.post('/ferramenta/catalogo', (req, res) => {

    var newProduct = {
        nome: req.body.nome,
        prezzo: req.body.prezzo,
        codice: req.body.codice,
        urlImg: req.body.urlImg
    };

    prodotti.findOne({ codice: req.body.codice })
        .then(risultato => {
            if (risultato === null) {
                prodotti.insertOne(newProduct, (result) => {
                    res.json(result);
                })
            } else {
                res.status(400).send("Prodotto già esistente");
            }
        }).catch(error => {
            res.status(500).send(error.message);
        })
});

//Metodo put per modifica  
app.put('/ferramenta/catalogo/:codice', (req, res) => {
    prodotti.findOne({ codice: req.params.codice }).then(result => {
        if (result === null) {
            res.status(404).send("Prodotto non esistente");
        } else {
            prodotti.updateOne(
                { codice: req.params.codice },
                {
                    $set: {
                        nome: req.body.nome,
                        prezzo: req.body.prezzo,
                        codice: req.body.codice,
                        urlImg: req.body.urlImg
                    }
                });
            res.json(result);
        }
    }).catch(error => {
        res.status(500).send(error.message);
    });
});

//Metodo delete per eliminare  
app.delete('/ferramenta/catalogo/:codice', (req, res) => {
    prodotti.findOne({ codice: req.params.codice }).then(result => {
        if (result === null) {
            res.status(404).send("Prodotto non esistente");
        } else {
            prodotti.deleteOne(
                { codice: req.params.codice }
            )
            res.json(result);
        }
    }).catch(error => {
        res.status(500).send(error.message);
    });
});


app.listen(8080);








