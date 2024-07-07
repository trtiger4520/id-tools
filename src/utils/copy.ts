const FallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  if (!document.execCommand('copy')) {
    throw new Error('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
};

export const CopyTextToClipboard = async (text: string) => {
  try {
    if (!navigator.clipboard) {
      FallbackCopyTextToClipboard(text);
      return true;
    }

    await navigator.clipboard.writeText(text);

    return true;
  } catch (error) {
    console.error('Failed to copy text to clipboard', error);
    return false;
  }
};
