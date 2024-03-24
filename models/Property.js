import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location: {
        street: {
            type: String,
        },
        City: {
            type: String,
        },
        State: {
            type: String,
        },
        ZipCode: {
            type: String,
        },
    },
    beds: {
        type: Number,
        required: true,
    },
    baths: {
        type: Number,
        required: true,
    },
    square_feet: {
        type: Number,
        required: true,
    },
    aminities: [
        {
            type: String
        }
    ],
    rates: {
        nightly: {
            type: Number
        },
        weekly: {
            type: Number
        },
        monthly: {
            type: Number
        },
    },
    seller_info: {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    images: [
        {
            type: String
        }
    ],
    is_featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Property = models.Property || model('Property', PropertySchema);

export default Property;