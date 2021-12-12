import React from "react";
import Link from "next/link";
import Image from "next/image"

//This component was build to acommode 3 post, or multiples of 3. So, 6, 9, 12, ...
// For this first release the imageSrc, category, title and link are hard-coded bellow.

const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516824600626-47a22f894aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      category: "Decision-Making",
      title: "Any decision making is simply chaotic process — You should learn Cynefin",
      url: "https://medium.com/zerotohero/any-decision-making-is-simply-chaotic-process-you-should-learn-cynefin-86eebeefb813"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "LifeStyle",
      title: "Why you should care about Mispronounce of your name",
      url: "https://medium.com/zerotohero/why-you-should-care-about-mispronounce-of-your-foreign-sounding-5341fc3c2691"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1598288051821-452afe9c645f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      category: "Parenting",
      title: "8 Things You Should do for Your Daughter",
      url: "https://taric.medium.com/8-things-you-should-do-for-your-daughter-851316eea109"
    }
  ];
  
  
  export default function PopularPosts() {
  return (
    <section id="popularpost" className='static'>
      <div className='max-w-screen-xl mx-auto py-10 lg:py-10'>
        <div className='flex flex-col items-center'>
          <h4 className="text-4xl font-bold sm:text-5xl text-gray-600 tracking-wide text-center">Popular Articles</h4>
          <p className='mt-2 font-medium text-gray-500 text-center max-w-sm'>Some amazing articles that I wrote for amazing people.</p>
        </div>
        <div className='flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap'>
          {blogPosts.map((post, index) => (
            <div className='mt-12 lg:w-1/3' key={index}> {/* Experience card */}
              <div className='lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs'>
                <Image 
                    src={post.imageSrc}
                    height={260}
                    width={360}
                    layout="fixed"
                    alt="" />
                <div className='mt-4 text-secondary-100 font-bold text-blue-500 text-sm'>{post.category}</div>
                <h4 className='mt-2 leading-relaxed text-gray-800 text-lg'>{post.title}</h4>
                <Link href={post.url} passHref>
                <button type="button"
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-indigo-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10'>
                    Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
function div(arg0: (props: any) => string[]) {
    throw new Error("Function not implemented.");
}

