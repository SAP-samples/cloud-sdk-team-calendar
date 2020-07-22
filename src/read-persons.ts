import { errorWithCause } from "@sap-cloud-sdk/util";
import { Person } from "./model/person";

export async function readPersons(srv): Promise<Person[]> {
  return handleError(srv.read("Person"));
}

function handleError(promise: Promise<Person[]>): Promise<Person[]> {
  return promise.catch((error: Error) => Promise.reject(errorWithCause("Unable to read persons from database", error)));
}
