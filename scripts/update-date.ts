import { promises } from 'fs';
import { resolve } from 'path';
import moment from 'moment';

const appointmentFilePath = '../db/csv/my.timesheet-Appointment.csv';
const teamCalendarFilePath = '../db/csv/my.timesheet-TeamCalendar.csv';

async function updateDateLatest(dateFormat, path) {
  const filePath = resolve(__dirname, path);
  const fileContent = await promises.readFile(filePath, { encoding: 'utf8' });
  const pattern = new RegExp(dateFormat, 'g');
  const updatedFileContent = fileContent.replace(
    pattern,
    moment(new Date()).format(dateFormat)
  );
  await promises.writeFile(filePath, updatedFileContent, 'utf8');
}

Promise.all([
  updateDateLatest('YYYY-MM', appointmentFilePath).then(() =>
    updateDateLatest('YYYY', appointmentFilePath)
  ),
  updateDateLatest('YYYY', teamCalendarFilePath)
]);
