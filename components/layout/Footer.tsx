export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} University of Security Studies. All
          rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Authorized Access Only. System activity is monitored and logged.
        </p>
      </div>
    </footer>
  );
}
