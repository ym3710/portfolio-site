// 甲子園 春夏内訳データ
// 出典・取得時点はREADME.mdの「甲子園パワーランキングのデータ出典」を参照
// 合計(出場・優勝・勝利)はここには持たず、koshien-ranking.html側で春+夏から毎回計算する
const KOSHIEN_SCHOOLS = [
  {
    name: "大阪桐蔭",
    pref: "大阪府",
    spring: { appearances: 16, championships: 5, wins: 41 },
    summer: { appearances: 13, championships: 5, wins: 42 },
  },
  {
    name: "智辯和歌山",
    pref: "和歌山県",
    spring: { appearances: 16, championships: 1, wins: 31 },
    summer: { appearances: 29, championships: 3, wins: 47 },
  },
  {
    name: "横浜",
    pref: "神奈川県",
    spring: { appearances: 18, championships: 4, wins: 28 },
    summer: { appearances: 22, championships: 2, wins: 44 },
  },
  {
    name: "東海大相模",
    pref: "神奈川県",
    spring: { appearances: 12, championships: 3, wins: 28 },
    summer: { appearances: 12, championships: 2, wins: 21 },
  },
  {
    name: "慶應義塾",
    pref: "神奈川県",
    spring: { appearances: 11, championships: 0, wins: 5 },
    summer: { appearances: 19, championships: 2, wins: 20 },
  },
];
