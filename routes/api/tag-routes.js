const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// finds all tags and its associated Product data
router.get('/', async (req, res) => {
  try {
    const categoryData = await Tag.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// finds a single tag by its `id` and its associated Product data 
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Tag.findone(req.params.id, {
      include: [{ model: Product, through: ProductTag}]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creates a new tag
router.post('/', async (req, res) => {
  try {
    const categoryData = await Tag.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// updates a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const categoryData = await Tag.update({
      where: {
        id: req.params.id
      }
    });
    if(!categoryData){
      res.status(404).json({message: 'No Tag found with this id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

// deletes a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
