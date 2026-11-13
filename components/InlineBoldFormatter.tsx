'use client';

import { useEffect } from 'react';

function applyBoldFormattingToTextNode(node: Text) {
  const text = node.textContent ?? '';

  if (!text.includes('**')) return;

  const regex = /\*\*(.+?)\*\*/g;
  const matches = [...text.matchAll(regex)];

  if (!matches.length) return;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  for (const match of matches) {
    const [fullMatch, innerText] = match;
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchIndex)));
    }

    const strong = document.createElement('strong');
    strong.className = 'font-semibold text-foreground';
    strong.textContent = innerText;
    fragment.appendChild(strong);

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  node.replaceWith(fragment);
}

export function InlineBoldFormatter() {
  useEffect(() => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;

          if (!parent) return NodeFilter.FILTER_REJECT;

          if (
            parent.closest('script, style, code, pre') ||
            parent.closest('[data-inline-bold-processed="true"]')
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return node.textContent?.includes('**')
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      },
    );

    const nodes: Text[] = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode as Text);
    }

    for (const node of nodes) {
      const parent = node.parentElement;
      if (!parent) continue;
      applyBoldFormattingToTextNode(node);
      parent.setAttribute('data-inline-bold-processed', 'true');
    }
  }, []);

  return null;
}
