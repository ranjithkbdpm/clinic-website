"use client";
import { useState } from "react";
// import axios from "axios";
import useIsClient from "../_hooks/useIsClient";

export default function AppointmentBooking() {
  const isClient = useIsClient();

  const isPersonalDetailsValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.email &&
      formData.address &&
      formData.dob &&
      formData.age
    );
  };

  const [stage, setStage] = useState(1); // Tracks the current stage
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    dob: "",
    age: "",
    doctor: "",
    consultationReason: "",
    customReason: "",
    description: "",
    date: "",
    time: "",
    isNotRobot: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleNext = () => {
    if (stage === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.phone ||
        !formData.email ||
        !formData.address ||
        !formData.dob ||
        !formData.age
      ) {
        setMessage("Please fill out all personal details.");
        return;
      }
    }
    if (stage === 2) {
      if (
        !formData.doctor ||
        !formData.consultationReason ||
        !formData.date ||
        !formData.time
      ) {
        setMessage("Please fill out all consultation details.");
        return;
      }
      if (formData.consultationReason === "Others" && !formData.customReason) {
        setMessage("Please specify a reason for the consultation.");
        return;
      }
    }
    setMessage("");
    setStage(stage + 1);
  };

  const handleBack = () => {
    setStage(stage - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.isNotRobot) {
      setMessage("Please confirm you're not a robot.");
      return;
    }

    try {
      console.log("Sending data to the server:", formData);
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        // mode: 'cors',
        // credentials: 'same-origin',
      });

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      const responseData = await response.json();

      if (responseData.success) {
        setMessage(responseData.message);
        alert(responseData.data.tableRange);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          dob: "",
          age: "",
          doctor: "",
          consultationReason: "",
          customReason: "",
          description: "",
          date: "",
          time: "",
          isNotRobot: false,
        });
        setStage(1);
      } else {
        // Handle failure response from the server
        setMessage(responseData.message);
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setMessage("Failed to submit appointment. Please try again later.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!formData.isNotRobot) {
  //     setMessage("Please confirm you're not a robot.");
  //     return;
  //   }
  //   try {
  //     console.log("Sending data to the server:", formData);
  //     const response = await axios.post(
  //       "https://script.google.com/macros/s/AKfycbzr3vaKZBXTxev2c5LjMVXad6P_I62JYn0cSpzHCf-qwkszWqtFJsvu2qV-p237xQm3Yg/exec",
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       }
  //     );
  //     if (response.data.status === "success") {
  //       setMessage(response.data.message);
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         phone: "",
  //         email: "",
  //         address: "",
  //         dob: "",
  //         age: "",
  //         doctor: "",
  //         consultationReason: "",
  //         customReason: "",
  //         description: "",
  //         date: "",
  //         time: "",
  //         isNotRobot: false,
  //       });
  //       setStage(1);
  //     } else {
  //       // If something went wrong on the server side
  //       setMessage(response.data.message);
  //     }
  //   } catch (error) {
  //     // Handle any network or other errors
  //     console.error("Error submitting appointment:", error);
  //     setMessage("Failed to submit appointment. Please try again later.");
  //   }
  // };

  return (
    <>
      {isClient && (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
            <h1 className="text-3xl font-semibold text-center text-accentdarkblue mb-6">
              Book an Appointment
            </h1>
            {message && (
              <p className={`text-center ${message==='Data successfully submitted' ?'text-green-600' :'text-red-600'} font-semibold mb-4`}>
                {message}
              </p>
            )}

            <div className="md:flex justify-between flex-wrap mb-6">
              <div
                className={`flex items-center ${
                  stage === 1 ? "text-accentdarkblue" : "text-gray-400"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-full border-2 ${
                    stage === 1 ? "border-accentdarkblue" : "border-gray-400"
                  } flex justify-center items-center`}
                >
                  {stage > 1 ? "✔" : "1"}
                </span>
                <span className="ml-2 text-sm">Personal Details</span>
              </div>
              <div
                className={`flex items-center ${
                  stage === 2 ? "text-accentdarkblue" : "text-gray-400"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-full border-2 ${
                    stage === 2 ? "border-accentdarkblue" : "border-gray-400"
                  } flex justify-center items-center`}
                >
                  {stage > 2 ? "✔" : "2"}
                </span>
                <span className="ml-2 text-sm">Consultation Details</span>
              </div>
              <div
                className={`flex items-center ${
                  stage === 3 ? "text-accentdarkblue" : "text-gray-400"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-full border-2 ${
                    stage === 3 ? "border-accentdarkblue" : "border-gray-400"
                  } flex justify-center items-center`}
                >
                  {stage > 3 ? "✔" : "3"}
                </span>
                <span className="ml-2 text-sm">Confirmation</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Stage 1 - Personal Details */}
              {stage === 1 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="dob"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="age"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 2 - Consultation Details */}
              {stage === 2 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Consultation Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="doctor"
                      >
                        Doctor
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.doctor}
                        onChange={handleChange}
                      >
                        <option value="">Select doctor</option>
                        <option value="Dr. A. Shanmuga Sundaram">
                          Dr. A. Shanmuga Sundaram
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="consultationReason"
                      >
                        Consultation Reason
                      </label>
                      <select
                        id="consultationReason"
                        name="consultationReason"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.consultationReason}
                        onChange={handleChange}
                      >
                        <option value="">Select consultation reason</option>
                        <option value="Orthopedic Consultation">
                          Orthopedic Consultation
                        </option>
                        <option value="Heel pain">Heel pain</option>
                        <option value="Elbow pain">Elbow pain</option>
                        <option value="Foot pain">Foot pain</option>
                        <option value="Low back pain">Low back pain</option>
                        <option value="Hand pain">Hand pain</option>
                        <option value="Shoulder pain">Shoulder pain</option>
                        <option value="Knee pain">Knee pain</option>
                        <option value="Neck pain">Neck pain</option>
                        <option value="Physiotherapy Services">
                          Physiotherapy Services
                        </option>
                        <option value="Wax Therapy">Wax Therapy</option>
                        <option value="Laser">Laser</option>
                        <option value="Others">Others</option>
                      </select>
                      {formData.consultationReason === "Others" && (
                        <input
                          type="text"
                          className="border border-gray-300 p-4 rounded-lg mt-2 focus:ring-2 focus:ring-accentdarkblue w-full"
                          placeholder="Please specify the reason"
                          name="customReason"
                          value={formData.customReason}
                          onChange={handleChange}
                        />
                      )}
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="description"
                      >
                        Description (Optional)
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your symptoms or consultation request"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="date"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.date}
                        onChange={handleChange}
                        min={getTomorrowDate()}
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="time"
                      >
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        className="border border-gray-300 p-4 rounded-lg w-full"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 3 - Confirmation */}
              {stage === 3 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Confirmation
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p>
                        <strong>Name:</strong> {formData.firstName}{" "}
                        {formData.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {formData.phone}
                      </p>
                      <p>
                        <strong>Address:</strong> {formData.address}
                      </p>
                      <p>
                        <strong>Date of Birth:</strong> {formData.dob}
                      </p>
                      <p>
                        <strong>Age:</strong> {formData.age}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Doctor:</strong> {formData.doctor}
                      </p>
                      <p>
                        <strong>Consultation Reason:</strong>{" "}
                        {formData.consultationReason}
                      </p>
                      {formData.consultationReason === "Others" &&
                        formData.customReason && (
                          <p>
                            <strong>Custom Reason:</strong>{" "}
                            {formData.customReason}
                          </p>
                        )}
                      <p>
                        <strong>Description:</strong> {formData.description}
                      </p>
                      <p>
                        <strong>Preferred Date:</strong> {formData.date}
                      </p>
                      <p>
                        <strong>Preferred Time:</strong> {formData.time}
                      </p>
                    </div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="isNotRobot"
                        className="mr-2"
                        checked={formData.isNotRobot}
                        onChange={handleChange}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        I confirm I am not a robot
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Next/Back buttons */}
              <div className="flex justify-between mt-6">
                {stage > 1 && (
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-6 rounded-lg"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                {stage === 1 && (
                  <button
                    type="button"
                    className={`bg-blue-800 ${
                      isPersonalDetailsValid()
                        ? "hover:bg-blue-900"
                        : "opacity-50 cursor-not-allowed"
                    } text-white py-2 px-6 rounded-lg`}
                    onClick={handleNext}
                    disabled={!isPersonalDetailsValid()}
                  >
                    Next
                  </button>
                )}
                {stage === 2 && (
                  <button
                    type="button"
                    className="bg-blue-800 hover:bg-blue-800 text-white py-2 px-6 rounded-lg"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                )}
                {stage === 3 && (
                  <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg"
                    disabled={!formData.isNotRobot}
                  >
                    Confirm Appointment
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
