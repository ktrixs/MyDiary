const data = [
  {
    id: 1,
    title: 'Create dinner reservation',
    content: 'I love piza bab that why i dont give a deamn do you trust me',
    notification: false,
    createdOn: new Date()
  },
  {
    id: 1,
    title: 'Create dinner reservation',
    content: 'I love piza bab that why i dont give a deamn do you trust me',
    notification: false,
    createdOn: new Date()
  },
  {
    id: 2,
    title: 'Create dinner reservation',
    content: 'I love piza bab that why i dont give a deamn do you trust me',
    notification: false,
    createdOn: new Date()
  },
  {
    id: 4,
    title: 'Create dinner reservation',
    content: 'I love piza bab that why i dont give a deamn do you trust me',
    notification: false,
    createdOn: new Date()
  },
  {
    id: 5,
    title: 'Create dinner reservation',
    content: 'I love piza bab that why i dont give a deamn do you trust me',
    notification: false,
    createdOn: new Date()
  }
];

const dataModel = {
  title: { type: String },
  content: { type: String },
  notification: { type: Boolean, default: false }
};

export { data, dataModel };
