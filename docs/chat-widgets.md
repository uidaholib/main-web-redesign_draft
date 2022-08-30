# LibAnswers Chat Widgets

Widgets are created and configured in LibAnswers > LibChat > Chat Widgets.

These are actively deployed (as titled on Chat Widgets page):

- "chat-page" (on `/help/chat.html`)
- "Proactive Widget Floating" (on /find/, articles, books, journals, etc)
- "Primo Widget" (on Primo)
- "SPEC Proactive Widget Floating" (on /special-collections/, index, searchtools. Does NOT fall back to 24/7 chat)
- "Data Hub Proactive Widget Floating" (on /datahub/. Does NOT fall back to 24/7 chat)

When making updates to the offline message, etc, please try to keep these all in sync. 
They are each a bit different use case, but most of the text updates should apply to all. 

Since Chat is currently 24/7 coop, Ask Us and other links point to `/help/chat.html` (rather than using a separate widget, as in earlier versions).

To add proactive chat to a page, use the the front matter: 
`chat-widget: true`

To add Spec chat to a page, use the front matter:
`chat-widget: spec`

To add Data Hub chat to a page, use the front matter:
`chat-widget: datahub`

## Code

Chat widgets code is in "_includes/lib-chat-widget.html" and "_includes/lib-chat-widget-spec.html".
The `async` value is added to the script tag to improve loading time.

The includes are added in "foot.html" by checking for the `chat-widget` front matter option.
