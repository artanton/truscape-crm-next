import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function SatusLabel({ children, status, disabled}: StatusLabelProps) {
  return (
    <div
      className={clsx (
        'inline-flex items-center text-sm font-medium py-1 px-3.5 rounded-3xl',
        status === Status.Active && 'bg-green-100 text-green-700',
        status === Status.NotActive && 'bg-red-100 text-red-700',
        status === Status.Pending && 'bg-orange-100 text-orange-700',
        status === Status.Suspended && 'bg-blue-100 text-blue-700',
      {
        ['cursor-not-allowed opacity-75']: disabled,
      }
      )}
    >
      <div  className="w-1  h-1 mr-2 rounded-full bg-current" />
        {children}        
      
    </div>
  );
}
