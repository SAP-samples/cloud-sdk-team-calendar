import { Person } from './model/person';

export async function readPersons(srv: any): Promise<Person[]> {
  return srv.read('Person');
}
