describe('Grupo de Pruebas', function(){
it('Prueba 1',function(){
cy.visit('http://logofree.esy.es/');
cy.get('.beta > a').should('be.visible').and('contain', 'Automation Testing');
})
})