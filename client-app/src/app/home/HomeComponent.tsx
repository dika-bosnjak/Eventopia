import React from "react";

export default function HomeComponent() {
  return (
    <div className="grid-container grid grid-cols-12 mt-24">
      <div className="col-span-12 md:col-span-4 my-auto">
        <h1 className="font-extrabold text-blue-500 mb-4 font text-4xl">
          Eventopia
        </h1>
        <p>
          Welcome to Eventopia, your ultimate destination for unforgettable
          experiences! Discover a world of thrilling activities, captivating
          performances, and immersive events. Whether you're seeking live
          concerts, sporting events, theater shows, or cultural festivals,
          Eventopia has something extraordinary for everyone. Get ready to
          create lifelong memories and be a part of the extraordinary moments
          that make life truly special. <br /> <br />
          Start exploring now!
        </p>
      </div>

      <div className="col-span-12 md:col-span-8 mr-10 flex align-middle items-center">
        <img src="assets/people.svg" alt="" />
      </div>
    </div>
  );
}
