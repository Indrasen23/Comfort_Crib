import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        sell: {
            type: Boolean,
            required: true,
        },
        rent: {
            type: Boolean,
            required: true,
        },
        parking: {
            type: Boolean,
            required: true,
        },
        furnished: {
            type: Boolean,
            required: true,
        },
        wifi: {
            type: Boolean,
            required: true,
        },
        cctv: {
            type: Boolean,
            required: true,
        },
        geyser: {
            type: Boolean,
            required: true,
        },
        privateBathroom: {
            type: Boolean,
            required: true,
        },
        bedrooms: {
            type: Number,
            required: true,
        },
        regularPrice: {
            type: String,
            required: true,
        },
        discountPrice: {
            type: String,
            required: true,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // save the time of creation and update
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
