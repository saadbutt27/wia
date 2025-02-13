"use client";
import Image from "next/image";
export default function ContactForm() {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row my-10 py-10 px-6 md:px-20">
        <div className="flex-1 mr-0 lg:mr-10">
          <h2 className="text-3xl mb-6 font-semibold leading-snug tracking-wider">
            Contact Form
          </h2>
          <form action="">
            <div className="mb-6 shadow-xl">
              <input
                type="text"
                className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                placeholder="Name"
              />
            </div>
            <div className="mb-6 shadow-xl">
              <input
                type="email"
                className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 shadow-xl">
              <input
                type="tel"
                className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                pattern="[0-9]{4}-[0-9]{7}"
                placeholder="Phone no."
              />
            </div>
            <div className="mb-6">
              <textarea
                className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full shadow-xl"
                cols={30}
                rows={4}
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                className="flex items-center group text-white font-semibold bg-red-600 hover:bg-transparent hover:text-red-600 duration-300 border-2 border-red-600 text-lg md:text-xl rounded-md px-6 py-1 md:px-6 md:py-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 mt-10 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14965.596074763389!2d85.80699244636031!3d20.325128298459642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909070cb7bc8d%3A0x754c83f93687689a!2sChandrasekharpur%2C%20Bhubaneswar%2C%20Odisha%20751016%2C%20India!5e0!3m2!1sen!2s!4v1684522147069!5m2!1sen!2s"
            width="600"
            height="545"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="border-2 rounded-md shadow-xl w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}
