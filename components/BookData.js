// bookData.js
export const books = [
  {
    id: 1,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    description:
      "A timeless guide on building meaningful relationships and influencing others positively.",
    cover: "htwf",
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description:
      "An exploration of the history and impact of Homo sapiens on the world.",
    cover: "sapiens",
  },
  {
    id: 3,
    title: "21 Reasons for the 21st Century",
    author: "Yuval Noah Harari",
    description:
      "Insights into the challenges and opportunities of the 21st century.",
    cover: "twentyonereasons",
  },
  {
    id: 4,
    title: "The Subtle Art of Not Giving a F..ck",
    author: "Mark Manson",
    description:
      "A counterintuitive approach to living a good life by focusing on what truly matters.",
    cover: "subtleart",
  },
  {
    id: 5,
    title: "The Internet Book",
    author: "Douglas E.Corner",
    description:
      "An overview of the development and impact of the Internet on society.",
    cover: "theinternetbook",
  },
  {
    id: 6,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "An exploration of the nature of time, space, and the universe.",
    cover: "briefhistoryoftime",
  },
  {
    id: 7,
    title: "The Like Switch",
    author: "Jack Schafer",
    description:
      "I enjoyed this CIA agent's perspective on using a set of principles for effective influencing people.",
    cover: "thelikeswitch",
  },
  {
    id: 8,
    title: "The Outsiders",
    author: "S.E. Hinton",
    description:
      "I enjoyed this book, emphasizing the inevitability of change, evolving thoughts, actions, and perspectives",
    cover: "theoutsiders",
  },
  {
    id: 9,
    title: "The Lean Startup",
    author: "Eric Ries",
    description:
      "The book champions lean and agile principles, encouraging experimentation with MVPs. Personally, it sparked a transformative thought process",
    cover: "theleanstartup",
  },
  // Add more books as needed
];

export const covers = {
  htwf: require("../public/BookCovers/htwf.jpg"),
  sapiens: require("../public/BookCovers/sapiens.jpg"),
  twentyonereasons: require("../public/BookCovers/21reasons.jpg"),
  theoutsiders: require("../public/BookCovers/theoutsiders.jpg"),
  theinternetbook: require("../public/BookCovers/internetbook.jpg"),
  subtleart: require("../public/BookCovers/subtleart.jpg"),
  briefhistoryoftime: require("../public/BookCovers/briefhistoryoftime.jpg"),
  thelikeswitch: require("../public/BookCovers/thelikeswitch.jpg"),
  theleanstartup: require("../public/BookCovers/theleanstartup.jpg"),
};
