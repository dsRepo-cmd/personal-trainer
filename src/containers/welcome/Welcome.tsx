import HexagoneIcon from "../../assets/hexagone.svg";

function Welcome() {
  return (
    <div id="welcome" className="relative w-full h-screen bg-slate-800">
      <div className="absolute overflow-hidden w-full h-[620px] top-1/2 -mt-300 transform -translate-y-1/2 z-1">
        <div className="absolute w-[600px] h-[600px] left-1/2 ml-[-693px]  ">
          <div className=" absolute right-0">
            <HexagoneIcon />
          </div>
          <div className=" absolute left-0 top-1/2 translate-y-[-50%]">
            <HexagoneIcon />
          </div>
          <div className=" absolute right-0 bottom-0">
            <HexagoneIcon />
          </div>
        </div>

        <div className="absolute w-[600px] h-[600px] right-1/2 transform translate-x-1/2 mr-[-400px] z-1 ">
          <div className=" absolute left-0 top-0">
            <HexagoneIcon />
          </div>

          <div className=" absolute right-0 translate-y-[50%]">
            <HexagoneIcon />
          </div>
          <div className=" absolute left-0 bottom-0">
            <HexagoneIcon />
          </div>
        </div>
      </div>
      <a
        className="absolute w-20 h-20 left-1/2 bottom-[10%]  transition duration-500  transform  translate-x-[-50%] border-[4px] border-solid border-red-500 rounded-full hover:opacity-70"
        href="#navbar-top"
      ></a>
    </div>
  );
}

export default Welcome;
