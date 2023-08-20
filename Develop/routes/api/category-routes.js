const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { // Add async here
  try {
    const categories = await Category.findAll({
      include: Product, // Include products
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => { // Add async here
  try {
    const category = await Category.findByPk(req.params.id, { // Fix typo here, change 'catergory' to 'category'
      include: Product,
    });
    
    if (!category) {
      res.status(404).json({ message: 'Category not found' }); // Change status code to 404 for not found
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
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedCategory[0] === 0) {
      res.status(404).json({ message: 'Category not found'});
      return;
    }

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id},
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
