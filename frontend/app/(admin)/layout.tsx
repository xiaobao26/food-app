export default function AdminLayout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Rending dashboard page */}
      {children}
    </div>
  )
}