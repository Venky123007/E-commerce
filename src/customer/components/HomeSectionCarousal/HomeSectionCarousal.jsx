// import React from "react";
// import { useState } from "react";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import { Button } from "@mui/material";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// const HomeSectionCarousal = ({ data, sectionName }) => {
  
//   const [activeIndex, setActiveIndex] = useState(0);

//   const items = data
//   .slice(0, 10)
//   .map((item) => <HomeSectionCard product={item} />);

//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };


//   const slidePrev = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       console.log("activeINdex :", activeIndex);
//     }
//   };

//   const slideNext = () => {
//     if (activeIndex < items.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       console.log("activeIndex : ", activeIndex);
//     }
//   };

//   const syncActiveIndex = (newIndex) => setActiveIndex(newIndex);
//   //console.log("item Data : ", item);

//   const onSlideChanged = (event) => {
//     setActiveIndex(event.item);
//   };

 

//   return (
//     <div className="border">
//       <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-left">
//         {sectionName}
//       </h2>
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           responsive={responsive}
//           disableDotsControls
//           onSlideChanged={onSlideChanged}
//           activeIndex={activeIndex}
//         />
//         {activeIndex > 0 && (     
//           <Button
//             onClick={slidePrev}
//             variant="contained"
//             className="z-50 bg-white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%) rotate(-90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="previous"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//         {activeIndex < items.length - 1 && (
//           <Button
//             onClick={slideNext}
//             variant="contained"
//             className="z-50 bg-white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousal;


import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./HomeSectionCarousal.css";

const HomeSectionCarousal = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 5; // Adjust the number of items displayed at a time

  const slidePrev = () => {
    setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(data.length - itemsPerPage, prevIndex + 1)
    );
  };

  const displayedProducts = data.slice(activeIndex, activeIndex + itemsPerPage);
  

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-left">
        {sectionName}
      </h2>

      <div className="relative p-10 flex flex-cols">
        {displayedProducts.map((product, index) => (
          <HomeSectionCard key={index} product={product} />
        ))}
        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousal;




