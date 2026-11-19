const form = byId('registerForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();
  let valid = true;

  if (!checkRequired('name', 3)) valid = false;
  if (!checkEmail()) valid = false;
  if (!checkRequired('building', 2)) valid = false;

  const password = byId('password').value;
  const confirmation = byId('confirm').value;
  if (password.length < 8) {
    showError('password', 'Password must be at least 8 characters.');
    valid = false;
  } else {
    showSuccess('password');
  }
  if (!confirmation || confirmation !== password) {
    showError('confirm', 'Enter the same password again.');
    valid = false;
  } else {
    showSuccess('confirm');
  }

  if (valid) {
    const request = {
      id: Date.now(),
      name: value('name'),
      building: value('building'),
      status: 'Pending'
    };
    demo.members.push(request);
    demo.account = {
      name: request.name,
      email: value('email'),
      building: request.building,
      status: 'pending',
      requestId: request.id
    };
    saveAndGo('membership.html', 'Membership request submitted.');
  }
});
