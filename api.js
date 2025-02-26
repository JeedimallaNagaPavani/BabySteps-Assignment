/* src/api.js */
export const fetchDoctors = async () => fetch('/doctors').then(res => res.json());
export const fetchAvailableSlots = async (doctorId, date) => fetch(`/doctors/${doctorId}/slots?date=${date}`).then(res => res.json());
export const bookAppointment = async (data) => fetch('/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(res => res.json());
export const fetchAppointments = async () => fetch('/appointments').then(res => res.json());