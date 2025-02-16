[![dockerhub-latest](https://github.com/yuji-hatakeyama/readability-cli/actions/workflows/dockerhub-latest.yml/badge.svg)](https://github.com/yuji-hatakeyama/readability-cli/actions/workflows/dockerhub-latest.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/hatake/readability-cli.svg)](https://hub.docker.com/r/hatake/readability-cli/)


# Readability CLI

## URL

GitHub
https://github.com/yuji-hatakeyama/readability-cli

Docker Hub
https://hub.docker.com/r/hatake/readability-cli


## Uses

```
% docker run hatake/readability-cli --help

readability-cli

  Readability CLI parser

Options

  -d, --debug                    debug mode flag
  -u, --url string               URL
  -c, --charThreshold number     Readability option charThreshold
  -n, --nbTopCandidates number   Readability option nbTopCandidates
  -m, --maxElemsToParse number   Readability option maxElemsToParse
  -h, --help                     show help
```

```
% url="https://www.marca.com/en/world-cup/2022/06/14/62a8fcc246163fdc138b45f1.html"; curl -s $url | docker run -i --rm hatake/readability-cli --url "$url" | jq .
{
  "title": "FIFA World Cup 2022: Meet the full list of qualified countries and their groups",
  "byline": "Marca",
  "dir": null,
  "lang": "en",
  "content": "<div id=\"readability-page-1\" class=\"page\"><div><ul aria-label=\"Redacci�n:\"><li><p>LW</p></li></ul><p><span>Actualizado </span><time datetime=\"2022-06-14T21:33:16Z\"> 14/06/2022 - <span> 16:33 <abbr title=\"Central Standard Time\">CST</abbr></span></time></p></div><div><p><span>W</span>ith <strong>Costa Rica beating New Zealand</strong> for the final place in the <a href=\"https://www.marca.com/en/world-cup.html\"><strong>2022 World Cup</strong></a> that will happen in <strong>Qatar </strong>by the end of the year. We finally have a full list of nations inside their respective groups. Needless to say, there is a short list of countries that are considered favorites to win the tournament but some of them will have a relatively harder road to reach the final stages of the tournament.</p><p>Out of all the countries that made it to this stage, there are at least five of them who are considered favorites to win the cup by the end of it. It's been a long road towards the final stage of the <strong>World Cup</strong>, especially during pandemic times but we finally made it. Come <strong>November</strong>, Qatar will become the football capital of the world. </p><h2>Which countries have qualified to Qatar 2022?</h2><p>The <strong>32 countries</strong> qualified for the <strong>2022 FIFA World Cup</strong> are Argentina, Brazil, England, France, Spain, Belgium, Portugal, Germany, The Netherlands, Uruguay, Croatia, Denmark, Mexico, the United States, Senegal, Wales, Poland, Australia, Japan, Morocco, Switzerland, Ghana, Korea Republic, Cameroon, Serbia, Canada, Costa Rica, Tunisia, Saudi Arabia, Iran, Ecuador. And hosts <strong>Qatar </strong>will lead the way in the opening match of the tournament. </p><h2>Which teams are considered favorites to win the 2022 World Cup?</h2><p>Out of all these countries, the top <strong>favorites </strong>to win the tournament will be in the following order: <strong>Argentina</strong>, <strong>France</strong>, Brazil, Portugal, England, Spain, Germany, and Belgium. Potential Cinderellas will be Uruguay, Poland, Canada, Denmark, Croatia, Switzerland, Senegal, the Netherlands, and Wales. The rest of the countries don't appear to have a major chance to get far in the tournament. </p><h2>How are the groups for the 2022 World Cup formed?</h2><p>Inside <strong>Group A</strong>, hosts Qatar will share the spotlight with Ecuador, Senegal and the Netherlands. <strong>Group B</strong> has England, Itan, United States and Wales in an almost all-English affair. Inside <strong>Group C</strong>, title contenders Argentina lead the charge against Saudi Arabia, Mexico and Poland. <strong>Group D</strong> has France, Australia, Denmark and Tunisia. </p><p><strong>Group E</strong> will have Spain against Costa Rica, Germany and Japan inside the infamous <strong>Group of Death</strong>. Sector F has Belgium, Canada, Morocco and Croatia. Brazil leads <strong>Group G</strong> against Serbia, Switzerland and Cameroon. Last but not least, Ronaldo's Portugal leads <strong>Group H</strong> against Uruguay, Ghana and the Republic of Korea. First matches kick-off on <strong>November 21 and the final is set for December 18. </strong></p></div></div>",
  "textContent": "LWActualizado 14/06/2022 - 16:33 CSTWith Costa Rica beating New Zealand for the final place in the 2022 World Cup that will happen in Qatar by the end of the year. We finally have a full list of nations inside their respective groups. Needless to say, there is a short list of countries that are considered favorites to win the tournament but some of them will have a relatively harder road to reach the final stages of the tournament.Out of all the countries that made it to this stage, there are at least five of them who are considered favorites to win the cup by the end of it. It's been a long road towards the final stage of the World Cup, especially during pandemic times but we finally made it. Come November, Qatar will become the football capital of the world. Which countries have qualified to Qatar 2022?The 32 countries qualified for the 2022 FIFA World Cup are Argentina, Brazil, England, France, Spain, Belgium, Portugal, Germany, The Netherlands, Uruguay, Croatia, Denmark, Mexico, the United States, Senegal, Wales, Poland, Australia, Japan, Morocco, Switzerland, Ghana, Korea Republic, Cameroon, Serbia, Canada, Costa Rica, Tunisia, Saudi Arabia, Iran, Ecuador. And hosts Qatar will lead the way in the opening match of the tournament. Which teams are considered favorites to win the 2022 World Cup?Out of all these countries, the top favorites to win the tournament will be in the following order: Argentina, France, Brazil, Portugal, England, Spain, Germany, and Belgium. Potential Cinderellas will be Uruguay, Poland, Canada, Denmark, Croatia, Switzerland, Senegal, the Netherlands, and Wales. The rest of the countries don't appear to have a major chance to get far in the tournament. How are the groups for the 2022 World Cup formed?Inside Group A, hosts Qatar will share the spotlight with Ecuador, Senegal and the Netherlands. Group B has England, Itan, United States and Wales in an almost all-English affair. Inside Group C, title contenders Argentina lead the charge against Saudi Arabia, Mexico and Poland. Group D has France, Australia, Denmark and Tunisia. Group Ewill have Spain against Costa Rica, Germany and Japan inside the infamous Group of Death. Sector F has Belgium, Canada, Morocco and Croatia. Brazil leads Group G against Serbia, Switzerland and Cameroon. Last but not least, Ronaldo's Portugal leads Group H against Uruguay, Ghana and the Republic of Korea. First matches kick-off on November 21 and the final is set for December 18. ",
  "length": 2481,
  "excerpt": "With Costa Rica beating New Zealand for the final place in the 2022 World Cup that will happen in Qatar by the end of the year. We finally have a full list of nations inside their",
  "siteName": "MARCA"
}
```
