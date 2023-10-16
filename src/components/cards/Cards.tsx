const Cards = ({ numberOfCards }: any) => {
    return (
      <div className="grid grid-cols-3 m-60 justify-center mt-11">
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <div
            key={index}
            className={`w-80 p-4 py-6 border-2 rounded-3xl border-gray-300 mb-6 ${
              index === numberOfCards - 1 ? "bg-green-100" : ""
            }`}
          >
            <div className="flex justify-between">
              <h1 className="text-2xl pb-4">Card {index + 1}</h1>
              <img
                src="/public/check.svg"
                alt="check"
                className="w-[5rem] h-[5rem] relative bottom-10 left-8"
              />
            </div>
            <p className="text-sm pb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ea asperiores beatae, minima dolorum, odio est
              sunt similique in nihil autem laboriosam voluptatibus? Sint alias obcaecati corporis distinctio harum dolorum nulla accusamus. Minima explicabo voluptate inventore ab, soluta nisi repudiandae quae magnam et sapiente
              tenetur? Suscipit accusantium distinctio optio facere.
            </p>
            <div className="flex justify-center">
              <button className="bg-black text-white py-2 px-6 rounded-full font-bold">Click</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default Cards;