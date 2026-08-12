import { Link } from "react-router";
import { X, BadgeCheck } from "lucide-react";

export default function SuccessPopup(){
    return (
        <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8  ">
          <div className="bg-white px-8 p-5 rounded-xl relative ">
            <Link to="/">
              <X className="absolute top-2 right-2" size={15} />
            </Link>
            <h2 className="text-[20px] font-semibold mx-auto mb-5 leading-7 text-[#121C2A]">
              Task Created
            </h2>
            <BadgeCheck className="mx-auto text-emerald-600" size={50} />
          </div>
        </div>
    )
}