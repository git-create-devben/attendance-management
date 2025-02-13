export const wordShorten = (words: string) => {
    return words.split(" ")[0].replace(",", "");
}