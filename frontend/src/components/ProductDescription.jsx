import React from "react";

const ProductDescription = () => {
  return (
    <>
      <div className="mt-20">
        <div className="flex gap-3 mb-4"> 
          <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
            Description
          </button>
          <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
            Care Guide
          </button>
          <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
            Size Guide
          </button>
        </div>
        <div className="flex flex-col pb-16">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatibus maiores aut perferendis! Ducimus voluptas consequatur
            aut a doloribus molestiae optio facilis. Qui quisquam, harum
            repudiandae eius magni ipsa dignissimos quidem optio fugit cum
            similique, omnis veniam, eaque eos culpa? Delectus ipsum qui fugit
            quasi ut quod porro tempora, necessitatibus magnam fugiat? Placeat,
            sed maxime.
          </p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            illum ducimus. Debitis vero ullam illum odit laudantium et facere
            optio enim beatae, sed assumenda nemo ducimus reprehenderit.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
