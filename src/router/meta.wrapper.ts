import { RouteLocation } from "vue-router";

const metaWrapper = (to: RouteLocation, from: RouteLocation): void => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode?.removeChild(el));

  if (nearestWithMeta)
    appendTags(nearestWithMeta.meta.metaTags as Record<string, string>[]);
}

function appendTags(tags: Record<string, string>[]): void {
  tags.map((tagDef: Record<string, string>) => {
    const tag = document.createElement("meta");

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute("data-vue-router-controlled", "");

    return tag;
  })
    .forEach((tag: HTMLMetaElement) => document.head.appendChild(tag));
}

export default metaWrapper;