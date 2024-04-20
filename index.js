
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
const doctors = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician' }
];

app.get('/doctors', (req, res) => {
  res.json(doctors);
});

app.get('/doctors/:doctorId', (req, res) => {
  const doctorId = parseInt(req.params.doctorId);
  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }

  res.json(doctor);
});


app.get('/doctors/:doctorId/availability', (req, res) => {
  
  res.json({ doctorId: req.params.doctorId, availability: ['5:00 PM', '5:30 PM'] });
});


app.post('/appointments/book', (req, res) => {

  const { doctorId, patientName, date, time } = req.body;
  res.json({ status: 'success', message: 'Appointment booked successfully' });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});


