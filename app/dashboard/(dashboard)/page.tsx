import PlaceholderDoc from "@/components/PlaceholderDoc";
import React from "react";

const index = () => {
  return (
    <div className="w-ful flex justify-center">
      <div className="w-auto">
        <div className="py-8 bg-green-50 my-6 rounded-md px-8">
          <div className="text-green-800 text-xl mb-2"> My Chat bots</div>
          <PlaceholderDoc />
        </div>
      </div>
    </div>
  );
};

export default index;
