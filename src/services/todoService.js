const tempData = [
  {
    _id: uuidv4(),
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
    date: "17-11-24",
  },
  {
    _id: uuidv4(),
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
    date: "17-11-24",
  },
  {
    _id: uuidv4(),
    title: "Title 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
    date: "17-11-24",
  },
];

localStorage.setItem("todos", JSON.stringify(tempData));
