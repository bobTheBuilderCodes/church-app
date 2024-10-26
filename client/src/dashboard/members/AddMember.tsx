import { useState } from "react";
import Layout from "../Layout";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { toastify } from "../../helpers";
import { useAddChurchMemberMutation } from "../../services/members";

interface ChurchMemberProps {
  name: string;
  phoneNumber: string;
  ministry: string;
  imageSrc: string | null;
  email: string;
  address: string;
  dateOfBirth: string;
  membershipStatus: "Active";
  dateJoined: string;
  gender: string;
  notes: string;
}

export default function AddMember() {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [isAddingChurchMember, setIsAddingChurchMember] = useState(false);
  const navigate = useNavigate()
  const [addChurchMember] = useAddChurchMemberMutation()

  const [formData, setFormData] = useState<ChurchMemberProps>({
    name: "",
    phoneNumber: "",
    ministry: "",
    imageSrc: "",
    email: "",
    address: "",
    dateOfBirth: "",
    membershipStatus: "Active",
    dateJoined: "",
    gender: "",
    notes: "",
  });

  const handleAddChurchMember: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    try {
      setIsAddingChurchMember(true);
      const response = await fetch("https://church-server-18kviqkgr-bobthebuildercodes-projects.vercel.app/api/v1/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setIsAddingChurchMember(false);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      toastify(data.message, { type: "success" });

      setIsAddingChurchMember(true);

      navigate("/members");
    } catch (err: any) {
      if (err.data && err.data.message) {
        toastify(err.data.message, { type: "error" });
      } else if (err.status === "FETCH_ERROR") {
        toastify("Network error: Unable to connect to the server", {
          type: "error",
        });
      } else {
        toastify("An unexpected error occurred", { type: "error" });
      }
    } finally {
      setIsAddingChurchMember(false);
    }
  };


  // const handleAddChurchMember: React.FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault();
   

  //   try {
  //     const response = await addChurchMember(formData).unwrap();
  //     toastify(response.message, { type: "success" });
  //     navigate("/members")
  //     // setPageView(false);
  //   } catch (err: any) {
  //     if (err.data && err.data.message) {
  //       toastify(err.data.message, { type: "error" });
  //     } else if (err.status === "FETCH_ERROR") {
  //       toastify("Network error: Unable to connect to the server", {
  //         type: "error",
  //       });
  //     } else {
  //       toastify("An unexpected error occurred", { type: "error" });
  //     }
  //   }
  // };



  // Handle file upload and preview
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "zh2m1ivz");
      formData.append("cloud_name", "dacna6wyi");

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dacna6wyi/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        const imageUrl = data.secure_url;

        setFormData((prev) => ({ ...prev, imageSrc: imageUrl }));
        setAvatar(imageUrl);
      } catch (error) {
        console.error("Error uploading image to Cloudinary", error);
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="mb-24 isolate px-6 sm:py-32 md:py-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add New Member
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fill in the details to create a new account for a church member
          </p>
        </div>
        <form
          onSubmit={handleAddChurchMember}
          method="POST"
          className="mx-auto max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Avatar Upload */}
            <div className="col-span-full">
              <div className="flex justify-center items-center gap-x-3">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="h-40 w-40 rounded-full object-cover"
                  />
                ) : (
                  <UserCircleIcon
                    aria-hidden="true"
                    className="h-40 w-40 text-gray-300"
                  />
                )}
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            {/* Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Phone Number and Date of Birth in the same row */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2.5">
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Date Joined and Occupation on a new row */}
            <div>
              <label
                htmlFor="dateJoined"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date Joined
              </label>
              <div className="mt-2.5">
                <input
                  id="dateJoined"
                  name="dateJoined"
                  type="date"
                  value={formData.dateJoined}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2.5">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Ministry */}
            <div className="sm:col-span-2">
              <label
                htmlFor="ministry"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Ministry
              </label>
              <div className="mt-2.5">
                <input
                  id="ministry"
                  name="ministry"
                  type="text"
                  value={formData.ministry}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2.5">
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Notes Textarea */}
            <div className="sm:col-span-2">
              <label
                htmlFor="notes"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5">
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Additional information about the member..."
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full rounded-md px-3.5 py-2.5 mt-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isAddingChurchMember ? "Adding Member..." : "Add Member"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
