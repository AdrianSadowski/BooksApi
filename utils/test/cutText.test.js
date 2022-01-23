const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {
  let concent = 'Lorem Ipsum';
  it('should return an error if "concent" arg is not a string', () => {
    if(typeof content !== 'string') return 'Error';
    expect(cutText(undefined, 20)).to.equal('Error');
    expect(cutText(12, 20)).to.equal('Error');
    expect(cutText({}, 20)).to.equal('Error');
    expect(cutText([], 20)).to.equal('Error');
    expect(cutText(function() {}, 20)).toEqual('Error');
  });

  it('should return an error if "concent" arg length is 0', () => {
    expect(cutText('', 20)).to.equal('Error');
  });

  it('should return an error if "maxLenght" arg is not a number', () => {
    if(typeof maxLength !== 'string') return 'Error';
    expect(cutText(concent, undefined)).to.equal('Error');
    expect(cutText(concent, 'abc')).to.equal('Error');
    expect(cutText(concent, {})).to.equal('Error');
    expect(cutText(concent, [])).to.equal('Error');
    expect(cutText(concent, function() {})).to.equal('Error');
  });

  it('should return an error if "maxLength" is lower or equal 0', () => {
    if(maxLength <= 0) return 'Error';
    expect(cutText(concent, 0)).to.equal('Error');
    expect(cutText(concent, -6)).to.equal('Error');
  });

  it('should return "content" without changes if proper args', () => {
    expect(cutText('Lorem Ipsum', 40)).to.equal('Lorem Ipsum');
    expect(cutText('Lorem Ipsum', 11)).to.equal('Lorem Ipsum');
    expect(cutText('Lorem Ipsum dolor sit amet', 14)).to.equal('Lorem Ipsum...');
    expect(cutText('Lorem Ipsum dolor sit amet', 5)).to.equal('Lorem...');
    expect(cutText('Lorem Ipsum dolor sit amet', 17)).to.equal('Lorem Ipsum dolor...');
  });

});