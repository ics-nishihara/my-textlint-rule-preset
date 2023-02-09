export const textlintConfig = {
  rules: {
    "preset-japanese": {
      "sentence-length": {
        max: 150,
      },
      "max-ten": {
        max: 4,
      },
      "no-doubled-joshi": {
        min_interval: 1,
        strict: false,
        allow: ["も", "や", "か"],
        separatorChars: [
          "、",
          "。",
          "?",
          "!",
          "？",
          "！",
          "「",
          "」",
          "“",
          "”",
        ],
      },
    },
    "preset-jtf-style": {
      "1.2.1.句点(。)と読点(、)": false,
      "1.2.2.ピリオド(.)とカンマ(,)": true,
      "2.1.8.算用数字": false,
      "2.2.2.算用数字と漢数字の使い分け": true,
      "2.2.3.一部の助数詞の表記": false,
      "3.1.1.全角文字と半角文字の間": false,
      "3.1.2.全角文字どうし": false,
      "4.1.3.ピリオド(.)、カンマ(,)": true,
      "4.3.2.大かっこ［］": true,
      "4.2.6.ハイフン(-)": true,
      "4.3.1.丸かっこ（）": false,
    },

    prh: {
      rulePaths: ["./dict/prh.yml"],
    },
  },
};
