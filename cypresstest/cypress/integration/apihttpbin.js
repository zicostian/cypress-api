describe('Get Response', function(){

    const url = 'http://httpbin.org'
    const method = 'GET'
 
    it('URL', function(){
        cy.request({
            url: url
        }).then(resp=>{
            expect(resp.status).to.equal(200)
            expect(resp.headers.connection).to.equal('Close')
            expect(resp.headers.server).to.equal('nginx')
        })
    })
 
 })
 