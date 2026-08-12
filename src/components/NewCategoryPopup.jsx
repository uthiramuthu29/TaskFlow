import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { X } from "lucide-react";

export default function NewCategoryPopup(){

    const { newCategory, setNewCategory, setNewCategoryPopup, categories, setCategories } = useContext(TaskContext);

    function handleCreateCategory() {
        const trimmedCategory = newCategory.trim();
        if (!trimmedCategory) {
          alert("Category name cannot be empty");
          return;
        }
    
        if (
          categories.some(
            (item) => item.toLowerCase() === trimmedCategory.toLowerCase(),
          )
        ) {
          alert("Category exists");
          return;
        }
    
        setCategories((prevCategories) => [...prevCategories, trimmedCategory]);
        setNewCategory("");
        setNewCategoryPopup(false);
      }

    return(
        <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8  ">
          <div className="bg-white px-8 p-5 rounded-xl relative ">
            <button onClick={() => setNewCategoryPopup(false)}>
              <X className="absolute top-2 right-2" size={15} />
            </button>
            <input
              className="mb-5 border border-black p-2 focus-visible:outline-0 text-[12px] "
              type="text"
              placeholder="Enter new category"
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
            />
            <div className="flex justify-center">
              <button
                className=" px-3 py-2.5 bg-[#0058BE] text-white text-[12px] rounded-xl "
                onClick={handleCreateCategory}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
    )
}