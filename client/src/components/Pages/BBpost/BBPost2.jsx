import backImage from "../../../assets/images/topBanerProfile.png";

const BBpost2 = () => {
  return (
    <div className="w-full pt-10 text-white min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D]">
      <div className="w-full">
        <img src={backImage} alt="exampleImage" className="lg:w-full" />
      </div>
      <div className="lg:mx-6 lg:px-6 rounded-md bg-gradient-to-r from-[#353434] to-[#424141]">
        <h1>Post Tittle</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          dapibus eleifend facilisis. Nulla facilisi. Vivamus varius, turpis a
          eleifend imperdiet, leo sapien sagittis lorem, et rutrum lorem massa
          sed tellus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nullam aliquam lobortis nunc
          luctus leo. Donec in laoreet neque. Maecenas id mattis arcu.
        </p>
      </div>
    </div>
  );
};

export default BBpost2;
