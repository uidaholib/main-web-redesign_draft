# LibAnswers Chat Widgets

Widgets are created and configured in LibAnswers > LibChat > Chat Widgets.

These are actively deployed (as titled on Chat Widgets page):

- "Proactive Widget Floating", on /find/, articles, books, journals
- "ask-us-chat-button", in the pop up Ask Us modal, `_includes/ask-us.html` 
- "chat-page", on `/help/chat.html`
- "Primo Widget", on Primo 

When making updates to the offline message, etc, please try to keep these all in sync. 
They are each a bit different use case, but most of the text updates should apply to all. 

"ask-us-chat-button" is a bit more modified than the others (for example, when offline it just becomes a link to the help page), so be careful changing anything there. 

To add proactive chat to a page, use the the front matter: 
`chat-widget: true`
