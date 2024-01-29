import React from "react";
import Image from "next/image";
import { books, covers } from "./BookData";

const BookCard = ({ book }) => {
  return (
    <div className="group  [perspective:1000px]">
      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className=" [backface-visibility:hidden] group flex flex-col items-center py-2">
          <div className="relative" style={{ width: "60", height: "200px" }}>
            <Image
              className="hoverborder rounded-lg shadow-xl object-cover w-full h-full"
              src={covers[book.cover]}
              alt={book.title}
            />
          </div>
          <div className="flex flex-col items-center mt-2">
            <h3 className="text-xl font-semibold my-2 text-center">
              {book.title}
            </h3>
            <p className="text-gray-600 text-center">{book.author}</p>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col my-8 items-center justify-center">
            <p className="sm:text-xs md:text-sm lg:text-lg xl:text-xl">
              {book.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Books = () => {
  return (
    <div
      id="books"
      className="w-full h-full flex items-center pt-48 mt-16 px-10"
    >
      <div className="max-w-4xl mx-auto h-screen">
        <p className="uppercase text-xl tracking-widest text-[#6b6b57]">
          Books
        </p>
        <h2 className="py-4">My Essential Reads</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
