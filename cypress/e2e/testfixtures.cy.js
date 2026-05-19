describe('Grupo de Pruebas', function(){
beforeEach(()=>{
cy.fixture('PruebaFixtures.json').as('userData')
})
it('Prueba 1',function(){
cy.get('@userData').then((userData)=>{
cy.login(userData.correo)
cy.screenshot('Prueba1')
cy.get('.nav-menu > .page-item-8 > a').should('be.visible')
}
)
})
})