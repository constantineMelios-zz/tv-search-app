export default function TextSelector(englishText, greekText, language) {
  if (language === "en-US") {
    return englishText
  }
  return greekText
}