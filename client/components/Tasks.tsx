import React from "react";
type tasks = {
  id: number;
  title: string;
  content: string;
  status: string;
  createdBy: string;
};
const Tasks: React.FC<{ items: tasks[] }> = ({ items }) => {
  return (
    <section className="flex flex-col gap-4  ">
      {items.map((item, index) => {
        return (
          <div className="bg-indigo-400 p-4 rounded-lg mx-6 mb-3" key={index}>
            <h2 className="text-xl text-lime-400 mt-1">{item.title}</h2>
            <p className="mt-1 text-yellow-50 capitalize font-medium text-sm">
              {item.content}
            </p>
            <button className="bg-yellow-300 p-1 mx-1 my-0 rounded-md float-right">
              {item.status === "done" ? "completed" : "pending"}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Tasks;
