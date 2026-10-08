import { Fragment, type ReactNode } from "react";
import { findVariant, getBreadcrumb, templateComponents } from "@/data";
import type { PageKey } from "@/types";
import PageHero from "./PageHero";
import { sectionRegistry } from "./sectionRegistry";

/*
  Renders a page from category.json -> templateComponents.pages[page]:
  each entry's `component` picks the React component and `variant`
  (default: the component name) picks its data.

  `slots` replaces an entry by its `key`, for sections that need data
  from the URL (e.g. the service on /services/[slug]).
*/
export default function PageSections({
  page,
  slots = {},
}: {
  page: PageKey;
  slots?: Record<string, ReactNode>;
}) {
  const { components } = templateComponents.pages[page];

  return components.map((entry) => {
    if (entry.key in slots) {
      return <Fragment key={entry.key}>{slots[entry.key]}</Fragment>;
    }

    if (entry.component === "Breadcrumb") {
      const breadcrumb = getBreadcrumb(page);

      return breadcrumb ? (
        <PageHero
          key={entry.key}
          title={breadcrumb.title}
          image={breadcrumb.bgImage}
        />
      ) : null;
    }

    const render = sectionRegistry[entry.component];
    const data = findVariant(entry.variant ?? entry.component);

    if (!render || data === undefined) {
      throw new Error(
        `Page "${page}": unknown component "${entry.component}" or variant "${entry.variant ?? entry.component}"`,
      );
    }

    return <Fragment key={entry.key}>{render(data, entry.props ?? {})}</Fragment>;
  });
}
