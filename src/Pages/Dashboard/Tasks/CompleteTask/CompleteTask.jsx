import { RiDeleteBin6Line } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";

const CompleteTask = ({ task, handleDelete, handleEdit }) => {
  const { tasktitle, taskdeadline, description, _id, taskPriority } = task;
  return (
    <div className="p-6 rounded-sm lg:w-[450px] w-[400px] md:w-auto">
      <div className=" text-black mt-2 w-full">
        <div className="w-full  px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 dark:text-gray-400">
              Deadline : {taskdeadline}
            </span>
            <span className="px-3 py-1 text-xl uppercase flex items-center justify-center  rounded-full dark:bg-blue-300 dark:text-blue-900">
              <button onClick={() => handleEdit(_id)} className="mr-2">
                {" "}
                <VscEdit></VscEdit>
              </button>
              <button onClick={() => handleDelete(_id)} className="">
                <RiDeleteBin6Line className="text-red-500 font-semibold"></RiDeleteBin6Line>
              </button>
            </span>
          </div>

          <div className="w-full overflow-hidden">
            <div className="flex justify-between mt-2">
              <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                {tasktitle}
              </h1>
              <h3>{taskPriority}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
