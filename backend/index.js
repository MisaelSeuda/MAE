const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const Technical = require('./Technical');
const cepPromise = require("cep-promise")

app.use(cors());
app.use(express.json());

const db_host = 'localhost';
const db_port = 27017;
const db_db = 'technicals';
const mongoURI = `mongodb:\/\/${db_host}:${db_port}/${db_db}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });

app.post('/cep/:cep', (req, res) => {
    cepPromise(req.params.cep)
        .then((cep) => res.status(201).send(cep))
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        })
});

app.post('/technical', (req, res) => {

    Technical.create(req.body)
        .then((technical) => res.status(201).send(technical))
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        })

});

app.get('/showTechnicals', (req, res) => {
    Technical.find({})
        .then((technicals) => res.send(technicals))
        .catch((err) => {
            console.log(err);
            res.status(500).send({});
        })
})

app.patch('/updateTech', (req, res) => {

    Technical.findById(req.body._id)
        .then((tech) => {
            tech.nameTechnical = req.body.nameTechnical;
            tech.service = req.body.service;
            tech.category = req.body.category;
            tech.cep = req.body.cep;
            tech.address = req.body.address;
            tech.save()
                .then((tech) => res.status(200).send(tech))
                .catch(() => res.status(500).send())
        })
        .catch((err) => {
            console.error(err);
            res.status(404).send();
        })
})

app.delete('/technicalDelete/:id', (req, res) => {
    Technical.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send())
        .catch(() => res.status(400).send());
})

/*
app.get('/', (req, res) => {
    res.send('Hello NodeJS');
})

app.get('/systems', (req, res) => {
    System.find({})
        .then((systems) => res.send(systems))
        .catch((err) => {
            console.log(err);
            res.status(500).send({});
        })
})

app.post('/systemsFindId/:id', (req, res) => {
    System.find({"superID": {$regex: req.params.id, $options: 'i'}})
        .then((systems) => res.send(systems))
        .catch((err) => {
            console.log(err);
            res.status(500).send({});
        })
})
*/
/*
app.post('/systems', (req, res) => {

    Technical.create(req.body)
        .then((system) => res.status(201).send(system))
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        })

});

https://viacep.com.br/ws/78715736/json/

app.patch('/systems', (req, res) => {

    console.log(req.body)
    System.findById(req.body._id)
        .then((system) => {
            system.superID = req.body.superID;
            system.nameSystem = req.body.nameSystem;
            system.description = req.body.description;
            system.url = req.body.url;
            system.username = req.body.username;
            system.password = req.body.password;
            system.acessLevel = req.body.acessLevel;
            system.save()
                .then((system) => res.status(200).send(system))
                .catch(() => res.status(500).send())
        })
        .catch((err) => {
            console.error(err);
            res.status(404).send();
        })
})

app.delete('/systems/:id', (req, res) => {
    System.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send())
        .catch(() => res.status(400).send());
})
*/
app.listen(8080, "0.0.0.0", () => {
    console.log('Escutando a porta 8080...');
});
