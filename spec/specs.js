describe('triangle', function() {

  it("is false for the sum of any two sides to be less than or equal to the length of the third side.", function() {
    expect(triangle(2,2,4)).to.equal(false);
  });

  it("is true for an equilateral to have all sides equal.", function() {
    expect(triangle(2,2,2)).to.equal(true);
  });

  it("is true for an isosceles to have two sides that are equal.", function() {
    expect(triangle(2,2,1)).to.equal(true);
  });

  it("is true for a scalene triangle to have all three sides not equal.", function() {
    expect(triangle(2,3,4)).to.equal(true);
  });

});

  // it("is false for an input that is not a number", function() {
  //   expect(isNaN((leapYear))).to.be.false;
  // });

//   it("is false for an input that is less than 0", function() {
//     expect(leapYear(-29)).to.equal(false);
//   })
//
//   it("is true for years divisible by 4", function() {
//     expect(leapYear(2004)).to.equal(true);
//     });
//
//   it("is true for years divisible by 100", function() {
//     expect(leapYear(1900)).to.equal(false);
//     });
//
//   it("is true for years divisible by 400", function() {
//     expect(leapYear(2000)).to.equal(true);
//   });
// });
