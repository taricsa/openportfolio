
// 6 common questions from recruiters
// You can modife the questions and answers in the section below.

const QAs = [
  {
      index:"01",
      question:"Tell us about a time you faced failure and how you bounced back?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      index:"02",
      question:"How do you stay user-focused?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      index:"03",
      question:"What do you do to influence others?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      index:"04",
      question:"Tell us about a time you used data to influence an important stakeholder.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      index:"05",
      question:"What is your approach to prioritizing tasks?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
    index:"06",
    question:"What are you looking for in your next challenge?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
]

export default function FAQ() {
  return (
<div className="py-20 bg-gray-50">
  <h1 className="text-4xl text-center text-gray-700 font-extrabold">Frequently Asked Questions</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-4 mt-20">
    {QAs.map((qa, index) => (
    <>
    <div key={index} className="text-gray-800 bg-gray-100  rounded-md p-4">
        <h2 className="text-md font-semibold">{qa.question}</h2>
        <p className="text-sm mt-4 font-light leading-6">{qa.answer}</p>
      </div>
      </>
    ))}
  </div>
</div>

);
}
