export default {
  users: [
    {
      id: 1,
      name: 'Madhuranga Sendheera',
      address: 'Colombo, Sri Lanka',
      postCode: '12344',
      btwNumber: '12345',
      kvkNumber: '12345'
    },
    {
      id: 2,
      name: 'Randika Senadheera',
      address: 'Colombo, Sri Lanka',
      postCode: '12344',
      btwNumber: '12345',
      kvkNumber: '12345'
    },
  ],
  projects: {
    1: {
      id: 1,
      name: 'Project 1',
      shifts: [
        {
          id: 1,
          name: 'shift1',
          iban: 'IbanDetails',
          description: 'description',
          userId: 1
        },
        {
          id: 2,
          name: 'shift2',
          iban: 'IbanDetails',
          description: 'description',
          userId: 2
        }
      ]
    },
    2: {
      id: 1,
      name: 'Project 2'
    },
    3: {
      id: 1,
      name: 'Project 3'
    }
  }
}
