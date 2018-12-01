# Webcomic Site

Basic docs explaining how the site is built, what dependencies it uses, and how to host/test it locally.

## Hours

Logging the hours I spend on this here. Will update daily. The "commits" column seems confusing, but you can just copy the text and ctrl+f on the [commits page](../../commits/master) to find them.

| Day | Time | Duration | Description | Commits |
|-----|------|----------|-------------|---------| 
| 11/26 | ~19:00-20:30ish | 1h30 | I only tracked the time I was actually working, not the entire time spent discussing the project. | 61532dd - 4982008 |
| 11/26 | 21:30-23:30 | 2h  | | 5d26b71 - bbcac5f |
| 11/27 | 10:30-11:00 | 30m | | 8255d16 |
| 11/27 | 14:30-15:30 | 1h  | | f67da27 - df3b108 |
| 11/27 | 23:30-00:30 | 1h  | | 6046679 |
| 11/28 | 15:45-16:00 | 15m | | 983aa5c - 6ae2b29 |
| 11/28 | 17:00-18:00 | 1h  | | 03ff068 - 358ed19 |
| 11/29 | 11:30-12:00 | 30m | | 2064b0f - 107b8bf |
| 11/29 | 14:40-15:10 | 30m | | b739deb - bf48260 |
| 11/29 | 20:00-21:00 | 1h  | | a5b8334 - caedf3a |
| 12/1  | 11:30-00:30 | 1h  | | ebadfb7 - 7ad5795 |

## TODO

- [x] comments w Disqus
- [ ] create more newspaper-like layouts
- [ ] design polish, animations, transitions, etc
- [ ] ensure compatibility with other browsers
- [ ] content management system - siteleaf.com?

## Building

The site is built in Jekyll. You'll want to setup Ruby on your machine, then cd into the cloned repositories folder and run `gem install`. After that, `jekyll serve` should build this site properly, store the output in `./_site`, and host it to `127.0.0.1:4000`.

## Docs

### Page Structure

The index file, "/", always redirects to the latest "page", or set of comics. Pages have a url equivalent to their `:title` parameter, which should start at 1 and increment each time a new page is added.

Comics are handled similarly; each new comic increments an integer, except they are located in the `/comics/` subdirectory. If the page at `/1` contains 40 comics, then the url for the first comic of page 2 should be `/comics/41`.

### Layouts

Each "page" of comics has a "layout", which is one of `_layouts/layout-*.html`. This layout determines how many comics it needs and how/where they will be displayed in the grid.

Each page has a `start` variable which defines the number of the first comic to be used in the layout; the rest are obtained in sequential order.

#### layout-1

The first layout displays 6 comics on an 8x11 grid with the following width-height ratios:

  1. 8:2
  2. 6:2
  3. 6:2
  4. 6:3
  5. 2:7
  6. 8:2

#### layout-2

The second layout displays 8 comics on an 8x6 grid with the following width-height ratios:

  1. 5:2
  2. 3:1
  3. 3:1
  4. 3:1
  5. 5:1
  6. 5:1
  7. 3:1
  8. 8:2

### Identifiers

Pages and comics both have two variables that are used to identify them; the `slug` and the `hash`. The `slug` is used only to determine the URL of the comic, while the `hash` is used for sorting the comics internally (this is what the sequential layouts - described above - and pagination use). These variables _should_ both have the same numerical value in each comic, but the `hash` should have some amount of zeros prepended so that it is a uniform length. Currently, this length is 6 characters. Unless you plan to host more than 999999 comics, I think that this will be enough.

Example: for comic #1, the `slug` would be "1", and the `hash` would be "000001".
