document.getElementById('appointmentForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Simulate sending data to your email (you'll need a backend for actual functionality)
  console.log('Appointment Details:', data);
  alert('Appointment booked successfully! We will contact you shortly.');

  // Clear the form
  event.target.reset();
  document.getElementById('formMessage').textContent = 'Thank you for booking an appointment!';
});
