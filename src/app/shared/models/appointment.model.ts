export interface appointment {
    id: number,
    appointment: {
        date: string,
        time: string,
    }
    patient: {
        firstname: string,
        lastname: string,
        mobile: string,
        email: string
        birthdate: string
    }
}