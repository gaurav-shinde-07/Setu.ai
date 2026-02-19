const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 md:px-20 bg-[#0B0F14] text-gray-400 text-center border-t border-gray-800">

      <h2 className="text-xl font-semibold text-white mb-4">Setu AI</h2>

      <p className="mb-4">
        Concept-first learning platform for K–12 and undergraduate students.
      </p>

      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-[#10B981] transition">Programs</a>
        <a href="#" className="hover:text-[#10B981] transition">Pricing</a>
        <a href="#" className="hover:text-[#10B981] transition">Blog</a>
        <a href="#" className="hover:text-[#10B981] transition">Contact</a>
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} Setu AI. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
