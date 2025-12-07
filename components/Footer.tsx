const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-400 text-center">
        <span>© {new Date().getFullYear()} Cunningham Li</span>
      </div>
    </footer>
  );
};

export default Footer;
