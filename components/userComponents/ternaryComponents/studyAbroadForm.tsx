const StudyAbroadForm = () => {
  return (
    <form className=" pl-10 pr-10 md:pl-20 md:pr-0" data-aos="fade-up">
      <div className="bg-[rgba(240,240,240,.5)] p-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-grad-one">Interested to Study Abroad?</h1>
          <p className="my-4">Enter your details below and we will contact you soon.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 bg-grad-one" />
          <div className="h-1 w-20 bg-grad-one" />
        </div>
        <div className="bg-sky-bg mt-5 p-5">
          <h5> <span className="text-grad-one">*</span> indicates required fields </h5>
        </div>
        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">First Name <span className="text-grad-one">*</span></label>
          <input
            type="email"
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
            placeholder="E.g. Ram Smith@gmail.com"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Last Name <span className="text-grad-one">*</span></label>
          <input
            type="email"
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
            placeholder="E.g. Ram Smith@gmail.com"
          />
        </div>


        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Email <span className="text-grad-one">*</span></label>
          <input
            type="email"
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
            placeholder="E.g. Ram Smith@gmail.com"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Mobile <span className="text-grad-one">*</span></label>
          <input
            type="tel"
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
            placeholder="+977-9841-1234567"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Current City <span className="text-grad-one">*</span></label>
          <input
            type="text"
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
            placeholder="E.g. Sydney"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Country of Residence <span className="text-grad-one">*</span></label>
          <select
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
          >
            <option value="">Country</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Study Destination <span className="text-grad-one">*</span></label>
          <select
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
          >
            <option value="">Country</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="flex flex-col my-4">
          <label className=" font-bold mb-2">Last Education <span className="text-grad-one"> * </span></label>
          <select
            className="border border-[rgb(230,230,230)] rounded-md px-4 py-2"
          >
            <option value="">12th</option>
            <option value="Australia">Bachelors</option>
            <option value="Canada">Masters</option>
          </select>
        </div>
        <input type="checkbox" />
        <h5> I agree to the Wize Education<span className="text-[#007bff]"> Terms and Privacy Policy </span> <span className="text-grad-one">*</span> </h5>
        <button type="submit" className="bg-[#007bff] pl-5 pr-5 pt-2 pb-2 font-bold w-full mt-5 text-white"> Submit </button>

      </div>
    </form>

  )
}

export default StudyAbroadForm;
