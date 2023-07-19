import './App.css';

export function App() {
  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img
          className="tw-follow-card-avatar"
          alt="El avatar de carlosjlp"
          src="https://unavatar.io/github/cjlozanodev"/>
        <div className='tw-follow-card-info'>
          <strong> Carlos Javier Lozano </strong>
          <span className='tw-follow-card-info-user-name'>@carlosjlp</span>
        </div>
      </header>
      <aside>
        <button className='tw-follow-card-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}