const users = [
    {
      id: 1,
      names: 'Kayitare Thierry',
      email: 'kayitarethiers20@gmail.com',
      password: 'kaba1234@t'
    },
    {
        id: 2,
        names: 'muka borry',
        email: 'borry@gmail.com',
        password: 'kaba1234@t'
    },
    {
        id: 3,
        names: 'Mark terry',
        email: 'terry20@gmail.com',
        password: 'kaba1234@t'
    },
    {
        id: 4,
        names: 'Gatesi Angel',
        email: 'gatesi@gmail.com',
        password: 'kaba1234@t'
    },
    {
      id: 5,
      names: 'Kayitare Manzi',
      email: 'manzi@gmail.com',
      password: 'kaba1234@t'
    }
  ];
  
  const dataModel = {
    title: { type: String },
    content: { type: String },
    notification: { type: Boolean, default: false }
  };
  
  export { data, dataModel };
  