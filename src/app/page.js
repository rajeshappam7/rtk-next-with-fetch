import Image from "next/image";
import AddEmployees from "./components/AddEmployees";
import ShowEmployees from "./components/showEmployees";

export default function Home() {
  return (
    <>
      <AddEmployees />
      <ShowEmployees />
    </>
  );
}
