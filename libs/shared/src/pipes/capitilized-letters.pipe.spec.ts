import { CapitilizedLettersPipe } from './capitilized-letters.pipe';

describe('CapitilizedLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitilizedLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
