import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailProps {
}

export default function PostDetailPage (props: PostDetailProps) {
    const router = useRouter();
  return (
    <div>
      Post Detail Page
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
}
