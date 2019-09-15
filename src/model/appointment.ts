export interface Appointment {
  ID: string;
  calendar_year: number;
  end_date: string;
  end_time: string | null;
  info: string | null;
  person_ID: string;
  project?: string;
  start_date: string;
  start_time: string | null;
  status: "LOCAL" | "APPROVED";
  title: string | null;
  type: string | null;
}
