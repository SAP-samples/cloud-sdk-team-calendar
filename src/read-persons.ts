import { Person } from "./model/person";

export async function readPersons(srv): Promise<Person[]> {
  return srv.read("Person");
}