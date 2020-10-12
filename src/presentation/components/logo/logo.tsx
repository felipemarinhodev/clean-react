import React from 'react'

const Logo: React.FC = () => {
  return (
    <img src="data:image/png;base64,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" />
  )
}

export default Logo