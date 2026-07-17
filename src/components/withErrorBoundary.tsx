import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface WithErrorBoundaryProps {
  fallback?: React.ReactNode;
  componentName?: string;
}

export const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { fallback, componentName }: WithErrorBoundaryProps = {}
) => {
  const displayName = componentName || WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithErrorBoundary = (props: P) => {
    return (
      <ErrorBoundary
        fallback={fallback || (
          <div className="min-h-[200px] flex flex-col items-center justify-center p-4 bg-red-50 border border-red-200 rounded-lg">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Error in {displayName}</h2>
            <p className="text-gray-600 mb-4">We're sorry, but there was an error loading this section.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try again
            </button>
          </div>
        )}
      >
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };

  WithErrorBoundary.displayName = `WithErrorBoundary(${displayName})`;
  return WithErrorBoundary;
}; 