export default (state = [], action) => {
  state = [
    {
        id: 1,
        name: "Bucky",
        last: "Roberts",
        age: 71,
        description: "Bucky is a React developer",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg",
        email: "asdasdasd@asdasdad"
    },
    {
        id: 2,
        name: "Joby",
        last: "Wasilenko",
        age: 27,
        description: "Joby loves the Packers, cheese, and turtles.",
        thumbnail: "http://i.imgur.com/52xRlm8.png",
        email: "asdsada@asdadadasd"
    },
    {
        id: 3,
        name: "Madison",
        last: "Williams",
        age: 24,
        description: "Madi likes her dog but it is really annoying.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png",
        email: "asdasdasda@adadada"
    }
  ];
  
  switch (action.type) {
    case 'USER/FETCH_PERSONAS_SUCCESS':
          return action.payload;
    case 'USER/ADD_USER':
      return [...state,action.payload];
    default:
        return state
  }
};
