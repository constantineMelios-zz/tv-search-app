export default function TextSelector(englishText: string, greekText: string, language: string) {
  if (language === "en-US") {
    return englishText
  }
  return greekText
}