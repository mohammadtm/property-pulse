import React from "react";

import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    // <!-- Renters and Owners -->
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            cupiditate quaerat nulla sequi ab iure fuga, ducimus laborum debitis
            distinctio esse eveniet explicabo repudiandae non sit culpa maxime
            iusto? Quia?
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            cupiditate quaerat nulla sequi ab iure fuga, ducimus laborum debitis
            distinctio esse eveniet explicabo repudiandae non sit culpa maxime
            iusto? Quia?
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
