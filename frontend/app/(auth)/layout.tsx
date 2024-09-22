export default function AuthLayout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <h1>Authentication Section</h1>
      
      {/* Render login and register pages here */}
      {children} 
    </div>
  )
}