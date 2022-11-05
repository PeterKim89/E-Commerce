# E-Commerce

## Demo
https://drive.google.com/file/d/1EUX_AEuh4kym3HQ01jKR_cb3u9w4lVx_/view

## Introduction
This project lets the user manage an e-commerce store's backend.

## Installation
first run
```
npm i
```
Then create the ecommerce_db via the schema.sql inside of mysql shell.
Create your own seed data or populate the database with the provided seeds/index.js
Finally run
```
node server.js
```

## Build Process
First create the models for category, product, tag, and productTag. Then create any needed associations among them inside the models index.js.
Create the get, post, put, and delete routes for category, product, and tag.

## Code Snippet
The put routes gave me the most trouble. First none of the routes were working because they needed to be promisified with async await.
Then the update function wasn't actually updating anything. It was only searching for an id.
Finally the syntax to properly update the model was achieved.
```
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {category_name: req.body.category_name},
      {where: {id: req.params.id}}
    );
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});
```

## Languages and Technology
Javascript<br>
Node.js<br>
npm<br>
Express.js<br>
dotenv<br>
mysql<br>
mysql2<br>
sequelize<br>

## Author
[GitHub](https://github.com/PeterKim89)<br>
[LinkedIn](www.linkedin.com/in/peter-kim89)<br>
[Email] Peter.Kim@uconn.edu

## License
[MIT](https://choosealicense.com/licenses/mit/)<br>
Copyright (c) [2022] [Peter Kim]