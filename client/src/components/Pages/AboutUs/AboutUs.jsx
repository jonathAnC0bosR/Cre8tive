import { TbMailbox } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col items-center">
      <div className="flex items-center justify-center bg-gradient-to-r from-[#353434] to-[#424141] text-white rounded-bl-lg rounded-br-lg sm:m-4 md:mt-12 md:mb-0 md:mx-48 mb-50 flex flex-row justify-between px-24 py-10">
        <section className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-3xl my-5">Contact Us</h1>
            <TbMailbox size={"2.5em"} className="text-df4088" />
          </div>
          <p className="flex flex-row flex-wrap text-center text-white mx-auto mb-5 text-gray-500 max-w-550">
            Got any questions? Don't hesitate to contact us directly. Our team
            will come back to you within a matter of hours to help you.
          </p>
          <form id="contactform" className="flex flex-col gap-6 mb-2">
            <div className="flex flex-row items-center gap-2">
              <label className="text-lg w-36 text-center">Your Name:</label>
              <input
                className="w-96 text-black rounded-md bg-zinc-800 border-df4088 border-2"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label className="text-lg w-36 text-center">Your Email:</label>
              <input
                className="w-96 text-black rounded-md bg-zinc-800 border-df4088 border-2"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label className="text-lg w-36 text-center">Subject:</label>
              <input
                className="w-96 text-black rounded-md bg-zinc-800 border-df4088 border-2"
                type="email"
                name="subject"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label className="text-lg w-36 text-center">Your Message:</label>
              <textarea
                type="text"
                name="message"
                row="3"
                className="w-96 text-black rounded-md bg-zinc-800 border-df4088 border-2"
              ></textarea>
            </div>
            <div className="flex flex-row justify-center items-center">
              <button
                type="submit"
                className="bg-df4088 moving-bar text-xl px-7 pt-3 pb-9 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow relative"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Send!
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
