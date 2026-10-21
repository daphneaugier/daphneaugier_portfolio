import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

import Experience from "../../components/Experience";
import WorkGallery from "../../components/WorkGallery";

import works from "../../data/works.json";
import "./index.css";

const TABS = [
  { id: "experience", label: "Work Experience", count: 6 },
  { id: "projects", label: "Featured Projects", count: works.length },
];

function WorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("tab");
  const activeTab = TABS.some((tab) => tab.id === requested)
    ? requested
    : "experience";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const selectTab = (id) => {
    if (id === "experience") {
      setSearchParams({}, { replace: true });
      return;
    }
    setSearchParams({ tab: id }, { replace: true });
  };

  const onTabKeyDown = (event, index) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % TABS.length
        : (index - 1 + TABS.length) % TABS.length;
    selectTab(TABS[next].id);
    document.getElementById(`work-tab-${TABS[next].id}`)?.focus();
  };

  return (
    <div className="work-page page-container">
      <Helmet>
        <title>Work | Daphné Augier</title>
        <meta
          name="description"
          content="Work experience, education, and featured projects from Daphné Augier, SDET, QA engineer, and former UI/UX designer based in Montréal."
        />
      </Helmet>
      <div className="work-tabs" role="tablist" aria-label="Work">
        {TABS.map((tab, index) => (
          <button
            key={tab.id}
            id={`work-tab-${tab.id}`}
            className="work-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`work-panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => selectTab(tab.id)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            {tab.label}
            <span className="work-tab-count">{tab.count}</span>
          </button>
        ))}
      </div>
      <div
        id={`work-panel-${activeTab}`}
        className="work-tab-panel"
        role="tabpanel"
        aria-labelledby={`work-tab-${activeTab}`}
      >
        {activeTab === "experience" ? (
          <Experience />
        ) : (
          <WorkGallery works={works} />
        )}
      </div>
    </div>
  );
}

export default WorkPage;
