const form = byId('profileForm');
byId('name').value = demo.account.name;
byId('email').value = demo.account.email;
byId('building').value = demo.account.building;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();
  let valid = true;

  if (!checkRequired('name', 3)) valid = false;
  if (!checkEmail()) valid = false;
  if (!checkRequired('building', 2)) valid = false;

  const currentPassword = byId('currentPassword').value;
  const newPassword = byId('newPassword').value;
  const confirmation = byId('confirm').value;
  if (currentPassword || newPassword || confirmation) {
    if (!currentPassword) {
      showError('currentPassword', 'Enter your current password.');
      valid = false;
    } else {
      showSuccess('currentPassword');
    }
    if (newPassword.length < 8) {
      showError('newPassword', 'Enter at least 8 characters.');
      valid = false;
    } else {
      showSuccess('newPassword');
    }
    if (!confirmation || confirmation !== newPassword) {
      showError('confirm', 'Enter the same new password again.');
      valid = false;
    } else {
      showSuccess('confirm');
    }
  }

  if (valid) {
    demo.account.name = value('name');
    demo.account.email = value('email');
    demo.account.building = value('building');
    const message = newPassword ? 'Profile saved. The password change was simulated.' : 'Profile saved.';
    saveAndGo('profile.html', message);
  }
});
