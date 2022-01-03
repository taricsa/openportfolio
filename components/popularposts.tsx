import React from "react";
import Link from "next/link";
import Image from "next/image"

//This component was build to acommode 3 post, or multiples of 3. So, 6, 9, 12, ...
// For this first release the imageSrc, category, title and link are hard-coded bellow. Replace all of them.

const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Career",
      title: "Learn how to build your portfolio to shine among recruiters.",
      url: "https://medium.com/zerotohero/product-manager-have-you-built-your-portfolio-f1a02e249334"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      category: "Career",
      title: "Learn how to build your portfolio to shine among recruiters.",
      url: "https://medium.com/zerotohero/product-manager-have-you-built-your-portfolio-f1a02e249334"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      category: "Career",
      title: "Learn how to build your portfolio to shine among recruiters.",
      url: "https://medium.com/zerotohero/product-manager-have-you-built-your-portfolio-f1a02e249334"
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

