import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black mt-4 text-white py-12">
      <div className="max-w-6xl mx-auto  mt-2 px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Email */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Outplay</h1>
          <div className="flex space-x-3 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaFacebook />
          </div>
          <p className="text-sm">
            1320 Arrow Point Dr <br />
            Suite 501 #181 <br />
            Cedar Park, TX 78613 <br />
            contact@outplayhq.com
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-[#FF4D6D] font-semibold mb-3">PRODUCT</h3>
          <ul className="space-y-2 text-sm">
            <li>Multichannel Outreach</li>
            <li>Chrome Extension</li>
            <li>Sequence Generator</li>
            <li>Email Signature Generator</li>
            <li>Dialer</li>
            <li>Integrations</li>
            <li>Meeting Scheduler</li>
            <li>AI for Sales</li>
            <li>India Dialer</li>
          </ul>
        </div>

        {/* Compare Links */}
        <div>
          <h3 className="text-[#FF4D6D] font-semibold mb-3">COMPARE</h3>
          <ul className="space-y-2 text-sm">
            <li>Outreach</li>
            <li>Salesloft</li>
            <li>Mailshake</li>
            <li>Reply Io</li>
            <li>Yesware</li>
            <li>Klenty</li>
            <li>Lemlist</li>
            <li>Mixmax</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-[#FF4D6D] font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>Customer Stories</li>
            <li>Customer Love</li>
            <li>Partner Program</li>
            <li>Referral Program</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Resources & Use Cases */}
        <div>
          <h3 className="text-[#FF4D6D] font-semibold mb-3">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Books</li>
            <li>Call of Fame</li>
          </ul>

          <h3 className="text-[#FF4D6D] font-semibold mt-6 mb-3">USE CASES</h3>
          <ul className="space-y-2 text-sm">
            <li>Cold Email Software</li>
            <li>Email Automation Software</li>
            <li>Sales Automation Software</li>
            <li>Outbound Sales Software</li>
            <li>Email Prospecting Software</li>
            <li>Cold Calling Software</li>
            <li>Sales Calling Software</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © 2025 Outplay. All rights reserved.
      </div>
    </footer>
  );
}
