export function collectExpandableIds(nodes, collector = []) {
  nodes.forEach((node) => {
    if (Array.isArray(node.children) && node.id) {
      collector.push(node.id);
      collectExpandableIds(node.children, collector);
    }
  });

  return collector;
}
