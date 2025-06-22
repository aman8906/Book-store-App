import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
          <a href="/careers" className="link link-hover">Jobs</a>
          <a href="/press" className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-6">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 transition"
            >
              <svg className="w-6 h-6 fill-current text-black hover:text-white" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 
                         4.48 4.48 0 0 0-7.86 3v1A10.66 
                         10.66 0 0 1 3 4s-4 9 5 13a11.64 
                         11.64 0 0 1-7 2c9 5 20 0 
                         20-11.5a4.5 4.5 0 0 0-.08-.83 
                         A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-600 transition"
            >
              <svg className="w-6 h-6 fill-current text-black hover:text-white" viewBox="0 0 24 24">
                <path d="M19.6 3.2c-3.6-.2-11.6-.2-15.2 0-3.9.3-4.4 2.6-4.4 
                         8.8s.5 8.5 4.4 8.8c3.6.2 11.6.2 
                         15.2 0 3.9-.3 4.4-2.6 4.4-8.8s-.5-8.5-4.4-8.8zM9.6 
                         15.5v-7l6.4 3.5-6.4 3.5z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-800 transition"
            >
              <svg className="w-6 h-6 fill-current text-black hover:text-white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 
                         1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 
                         1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-pink-600 transition"
            >
              <svg className="w-6 h-6 fill-current text-black hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 
                         2 .2 2.4.4.6.2 1 .5 1.5 1s.8.9 1 
                         1.5c.2.4.3 1.2.4 2.4.1 1.3.1 
                         1.7.1 4.9s0 3.6-.1 4.9c-.1 
                         1.2-.2 2-.4 2.4-.2.6-.5 1-1 
                         1.5s-.9.8-1.5 1c-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 
                         0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1.2-.4-2.4C2.2 
                         15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 
                         1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 
                         3.5a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 
                         1.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.4-2a1.2 
                         1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
            </a>
          </div>
        </nav>

        <aside>
          <p>Copyright © 2025 - All rights reserved by HCME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
