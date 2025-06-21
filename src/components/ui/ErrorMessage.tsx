// src/components/ui/ErrorMessage.tsx
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

interface ErrorMessageProps {
  title?: string;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title="Error", message }) => {
  if (!message) return null;
  return (
    <div className="rounded-md bg-red-500/10 p-4 border border-red-500/30">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-300">{title}</h3>
          <div className="mt-1 text-sm text-red-400">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage