import { Appointment } from "src/app/shared/models/appointment.model"

export const patientFields: {
    value: string,
    control: keyof Appointment["patient"],
    id: string,
    type: string
}[] = [
    {
        value: 'Vorname',
        control: 'firstname',
        id: 'firstname',
        type: 'text'
    },
    {
        value: 'Nachname',
        control: 'lastname',
        id: 'lastname',
        type: 'text'
    },
    {
        value: 'E-Mail',
        control: 'email',
        id: 'email',
        type: 'email'
    },
    {
        value: 'Telefonnummer',
        control: 'mobile',
        id: 'mobile',
        type: 'text'
    },
    {
        value: 'Geburtsdatum',
        control: 'birthdate',
        id: 'birthdate',
        type: 'date'
    }
]

export const appointmentFields: {
    value: string,
    control: keyof Appointment["appointment"],
    id: string,
    type: string
}[] = [
    {
        value: 'Datum',
        control: 'date',
        id: 'date',
        type: 'date'
    },
    {
        value: 'Zeit',
        control: 'time',
        id: 'time',
        type: 'time'
    },
]