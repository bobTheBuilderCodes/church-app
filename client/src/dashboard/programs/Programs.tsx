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
      <div className="flex items-center justify-between mb-8 flex-wrap ">
        <h1 className="text-2xl font-bold ml-8 mr-auto text-gray-900">
          All Church programs 
          ({churchEvents?.length})
        </h1>
        <div className="flex items-center mx-0 justify-between min-w-[390px]">
          <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by program name"
            className="mb-2 px-4"
          />
          <Button type="button" className="ml-3 w-fit mx-8">
           <Link to={'/add-program'}>New Program</Link>
          </Button>
        </div>
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
