# Build locally:
```bash
# NOTE: docker is the quickest; try not to use sudo
sudo docker compose up --build
```
If docker don't work, follow [this post](https://george-gca.github.io/blog/2022/running-local-al-folio/). Some notes:
- install ruby
- install python jupyter  

Finally: run locally with `bundle exec jekyll serve --lsi`

# Webpage tips:
to make a new page, just put a permalink to the name it it self. For example, if the new page name is `_pages/dipshit.md`, there should be a `permalink: /dipshit/`

# Blog tips:
blog naming format must be:
`<date>-<your title>.md`