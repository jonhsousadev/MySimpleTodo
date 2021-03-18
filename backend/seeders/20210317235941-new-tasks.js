'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            'Tasks', [{
                    description: 'This is a new task 1',
                    owner: 'Jonh Sousa',
                    email: 'jonhnbsousa@gmail.com',
                    changes: 0,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                },
                {
                    description: 'This is a new task 2',
                    owner: 'Ana Sousa',
                    email: 'anasousa@gmail.com',
                    changes: 0,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                },
                {
                    description: 'This is a new task 3',
                    owner: 'Beatriz Sousa',
                    email: 'beatrizsousa@gmail.com',
                    changes: 0,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                },
            ]
        )
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('Tasks', null, {})
    }
};