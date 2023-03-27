const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    attributes: [
      'id',
      'category_name',
    ],
    include:[
      {
        model: Product,
        attributes: ['id','product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
    .then()
    .catch()
  //   res.status(200).json(categoryData);
  // } catch (err){
  //   res.status(500).json(err);
  // }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name',
    ],
    include:[
      {
        model: Product,
        attributes: ['id','product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
    .then()
    .catch()

  //   if (!categoryData){
  //     res.status(404).json({ message: 'No category found with that id!'})
  //   }
  //   res.status(200).json(categoryData);
  // } catch (err){
  //   res.status(500).json(err);
  // }

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    
  })
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
