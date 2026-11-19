const request = demo.members.find(function (member) {
  return member.id === demo.account.requestId;
});

if (!request) {
  setText('requestHeading', 'Membership status');
  setText('reviewHeading', 'No active request');
  setText('reviewMessage', 'Use the home page to submit a membership request.');
  byId('status').hidden = true;
  byId('editRequest').hidden = true;
} else {
  drawBadge(byId('status'), request.status);
  if (request.status === 'Rejected') {
    setText('requestHeading', 'Your request was rejected');
    setText('reviewHeading', 'Review outcome');
    setText('reviewMessage', 'An administrator reviewed your membership request.');
    byId('editRequest').hidden = true;
  }
  if (request.status === 'Approved') {
    setText('requestHeading', 'Your request was approved');
    setText('reviewHeading', 'Welcome to Greenview');
    setText('reviewMessage', 'You can now open the community feed.');
    byId('editRequest').hidden = true;
    const feedLink = byId('openFeed');
    if (feedLink) feedLink.hidden = false;
  }
}
