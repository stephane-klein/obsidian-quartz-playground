import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";
import { SimpleSlug } from "./quartz/util/path";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({})
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  afterBody: [
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
        Component.DesktopOnly(
            Component.RecentNotes({
                title: "Notes éphémères",
                limit: 5,
                filter: (f) =>
                  f.slug!.startsWith("Notes-éphémères/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
                linkToMore: "Notes-éphémères/" as SimpleSlug,
            })
        ),
        Component.DesktopOnly(
            Component.RecentNotes({
                title: "Projets",
                limit: 5,
                filter: (f) =>
                  f.slug!.startsWith("Projets/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
                linkToMore: "Projets/" as SimpleSlug,
            })
        ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
