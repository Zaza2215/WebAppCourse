export type Language = {
    code: string;
    name: string;
    localName: string;
}

export const LANGUAGES: Language[] = [
    {code: "en", name: "English", localName: "English"},
    {code: "es", name: "Spanish", localName: "Español"},
    {code: "uk", name: "Ukrainian", localName: "Українська"},
    {code: "ru", name: "Russian", localName: "Русский"},
    {code: "fr", name: "French", localName: "Français"},
    // {code: "de", name: "German", localName: "Deutsch"},
    // {code: "it", name: "Italian", localName: "Italiano"},
    // {code: "pt", name: "Portuguese", localName: "Português"},
    // {code: "pl", name: "Polish", localName: "Polski"},
    // {code: "ja", name: "Japanese", localName: "日本語"},
    // {code: "ko", name: "Korean", localName: "한국어"},
    // {code: "zh", name: "Chinese", localName: "中文"},
    // {code: "ar", name: "Arabic", localName: "العربية"},
    // {code: "he", name: "Hebrew", localName: "עברית"},
    // {code: "tr", name: "Turkish", localName: "Türkçe"},
    // {code: "no", name: "Norwegian", localName: "Norsk" },
]