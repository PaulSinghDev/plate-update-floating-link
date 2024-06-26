import {
  type TEditor,
  type TNodeEntry,
  type Value,
  getRange,
} from '@udecode/slate';

/** Get node entries range. */
export const getNodesRange = <V extends Value>(
  editor: TEditor<V>,
  nodeEntries: TNodeEntry[]
) => {
  if (nodeEntries.length === 0) return;

  const firstBlockPath = nodeEntries[0][1];
  const lastBlockPath = nodeEntries.at(-1)![1];

  return getRange(editor, firstBlockPath, lastBlockPath);
};
