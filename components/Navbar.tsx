const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-[#0B0F14] fixed top-0 z-50">
      <h1 className="text-2xl font-bold text-white">Setu AI</h1>

      <div className="space-x-6 hidden md:flex items-center">
        <a href="#" className="text-gray-300 hover:text-[#10B981] transition">
          Programs
        </a>
        <a href="#" className="text-gray-300 hover:text-[#10B981] transition">
          How It Works
        </a>
        <a href="#" className="text-gray-300 hover:text-[#10B981] transition">
          Pricing
        </a>

        <button className="bg-[#10B981] px-5 py-2 rounded-md text-white hover:bg-green-600 transition">
          Start Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
