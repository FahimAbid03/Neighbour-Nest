/* Original sample records for the NeighbourNest demo. */
const account = { name: 'Asha Sultana', email: 'asha@example.com', building: 'Block A', status: 'approved' };
const posts = [
  { id: 1, title: 'Weekend community clean-up', category: 'Announcement', author: 'Mira', body: 'Meet by the main gate on Friday at 8:00 AM. Bring reusable gloves if you have them. Everyone is welcome!', likes: 12, comments: ['Asha: I will bring two extra pairs of gloves.'], state: 'Open' },
  { id: 2, title: 'Does anyone have a ladder to lend?', category: 'Borrow', author: 'Rafi', body: 'I need it for a small repair this weekend.', likes: 5, comments: [], state: 'Open' },
  { id: 3, title: 'Need help carrying a bookshelf', category: 'Help', author: 'Nadia', body: 'Saturday morning, around 10:00. Block B.', likes: 3, comments: [], state: 'Open' },
  { id: 4, title: 'Books looking for a new home', category: 'Giveaway', author: 'Samira', body: 'A small collection of school books in Block A.', likes: 4, comments: [], state: 'Open' },
  { id: 5, title: 'Can I borrow a watering can?', category: 'Borrow', author: 'Asha', body: 'I need a watering can for this weekend. Please reply below if you can lend one.', likes: 1, comments: ['Asha: I can lend mine. We can arrange a handover here.'], state: 'Open' },
  { id: 6, title: 'Extra plant pots available', category: 'Giveaway', author: 'Asha', body: 'Six small terracotta pots.', likes: 2, comments: [], state: 'Completed' }
];
const issues = [
  { id: 1, title: 'Streetlight near the main gate', category: 'Lighting', location: 'Block A entrance', description: 'The streetlight beside the main gate is not working.', status: 'In progress', supports: 8, updates: ['01 Nov — Open — Issue submitted.', '02 Nov — In progress — Electrician has been contacted.'] },
  { id: 2, title: 'Water leak in the common garden', category: 'Water', location: 'Common garden', description: 'Water is leaking from the outdoor pipe.', status: 'Open', supports: 5, updates: ['04 Nov — Open — Issue submitted.'] },
  { id: 3, title: 'Waste bins near Block B', category: 'Waste', location: 'Block B', description: 'Extra waste bins are needed.', status: 'Resolved', supports: 7, updates: ['01 Nov — Open — Issue submitted.', '05 Nov — Resolved — New bins installed.'] }
];
const events = [
  { id: 1, title: 'Rooftop gardening afternoon', time: 'Friday · 4:00 PM', location: 'Greenview rooftop garden', description: 'Bring plant cuttings, questions and your curiosity.', people: 18, status: 'Published' },
  { id: 2, title: 'Neighbourhood clean-up', time: 'Friday · 8:00 AM', location: 'Main gate', description: 'A one-hour clean-up of common spaces.', people: 12, status: 'Published' }
];
const services = [
  { name: 'Greenview Repair Desk', category: 'Repairs', description: 'Electrical and plumbing repairs', location: 'Community office', contact: 'Contact provider directly (with consent)', status: 'Active' },
  { name: 'Community Study Corner', category: 'Tutoring', description: 'Tutoring and study support', location: 'Community centre', contact: 'Contact shown with provider consent', status: 'Active' },
  { name: 'Neighbourhood Grocery', category: 'Grocery', description: 'Everyday groceries close to home', location: 'Block C', contact: 'Ask at community office', status: 'Active' }
];
const members = [ { id: 1, name: 'Nadia Rahman', building: 'Block B', status: 'Pending' }, { id: 2, name: 'Samiul Hasan', building: 'Block C', status: 'Pending' } ];
const reports = [{ title: 'Unrelated advertising', reason: 'Spam', status: 'Pending review' }];

const demoDefaults = {
  account, posts, issues, events, services, members, reports,
  likedPosts: [],
  joinedEvents: [],
  supportedIssues: []
};
