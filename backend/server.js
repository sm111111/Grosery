const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json());

app.use(cors({
    origin: 'https://grosery-2.onrender.com/',
    credentials: true
}));

const _dirname = path.resolve();

let data = { clothData: [], cart: [] };

try {
    const rawData = fs.readFileSync(path.join(__dirname, 'backend', 'productDetails.json'));
    data = JSON.parse(rawData);
} catch (error) {
    console.error("Error reading or parsing productDetails.json:", error.message);
}

let { clothData, cart } = data;

const generateId = () => Math.floor(Math.random() * 1000000);

app.get('/api/allclothdata', (req, res) => {
    res.json(clothData);
});

app.get('/api/allclothdata/:id', (req, res) => {
    const clothItem = clothData.find(entry => entry.id === parseInt(req.params.id));
    if (!clothItem) {
        return res.status(404).json({ message: "Cloth item not found." });
    }
    res.json(clothItem);
});

app.get('/api/cart', (req, res) => {
    res.json(cart);
});

app.post('/api/cart', (req, res) => {
    const { clothName, price, size, quantity } = req.body;

    if (!clothName || !price || !size || !quantity) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    const clothItem = clothData.find(item => item.productName === clothName);
    if (!clothItem || !clothItem.productSize.includes(size)) {
        return res.status(400).json({ message: "Invalid size selected or product not found" });
    }

    if (quantity <= 0) {
        return res.status(400).json({ message: "Quantity must be a positive number" });
    }

    const newCartItem = { id: generateId(), clothName, price, quantity, size };
    cart.push(newCartItem);

    data.cart = cart;
    fs.writeFileSync(path.join(__dirname, 'backend', 'productDetails.json'), JSON.stringify(data, null, 2));

    res.status(201).json({ message: 'Item added to cart successfully!', cart: newCartItem });
});

app.delete('/api/cart/:id', (req, res) => {
    const { id } = req.params;
    const itemIndex = cart.findIndex(item => item.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.splice(itemIndex, 1);
    data.cart = cart;
    fs.writeFileSync(path.join(__dirname, 'backend', 'productDetails.json'), JSON.stringify(data, null, 2));

    res.status(200).json({ message: "Item removed from cart successfully" });
});

app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
