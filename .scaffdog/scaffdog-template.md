---
# Name of template. (Required)
# Rule: You must indicate the scope of this template within `name`
# (e.g.) [/packages] Create a new package
#        [/apps/web] Create a new React component
#        [/.scaffdog] Create a new Scaffdog template
name:
  '[/.scaffdog] Create a new Scaffdog template file'

  # The directory as the starting point of the output destination. (Required)
root: '.scaffdog'

# Directory starting from root and being a destination candidate. You can use glob syntax. (Required)
output: '.'

# Directory to exclude from candidate output destination. You can use glob syntax.
ignore: []

# Message to display when accepting input. You can write the field's descrition in its value.
questions:
  name: 'Please enter the name of the output object. (e.g. eslint, React component)'
---

# `{{ inputs.name | kebab }}.md`

````markdown
---
# Name of template. (Required)
# Rule: You must indicate the scope of this template within `name`
# (e.g.) [/packages] Create a new package
#        [/apps/web] Create a new React component
#        [/.scaffdog] Create a new Scaffdog template
name:
  '[SCOPE] Create a new {{inputs.name}}'

  # The directory as the starting point of the output destination. (Required)
root: '.'

# Directory starting from root and being a destination candidate. You can use glob syntax. (Required)
output: '.'

# Directory to exclude from candidate output destination. You can use glob syntax.
ignore: []

# Message to display when accepting input. You can write the field's descrition in its value.
# Type: Record<string, string>
questions:
  name: 'Please enter the name of the output object. (e.g. eslint, React component)'
---

# `FILE.md`

```markdown
Let's make a document!
See scaffdog documentation for details.
https://scaff.dog/docs/templates
```
````
