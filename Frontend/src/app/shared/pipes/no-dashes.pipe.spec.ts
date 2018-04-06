import { NoDashesPipe } from './no-dashes.pipe';

describe('NoDashesPipe', () => {
  it('create an instance', () => {
    const pipe = new NoDashesPipe();
    expect(pipe).toBeTruthy();
  });
});
