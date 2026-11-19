const form = byId('loginForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();
  let valid = true;

  if (!checkEmail()) valid = false;
  if (byId('password').value.length < 8) {
    showError('password', 'Password must be at least 8 characters.');
    valid = false;
  } else {
    showSuccess('password');
  }

  if (valid) {
    const returningApplicant = demo.account.requestId && value('email').toLowerCase() === demo.account.email.toLowerCase();
    if (returningApplicant && demo.account.status !== 'approved') {
      saveAndGo('membership.html', 'Here is your membership status.');
      return;
    }
    const home = document.body.dataset.module === 'FAHIM' ? 'profile.html' : 'feed.html';
    saveAndGo(home, 'Welcome to the NeighbourNest demo.');
  }
});
