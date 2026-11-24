// crear endpoints
const express = require('express');
const cors = require('cors');
const sequelize = require('./conexion/db');
const app = express();
const product = require('./modelos/product');

app.use(express.json());
app.use(cors());

// select max(value) from product;
app.get('/product-max-value', async (req, res) => {

    try {
        
     const result = await product.findAll({
      
        attributes: [
            [sequelize.fn('max', sequelize.col('value')), 'Encontrar el producto con el valor más alto']
        ],
      })


    if (result.length > 0) {
    res.status(200).json(result)
    }
    else {
        res.status(400).json({ message: 'No se encontraron productos' });
    }
    
    } catch (error) {
        console.error('Error al obtener el valor más alto del producto:' + error);
    }


});

// select min(value) from product;
app.get('/product-min-value', async (req, res) => {

    try {
        
     const result = await product.findAll({
      
        attributes: [
            [sequelize.fn('min', sequelize.col('value')), 'Encontrar el producto con el valor más bajo']
        ],
      })


    if (result.length > 0) {
    res.status(200).json(result)
    }
    else {
        res.status(400).json({ message: 'No se encontraron productos' });
    }
    
    } catch (error) {
        console.error('Error al obtener el valor más alto del producto:' + error);
    }


});



// select category_code, avg(value) from product group by category_code;
app.get('/product-category-avg-value', async (req, res) => {

    try {

        const result = await product.findAll({

            attributes: [
                'category_code',
                [sequelize.fn('avg', sequelize.col('value')), 'avg_value']
            ],
            group: ['category_code']
        })

        if (result.length > 0) {
            res.status(200).json(result)
        }
        else {
            res.status(400).json({ message: 'No se encontraron productos' });
        }

    } catch (error) {
        console.error('Error al obtener el valor promedio de la categoría del producto:' + error);
    }


});

    



app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
