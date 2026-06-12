"use client";

import { useEffect } from "react";

const TOP_HASH_PATTERN = /^#top(?:#top)*$/i;

function hasTopHash() {
  return TOP_HASH_PATTERN.test(window.location.hash);
}

function cleanTopHash() {
  if (!hasTopHash()) {
    return;
  }

  document.getElementById("top")?.scrollIntoView({ block: "start" });

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(window.history.state, document.title, cleanUrl);
}

function scheduleTopHashCleanup() {
  if (!hasTopHash()) {
    return;
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      window.setTimeout(cleanTopHash, 80);
    });
  });
}

export function TopHashCleaner() {
  useEffect(() => {
    const handleNavigationChange = () => scheduleTopHashCleanup();
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    const patchedPushState = function patchedPushState(
      this: History,
      ...args: Parameters<History["pushState"]>
    ) {
      const result = originalPushState.apply(this, args);
      scheduleTopHashCleanup();
      return result;
    } as History["pushState"];

    const patchedReplaceState = function patchedReplaceState(
      this: History,
      ...args: Parameters<History["replaceState"]>
    ) {
      const result = originalReplaceState.apply(this, args);
      scheduleTopHashCleanup();
      return result;
    } as History["replaceState"];

    window.history.pushState = patchedPushState;
    window.history.replaceState = patchedReplaceState;

    if (document.readyState === "complete") {
      scheduleTopHashCleanup();
    } else {
      window.addEventListener("load", handleNavigationChange, { once: true });
    }

    window.addEventListener("hashchange", handleNavigationChange);
    window.addEventListener("popstate", handleNavigationChange);

    return () => {
      window.removeEventListener("load", handleNavigationChange);
      window.removeEventListener("hashchange", handleNavigationChange);
      window.removeEventListener("popstate", handleNavigationChange);

      if (window.history.pushState === patchedPushState) {
        window.history.pushState = originalPushState;
      }

      if (window.history.replaceState === patchedReplaceState) {
        window.history.replaceState = originalReplaceState;
      }
    };
  }, []);

  return null;
}
