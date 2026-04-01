import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-16">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-5 gap-8">

        {/* LOGO */}
        <div>
          <h2 className="text-xl font-bold">DigiTools</h2>
          <p className="text-gray-400 mt-2">
            Powerful tools to boost your digital workflow.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-bold mb-3">Product</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-bold mb-3">Resources</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-purple-400" />
            <FaFacebookF className="cursor-pointer hover:text-purple-400" />
            <FaXTwitter className="cursor-pointer hover:text-purple-400" />
          </div>
        </div>

      </div>

      {/* DIVIDER + BOTTOM SECTION */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

        {/* LEFT */}
        <p>© 2026 DigiTools. All rights reserved.</p>

        {/* RIGHT */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">
            Cookies
          </span>
        </div>

      </div>

    </footer>
  );
}