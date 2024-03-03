import { CodeIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full h-24 border-t-2 shadow-sm py-2 px-6 flex items-center justify-between ">
      <span className="text-sm font-light break-words">
        © {new Date().getFullYear()} ACME, Inc. All rights reserved.
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-light flex-col sm:flex-row">
        Crafted by <CodeIcon className="w-4 h-4" />{" "}
        <a href="https://github.com/imilqar" target="_blank">
          imilqar
        </a>
      </span>
    </footer>
  );
}

export { Footer };
