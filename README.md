# Webcomic Site

Basic docs explaining how the site is built, what dependencies it uses, and how to host/test it locally. There is currently a live preview of this site at [jfenn.me/webcomic_test](https://jfenn.me/webcomic_test/).

## Hours

Logging the hours I spend on this here. Will update daily. The "commits" column seems confusing, but you can just copy the text and ctrl+f on the [commits page](../../commits/master) to find them.

| Day | Time | Duration | Description | Commits |
|-----|------|----------|-------------|---------| 
| 11/26 | ~7:00-8:30ish | 1h30 | I only tracked the time I was actually working, not the entire time spent discussing the project. | 61532dd - 4982008 |
| 11/26 | 9:30-ongoing  | 50m so far | | 5d26b71 - * |

## Building

The site is built in Jekyll. You'll want to setup Ruby on your machine, then cd into the cloned repositories folder and run `gem install`. After that, `jekyll serve` should build this site properly, store the output in `./_site`, and host it to `127.0.0.1:4000`.

## Docs

### Page Structure

The index file, "/", always redirects to the latest "page", or set of comics. Pages have a url equivalent to their `:title` parameter, which should start at 1 and increment each time a new page is added.

Comics are handled similarly; each new comic increments an integer, except they are located in the `/comics/` subdirectory. If the page at `/1` contains 40 comics, then the url for the first comic of page 2 should be `/comics/41`.
