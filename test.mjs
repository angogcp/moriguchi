import assert from 'node:assert/strict';
import { getKanbanSummary, kanbanColumns, normalizeTask, pickFocusTask } from './app.js';

assert.deepEqual(
  kanbanColumns.map((column) => column.id),
  ['now', 'doing', 'waiting', 'next', 'done'],
);

const active = normalizeTask({
  id: 'task-test-1',
  title: '保証会社の審査連絡にすぐ出られる準備をする',
  category: '住居・契約',
  due: '2026-05-02',
  priority: 'high',
});
assert.equal(active.status, 'now');
assert.equal(active.done, false);

const completed = normalizeTask({ ...active, status: 'done' });
assert.equal(completed.done, true);

const summary = getKanbanSummary([active, completed]);
assert.equal(summary.find((column) => column.id === 'now').count, 1);
assert.equal(summary.find((column) => column.id === 'done').count, 1);
assert.equal(pickFocusTask([active, completed], null).id, active.id);

console.log('Moriguchi tracker Kanban tests passed');
