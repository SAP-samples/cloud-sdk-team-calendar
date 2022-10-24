import { promises } from 'fs';
import { resolve } from 'path';
import moment from 'moment';
import { render } from 'mustache';

interface Date {
  YYYY: string;
  MM: string;
}

const date: Date = {
  YYYY: moment(new Date()).format('YYYY'),
  MM: moment(new Date()).format('MM')
};

const appointmentFilePath = '../db/csv/my.timesheet-Appointment.csv';
const teamCalendarFilePath = '../db/csv/my.timesheet-TeamCalendar.csv';
const appointmentTemplateFilePath = './my.timesheet-Appointment.csv.mustache';
const teamCalendarTemplateFilePath = './my.timesheet-TeamCalendar.csv.mustache';

async function generateLocalData(
  templateFilePath: string,
  targetFilePath: string
) {
  const template = await promises.readFile(
    resolve(__dirname, templateFilePath),
    {
      encoding: 'utf8'
    }
  );
  const targetFile = render(template, date);
  await promises.writeFile(
    resolve(__dirname, targetFilePath),
    targetFile,
    'utf8'
  );
}

Promise.all([
  generateLocalData(appointmentTemplateFilePath, appointmentFilePath),
  generateLocalData(teamCalendarTemplateFilePath, teamCalendarFilePath)
]);
