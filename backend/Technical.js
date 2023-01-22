const mongoose = require('mongoose');

const technicalSchema = new mongoose.Schema(
    {
        nameTechnical: String,
        service: String,
        category: String,
        cep: String,
        address: String
    },
    { versionKey: false, collection: 'technicals' }
);

const Technical = mongoose.model("Technical", technicalSchema);

module.exports = Technical;