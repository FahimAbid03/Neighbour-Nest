setText('profileName', demo.account.name);
setText('profileBuilding', demo.account.building + ' · Greenview Community');
const status = demo.account.status;
drawBadge(byId('profileStatus'), status[0].toUpperCase() + status.slice(1));

const postsShared = demo.posts.filter(function (post) {
  return post.author === 'Asha' || post.owner;
}).length;
setText('activity', postsShared + ' posts shared · ' + demo.joinedEvents.length + ' event RSVPs');
