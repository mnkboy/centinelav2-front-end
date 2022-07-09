export default function Nav({ children }) {
    return (
      <nav className="py-4 px-6 text-sm font-medium ">
        <ul className="flex space-x-3 justify-between items-center">
          {children}
        </ul>
      </nav>
    )
  }