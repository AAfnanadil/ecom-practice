import Link from "next/link";
import Logo from "../../../public/Logo.webp";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BiSolidCartAdd } from "react-icons/bi";
export default function NavBar() {
  return (
    <div className="w-[1400px] mx-auto py-10 flex justify-between items-center">
      <Image src={Logo} alt="logo" className="" />

      <div>
        <ul className="flex gap-x-10">
          <li>
            <Link href={"#"}>Femal</Link>
          </li>
          <li>
            <Link href={"#"}>Male</Link>
          </li>
          <li>
            <Link href={"#"}>Kids</Link>
          </li>
          <li>
            <Link href={"#"}>All Products</Link>
          </li>
        </ul>
      </div>
      <div className="border rounded-md flex items-center">
        <div>
          <BiSearch />
        </div>
        <input
          type="text"
          className="bg-transparant placeholder:text-sm w-[200px]"
          placeholder="what you looking for"
        />
      </div>
      <div className="relative w-[45px] h-[45px] rounded-full bg-gray-200 flex justify-center items-center">
        <BiSolidCartAdd className="text-xl" />
        <p
          className="absolute top-0 right-1 bg-red-600 text-white text-sm flex justify-center items-start w-[20px] 
          h-[20px] rounded-full"
        >
          0
        </p>
      </div>
    </div>
  );
}
