import { useContext } from "react"
import { BriefcaseBusiness, UserRound, ShoppingCart, Tag, Plus } from "lucide-react";
import TaskContext from "../context/TaskContext";

export function CategorySelector(){

    const { categories, selectCategory, setSelectCategory, setNewCategoryPopup} = useContext(TaskContext);

    const categoryIcons = {
        work: BriefcaseBusiness,
        personal: UserRound,
        shopping: ShoppingCart,
      };

    return(
        <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="bg-[#E6EEFF] p-2 rounded-xl mr-4 ">
            <Tag size={20} />
          </div>
          <h5 className="text-[16px] leading-6 text-[#121C2A]">Category</h5>
        </div>
        <ul className="flex gap-3 flex-wrap">
          {categories.map((item, id) => {
            const Icon = categoryIcons[item.toLowerCase()] || Tag;
            return (
              <li
                key={id}
                className={`${selectCategory === item ? "bg-[#0058BE] text-white " : "bg-[#F8F9FF] text-[#424754] "} inline-flex items-center  border border-[#C2C6D6] px-5 py-3 text-[12px] font-semibold rounded-lg leading-4 capitalize `}
                onClick={() => setSelectCategory(item)}
              >
                <Icon className="mr-1.5" size={20} /> {item}
              </li>
            );
          })}
          <li
            className="text-[12px] leading-4 text-[#727785] border-dashed border rounded-lg border-[#C2C6D6] px-5 py-3 inline-flex items-center font-semibold "
            onClick={() => setNewCategoryPopup(true)}
          >
            <Plus className="mr-1.5" size={20} />
            New
          </li>
        </ul>
      </div>   
    )
}