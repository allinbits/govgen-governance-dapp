import { ref } from "vue";

export function useClipBoard(source: string) {
  const copied = ref(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(source);
      copied.value = true;
    } catch (err) {
      console.error("Error " + err);
    }
    setTimeout(() => (copied.value = false), 1500);
  };

  return { copy, copied };
}
