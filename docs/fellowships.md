# Fellowship Management Guidelines

## Overview
The fellowship system uses two main components:
1. **CSV Data** (`_data/fellowships_descriptions.csv`) - Controls display logic and fellowship metadata
2. **Markdown Pages** (`_fellowships/`) - Contains detailed fellowship descriptions and application information

## Adding a New Fellowship

### 1. Add CSV Entry
Add a new row to `_data/fellowships_descriptions.csv` with these key fields:
- `objectid`: Unique identifier (lowercase, no spaces)
- `title`: Fellowship name (must match markdown file title exactly)
- `active`: "yes" to show on opportunities page, "no" to hide
- `date-open`/`date-closed`: MM-DD format for application periods
- `deadline-season`: "Fall", "Spring", "Rolling", or "Inactive"
- `application_link`: Direct link to application form
- Other fields: `amount`, `eligible`, `sponsor`, etc.

### 2. Create Markdown File
Create `_fellowships/[fellowship-name].md` with this front matter:
```yaml
---
title: [Exact title from CSV]
layout: fellowship
section: Fellowships
permalink: /fellowships/[filename].html
show_past_projects: true
---
```

### 3. Markdown Content Structure
Use existing fellowship pages as templates. Include these standard sections with anchor IDs:

- `{:#call}` **Call for Applications** - Fellowship description and goals
- `{:#process}` **How to Apply** - Application requirements and submission process  
- `{:#criteria}` **Application Criteria** - Evaluation criteria and requirements

## Editing Existing Fellowships

### Status Management
Fellowship display is automatically controlled by CSV data:
- **Active fellowships** (`active: yes`) appear on opportunities page with status badges
- **Status badges** are calculated from `date-open`, `date-closed`, and current date
- **Application links** show/hide based on open/closed status

### Key CSV Fields for Display Logic
- `active`: Controls visibility on opportunities page
- `date-open`/`date-closed`: Auto-calculates "OPEN"/"CLOSED" status
- `deadline-season`: Shows as "Rolling" or seasonal deadline
- `status`: Manual override (use "open" to force open status)

### Content Updates
- **CSV changes** affect all display pages immediately
- **Markdown changes** only affect individual fellowship detail pages
- **IMPORTANT!!!** Keep CSV `title` field synchronized with markdown front matter `title`

## Best Practices
- Use existing fellowship markdown files as templates for consistency
- Test fellowship status by checking the opportunities page after CSV changes
- Inactive fellowships automatically move to "Currently Inactive" section
- Contact information defaults based on `sponsor` field (CDIL, Spec, Library)