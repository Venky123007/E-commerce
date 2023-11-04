import React from "react";
import "./HomeSectionCard.css";
import { useNavigate} from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  console.log("product Data : ", product);

  const navigate = useNavigate();

  const handleProduct = () => {
    //navigate(`/${product.topLavelCategory}/${product.secondLavelCategory}/${product.thirdLavelCategory}`)
    navigate(`/product/9`)
  }

  return (
    <div
      className="homeCard cursor-pointer flex flex-col items-center bg-white rounded-lg  
    overflow-hidden w-[15rem] mx-3 hover:shadow-2xl" 
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
          onClick = {handleProduct}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
