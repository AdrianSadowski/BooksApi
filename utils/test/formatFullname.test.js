const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullName', () => {
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullName()).to.equal('Error');
  });

  it('should return an error if "fullName" is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(12)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function() {})).to.equal('Error');
  });

  it('should return error if "fullName" is not a <firstName> <lastName>', () => {
    expect(formatFullName('John Doe Test')).to.equal('Error');
    expect(formatFullName('John')).to.equal('Error');
  });

  it('should return correct name', () => {
    expect(formatFullName('JoHn DoE')).to.equal('John Doe');
    expect(formatFullName('john doe')).to.equal('John Doe');
    expect(formatFullName('JOHN DOE')).to.equal('John Doe');
  });
});
