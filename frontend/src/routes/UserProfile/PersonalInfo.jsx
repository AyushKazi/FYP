import React from "react";

const PersonalInfo = () => {
  const userDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    contact: "123-456-7890",
  };

  return (
    <div className="max-w-md mx-auto bg-white  rounded-lg p-8 mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Personal Information
      </h2>
      <div className="space-y-3">
        <div>
          <span className="font-medium">First Name:</span>{" "}
          {userDetails.firstName}
        </div>
        <div>
          <span className="font-medium">Last Name:</span> {userDetails.lastName}
        </div>
        <div>
          <span className="font-medium">Email:</span> {userDetails.email}
        </div>
        <div>
          <span className="font-medium">Contact:</span> {userDetails.contact}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
