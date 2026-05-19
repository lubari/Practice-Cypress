describe('Pruebas de api con cypress', ()=>{

it('Petición HTTP Get con validación de property en el Body',()=>{
cy.request({
  method: 'GET',
  url: 'https://reqres.in/api/users?page=2',
  headers: {
    'x-api-key': 'reqres_7c823e3cd8a14288b1d2a908b1acf8a4' // Reemplazá por tu token o clave real
  }
})
.its('body')
  .should('have.property', 'page', 2);
})

it('Petición HTTP Post con validación de property en el Body',()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                'x-api-key': 'reqres_7c823e3cd8a14288b1d2a908b1acf8a4' // Reemplazá por tu token o clave real
            },
            body: {
                name: 'Matias',
                job: 'QA'
            }
        })
    })

})