export default function useClipboard() {
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  return { copy };
}
