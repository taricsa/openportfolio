import Image from 'next/image'
import ProfileImage from '../assets/profile-pic.png'

// Replace the file profile-pic.png with your profile-pic
// I was too lazy to build the const for all the inputs of this component, but they are easy to find and replace it. I will improve it later.

export default function ProfileHero() {
  return (
    <section id="profile" >
        <section className="static justify-center" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1637520943049-648cec6c18d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "50px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="absolute -top-20">
                        <Image
                        objectPosition="hover"
                        src={ProfileImage}
                        alt="Landscape picture"
                        width={200}
                        height={200}
                        placeholder="blur"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }} >
                        Video
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">
                            Awards
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">
                            Projects</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Articles</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800">
                    FName LName
                  </h3>
                  <div className="text-sm leading-normal mt-0 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    City, Province
                  </div>
                  <div className="mb-2 text-gray-700 mt-2">
                    Position you are looking for
                  </div>
                  <div className="mb-0 text-gray-700">
                    Most Recent Graduation/Master/PhD
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Tell more about yourself in this section—this is your chance to
                      shine and keep the visitor scrolling down to your page. Share your
                      proudest accomplashments, complex projects. Treat yourself as a product,
                      and find the market-fit works to describe you. You can change anything in
                      this section, from the background image, the the stats in the left.
                      Be Careful not to repeat the information you share in the following sections.
                      Tips: 1. 184 WORDS MAX 2. If you're unsure what to include, I like to recommend
                      the Past/Present/Future structure. Discuss how you started your career (past),
                      what you're doing right now (present), and what you're looking forward to in the future!
                      3. Don't use ineffective buzzwords and cliches like 'team player', 'hard working' or 'self-starter'.
                      These are overused and vague, and reduce the impact of your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}
