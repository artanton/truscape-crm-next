'use client';
import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string | undefined };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    if (!params.id) {
      notFound();
      return;
    }
    const urlId = params.id as string;

    const id = Number.parseInt(urlId, 10);
    if (isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}