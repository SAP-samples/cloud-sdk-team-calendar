import chai, { expect } from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { readPersons } from '../../src/read-persons';
import { person } from '../test-util/mock-data';

chai.use(sinonChai);

describe('readPersons', () => {
  it('gets persons', () => {
    const srv = {
      read: stub().resolves([person])
    };

    readPersons(srv);
    expect(srv.read).to.have.been.called;
  });
});
