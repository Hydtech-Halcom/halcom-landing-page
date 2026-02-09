import chatbotData from "@/app/data/chabot.json";

/**
 * Calculates the Levenshtein distance between two strings.
 * Higher number means more differences.
 */
function getLevenshteinDistance(a: string, b: string): number {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost, // substitution
      );
    }
  }
  return matrix[a.length][b.length];
}

/**
 * Determines match score between user query and keyword.
 * Uses a combination of word checking and fuzzy matching.
 */
function isFuzzyMatch(userInput: string, keyword: string): boolean {
  const words = userInput.toLowerCase().split(/\s+/);
  keyword = keyword.toLowerCase();

  // 1. Check if any word exactly matches or contains the keyword
  if (words.some(word => word.includes(keyword) || keyword.includes(word))) {
    return true;
  }

  // 2. Fuzzy match each word against the keyword
  for (const word of words) {
    if (word.length < 3) continue; // Skip short words to avoid false positives

    const distance = getLevenshteinDistance(word, keyword);
    const threshold = Math.floor(keyword.length * 0.3); // Allow ~30% difference

    // For very short keywords, allow only 1 char difference
    const maxAllowedDist = keyword.length <= 4 ? 1 : threshold;

    if (distance <= maxAllowedDist) return true;
  }

  return false;
}

export function getBotResponse(message: string): string {
  if (!message.trim()) return "I'm sorry, I didn't catch that. Could you please say something?";

  const userMessage = message.toLowerCase();

  // PASS 1: Broad search for inclusion (exact or substring)
  for (const item of chatbotData.data) {
    for (const keyword of item.context) {
      if (userMessage.includes(keyword.toLowerCase())) {
        return item.answer;
      }
    }
  }

  // PASS 2: Fuzzy Search (Typo tolerance)
  for (const item of chatbotData.data) {
    for (const keyword of item.context) {
      if (isFuzzyMatch(userMessage, keyword)) {
        return item.answer;
      }
    }
  }

  return "Sorry, I couldn’t find an exact answer to that. Could you please try rephrasing? Or you can reach us at sales@halcominovasi.co.id.";
}
