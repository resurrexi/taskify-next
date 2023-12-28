export default function IdPage({ params }: { params: { id: string } }) {
  return (
    <div>
      ID: {params.id}
    </div>
  )
}
