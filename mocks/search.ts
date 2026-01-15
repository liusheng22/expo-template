const HOT_WORDS = [
  '手机',
  '厨房小电器',
  '巧克力',
  '儿童无添加零食',
  '数码相机',
  '电器',
  '无线吸尘器',
  '耳机',
];

// 固定建议词条 - 需求固定的
const FIXED_SUGGESTIONS = [
  '[陳列品-包1年保養] 19支裝 嵌入式單溫區酒櫃 VZ19SSUG',
  '18支裝 雙溫區酒櫃 VZ18BDHK',
  '18支裝 單溫區酒櫃 VZ18BHK',
  '43支裝 雙溫區酒櫃 VZ43SDUG',
  '110支裝 雙溫區酒櫃 VZ110SDUG',
  'Vinvautz 名望 46支裝 變頻 雙溫區觸控式酒櫃  (右門鉸) VZ46VDUG-R',
  '[陳列品-包1年保養]12支裝 單溫區酒櫃 VZ12BHK',
  '[陳列品-包1年保養]18支裝 雙溫區酒櫃 VZ18BDHK',
];

// 生成搜索建议词条
function generateSuggestions(): string[] {
  const suggestions: string[] = [];
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const middleText = '搜索建议词条-';

  for (const letter of letters) {
    for (let repeat = 1; repeat <= 10; repeat++) {
      const prefix = letter.repeat(repeat);
      // 后缀：字母 + 数字，数字部分递增（1, 11, 111）
      const suffixNumber = '1'.repeat(repeat);
      const suffix = `${letter}${suffixNumber}`;
      suggestions.push(`${prefix}-${middleText}${suffix}`);
    }
  }

  return [...suggestions, ...FIXED_SUGGESTIONS];
}

const SUGGESTIONS = generateSuggestions();

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function fetchHotWordsMock(): Promise<string[]> {
  await delay(120);
  return HOT_WORDS;
}

export async function fetchSuggestionsMock(kw: string): Promise<string[]> {
  const keyword = kw.trim();
  if (!keyword) return [];

  // 随机延迟 0-500ms
  const ms = randomInt(0, 500);
  await delay(ms);

  const lower = keyword.toLowerCase();
  return SUGGESTIONS.filter((item) => item.toLowerCase().includes(lower)).slice(
    0,
    10,
  );
}
