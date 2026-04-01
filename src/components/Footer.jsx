export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="grid md:grid-cols-4 gap-8">

        {/* LOGO */}
        <div>
          <h2 className="text-xl font-bold">DigiTools</h2>
          <p className="text-gray-400 mt-2">
            Powerful tools to boost your workflow.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-bold mb-2">Product</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Features</li>
            <li>Pricing</li>
            <li>Tools</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="text-gray-400 space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <p className="text-gray-400">Facebook | Twitter | LinkedIn</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2026 DigiTools. All rights reserved.
      </p>
    </footer>
  );
}