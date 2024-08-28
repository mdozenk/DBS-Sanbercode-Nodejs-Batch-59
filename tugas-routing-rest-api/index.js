const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());


let categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' }
];


let products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' },
  { id: 2, name: 'Meja', category: 'Perabotan' }
];


app.get('/categories', (req, res) => {
  res.json(categories);
});


app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).send('Kategori tidak ditemukan');
  }
});


app.post('/categories', (req, res) => {
  const newCategory = {
    id: categories.length + 1,
    name: req.body.name
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});


app.put('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === id);
  if (category) {
    category.name = req.body.name;
    res.json(category);
  } else {
    res.status(404).send('Kategori tidak ditemukan');
  }
});


app.delete('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const categoryIndex = categories.findIndex(cat => cat.id === id);
  if (categoryIndex !== -1) {
    categories.splice(categoryIndex, 1);
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).send('Kategori tidak ditemukan');
  }
});


app.get('/products', (req, res) => {
  const nameQuery = req.query.name;
  if (nameQuery) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});


app.get('/categories/:categoryName/products', (req, res) => {
  const categoryName = req.params.categoryName;
  const nameQuery = req.query.name;

  let filteredProducts = products.filter(product => 
    product.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (nameQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
  }

  res.json(filteredProducts);
});



app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
