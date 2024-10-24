'use client'

const BookConsultationButton: React.FC = () => {
  return (
    <button
      className="rounded-xl border-4 border-white bg-transparent px-16 py-5 text-lg text-white hover:bg-gray-100" // Ökad padding för att göra knappen bredare
    >
      Boka konsultation
    </button>
  )
}

export default BookConsultationButton
