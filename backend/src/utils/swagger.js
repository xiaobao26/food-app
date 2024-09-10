const swaggerJsDoc = require('swagger-jsdoc');


module.exports = swaggerJsDoc({
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Food app API',
            version: '0.0.1',
            description: 'some description',
            contact: {
                name: 'xiaobao xue',
                email: 'xiaobao.xue@outlook.com'
            },
        }
    },
    apis: ['src/controllers/*.js'], // Correct relative path
})


// yml
// yaml
