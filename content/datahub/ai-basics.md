---
title: AI Basics
section: Data Hub
permalink: /datahub/ai-basics.html
layout: page
last_reviewed: 2026-08-11
---

A short introduction to AI for University of Idaho community members who would like to know more before
deciding whether to use it.

## What these tools actually do

Most of what people mean by AI right now is a large language model: a program
trained on an enormous amount of written text to learn which words tend to follow which. You type something and the AI responds by predicting what the most likely answer is based on all the similar examples it's been shown in its training data.

The model is not consulting facts or databases as it writes, and has no understanding of what it actually produces or whether it is true. What it is good at is mimicking how people tend to speak, like a parrot or auto-complete.

<div class="card card-body my-3">
<h3 class="h5">How a language model writes a sentence</h3>

<div id="ai-nextword" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <table class="table table-sm table-striped caption-top mb-0">
        <caption>Step 1 — <span class="text-muted">you typed:</span> the cat sat</caption>
        <thead>
          <tr>
            <th scope="col">Word it might say next</th>
            <th scope="col" class="text-end">Chance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">on <span class="text-muted">— picked</span></th>
            <td class="text-end">62%</td>
          </tr>
          <tr>
            <th scope="row">down</th>
            <td class="text-end">13%</td>
          </tr>
          <tr>
            <th scope="row">quietly</th>
            <td class="text-end">9%</td>
          </tr>
          <tr>
            <th scope="row">there</th>
            <td class="text-end">7%</td>
          </tr>
          <tr>
            <th scope="row">beside</th>
            <td class="text-end">5%</td>
          </tr>
          <tr>
            <th scope="row">upon</th>
            <td class="text-end">4%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="carousel-item">
      <table class="table table-sm table-striped caption-top mb-0">
        <caption>Step 2 — <span class="text-muted">you typed:</span> the cat sat + on</caption>
        <thead>
          <tr>
            <th scope="col">Word it might say next</th>
            <th scope="col" class="text-end">Chance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">the <span class="text-muted">— picked</span></th>
            <td class="text-end">71%</td>
          </tr>
          <tr>
            <th scope="row">a</th>
            <td class="text-end">15%</td>
          </tr>
          <tr>
            <th scope="row">top</th>
            <td class="text-end">6%</td>
          </tr>
          <tr>
            <th scope="row">my</th>
            <td class="text-end">5%</td>
          </tr>
          <tr>
            <th scope="row">his</th>
            <td class="text-end">3%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="carousel-item">
      <table class="table table-sm table-striped caption-top mb-0">
        <caption>Step 3 — <span class="text-muted">you typed:</span> the cat sat + on the</caption>
        <thead>
          <tr>
            <th scope="col">Word it might say next</th>
            <th scope="col" class="text-end">Chance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">mat <span class="text-muted">— picked</span></th>
            <td class="text-end">41%</td>
          </tr>
          <tr>
            <th scope="row">floor</th>
            <td class="text-end">19%</td>
          </tr>
          <tr>
            <th scope="row">couch</th>
            <td class="text-end">14%</td>
          </tr>
          <tr>
            <th scope="row">windowsill</th>
            <td class="text-end">11%</td>
          </tr>
          <tr>
            <th scope="row">table</th>
            <td class="text-end">9%</td>
          </tr>
          <tr>
            <th scope="row">rug</th>
            <td class="text-end">6%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="carousel-item">
      <table class="table table-sm table-striped caption-top mb-0">
        <caption>Step 4 — <span class="text-muted">you typed:</span> the cat sat + on the mat</caption>
        <thead>
          <tr>
            <th scope="col">Word it might say next</th>
            <th scope="col" class="text-end">Chance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">stop here <span class="text-muted">— picked</span></th>
            <td class="text-end">55%</td>
          </tr>
          <tr>
            <th scope="row">and</th>
            <td class="text-end">18%</td>
          </tr>
          <tr>
            <th scope="row">a comma</th>
            <td class="text-end">12%</td>
          </tr>
          <tr>
            <th scope="row">while</th>
            <td class="text-end">8%</td>
          </tr>
          <tr>
            <th scope="row">purring</th>
            <td class="text-end">7%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<div class="text-center my-3">
  <button class="btn btn-outline-pride-gold me-2" type="button" data-bs-target="#ai-nextword" data-bs-slide="prev">Previous step</button>
  <button class="btn btn-outline-pride-gold" type="button" data-bs-target="#ai-nextword" data-bs-slide="next">Next step</button>
</div>

<p class="text-muted small">The words and percentages above are made up to keep the
example readable. A real model weighs tens of thousands of possible next words at
every step, not five or six.</p>
</div>

## Getting a useful answer from AI

Because AI doesn't "know" anything, ensuring you get a good answer means sending it the right words to allow it to accurately predict what you want. In other words, provide it really detailed instructions.

Describe the job the way you would describe it to a capable stranger who
has no idea what's going on: what you want, what you don't want, the background context for your request, and any policies or procedures it needs to follow while completing the work.

Give the model the material you want it to work from, rather than relying on the model
to recall or find it. And expect to iterate, treating the first answer as a draft.

## Where they go wrong

Making models probabilistic, rather than deterministic, makes them dramatically more creative and capable. And they are trained to be genuinely helpful. However, because they're usually commercial software, they're also trained to be engaging. The tension between these two incentives, combined with being probabilistic, makes models unpredictable.

So, when a model does not have an answer, it usually does not stop and say so. Instead, it produces the most
plausible-looking continuation. This is called hallucination. Eliminating hallucinations has, so far, proven to be very, very difficult.

So treat anything factual as a claim to check, not as a fact you have been
given. The details easiest for you to verify — names, dates, numbers, form
numbers, citations — are also the ones models invent most readily.

## What you type goes somewhere

Many computers are not powerful enough to run models on their own. So, the vast majority of generative AI services are "cloud"-based. They take your input, send it to another computer somewhere else, that computer processes it, and then sends the response back to your computer.

This means we have to be careful about putting private or sensitive data into AI tools. The University sorts
both its data and its approved AI services into risk categories so the two can
be matched up.

Which University information may go into which tool is set by the University's guidance:

- [Guidance for Artificial Intelligence](https://support.uidaho.edu/TDClient/40/Portal/KB/Article/3464/Guidance-for-Artificial-Intelligence) - OIT's article on AI use, including the table of which services are approved for which categories of University data.
- [How to identify High Risk data](https://support.uidaho.edu/TDClient/40/Portal/KB/Article/1659/How-to-identify-High-Risk-data) - How to work out which category the information in front of you belongs to, with concrete examples.

## Deciding when to use AI

AI tools are least risky when you can judge the output yourself: drafting
something you will rewrite anyway, summarizing a document you already have, or processing data you know well.

They are most risky when you cannot check the answer, when being wrong is
costly, or when a human being could be held accountable for the AI's actions.

## Where to go next

- [U of I AI Guidance]({{ '/datahub/ai-guidance.html' | relative_url }}) - The University's own guidance on AI at work, and who to ask.
- [MindRouter]({{ '/datahub/mindrouter.html' | relative_url }}) - The University's own AI chat tool, open to anyone with Vandal credentials.
- [AI Examples]({{ '/datahub/ai-examples.html' | relative_url }}) - AI already running inside U of I services you have access to.
- [AI Glossary](https://support.uidaho.edu/TDClient/40/Portal/KB/Article/3460/AI-Glossary) - OIT's plain-language definitions, for terms this page did not cover.

To talk any of it through, contact or visit the [Data Hub]({{ '/datahub/' | relative_url }}).

<p class="text-muted small">Last reviewed: {{ page.last_reviewed }}</p>
