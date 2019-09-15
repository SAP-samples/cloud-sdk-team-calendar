import { errorWithCause } from "@sap/cloud-sdk-util";
import { Person } from "./model/person";

export async function personById(srv, personId: string): Promise<Person> {
  return handleError(srv.read("Person", { ID: personId }))
    .then((persons: Person[]) => {
      if (persons.length === 0) {
        throw new Error(`No person found with ID ${personId}`);
      }
      return persons[0];
    });
}

export async function readPersons(srv): Promise<Person[]> {
  return handleError(srv.read("Person"));
}

function handleError(promise: Promise<Person[]>): Promise<Person[]> {
  return promise.catch((error: Error) => Promise.reject(errorWithCause("Unable to read persons from database", error)));
}
