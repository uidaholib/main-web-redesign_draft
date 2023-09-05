# Library Website Standards

> drafting standards for consistency across the site

## Style Guide

Check the main [U of I Brand Resource Center](https://www.uidaho.edu/brand) and [digital style guide](https://www.uidaho.edu/brand/print-digital-content/digital-style-guide).

U of I:

- Always use "U of I" (not "UI" or "UIdaho")

Alt text: 

- All images must have descriptive alt text! 
- Don't use images that have text in them, the text should be in the HTML. 

Headings:

- write in shorter blocks of text and include plenty of sub-headings
- headings should follow logical order on the page, increasing by one step (h1, h2, h3, etc) without skipping levels. 

Phone Numbers:

- Content: Check that numbers are consistent across site
- Should read (xxx) xxx-xxxx
- A phone number may be a link, but doesn’t always have to be - make this decision according to context and use the old website as an example.
- When a call link, code should be: <a href="tel:+1-208-xxx-xxxx">(208) xxx-xxxx</a>
- When a text link, code should be: <a href="sms:+1-208-xxx-xxxx">(208) xxx-xxxx</a>

Names:

-Check that names are current and consistent across site.

Email:

- Check that emails are updated and consistent across site.
- Code should be `<a href="mailto:username@uidaho.edu">Name</a>`

Font Awesome Icons:

- Make sure buttons with icons are consistent across site. (For example, a “parking” button should always include a car icon).
- If old icons aren’t showing up or need to be updated, find updated versions here: https://fontawesome.com/icons?d=gallery

Proper Use of "And":

- Avoid using "&", always use “and” instead.

Tips for Editing in Visual Studio Code:

- If you are working on VS Code, an easy way to see how the divs are lining up is to highlight all the html, then press Ctrl+K followed by Ctrl+F. This will format the indentation of the html so it will be easier to see the div nesting. The extra </div> at the bottom will be more obvious because they aren't indented (there should only be one with no indentation). Also, if you click on a tag that has a match (open or close) the tag will be highlighted along with it's match; if it does NOT have a match, it will not be highlighted.

## Links

For security and performance reasons all links with `target="_blank"` attribute should also have the attribute `rel="noopener"`.
For example, `<a href="" target="_blank" rel="noopener">link</a>`

See https://web.dev/external-anchors-use-rel-noopener/

### Button links

We use Bootstrap button classes to style many of our links. 
If they are actual links, i.e. go to a different page or to an anchor on the page, they should NOT have the attribute `role="button"` since this can trigger odd rendering and unnecessary screen reader interactions. 
For example, `<a class="btn btn-primary" href="https://example.com">Link</a>`.

If `<a>` tags are used to trigger interactivity on the page, for example opening a modal, then they SHOULD have `role="button"` for accessibility purposes. 
For example, `<a class="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#exampleModal">Link</a>`.
In these cases it is better to replace the `<a>` with a `<button>` element.

Button Color when linking to:

- Database: btn-outline-pride-gold
- Email: btn-outline-clearwater
- Form: btn-payette-blue
- Libguide: btn-clearwater
- Search: btn-pride-gold

## Resources

Bootstrap 4 Documentation/Tutorials:
https://getbootstrap.com/docs/4.0/getting-started/introduction/
https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp

Font-Awesome Icons:
https://fontawesome.com/icons?d=gallery

Best Practices:
Preview in small and large screens to make sure most important content doesn’t get pushed to the bottom of the page.
