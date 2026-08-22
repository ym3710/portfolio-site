// 直近10年(2016年〜)の年別・大会別データ(パイロット5校のみ)
// 各出場について、どこまで勝ち進んだか(round)と、そこから換算した勝利数(wins)を持つ。
// wins換算: 1回戦敗退=0, 2回戦=1, 3回戦=2, 準々決勝=3, 準決勝=4, 準優勝(決勝敗退)=5, 優勝=6
// 優勝年は学校公式サイト/新聞記事で個別に裏付けを取った年のみ「優勝」としている(出典はREADME.md参照)
// 2026年でまだ結果未確定の出場は含めていない(確定次第追加する)
const KOSHIEN_RECENT = {
  "大阪桐蔭": [
    { year: 2016, season: "春", round: "準決勝", wins: 4 },
    { year: 2017, season: "春", round: "優勝", wins: 6 },
    { year: 2017, season: "夏", round: "3回戦", wins: 2 },
    { year: 2018, season: "春", round: "優勝", wins: 6 },
    { year: 2018, season: "夏", round: "優勝", wins: 6 },
    { year: 2021, season: "春", round: "準優勝", wins: 5 },
    { year: 2021, season: "夏", round: "準決勝", wins: 4 },
    { year: 2022, season: "春", round: "優勝", wins: 6 },
    { year: 2022, season: "夏", round: "3回戦", wins: 2 },
    { year: 2023, season: "春", round: "3回戦", wins: 2 },
    { year: 2024, season: "春", round: "3回戦", wins: 2 },
    { year: 2024, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2026, season: "春", round: "優勝", wins: 6 },
  ],
  "智辯和歌山": [
    { year: 2018, season: "春", round: "1回戦", wins: 0 },
    { year: 2018, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2019, season: "春", round: "3回戦", wins: 2 },
    { year: 2019, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2021, season: "夏", round: "優勝", wins: 6 },
    { year: 2022, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2023, season: "春", round: "準優勝", wins: 5 },
    { year: 2024, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2025, season: "春", round: "2回戦", wins: 1 },
    { year: 2025, season: "夏", round: "準決勝", wins: 4 },
    { year: 2026, season: "夏", round: "優勝", wins: 6 },
  ],
  "横浜": [
    { year: 2016, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2017, season: "夏", round: "準決勝", wins: 4 },
    { year: 2018, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2019, season: "春", round: "準決勝", wins: 4 },
    { year: 2021, season: "夏", round: "準決勝", wins: 4 },
    { year: 2022, season: "夏", round: "準々決勝", wins: 3 },
    { year: 2025, season: "春", round: "優勝", wins: 6 },
    { year: 2025, season: "夏", round: "3回戦", wins: 2 },
  ],
  "中京大中京": [
    { year: 2017, season: "夏", round: "準決勝", wins: 4 },
    { year: 2021, season: "春", round: "2回戦", wins: 1 },
    { year: 2024, season: "夏", round: "準決勝", wins: 4 },
    { year: 2026, season: "春", round: "2回戦", wins: 1 },
  ],
  "龍谷大平安": [
    { year: 2018, season: "夏", round: "3回戦", wins: 2 },
    { year: 2019, season: "春", round: "4回戦", wins: 3 },
    { year: 2023, season: "春", round: "4回戦", wins: 3 },
  ],
};
