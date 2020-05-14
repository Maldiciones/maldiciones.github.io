const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/Maldiciones/maldiciones.github.io.git',
        user: {
            name: 'ProfesorTenebro',
            email: 'ghost.intimidation+github@gmail.com'
        }
    },
    () => {
        console.log('Deploy Completado!')
    }
)