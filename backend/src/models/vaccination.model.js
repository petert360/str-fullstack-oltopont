const mongoose = require('mongoose');

const VaccinationSchema = mongoose.Schema(
    {
        /* _id-ra nincs szükség, mert a mongoDB automatikusan kezeli
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    }, */
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
            required: true,
        },
        vaccine: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vaccine',
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        dose: {
            type: Number,
            required: true,
        },
        injectionSite: {
            type: String,
            required: true,
        },
        injectionType: {
            type: String,
            required: true,
        },
        adverseEvent: String,
        eeszt: {
            type: Boolean,
            required: true,
        },
        place: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Place',
            required: true,
        },
        // comment: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Vaccination', VaccinationSchema);
