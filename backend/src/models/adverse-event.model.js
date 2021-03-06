const mongoose = require('mongoose');

const AdverseEventSchema = mongoose.Schema(
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
        date: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('AdverseEvent', AdverseEventSchema);