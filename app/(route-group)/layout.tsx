export default function GroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div>Navbar</div>
      <hr />
      {children}
    </div>
  )
}
