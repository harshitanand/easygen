'use client';
import React from 'react';
import { cn } from '@/lib/utils';

type AlertProps = {
  type: 'success' | 'error';
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
};

export default function Alert({
  type,
  children,
  dismissible,
  onDismiss,
}: AlertProps) {
  const alertColors = {
    success: 'bg-green-100 text-green-800 border-green-400',
    error: 'bg-red-100 text-red-800 border-red-400',
  };

  return (
    <div className={cn('p-4 mb-4 rounded-md border-l-4', alertColors[type])}>
      <div className="flex justify-between items-center">
        <span>{children}</span>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-4 text-red-800 hover:text-red-600"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
