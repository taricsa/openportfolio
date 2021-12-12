import Image from 'next/image'
import Company from "../assets/company-logo.png"

// This components was built to acommodate 5 companies logo. All the imagens has to have the 635w - 112h, be save in the assests folders.
// Follow the Company example in the top.
// The next step is to replace the {Company} bellow for it correspondent one.
// We can use last the 5, but no more the 5 logos here. It'll break the components UX/UI.

export default function TrustMe() {
  return (
      <section id="trustme" className="flex flex-col md:flex-row justify-between bg-gray-300 items-center px-20 py-10 mt-20">
      <h1 className="text-2xl font-bold text-gray-50">Companies who trust me</h1>
      <div className="companies flex flex-row items-center flex-wrap justify-center">
        <div className="my-4 mx-4">
          <Image
            src={Company}
            width={120}
            height={50}
            alt="logo company"
          />
        </div>
        <div className="my-4 mx-4">
          <Image
            src={Company}
            alt="logo company"
            width={120}
            height={50}
          />
        </div>
        <div className="my-4 mx-4">
          <Image
            src={Company}
            width={120}
            height={50}
            alt="logo company"
          />
        </div>
        <div className="my-4 mx-4">
          <Image
            src={Company}
            width={120}
            height={50}
            alt="logo company"
          />
        </div>
        <div className="my-4 mx-4">
          <Image
            src={Company}
            width={120}
            height={50}
            alt="logo company"
          />
        </div>
      </div>
    </section>
      );
    }
