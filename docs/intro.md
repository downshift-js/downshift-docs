---
title: Introduction
description: Downshift Library Documentation
slug: /
sidebar_position: 1
---

# Downshift 🏎

Primitives to build simple, flexible, **WAI-ARIA** compliant React
**autocomplete/combobox** or **select** dropdown components.

## The problem

You need an _autocomplete/combobox_ or a _select_ experience in your application
and you want it to be accessible. You also want it to be simple and flexible to
account for your use cases. Finally, it should follow the ARIA design pattern
for a [combobox][combobox-aria] or a [select][select-aria], depending on your
use case.

## This solution

The library offers a couple of solutions. The first solution, which is the one
we recommend you to try first, is a set of React hooks. Each hook provides the
stateful logic needed to make the corresponding component functional and
accessible. Navigate to the documentation for each by using the links in the
list below.

- [useSelect](/use-select) for a custom select component.
- [useCombobox](/use-combobox) for a combobox/autocomplete input.
- [useTagGroup](/use-tag-group) for navigating and removing selected items
  displayed as tags. See the
  [combobox with tags](/use-combobox#multiple-selection-with-tag-group) and
  [select with tags](/use-select#multiple-selection-with-tag-group) examples.

The second solution is the [Downshift](/downshift) component, which can also be
used to create accessible combobox and select components, providing the logic in
the form of a render prop. It served as inspiration for developing the hooks and
it has been around for a while. It established a successful pattern for making
components accessible and functional while giving developers complete freedom
when building the UI.

[combobox-aria]:
  https://w3c.github.io/aria-practices/examples/combobox/combobox-autocomplete-list.html
[select-aria]:
  https://w3c.github.io/aria-practices/examples/combobox/combobox-select-only.html
