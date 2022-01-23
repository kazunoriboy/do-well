import React from 'react';

function Sidebar() {
  return (
    <aside className="l-sidebar">
      <div className="l-sidebar__header">
        <div className="p-logo">do well</div>
        <div className="c-hamburgerMenu is-active">
          <span className="c-hamburgerMenu__bar" />
          <span className="c-hamburgerMenu__bar" />
          <span className="c-hamburgerMenu__bar" />
        </div>
      </div>
      <ul className="p-navigation">
        <li className="p-navigationItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-navigationItem__icon h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <a href="#" className="p-navigationItem__text">
            ホーム
          </a>
        </li>
        <li className="p-navigationItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-navigationItem__icon h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <a href="#" className="p-navigationItem__text">
            マイタスク
          </a>
        </li>
      </ul>
      <section className="p-projects">
        <a href="#" className="p-projectsTitle">
          <h3 className="p-projectsTitle__text">プロジェクト</h3>
          <div className="p-projectsTitle__plusBtn">＋</div>
        </a>
        <ul className="p-projectsList">
          <li className="p-projectsList__item">
            <a href="#" className="p-projectsList__link">
              <span className="c-tagBullet--red"></span>プロジェクト1
            </a>
          </li>
          <li className="p-projectsList__item">
            <a href="#" className="p-projectsList__link">
              <span className="c-tagBullet--blue"></span>プロジェクト2
            </a>
          </li>
          <li className="p-projectsList__item">
            <a href="#" className="p-projectsList__link">
              <span className="c-tagBullet--green"></span>プロジェクト3
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
