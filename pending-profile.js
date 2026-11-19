const form = byId('pendingForm');
const request = demo.members.find(function (member) {
  return member.id === demo.account.requestId && member.status === 'Pending';
});

if (!request) {
  window.location.replace('membership.html');
} else {
  byId('name').value = request.name;
  byId('building').value = request.building;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();
    let valid = true;

    if (!checkRequired('name', 3)) valid = false;
    if (!checkRequired('building', 2)) valid = false;

    if (valid) {
      request.name = demo.account.name = value('name');
      request.building = demo.account.building = value('building');
      saveAndGo('membership.html', 'Your request was updated.');
    }
  });
}
