import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 🔹 Title and subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Tech Stack
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Feel free to spin them around 👇
        </p>
      </div>

      {/* 🔹 3D floating tech balls */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
