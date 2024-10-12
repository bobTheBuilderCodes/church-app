import React from "react";
import ChurchProgramCard from "../../components/feature/ChurchProgram";
import { churchEvents } from "../../resources";
import Layout from "../Layout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const ChurchEventsPage: React.FC = () => {
  const handleEdit = (id: number) => {
    alert(`Editing event with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Deleting event with id: ${id}`);
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-24 flex-wrap ">
      <h1 className="text-2xl font-bold ml-4 sm:ml-8 mb-4 mr-auto text-gray-900">
  All Church Programs ({churchEvents.length})
</h1>

        <div className="flex items-center mx-0 justify-between min-w-[390px]">
        <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by name"
            className="mb-2 w-[94vw] mx-3 sm:w-auto px-4"
          />
          <Button type="button" className="ml-3 hidden sm:block w-fit mx-8">
            <Link to={"/add-program"}>New Program</Link>
          </Button>
        </div>

 {/* Floating button for mobile view */}
 <Button
        type="button"
        className="fixed bottom-20 right-4 z-30 w-[140px] sm:hidden bg-indigo-500 text-white p-4 "
      >
        <Link to={"/add-program"}>New Program</Link>
      </Button>




      </div>
      <div className="min-h-screen bg-gray-100 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {churchEvents?.map(
            ({ id, date, imageUrl, time, title, venue, description }) => (
              <ChurchProgramCard
                key={id}
                imageUrl={imageUrl}
                title={title}
                date={date}
                time={time}
                venue={venue}
                description={''}
                onEdit={() => handleEdit(id)}
                onDelete={() => handleDelete(id)}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ChurchEventsPage;
