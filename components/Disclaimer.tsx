export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 my-4">
      <div className="flex items-start gap-3">
        <div className="text-amber-600 mt-0.5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Important Disclaimer</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tech Rig Compliance is a <strong>private consulting service</strong>. We are{" "}
            <strong>NOT affiliated with the FMCSA, USDOT, or any government agency</strong>. 
            Official DOT number registration is <strong>FREE</strong> directly through the FMCSA at{" "}
            <a 
              href="https://www.fmcsa.dot.gov" 
              className="text-blue-600 underline font-semibold hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.fmcsa.dot.gov
            </a>
            . Our fees are for professional consulting, document preparation assistance, and 
            compliance guidance services only.
          </p>
        </div>
      </div>
    </div>
  )
}