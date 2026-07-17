/** A wrapping flex row used to lay out swatch/size tiles in the token stories. */
export function createGrid(): HTMLDivElement {
  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.flexWrap = 'wrap';
  grid.style.alignItems = 'flex-start';
  grid.style.gap = 'var(--space-8)';
  return grid;
}

/** A titled block used to separate each token group (`space-*`, `radius-*`, ...) within a story. */
export function createSection(title: string, content: HTMLElement): HTMLDivElement {
  const heading = document.createElement('h3');
  heading.textContent = title;
  heading.style.font = 'var(--text-heading-sm)';
  heading.style.margin = '0 0 var(--space-4)';

  const section = document.createElement('div');
  section.style.marginBottom = 'var(--space-12)';
  section.append(heading, content);
  return section;
}

/** A preview element paired with its `--token-name` and raw value, stacked vertically. */
export function createTile(name: string, value: string, preview: HTMLElement): HTMLDivElement {
  const nameEl = document.createElement('div');
  nameEl.textContent = `--${name}`;
  nameEl.style.font = 'var(--text-mono-sm)';
  nameEl.style.color = 'var(--color-text-primary)';

  const valueEl = document.createElement('div');
  valueEl.textContent = value;
  valueEl.style.font = 'var(--text-mono-sm)';
  valueEl.style.color = 'var(--color-text-secondary)';

  const tile = document.createElement('div');
  tile.style.display = 'flex';
  tile.style.flexDirection = 'column';
  tile.style.gap = 'var(--space-2)';
  tile.append(preview, nameEl, valueEl);
  return tile;
}
