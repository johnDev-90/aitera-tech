import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="isolate  py-24 sm:py-32 ">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight font-sans text-balance sm:text-4xl text-cyan-800">
          Hablemos 🚀
        </h2>
        <p className="pt-8 text-xl font-light md:text-2xl">
          Nos encantaría saber de ti. Déjanos un mensaje y te responderemos lo
          antes posible para conversar sobre cómo podemos ayudarte.
        </p>
      </div>

      <div
        data-aos="zoom-out-down"
        className="w-full lg:w-[80%] mx-auto h-screen  lg:grid  lg:grid-cols-2 lg:justify-items-center gap-4"
      >
        <form
          action="#"
          method="POST"
          className="w-full lg:w-[80%] lg:mx-auto p-8 mt-16  font-light"
        >
          <div className=" gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 ">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-800"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6  text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-800"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6  text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-800"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md cursor-pointer px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs bg-gradient-to-r from-[#D6BBF2] via-[#3A238C] via-[#203573] via-[#1C818C] to-[#43D9CA] hover:shadow-md shadow-cyan-600 transition-all"
            >
              Enviar mensaje
            </button>
          </div>
        </form>

        <div className="w-full  sm:h-full  md:flex md:flex-col gap-8 pt-30 font-light text-xl">
          <div className="flex flex-col gap-8">
            <div className="w-full flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 border rounded-xl border-gray-200 bg-cyan-600 text-white p-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Llamanos</span>

                <p className="text-base">
                  Hablar directamente con un miembro de nuestro equipo.
                </p>
                <span className="text-base  font-normal text-purple-800">
                  +(503) 7295-2715
                </span>
              </div>
            </div>

            <div className="w-full flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={0.00024}
                className="size-12 border rounded-xl border-gray-200 bg-cyan-600 text-white p-2"
              >
                <path d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C19.9303 5.82266 20.6627 6.91616 21.1611 8.12054C21.6595 9.32492 21.9139 10.6162 21.9096 11.9196C21.9096 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22ZM7.49424 18.8349L7.79675 19.0162C9.06649 19.7676 10.5146 20.1644 11.99 20.1654C16.5264 20.1654 20.2263 16.4662 20.2263 11.9291C20.2263 9.73176 19.3696 7.65554 17.8168 6.1034C17.0533 5.33553 16.1453 4.72636 15.1453 4.31101C14.1452 3.89565 13.0728 3.68232 11.99 3.68331C7.44343 3.6839 3.74476 7.38316 3.74476 11.9202C3.74476 13.4724 4.17843 14.995 5.00502 16.3055L5.19645 16.618L4.35982 19.662L7.49483 18.8354L7.49424 18.8349Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Chat en WhatsApp</span>

                <p className="text-base">
                  Hablar directamente con un miembro de nuestro equipo.
                </p>
                <span className="text-base  font-normal text-purple-800">
                  +(503) 7295-2715
                </span>
              </div>
            </div>

            <div className="w-full flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 border rounded-xl border-gray-200 bg-cyan-600 text-white p-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Mensaje</span>

                <p className="text-base">
                  Para preguntas generales, y cotizaciones.
                </p>
                <span className="text-base  font-normal text-purple-800">
                  info@aiteratech.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
