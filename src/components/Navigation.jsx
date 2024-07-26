import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";

export const Navigation = () => {
  return (
    <div className=" container block h-screen w-60 bg-dark">
        <div className=" pl-6 pt-20 pr-6">
            
              <Link to={"/"} className=" flex flex-col bg-pink p-3 rounded-3xl">
                 <div className=" flex ">
                      <div>
                        <AiFillHome />
                      </div>
                      <div>
                       <p>Home</p>
                      </div>
                 </div>
              </Link>
            

            
              <Link to={"/category"}>
                  <div className=" flex">
                      <div className="">
                        <BiSolidCategory />
                      </div>
                      <div>
                        <p>Categories</p>
                      </div>
                  </div>
              </Link>
           

            
              <Link to={"/favorite"}>
              </Link>
           
              <Link to={"/library"}>
              </Link>
           
              <Link to={"/settings"}>
              </Link>
            
        </div>
    </div>
  )
}
