import { UntypedFormGroup } from "@angular/forms";
import { Appointment } from "src/app/shared/models/appointment.model";

export function mapAppointmentData(form: UntypedFormGroup): Appointment {
    return {
        appointment: {
            date: appointment(form).get('date')?.value,
            time: appointment(form).get('time')?.value
          },
          patient: {
            firstname: patient(form).get('firstname')?.value,
            lastname: patient(form).get('lastname')?.value,
            mobile: patient(form).get('mobile')?.value,
            email: patient(form).get('email')?.value,
            birthdate: patient(form).get('birthdate')?.value
          }
    }
}

function appointment(form: UntypedFormGroup) {
    return form.get('appointment') as UntypedFormGroup;
}

function patient(form: UntypedFormGroup) {
    return form.get('patient') as UntypedFormGroup;
}