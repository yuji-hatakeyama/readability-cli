[![dockerhub-latest](https://github.com/yuji-hatakeyama/readability-cli/actions/workflows/dockerhub-latest.yml/badge.svg)](https://github.com/yuji-hatakeyama/readability-cli/actions/workflows/dockerhub-latest.yml)

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
% url="https://www.marca.com/en/world-cup/2022/06/14/62a8fcc246163fdc138b45f1.html"; curl -s $url | docker run -i hatake/readability-cli --url "$url" | jq .excerpt
"With Costa Rica beating New Zealand for the final place in the 2022 World Cup that will happen in Qatar by the end of the year. We finally have a full list of nations inside their"
```
