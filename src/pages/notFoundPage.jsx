import { Link, useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { HiArrowLeft } from "react-icons/hi";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex items-center justify-center bg-primary px-4">
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md border border-secondary/10 rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Icon */}
          <div className="w-[120px] h-[120px] rounded-3xl bg-accent/15 flex items-center justify-center">
            <TbError404 className="text-[70px] text-accent" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
              Page not found
            </h1>
            <p className="mt-3 text-secondary/70 leading-relaxed">
              The page you’re looking for doesn’t exist or may have been moved.
              Please check the URL or go back to the homepage.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition"
              >
                <HiArrowLeft className="text-lg" />
                Go Back
              </button>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition"
              >
                <IoHomeOutline className="text-lg" />
                Back to Home
              </Link>
            </div>

            {/* Helper links */}
            <div className="mt-6 text-sm text-secondary/70">
              Try visiting:
              <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                <Link
                  to="/products"
                  className="px-4 py-2 rounded-full bg-white/70 border border-secondary/10 hover:border-accent hover:text-accent transition"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 rounded-full bg-white/70 border border-secondary/10 hover:border-accent hover:text-accent transition"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-full bg-white/70 border border-secondary/10 hover:border-accent hover:text-accent transition"
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="px-4 py-2 rounded-full bg-white/70 border border-secondary/10 hover:border-accent hover:text-accent transition"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer small note */}
        <div className="mt-10 pt-6 border-t border-secondary/10 text-center text-xs text-secondary/60">
          Error code: 404 • i-Computers
        </div>
      </div>
    </div>
  );
}