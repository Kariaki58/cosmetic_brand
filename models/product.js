import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    variants: [
        {
            size: {
                type: String,
            },
            color: {
                type: String,
            },
            shade: {
                type: "String",
            },
            stock: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            discount: {
                type: Number,
                default: 0
            },
            variantImages: {
                type: [String],
                required: true
            }
        }
    ]
});