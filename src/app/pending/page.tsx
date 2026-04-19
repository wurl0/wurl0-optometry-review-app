export default function PendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-sm text-center">
        <div className="text-5xl mb-4">⏳</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Pending Approval</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Your account is waiting for approval. You&apos;ll receive an email once you&apos;ve been granted access to OptoPrep.
        </p>
        <p className="text-gray-400 text-xs mt-4">
          If you think this is a mistake, reach out to the admin.
        </p>
      </div>
    </div>
  )
}
