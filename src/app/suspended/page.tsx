export default function SuspendedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-sm text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Account Suspended</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Your access to FoqusLab is paused for now. Your account and progress are
          safe and will be restored once access is reinstated.
        </p>
        <p className="text-gray-400 text-xs mt-4">
          To restore access, reach out to the admin.
        </p>
      </div>
    </div>
  )
}
