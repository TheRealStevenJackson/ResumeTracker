# {{name}}

{{headline}}

{{email}} · {{phone}} · {{location}}
[LinkedIn]({{linkedin}}) · [GitHub]({{github}}){{#if portfolio}} · [Portfolio]({{portfolio}}){{/if}}

---

## Summary

{{summary}}

---

## Professional Experience

{{#each experience}}
### {{title}} · {{company}}
*{{start}} – {{end}} · {{location}}*

{{#each bullets}}
- {{text}}
{{/each}}

{{/each}}

---

## Technical Projects

{{#each projects}}
### {{name}}
*{{start}} – {{end}} · {{url}}*

{{description}}

{{#each bullets}}
- {{text}}
{{/each}}

{{/each}}

---

## Skills

{{skills}}

---

## Education

{{education}}
