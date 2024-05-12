// get data.json

import fs from "fs";

const data = fs.readFileSync("./data.json", "utf8");
JSON.parse(data).forEach((item, i) => {
  let title =
    item["Turkish"] ||
    item.Turkic ||
    item["Old Turkic"] ||
    item["Proto-Turkic"] ||
    item["Common Turkic"] ||
    item["Kazakh"] ||
    item["Kyrgyz"] ||
    item["Uzbek"] ||
    item["Nogai"] ||
    item["Tatar"] ||
    item["Bashkir"] ||
    item["Tungus-Manchu"] ||
    item["Kumyk"] ||
    item["Karakalpak"] ||
    item["Uighur"] ||
    item["Turkmen"] ||
    item["Mongolian"] ||
    item["Japanese"] ||
    item["Korean"];

  let t = title;
  let rt = i;
  if (!title) {
    return;
  }
  let description = item.Meaning || item["Russian meaning"] || item["Comments"];
  let meaning = item.Meaning || "";
  delete item.Meaning;
  fs.writeFileSync(
    `./src/content/docs/words/${rt}.md`,
    `---
title: "${t}"
description: ${description}
---
<strong>${meaning}</strong><br><br>
${Object.keys(item)
  .map((key) => `<strong>${key}</strong>: ${item[key]}<br>`)
  .join("\n")}


`
  );
});
