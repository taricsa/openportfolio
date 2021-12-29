import Image from 'next/image'

// 3 recomendations
// The current imageSrc link is the Profile Picture from my LinkedIn. You must replace it by any other.

const recommendations = [
    {
        imageSrc:
          "https://doodleipsum.com/700x700/avatar-2?i=bc931314c32811784f60b4911e26ea36",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        customerName: "Fname Lname"
      },
      {
        imageSrc:
          "https://doodleipsum.com/700x700/avatar-2?i=bc931314c32811784f60b4911e26ea36",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        customerName: "Fname Lname"
      },
      {
        imageSrc:
          "https://doodleipsum.com/700x700/avatar-2?i=bc931314c32811784f60b4911e26ea36",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        customerName: "Fname Lname"
      }
  ]

  export default function Recommendation() {
    return (
    <div id="recomendations" className="static">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <h5 className="font-bold text-primary-500 text-center text-gray-600">
            From My LinkedIn Profile Page</h5>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center text-gray-500">
            Recommendations</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {recommendations.map((recommendation, index) => (
            <div className="mt-16 lg:w-1/3" key={index}>
              <div className="bg-white px-4 text-center max-w-xs mx-auto flex flex-col items-center">
                <div className="mt-5 text-gray-600 font-medium leading-loose">
                    <blockquote>{recommendation.quote}</blockquote>
                </div>
              <Image
                src={recommendation.imageSrc}
                alt={recommendation.customerName}
                width={100}
                height={100}
                className="rounded-full"
                />
                <div className="mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide">
                    <p>- {recommendation.customerName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
