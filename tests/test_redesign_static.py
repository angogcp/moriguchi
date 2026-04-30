from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def read(name):
    return (ROOT / name).read_text(encoding="utf-8")

def test_redesign_shell_and_design_tokens_are_present():
    html = read("index.html")
    css = read("styles.css")
    assert "relocation command center" in html
    assert "moriguchi-dashboard-v2" in html
    assert "--paper:" in css
    assert "--accent-blue:" in css
    assert ".hero-grid" in css
    assert ".timeline-rail" in css

def test_existing_app_hooks_are_preserved():
    html = read("index.html")
    required_ids = [
        "daysLeft", "todayCount", "weekCount", "openCount", "moneyCount",
        "currentFacts", "taskForm", "taskTitle", "taskDue", "taskCategory",
        "taskPriority", "taskNote", "taskList", "taskTemplate", "viewTitle",
        "categoryFilter", "categoryGrid", "resetSeed", "exportTasks", "importTasks"
    ]
    for id_name in required_ids:
        assert f'id="{id_name}"' in html
    for filter_name in ["now", "open", "week", "all", "done"]:
        assert f'data-filter="{filter_name}"' in html
