import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Button } from '@mui/material';

const CopyToClipboardButton: React.FC<{
  label: string;
  contentToCopy: string;
}> = ({ label, contentToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator?.clipboard?.writeText(contentToCopy);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Button
      variant="contained"
      startIcon={isCopied ? <CheckIcon /> : <ContentPasteIcon />}
      onClick={handleCopy}
    >
      {label}
    </Button>
  );
};

export default CopyToClipboardButton;
