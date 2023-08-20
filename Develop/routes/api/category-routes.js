const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => { // find all categories
  try {
    const catergories = await Category.findAll ({
      include: Product, // Include products
    });
    res.status(200).json(catergories);
  }catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  try {
    const catergory = await Category.findByPk (req.params.id {
      include: Product,
    });
    if (!catergory) {
      res.status(400).json({ message: 'Category not found'});
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', (req, res) => {
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
