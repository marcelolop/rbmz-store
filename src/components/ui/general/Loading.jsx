import React, { useEffect, useState } from 'react'

function Loading() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

  if (!loading) {
    return null;
    }

  return (
    <div>
      <p className={loading ? 'loading' : ''}>Loading...</p>
    </div>
  )
}

export default Loading
