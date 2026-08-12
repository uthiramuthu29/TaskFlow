export default function NewTaskForm({ taskTitle, setTaskTitle, taskDesc, setTaskDesc }){

    
    return(
        <div className="mt-4 mb-10">
          <input
            type="text"
            className="text-[24px] font-bold text-[#121C2A] placeholder-[#C2C6D6] mb-7.5 focus-visible:outline-0 "
            placeholder="What needs to be done?"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            rows={4}
            className="w-full bg-white border border-[#C2C6D6] rounded-xl p-4 focus-visible:outline-0 "
            placeholder="Add a description..."
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
        </div>
    )
}