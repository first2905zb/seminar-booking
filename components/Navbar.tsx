import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center items-center">
      <Link href="/booking">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          จองตั๋ว
        </button>
      </Link>
      <Link href="/cancel">
        <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          ยกเลิกตั๋ว
        </button>
      </Link>
      <Link href="/admin">
        <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          ดูรายชื่อผู้จอง
        </button>
      </Link>
      <Link href="/map">
        <button className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          ดูแผนที่ GIS
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
