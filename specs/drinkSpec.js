describe("My whatCanIDrink function", function(){

  beforeEach(function() {
    drink = new whatCanIDrink();
  });

  describe("Checks age", function(){
    it("should exist", function(){
      expect(whatCanIDrink).toBeDefined();
    });
  });

});