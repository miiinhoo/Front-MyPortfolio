const badWords = ["시발", "씨발", "ㅅㅂ", "ㅂㅅ", "병신", "ㅄ", "좆"];
const badPattern = /(ㅅㅂ|ㅂㅅ|ㅈㄴ|ㅈ같|씨+발|좆|병신|새끼|개새)/gi;
export const hasBadWord = (text = "") => {
    return badWords.some((w) => text.includes(w)) || badPattern.test(text);
};